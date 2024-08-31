"use server";

import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

const getUmrahPackageTypes = async () => {
  try {
    const response = await axios.get("/api/umrah/package-types/customers");

    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
};

export default getUmrahPackageTypes;
