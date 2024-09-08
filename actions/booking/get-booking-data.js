"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";
import { cookies } from "next/headers";

export const getBookingData = async () => {
  const bookingId = cookies().get("bookingId").value;
  try {
    const response = await axios.get(
      `/api/umrah/booking/customer/${bookingId}`
    );
    return response?.data;
  } catch (error) {
    console.log(error);
    return handleAxiosError(error);
  }
};
