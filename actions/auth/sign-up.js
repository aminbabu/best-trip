"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

const signUp = async (formData) => {
  try {
    const response = await axios.post("/api/auth/customers/register", formData);

    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export default signUp;
