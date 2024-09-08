"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

const resetPassword = async ({ password, confirmPassword }, token) => {
  try {
    const response = await axios.post(
      `/api/auth/customers/reset-password?token=${token}`,
      {
        password,
        confirmPassword,
      }
    );
    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export default resetPassword;
