"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getUmrahOffers = async () => {
  try {
    const response = await axios.get("/api/settings/content/umrah-offers");
    return response?.data?.umrahOffers;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};
