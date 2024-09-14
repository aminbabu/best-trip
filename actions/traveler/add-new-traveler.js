"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const addNewTraveler = async (data) => {

  try {
    const response = await axios.post("/api/umrah/travelers", data);
    return response?.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};
