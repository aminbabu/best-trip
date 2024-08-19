"use server";

import axios from "@/lib/axios";

export const getSiteSettings = async () => {
  try {
    const response = await axios.get("/api/settings/site/general");

    return response?.data?.generalSettings;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};
