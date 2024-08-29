"use server";
import axios from "@/lib/axios";

export const getMyBookings = async (id) => {
  const response = await axios.get(`/api/umrah/booking/my-bookings`);
  return response;
};
