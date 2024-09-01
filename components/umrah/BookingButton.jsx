"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Swal from "sweetalert2";
import { bookPackage } from "@/actions/booking/book-package";

const BookingButton = ({ id }) => {
    const [searchedValue, setSearchedValue] = useState({})
    const router = useRouter();
    useEffect(() => {
        if (typeof window != undefined) {
            setSearchedValue(JSON.parse(localStorage.getItem("searchedValue")))
        }
    }, [])
    const { adultTravelers, childTravelers, infantsTravelers } = searchedValue;
    const totalTravelers = Number(adultTravelers) + Number(childTravelers) + Number(infantsTravelers)
    const bookingData = { umrahPackage: id, totalTravelers }
    const { data } = useSession()
    const submitBooking = async (event) => {
        event.preventDefault();
        if (!data) {
            Swal.fire({
                title: "Login Required",
                text: "You have to log in to book a package!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ok!",
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push(`/sign-in`);
                }
            });
            return;
        }
        try {
            const response = await bookPackage(bookingData);
            Swal.fire({
                text: `${response?.message}`,
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ok!",
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push(`/umrah/${response?.id}/traveller-details`);
                }
            });
        } catch (error) {
            Swal.fire({
                title: `${error?.response?.data?.message}`,
                text: "Continue Booking?",
                icon: "question"
            });
            console.log(error);
        }
    };
    return <form onSubmit={submitBooking}>
    <div className="grid">
        <Button type="submit">Continue Booking</Button>
    </div>
</form>
};

export default BookingButton;