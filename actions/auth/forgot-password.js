"use server";

import axios from "@/lib/axios";

const forgotPassword = async ({ email }) => {
  try {
    const response = await axios.post("/api/auth/customers/forgot-password", {
      email,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default forgotPassword;
