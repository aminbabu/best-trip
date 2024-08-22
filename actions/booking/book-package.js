"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const bookPackage = async ({ umrahPackage, totalTravelers }) => {
  try {
    const response = await axios.post("/api/umrah/booking", {
      umrahPackage,
      totalTravelers,
    });
    return response?.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};
