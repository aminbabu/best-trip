"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const addBalanceRequest = async (data) => {
  try {
    const response = await axios.post(`/api/payment-requests`, data);
    return response?.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};
