"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";
import { cookies } from "next/headers";

export const getTravelerDetail = async () => {
  const bookingId = cookies().get("bookingId").value;
  try {
    const res = await axios.get(`/api/umrah/travelers/${bookingId}`);
    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};
