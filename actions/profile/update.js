"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

const updateProfile = async (formData) => {
  try {
    const response = await axios.patch("/api/customers/self", formData);

    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export default updateProfile;
