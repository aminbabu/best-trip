"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getFlightOffers = async () => {
  try {
    const response = await axios.get("/api/settings/content/flight-offers");

    return response?.data?.flightOffers;
  } catch (error) {
    return handleAxiosError(error);
  }
};
