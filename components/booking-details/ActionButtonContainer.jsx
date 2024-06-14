import React from "react";
import { FlightTokenIcon, PrinterIcon } from "../icons/svgr";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const ActionButtonContainer = () => {
  return (
    <div className="col-span-12 xl:col-span-3 space-y-7 flex flex-col">
      <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
        <FlightTokenIcon /> Show More Details
      </Button>
      <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
        <FlightTokenIcon /> Order Booking
      </Button>
      <Button className="bg-white text-base font-normal text-p-900 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
        Account Balance Low
      </Button>
      <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
        <FlightTokenIcon /> Cancel Booking
      </Button>
      <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
        <FlightTokenIcon /> Edit Booking Status
      </Button>
      <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
        <FlightTokenIcon /> Edit Booking
      </Button>
      <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
        <FlightTokenIcon /> Edit Supplier
      </Button>
      <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
        <FlightTokenIcon /> Ticket Number Update
      </Button>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] hover:no-underline justify-start gap-x-4">
            <PrinterIcon
              viewBox="0 0 16 16"
              className="w-[15px] h-[15px]"
              fill="#606060"
            />{" "}
            Print & Download
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                <Button className="bg-white text-sm font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] w-full justify-start">
                  Print Invoice
                </Button>
              </li>
              <li>
                <Button className="bg-white text-sm font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] w-full justify-start">
                  {" "}
                  Print Booking Confirmation
                </Button>
              </li>
              <li>
                <Button className="bg-white text-sm font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] w-full justify-start">
                  Print Ticket Confirmation
                </Button>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
        <FlightTokenIcon /> Booking History
      </Button>
      <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
        <FlightTokenIcon /> Extend Time Limit
      </Button>
    </div>
  );
};

export default ActionButtonContainer;
