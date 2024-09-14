"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getTravelerDetail = async (id) => {
  try {
    const res = await axios.get(`/api/umrah/travelers/${id}`);
    return res.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};
