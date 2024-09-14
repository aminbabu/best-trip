"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getSingleTravelerDetail = async (umrahBookingId, travelerId) => {
  // /api/umrah/travelers/66e2fce8f57c0173e2a23184/66e2fd75f57c0173e2a231a3
  //   console.log(`/api/umrah/travelers/${umrahBookingId}/${travelerId}`);
  try {
    const res = await axios.get(
      `/api/umrah/travelers/${umrahBookingId}/${travelerId}`
    );
    console.log(res?.data);
    return res.data;
  } catch (error) {
    console.log(error?.response?.data);
    return handleAxiosError(error);
  }
};
