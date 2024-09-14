"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getBookingData = async (id) => {
  try {
    const response = await axios.get(`/api/umrah/booking/customer/${id}`);
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
    return handleAxiosError(error);
  }
};
