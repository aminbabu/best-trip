"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getMyBookings = async (id) => {
  try {
    const response = await axios.get(`/api/umrah/booking/my-bookings`);
    return response;
  } catch (error) {
    return handleAxiosError(error);
  }
};
