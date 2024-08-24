"use client"
import { getMyBookings } from "@/actions/booking/get-my-bookings";
import PaymentTable from "@/components/profile/PaymentTable";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Booking = () => {
  const { data } = useSession()
  const [bookingData,setBookingData] = useState([])
  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await getMyBookings()
        setBookingData(response?.data?.umrahBookings)
      } catch (error) {
        console.log(error, "from bookings");
      }
    }
    getDetail();
  }, [data?.user?.accessToken])
  return (
    <div>
      <PaymentTable data={bookingData} userData={data}/>
    </div>
  );
};

export default Booking;
