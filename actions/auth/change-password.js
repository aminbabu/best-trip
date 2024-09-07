"use server";

import axios from "@/lib/axios";

const changePassword = async ({ currentPassword,password, confirmPassword, userId }) => {
  try {
    const response = await axios.patch(
      `/api/customers/${userId}/update-password`,
      {
        currentPassword,
        password,
        confirmPassword,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default changePassword;
