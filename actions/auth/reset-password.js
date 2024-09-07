"use server";

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
    console.log(error?.response?.data);
    throw new Error(error.response.data.message);
  }
};

export default resetPassword;
