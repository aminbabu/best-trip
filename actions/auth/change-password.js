"use server";

import axios from "@/lib/axios";
import handleAxiosError from "@/handlers/axios/error";

const changePassword = async ({
  currentPassword,
  password,
  confirmPassword,
  userId,
}) => {
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
    return handleAxiosError(error);
  }
};

export default changePassword;
