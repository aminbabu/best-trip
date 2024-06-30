"use client";

import React, { useState } from "react";
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Link from "next/link";
import DepositForm from "../payment-method/DepositForm";
import Swal from "sweetalert2";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "../ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ticketNumberSchema, travellerSchema } from "@/schema/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const ActionButtonContainer = () => {
  const [isOpenTicketDialog, setIsOpenTicketDialog] = useState(false);
  const [isOpenSupplierDialog, setIsOpenSupplierDialog] = useState(false);

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

  const handleTicketDialog = () => {
    setIsOpenTicketDialog(!isOpenTicketDialog);
  };

  const handleSupplierDialog = () => {
    setIsOpenSupplierDialog(!isOpenSupplierDialog);
  };

  const form = useForm({
    resolver: zodResolver(ticketNumberSchema),
    defaultValues: {
      ticket_no_one: "123456789",
      ticket_no_two: "987654321",
      ticket_no_three: "432198765",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
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

      <Dialog open={isOpenSupplierDialog} onOpenChange={handleSupplierDialog}>
        <DialogTrigger asChild>
          <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
            <FlightTokenIcon /> Edit Supplier
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px] p-0">
          <DialogHeader className="bg-p-300 p-5 rounded">
            <DialogTitle className="text-xl text-t-800">
              Update Issuing Supplier
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 px-5">
            <Card className="p-6 drop-shadow-md border-0">
              <p>PNR: 05DG2A - Airline: BS</p>
              <br />
              <Select>
                <SelectTrigger className="w-1/2">
                  <SelectValue placeholder="Select Vendor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="focus:bg-p-300" value="default">
                    Select Vendor
                  </SelectItem>
                  <SelectItem className="focus:bg-p-300" value="bangla">
                    US - Bangla Airlines
                  </SelectItem>
                </SelectContent>
              </Select>
            </Card>
          </div>
          <DialogFooter className="gap-x-2 mt-4 bg-p-300 px-5 py-3">
            <Button
              onClick={handleSupplierDialog}
              className="py-2"
              type="submit"
            >
              Update
            </Button>
            <Button
              onClick={handleSupplierDialog}
              className="bg-slate-50 text-t-800 hover:bg-slate-100 border py-2"
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isOpenTicketDialog} onOpenChange={handleTicketDialog}>
        <DialogTrigger asChild>
          <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
            <FlightTokenIcon /> Ticket Number Update
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px] p-0">
          <DialogHeader className="bg-p-300 p-5 rounded">
            <DialogTitle className="text-xl text-t-800">
              Ticket Number Update
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 p-5 pt-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="w-full overflow-auto">
                  <div className="grid grid-rows-3 min-w-max lg:min-w-fit text-base text-center overflow-hidden text-t-800">
                    <ul className="grid grid-cols-10 bg-white">
                      <li className="text-left col-span-2 px-4 py-2.5 border border-transparent">
                        Pax 1
                      </li>
                      <li className="text-left col-span-3 px-4 py-2.5 border border-transparent">
                        Pax Name
                        <span className="block uppercase">
                          Md Irafnul Haque
                        </span>
                      </li>
                      <li className="flex flex-col text-left col-span-2 px-4 py-2.5 border border-transparent">
                        Pax type
                        <span className="block">Adult</span>
                      </li>
                      <li className="col-span-3 px-4 py-2.5 border-b border-[#3d3d3d4d] text-left">
                        <FormField
                          control={form.control}
                          name="ticket_no_one"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Ticket Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="123456789"
                                  className="h-2 text-base text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-700 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100 focus-visible:ring-0 focus-visible:ring-offset-0"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </li>
                    </ul>
                    <ul className="grid grid-cols-10 bg-white">
                      <li className="text-left col-span-2 px-4 py-2.5 border border-transparent">
                        Pax 1
                      </li>
                      <li className="text-left col-span-3 px-4 py-2.5 border border-transparent">
                        Pax Name
                        <span className="block uppercase">
                          Md Irafnul Haque
                        </span>
                      </li>
                      <li className="flex flex-col text-left col-span-2 px-4 py-2.5 border border-transparent">
                        Pax type
                        <span className="block">Adult</span>
                      </li>
                      <li className="col-span-3 px-4 py-2.5 border-b border-[#3d3d3d4d] text-left">
                        <FormField
                          control={form.control}
                          name="ticket_no_two"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Ticket Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="123456789"
                                  className="h-2 text-base text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-700 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100 focus-visible:ring-0 focus-visible:ring-offset-0"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </li>
                    </ul>
                    <ul className="grid grid-cols-10 bg-white">
                      <li className="text-left col-span-2 px-4 py-2.5 border border-transparent">
                        Pax 1
                      </li>
                      <li className="text-left col-span-3 px-4 py-2.5 border border-transparent">
                        Pax Name
                        <span className="block uppercase">
                          Md Irafnul Haque
                        </span>
                      </li>
                      <li className="flex flex-col text-left col-span-2 px-4 py-2.5 border border-transparent">
                        Pax type
                        <span className="block">Adult</span>
                      </li>
                      <li className="col-span-3 px-4 py-2.5 border-b border-[#3d3d3d4d] text-left">
                        <FormField
                          control={form.control}
                          name="ticket_no_three"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Ticket Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="123456789"
                                  className="h-2 text-base text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-700 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100 focus-visible:ring-0 focus-visible:ring-offset-0"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <DialogFooter className="gap-x-2 mt-4">
                  <Button
                    onClick={handleTicketDialog}
                    className="py-2"
                    type="submit"
                  >
                    Update
                  </Button>
                  <Button
                    onClick={handleTicketDialog}
                    className="bg-slate-50 text-t-800 hover:bg-slate-100 border py-2"
                  >
                    Cancel
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>

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
