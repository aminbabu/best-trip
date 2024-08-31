"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";
import { cookies } from "next/headers";

export const submitBookingForReview = async () => {
  const bookingId = cookies().get("bookingId").value;
  try {
    const response = await axios.post(
      `/api/umrah/booking/${bookingId}/submit-review`
    );
    return response?.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};
