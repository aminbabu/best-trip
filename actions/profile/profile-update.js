"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

const profileUpdate = async (formData, token) => {
  try {
    const response = await axios.patch("/api/customers/self", formData, {
      headers: {
        authorization: `Bearer ${token}`, // Add the token to the Authorization header
      },
    });

    return response.data;
  } catch (error) {
    console.log("error", error);
    throw new Error(handleAxiosError(error));
  }
};

export default profileUpdate;
