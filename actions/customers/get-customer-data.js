"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getCustomerData = async (id) => {
  try {
    const response = await axios.get(`/api/customers/${id}`);
    return response?.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};
