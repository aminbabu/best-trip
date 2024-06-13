import React from "react";
import { FlightTokenIcon } from "../icons/svgr";
import { Button } from "../ui/button";

const actionButtons = [
  { id: 1, title: "Show More Details" },
  { id: 2, title: "Order Booking" },
  { id: 3, title: "Account Balance Low" },
  { id: 4, title: "Cancel Booking" },
  { id: 5, title: "Edit Booking Status" },
  { id: 6, title: "Edit Booking" },
  { id: 7, title: "Edit Supplier" },
  { id: 8, title: "Ticket Number Update" },
  { id: 9, title: "Print & Download" },
  { id: 10, title: "Booking History" },
  { id: 11, title: "Extend Time Limit" },
];

const ActionButtonContainer = () => {
  return (
    <div className="col-span-12 xl:col-span-3 space-y-7 flex flex-col">
      {actionButtons.map((btn) => (
        <Button
          key={btn.id}
          className="bg-white text-t-700 rounded shadow-[0px-4px-3px-0px-#07143705] px-3.5 py-5 hover:bg-[#fefefe] justify-start"
        >
          <FlightTokenIcon /> {btn.title}
        </Button>
      ))}
    </div>
  );
};

export default ActionButtonContainer;
