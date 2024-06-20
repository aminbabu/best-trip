import PaymentTable from "@/components/profile/PaymentTable";
import Link from "next/link";
import React from "react";

const Booking = () => {
  return (
    <div>
      <Link href="/booking-details">
        <h1 className="underline hover:no-underline">
          Click here to see further page
        </h1>
      </Link>
      {/* <PaymentTable /> */}
    </div>
  );
};

export default Booking;
