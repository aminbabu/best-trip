"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getTheme = async () => {
  try {
    const response = await axios.get("/api/settings/themes/active");

    return response?.data?.theme;
  } catch (error) {
    return handleAxiosError(error);
  }
};
