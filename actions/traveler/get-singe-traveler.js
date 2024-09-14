"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getSingleTravelerDetail = async (umrahBookingId, travelerId) => {
  try {
    const res = await axios.get(
      `/api/umrah/travelers/${umrahBookingId}/${travelerId}`
    );
    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};
