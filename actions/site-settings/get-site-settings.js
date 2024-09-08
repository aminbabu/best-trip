"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getGeneralSiteSettings = async () => {
  try {
    const response = await axios.get("/api/settings/site/general");

    return response?.data?.generalSettings;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const getContactSiteSettings = async () => {
  try {
    const response = await axios.get("/api/settings/site/contact");

    return response?.data?.contactSettings;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const getPrivacySiteSettings = async () => {
  try {
    const response = await axios.get("/api/settings/site/policy");

    return response?.data?.policies;
  } catch (error) {
    return handleAxiosError(error);
  }
};
