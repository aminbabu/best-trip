"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getBookingData = async (id) => {
  try {
    const response = await axios.get(`/api/umrah/booking/customer/${id}`);
    return response;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};
