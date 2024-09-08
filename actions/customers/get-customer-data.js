"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getCustomerData = async (id) => {
  try {
    const response = await axios.get(`/api/customers/${id}`);
    return response?.data;
  } catch (error) {
    console.log(error);
    throw new Error(handleAxiosError(error));
  }
};
