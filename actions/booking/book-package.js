"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";
import { cookies } from "next/headers";

export const bookPackage = async (data) => {
  const sevenDays = 7 * 24 * 60 * 60 * 1000;
  try {
    const response = await axios.post("/api/umrah/booking", data);
    cookies().set("bookingId", response?.data?.data?._id, {
      expires: Date.now() + sevenDays,
    });
    return {
      id: response?.data?.data?._id,
      message: response?.data?.message,
    };
  } catch (error) {
    if (error?.response?.data?.id) {
      cookies().set("bookingId", error?.response?.data?.id, {
        expires: Date.now() + sevenDays,
      });
      return { id: error?.response?.data?.id, message: error?.response?.data?.message };
    } else {
      throw new Error(handleAxiosError(error));
    }
  }
};
