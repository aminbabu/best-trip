"use server";

import axios from "@/lib/axios";

const getUmrahPackageDurations = async () => {
  try {
    const response = await axios.get("/api/umrah/package-durations/customer");

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default getUmrahPackageDurations;
