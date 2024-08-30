"use server";

import axios from "@/lib/axios";

const getUmrahPackageTypes = async () => {
  try {
    const response = await axios.get("/api/umrah/package-types/customers");

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default getUmrahPackageTypes;
