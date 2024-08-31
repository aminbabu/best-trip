"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";
import { cookies } from "next/headers";

export const addNewTraveler = async (data) => {
  const umrahBooking = cookies().get("bookingId").value;
  data.append("umrahBooking", umrahBooking);
  console.log(data);
  try {
    const response = await axios.post("/api/umrah/travelers", data);
    return response?.data;
  } catch (error) {
    console.log(error?.response?.data);
    throw new Error(handleAxiosError(error));
  }
};
