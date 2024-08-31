"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const submitBookingForReview = async (id) => {
  try {
    const response = await axios.post(`/api/umrah/booking/${id}/submit-review`);
    return response;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};
