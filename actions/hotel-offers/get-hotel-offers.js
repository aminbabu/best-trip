"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getHotelOffers = async () => {
  try {
    const response = await axios.get("/api/settings/content/hotel-offers");

    return response?.data?.hotelOffers;
  } catch (error) {
    return handleAxiosError(error);
  }
};
