import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FlightTokenIcon } from "@/components/icons/svgr";
import DepositForm from "@/components/payment-method/DepositForm";

const OrderBooking = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
          <FlightTokenIcon /> Order Booking
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] px-5 py-10 lg:p-10">
        <h1 className="text-t-800 font-medium text-xl mb-8">Payment Method</h1>
        <p className="text-t-800 mb-4">Select Payment Method</p>
        <DepositForm />
      </DialogContent>
    </Dialog>
  );
};

export default OrderBooking;
