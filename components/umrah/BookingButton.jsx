"use client"
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2"
import { useRouter } from "next/navigation";
import { bookPackage } from "@/actions/booking/book-package";

const BookingButton = ({ id }) => {
    const router = useRouter();
    let searchedValue;
    if (typeof window != undefined) {
        searchedValue = JSON.parse(localStorage.getItem("searchedValue"));
    }
    const { adultTravelers, childTravelers, infantsTravelers } = searchedValue;
    const totalTravelers = Number(adultTravelers) + Number(childTravelers) + Number(infantsTravelers)
    const bookingData = { umrahPackage: id, totalTravelers }
    const { data } = useSession()

    const getDetail = async () => {
        if (!data) {
            Swal.fire({
                title: "Login Required?",
                text: "You Have To Login To Book Package!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ok!"
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push(`/sign-in`)
                }
            });
        }
        try {
            const response = await bookPackage(bookingData);
            console.log(response);
            if (typeof window != undefined) localStorage.setItem("bookingId", response.data.data._id)
            Swal.fire({
                title: `Booking SuccessFul BookingId:- ${response.data.data._id}`,
                text: "You Package Booking Was SuccessFul",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ok!"
            })
            router.push(`/umrah/${id}/traveller-details`)
        } catch (error) {
            console.log(error);
            if (error?.response?.data?.id) {
                router.push(`/umrah/${error.response.data?.id}/traveller-details`)
                if (typeof window != undefined) localStorage.setItem("bookingId", error.response.data?.id)
            }
        }
    }
    return <div className="grid">
        <Button onClick={getDetail}>
            Continue Booking
        </Button>
    </div>;
};

export default BookingButton;