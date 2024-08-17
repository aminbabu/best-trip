"use server";

import axios from "@/lib/axios";

const resetPassword = async ({ password, password_confirmation }, token) => {
  try {
    const response = await axios.post(`/api/reset_password?token=${token}`, {
      password,
      password_confirmation,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default resetPassword;
