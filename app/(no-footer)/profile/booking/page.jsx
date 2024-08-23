"use client"
import PaymentTable from "@/components/profile/PaymentTable";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Booking = () => {
  const { data } = useSession()
  const [bookingData,setBookingData] = useState([])
  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/umrah/booking/my-bookings`, { headers: { "Authorization": `Bearer ${data?.user?.accessToken}` } });
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
