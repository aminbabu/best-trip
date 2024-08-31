"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import BookingForm from "./BookingForm";
import { useEffect, useState } from "react";

const BookingButton = ({ id }) => {
    const [searchedValue, setSearchedValue] = useState({})
    useEffect(() => {
        if (typeof window != undefined) {
            setSearchedValue(JSON.parse(localStorage.getItem("searchedValue")))
        }
    }, [])
    const { adultTravelers, childTravelers, infantsTravelers } = searchedValue;
    const totalTravelers = Number(adultTravelers) + Number(childTravelers) + Number(infantsTravelers)
    const bookingData = { umrahPackage: id, totalTravelers }
    const { data } = useSession()
    return <BookingForm data={data} bookingData={bookingData}></BookingForm>
};

export default BookingButton;