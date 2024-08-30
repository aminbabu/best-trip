// "use server";
import axios from "@/lib/axios";

export const submitBookingForReview = async (id) => {
  const response = await axios.post(`/api/umrah/booking/${id}/submit-review`);
  return response;
};
