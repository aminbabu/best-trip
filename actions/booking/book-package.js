// "use server";
import axios from "@/lib/axios";

export const bookPackage = async (data) => {
  const response = await axios.post("/api/umrah/booking", data);
  return response;
};
