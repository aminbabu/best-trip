import { getPartialPaymentRequest } from "@/actions/payment/get-payment-request";
import PartialPaymentTable from "@/components/profile/PartialPaymentTable";
import React from "react";

const PartialPaymentBookings = async () => {
  let partialPayment;
  try {
    const response = await getPartialPaymentRequest()
    partialPayment = (response?.invoices)
  } catch (error) {
  }
  return (
    <div>
      <PartialPaymentTable data={partialPayment} />
    </div>
  );
};

export default PartialPaymentBookings;
