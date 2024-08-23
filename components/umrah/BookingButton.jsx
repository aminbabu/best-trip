"use client"
import { useEffect } from "react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import axios from "axios";
import Swal from "sweetalert2"
import { useRouter } from "next/navigation";

const BookingButton = ({ id }) => {
    const router = useRouter();
    let searchedValue;
    if (typeof window != undefined) {
        searchedValue = JSON.parse(localStorage.getItem("searchedValue"));
    }
    const { adultTravelers, childTravelers, infantsTravelers } = searchedValue;
    const totalTravelers = Number(adultTravelers) + Number(childTravelers) + Number(infantsTravelers)
    const data2 = { umrahPackage: id, totalTravelers }
    const { data, accessToken } = useSession()
    console.log(data?.user?.accessToken, accessToken, "lakdjflkads");
    const getDetail = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/umrah/booking`, { ...data2 }, { headers: { "Authorization": `Bearer ${data?.user?.accessToken}` } });
            if (typeof window != undefined) localStorage.setItem("bookingId", response.data.data._id)
            Swal.fire({
                title: `Package Booked SuccessFully BookingId:- ${response.data.data._id}`,
                text: response?.message,
                icon: "success",
                confirmButtonText: "Ok, got it",
                confirmButtonColor: "#3ad965",
            });
            router.push(`/umrah/${id}/traveller-details`)
        } catch (error) {
            console.log(error);
        }
    }
    return <div className="grid">
        <Button onClick={getDetail}>
            Continue Booking
        </Button>
    </div>;
};

export default BookingButton;