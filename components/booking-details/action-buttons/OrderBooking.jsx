import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FlightTokenIcon } from "@/components/icons/svgr";
import DepositForm from "@/components/payment-method/DepositForm";
import { makePayment } from "@/actions/payment/make-payment";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const OrderBooking = ({ bookingData, setRefetch }) => {
  const [loading, setLoading] = useState(false)
  const [open, setIsOpen] = useState(false)
  const onSubmit = async (values) => {
    setLoading(true);
    const paymentType = values?.full === true ? "full-payment" : "partial-payment";
    try {
      const response = await makePayment(bookingData?.umrahPackage?._id, paymentType)
      if (response?.error) {
        return await withReactContent(Swal).fire({
           title: "Error",
           text: response?.error || "An error occurred. Please try again",
           icon: "error",
           confirmButtonText: "Try Again",
           confirmButtonColor: "#ff0f2f",
           allowOutsideClick: false,
         });
       }
      Swal.fire({
        position: "top-end",
        text: response?.message,
        icon: "success",
        confirmButtonText: "Ok, got it",
        confirmButtonColor: "#3ad965",
      });
      setLoading(false)
      setIsOpen(false)
      setRefetch(true)
    } catch (error) {
      setRefetch(true)
      setLoading(false)
      setIsOpen(false)
      Swal.fire({
        position: "top-end",
        title: `Error`,
        text: error?.message,
        icon: "error",
        confirmButtonText: "Ok, got it",
        confirmButtonColor: "#3ad965",
      });
    }
  }
  return (
    <>
      {bookingData?.invoice?.paymentType !== "full-payment" && (
        <Dialog open={open} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
              <FlightTokenIcon /> Order Booking
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] px-5 py-10 lg:p-10">
            <h1 className="text-t-800 font-medium text-xl mb-8">Payment Method</h1>
            <p className="text-t-800 mb-4">Select Payment Method</p>
            <DepositForm bookingData={bookingData} onSubmit={onSubmit} loading={loading} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default OrderBooking;
