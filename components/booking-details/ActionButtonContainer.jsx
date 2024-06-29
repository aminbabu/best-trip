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

      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-white text-base font-normal text-p-900 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
            Account Balance Low
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
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
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
            <FlightTokenIcon /> Cancel Booking
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[416px]">
          <DialogHeader className="items-center">
            <InfoIcon className="w-20 h-20 text-[#f78212] mb-5" />
            <DialogDescription>
              Are you sure you would like to cancel it?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center mt-5 mb-3">
            <Button className="px-4 py-2 text-sm font-normal" type="submit">
              Yes, cancel it!
            </Button>{" "}
            <Button className="px-4 py-2 text-sm font-normal bg-slate-50 text-t-700 hover:bg-slate-100">
              No, return
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}

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
