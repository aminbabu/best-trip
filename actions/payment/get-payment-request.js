"use server";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";

export const getPaymentRequest = async (id, paymentType) => {
  try {
    const response = await axios.get(`/api/payment-requests`, {
      paymentType,
    });
    return response?.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const getPartialPaymentRequest = async () => {
  try {
    const response = await axios.get(`/api/invoice/partial-payment`);
    return response?.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};
