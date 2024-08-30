import axios from "@/lib/axios";

export const getTravelerDetail = async (bookingId) => {
  const res = await axios.get(`/api/umrah/travelers/${bookingId}`);
  return res;
};
