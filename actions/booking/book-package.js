"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";
import { cookies } from "next/headers";

export const bookPackage = async (data) => {
  try {
    const response = await axios.post("/api/umrah/booking", data);
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    cookies().set("bookingId", response?.data?.data?._id, {
      expires: Date.now() + sevenDays,
    });
    return response;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};
