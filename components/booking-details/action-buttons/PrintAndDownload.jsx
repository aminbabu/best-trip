import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PrinterIcon } from "@/components/icons/svgr";
import { Button } from "@/components/ui/button";

const PrintAndDownload = () => {
  return (
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
  );
};

export default PrintAndDownload;
