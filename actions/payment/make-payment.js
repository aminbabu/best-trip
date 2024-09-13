"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const makePayment = async (id, paymentType) => {
  console.log(id);

  try {
    const response = await axios.post(`/api/umrah/booking/${id}/make-payment`, {
      paymentType,
    });
    return response?.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};
