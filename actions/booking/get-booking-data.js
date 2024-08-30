// "use server";
import axios from "@/lib/axios";

export const getBookingData = async (id) => {
  const response = await axios.get(`/api/umrah/booking/customer/${id}`);
  return response;
};
