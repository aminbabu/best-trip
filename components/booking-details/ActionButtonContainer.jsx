"use client";

import React from "react";
import { FlightTokenIcon, PrinterIcon } from "../icons/svgr";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";
import DepositForm from "../payment-method/DepositForm";
import { InfoIcon } from "lucide-react";
import Swal from "sweetalert2";
import { Card, CardContent } from "../ui/card";

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
      <Link
        className="bg-white text-base font-normal text-t-700 rounded shadow-sm hover:bg-[#fefefe] justify-start"
        href="/umrah/1"
      >
        <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
          <FlightTokenIcon /> Show More Details
        </Button>
      </Link>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
            <FlightTokenIcon /> Order Booking
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px] px-5 py-10 lg:p-10">
          <DepositForm />
          {/* <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>

      <Button className="bg-white text-base font-normal text-p-900 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
        Account Balance Low
      </Button>

      <Button
        onClick={handleCancelBooking}
        className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start"
      >
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
          <div className="grid gap-4 p-5">
            <div className="w-full overflow-auto drop-shadow-md">
              <div className="grid grid-rows-3 min-w-max lg:min-w-fit text-base text-center overflow-hidden text-t-800">
                <ul className="grid grid-cols-7 bg-[#FFEFEF]">
                  <li className="flex items-center col-span-2 justify-center px-2.5 py-1.5">
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ut, odit!
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

      <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
        <FlightTokenIcon /> Extend Time Limit
      </Button>
    </div>
  );
};

export default ActionButtonContainer;
