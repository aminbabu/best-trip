"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getTravelerDetail = async (bookingId) => {
  try {
    const res = await axios.get(`/api/umrah/travelers/${bookingId}`);
    return res;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};
