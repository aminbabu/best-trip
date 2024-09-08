"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getSectionsData = async () => {
  try {
    const response = await axios.get("/api/settings/content/sections");
    return response?.data?.sections;
  } catch (error) {
    return handleAxiosError(error);
  }
};
