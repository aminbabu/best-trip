import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FlightTokenIcon } from "@/components/icons/svgr";

const BookingHistory = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
          <FlightTokenIcon /> Booking History
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0">
        <DialogHeader className="bg-p-300 p-5 rounded">
          <DialogTitle className="text-xl text-t-800">
            Booking History
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 p-5 pt-2">
          <div className="w-full overflow-auto drop-shadow-md">
            <div className="grid grid-rows-3 min-w-max lg:min-w-fit text-base text-center overflow-hidden text-t-800">
              <ul className="grid grid-cols-7 bg-[#FFEFEF]">
                <li className="flex items-center col-span-2 px-2.5 py-1.5">
                  Created On
                </li>
                <li className="flex items-center col-span-5 justify-center px-2.5 py-1.5 border-l border-white">
                  Description
                </li>
              </ul>
              <ul className="grid grid-cols-7 bg-white">
                <li className="flex items-center col-span-2 justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                  15/07/2023 17:32:55
                </li>
                <li className="text-left col-span-5 px-2.5 py-1.5 border border-[#3D3D3D0D]">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </li>
              </ul>
              <ul className="grid grid-cols-7 bg-white">
                <li className="flex items-center col-span-2 justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                  15/07/2023 17:32:55
                </li>
                <li className="col-span-5 px-2.5 py-1.5 border border-[#3D3D3D0D] text-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
                  odit!
                </li>
              </ul>
              <ul className="grid grid-cols-7 bg-white">
                <li className="flex items-center col-span-2 justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                  15/07/2023 17:32:55
                </li>
                <li className="text-left col-span-5 px-2.5 py-1.5 border border-[#3D3D3D0D]">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </li>
              </ul>
              <ul className="grid grid-cols-7 bg-white">
                <li className="flex items-center col-span-2 justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                  15/07/2023 17:32:55
                </li>
                <li className="col-span-5 px-2.5 py-1.5 border text-left border-[#3D3D3D0D]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  provident id quia distinctio.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingHistory;
