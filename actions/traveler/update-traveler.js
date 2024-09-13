"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";
import { cookies } from "next/headers";

export const updateTraveler = async (data, travelerId) => {
  const umrahBooking = cookies().get("bookingId").value;
//   console.log(data,"formData");
  try {
    const response = await axios.patch(
      `/api/umrah/travelers/${umrahBooking}/${travelerId}`,
      data
    );
    return response?.data;
  } catch (error) {
    console.log(error?.response?.data);
    return handleAxiosError(error);
  }
};
