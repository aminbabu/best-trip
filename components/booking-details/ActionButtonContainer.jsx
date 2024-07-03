"use client";

import React from "react";
import { FlightTokenIcon } from "../icons/svgr";
import { Button } from "../ui/button";
import Link from "next/link";
import Swal from "sweetalert2";
import EditBookingStatus from "./action-buttons/EditBookingStatus";
import EditSupplier from "./action-buttons/EditSupplier";
import OrderBooking from "./action-buttons/OrderBooking";
import TicketNumberUpdate from "./action-buttons/TicketNumberUpdate";
import BookingHistory from "./action-buttons/BookingHistory";
import EditBooking from "./action-buttons/EditBooking";
import PrintAndDownload from "./action-buttons/PrintAndDownload";
import ExtendTimeLimit from "./action-buttons/ExtendTimeLimit";

const ActionButtonContainer = () => {
  const handleCancelBooking = () => {
    const swalWithTailwindButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded mr-3 text-sm",
        cancelButton:
          "bg-slate-50 hover:bg-slate-100 text-t-800 px-4 py-2 rounded text-sm",
        text: "!text-[14px] text-p-600 text-t-800",
      },
      buttonsStyling: false,
    });

    swalWithTailwindButtons
      .fire({
        text: "Are you sure you would like to cancel?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, cancel it!",
        cancelButtonText: "No, return",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithTailwindButtons.fire({
            title: "Success!",
            text: "Your booking has been cancelled.",
            icon: "success",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithTailwindButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="col-span-12 xl:col-span-3 space-y-7 flex flex-col">
      {/* show more details */}
      <Link
        className="bg-white text-base font-normal text-t-700 rounded shadow-sm hover:bg-[#fefefe] justify-start"
        href="/umrah/1"
      >
        <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
          <FlightTokenIcon /> Show More Details
        </Button>
      </Link>

      {/* order booking */}
      <OrderBooking />

      {/* Account Balance Low */}
      <Button className="bg-white text-base font-normal text-p-900 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
        Account Balance Low
      </Button>

      {/* Cancel Booking */}
      <Button
        onClick={handleCancelBooking}
        className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start"
      >
        <FlightTokenIcon /> Cancel Booking
      </Button>

      {/* Edit Booking Status */}
      <EditBookingStatus />

      {/* Edit Booking */}
      <EditBooking />

      {/* Edit Supplier */}
      <EditSupplier />

      {/* Ticket Number Update */}
      <TicketNumberUpdate />

      {/* Print & Download */}
      <PrintAndDownload />

      {/* Booking History */}
      <BookingHistory />

      {/* Extend Time Limit */}
      {/* <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
        <FlightTokenIcon /> Extend Time Limit
      </Button> */}
      <ExtendTimeLimit />
    </div>
  );
};

export default ActionButtonContainer;
