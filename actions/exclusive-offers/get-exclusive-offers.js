"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getExclusiveOffers = async () => {
  try {
    const response = await axios.get("/api/settings/content/exclusive-offers");
    return response?.data?.exclusiveOffers;
  } catch (error) {
    return handleAxiosError(error);
  }
};
