"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const bookPackage = async (data) => {
  try {
    const response = await axios.post("/api/umrah/booking", data);
    return response;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};
