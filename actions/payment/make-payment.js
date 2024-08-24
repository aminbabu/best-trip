// "use server";
import axios from "@/lib/axios";

export const makePayment = async (id,paymentType) => {
  const response = await axios.post(`/api/umrah/booking/${id}/make-payment`,{paymentType});
  return response;
};
