"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

const forgotPassword = async ({ email }) => {
  try {
    const response = await axios.post("/api/auth/customers/forgot-password", {
      email,
    });

    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export default forgotPassword;
