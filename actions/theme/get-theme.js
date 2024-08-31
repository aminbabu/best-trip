"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getTheme = async () => {
  try {
    const response = await axios.get("/api/settings/themes/active/default");

    return response?.data?.theme;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};
