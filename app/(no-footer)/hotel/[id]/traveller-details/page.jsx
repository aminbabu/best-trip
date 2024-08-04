"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { StarAltIcon } from "@/components/icons/svgr";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { travellerSchema } from "@/schema/zod";
import { Input } from "@/components/ui/input";
import moment from "moment";
import HotelSelectRoomCard from "@/components/hotel/hotel-details-tab/HotelSelectRoomCard";
import { hotelRoomData } from "@/data/hotel-result";
import Link from "next/link";

const HotelTravellerDetailsPage = () => {
  const today = new Date();
  const twoYearsBack = new Date(today);
  const twelveYearsBack = new Date(today);
  twoYearsBack.setFullYear(today.getFullYear() - 2);
  twelveYearsBack.setFullYear(today.getFullYear() - 12);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpenDobAdult, setIsOpenDobAdult] = useState(false);
  const [isOpenDobChild, setIsOpenDobChild] = useState(false);
  const [isOpenDobInfant, setIsOpenDobInfant] = useState(false);
  const [calendarAdultDate, setCalendarAdultDate] = useState(null);
  const [calendarChildDate, setCalendarChildDate] = useState(null);
  const [calendarInfantDate, setCalendarInfantDate] = useState(null);
  const [isOpenExpiryDateAdult, setIsOpenExpiryDateAdult] = useState(false);
  const [isOpenExpiryDateChild, setIsOpenExpiryDateChild] = useState(false);
  const [isOpenExpiryDateInfant, setIsOpenExpiryDateInfant] = useState(false);

  const data = hotelRoomData[0];

  const form = useForm({
    resolver: zodResolver(travellerSchema),
    defaultValues: {
      passport: "",
      photo: "",
      nid: "",
      covid_certificate: "",
      first_name: "",
      last_name: "",
      gender: "",
      dob: "",
      marital_status: "",
      country: "",
      division: "",
      present_address: "",
      permanent_address: "",
      passport_no: "",
      document_issue_country: "",
      passport_expiry_date: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
    setError(null);
    setLoading(true);

    setTimeout(() => {
      console.log(data);
      setLoading(false);
      hideTravellerForm();
    }, 2000);
  };

  return (
    <main className="bg-[#F6F6F6]">
      <section className="max-w-[calc(1280px-12px)] mx-auto px-7 lg:px-12 xl:px-16 py-8">
        <div className="grid grid-cols-11 xl:gap-x-[30px] gap-y-6">
          <div className="col-span-12 xl:col-span-8 space-y-6">
            <HotelSelectRoomCard data={data} />
            <Card className="border-transparent relative overflow-hidden rounded-sm">
              <h2 className="text-t-800 text-lg font-medium p-5 lg:px-10 lg:py-[30px]">
                Traveler Details
              </h2>
              <div className="bg-p-300 font-normal text-t-800 rounded-sm px-10 py-2.5 flex items-center gap-x-2.5">
                <InfoCircledIcon className="w-6 h-6 text-p-900 flex-shrink-0" />
                Enter details exactly as they appear on your passport
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="p-5 lg:px-10 lg:pt-[30px] lg:pb-[56px] space-y-16"
                >
                  {/* Adult */}
                  <div className="space-y-[30px]">
                    <div className="grid grid-cols-6 gap-8 lg:gap-x-10">
                      <div className="col-span-6">
                        <h2 className="text-t-800 font-medium">
                          Traveler 1 (Adult)
                        </h2>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="first_name"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                First Name
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter first name"
                                  className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="last_name"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Last Name
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter last name"
                                  className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Gender<span className="text-primary">*</span>
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300">
                                    <SelectValue placeholder="Select gender" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="male">Male</SelectItem>
                                  <SelectItem value="female">Female</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="dob"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel className="text-t-800 lg:text-lg font-normal">
                                Date of Birth
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <Popover
                                open={isOpenDobAdult}
                                onOpenChange={setIsOpenDobAdult}
                              >
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className="justify-start font-normal h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                    >
                                      {field.value ? (
                                        moment(field.value).format(
                                          "DD-MMM-YYYY"
                                        )
                                      ) : (
                                        <span>Select a date</span>
                                      )}
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    defaultMonth={
                                      calendarAdultDate || twelveYearsBack
                                    }
                                    captionLayout="dropdown-buttons"
                                    selected={
                                      calendarAdultDate
                                        ? moment(calendarAdultDate).toDate()
                                        : null
                                    }
                                    onSelect={(value) => {
                                      setCalendarAdultDate(value);
                                      field.onChange(value);
                                      console.log(value, calendarAdultDate);
                                      setIsOpenDobAdult(false);
                                    }}
                                    disabled={(date) =>
                                      date > twelveYearsBack ||
                                      date < new Date("1900-01-01")
                                    }
                                    fromYear={1900}
                                    toYear={moment().year() - 12}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="passport_expiry_date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Passport Expiry Date
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <Popover
                                open={isOpenExpiryDateAdult}
                                onOpenChange={setIsOpenExpiryDateAdult}
                              >
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className="justify-start font-normal h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                    >
                                      {field.value ? (
                                        moment(field.value).format(
                                          "DD-MMM-YYYY"
                                        )
                                      ) : (
                                        <span>Select a date</span>
                                      )}
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    defaultMonth={
                                      field.value &&
                                      moment(field.value).toDate()
                                    }
                                    captionLayout="dropdown-buttons"
                                    selected={moment(field.value).toDate()}
                                    onSelect={(value) => {
                                      field.onChange(value);
                                      setIsOpenExpiryDateAdult(false);
                                    }}
                                    disabled={(date) => date > new Date()}
                                    fromYear={1900}
                                    toYear={moment().year()}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name={"passport_no"}
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Passport Number
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Passport Number"
                                  className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Country<span className="text-primary">*</span>
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300">
                                    <SelectValue placeholder="Select option" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="bangladesh">
                                    Bangladesh
                                  </SelectItem>
                                  <SelectItem value="india">India</SelectItem>
                                  <SelectItem value="pakistan">
                                    Pakistan
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Child */}
                  <div className="space-y-[30px]">
                    <div className="grid grid-cols-6 gap-8 lg:gap-x-10">
                      <div className="col-span-6">
                        <h2 className="text-t-800 font-medium">
                          Traveler 2 (Child)
                        </h2>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="first_name"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                First Name
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter first name"
                                  className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="last_name"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Last Name
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter last name"
                                  className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Gender<span className="text-primary">*</span>
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300">
                                    <SelectValue placeholder="Select gender" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="male">Male</SelectItem>
                                  <SelectItem value="female">Female</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="dob"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel className="text-t-800 lg:text-lg font-normal">
                                Date of Birth
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <Popover
                                open={isOpenDobChild}
                                onOpenChange={setIsOpenDobChild}
                              >
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className="justify-start font-normal h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                    >
                                      {field.value ? (
                                        moment(field.value).format(
                                          "DD-MMM-YYYY"
                                        )
                                      ) : (
                                        <span>Select a date</span>
                                      )}
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    defaultMonth={
                                      calendarChildDate || twoYearsBack
                                    }
                                    captionLayout="dropdown-buttons"
                                    selected={
                                      calendarChildDate
                                        ? moment(calendarChildDate).toDate()
                                        : null
                                    }
                                    onSelect={(value) => {
                                      setCalendarChildDate(value);
                                      field.onChange(calendarChildDate);
                                      setIsOpenDobChild(false);
                                    }}
                                    disabled={(date) =>
                                      date > twoYearsBack ||
                                      date < twelveYearsBack
                                    }
                                    fromYear={moment().year() - 12}
                                    toYear={moment().year() - 2}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="passport_expiry_date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Passport Expiry Date
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <Popover
                                open={isOpenExpiryDateChild}
                                onOpenChange={setIsOpenExpiryDateChild}
                              >
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className="justify-start font-normal h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                    >
                                      {field.value ? (
                                        moment(field.value).format(
                                          "DD-MMM-YYYY"
                                        )
                                      ) : (
                                        <span>Select a date</span>
                                      )}
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    defaultMonth={
                                      field.value &&
                                      moment(field.value).toDate()
                                    }
                                    captionLayout="dropdown-buttons"
                                    selected={moment(field.value).toDate()}
                                    onSelect={(value) => {
                                      field.onChange(value);
                                      setIsOpenExpiryDateC(false);
                                    }}
                                    disabled={(date) => date > new Date()}
                                    fromYear={1900}
                                    toYear={moment().year()}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name={"passport_no"}
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Passport Number
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Passport Number"
                                  className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Country<span className="text-primary">*</span>
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300">
                                    <SelectValue placeholder="Select option" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="bangladesh">
                                    Bangladesh
                                  </SelectItem>
                                  <SelectItem value="india">India</SelectItem>
                                  <SelectItem value="pakistan">
                                    Pakistan
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Infant */}
                  <div className="space-y-[30px]">
                    <div className="grid grid-cols-6 gap-8 lg:gap-x-10">
                      <div className="col-span-6">
                        <h2 className="text-t-800 font-medium">
                          Traveler 3 (Infant)
                        </h2>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="first_name"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                First Name
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter first name"
                                  className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="last_name"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Last Name
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Enter last name"
                                  className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Gender<span className="text-primary">*</span>
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300">
                                    <SelectValue placeholder="Select gender" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="male">Male</SelectItem>
                                  <SelectItem value="female">Female</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="dob"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel className="text-t-800 lg:text-lg font-normal">
                                Date of Birth
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <Popover
                                open={isOpenDobInfant}
                                onOpenChange={setIsOpenDobInfant}
                              >
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className="justify-start font-normal h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                    >
                                      {field.value ? (
                                        moment(field.value).format(
                                          "DD-MMM-YYYY"
                                        )
                                      ) : (
                                        <span>Select a date</span>
                                      )}
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    defaultMonth={
                                      field.value &&
                                      moment(field.value).toDate()
                                    }
                                    captionLayout="dropdown-buttons"
                                    selected={moment(field.value).toDate()}
                                    onSelect={(value) => {
                                      field.onChange(value);
                                      setIsOpenDobInfant(false);
                                    }}
                                    disabled={(date) =>
                                      date > today || date < twoYearsBack
                                    }
                                    fromYear={moment().year() - 2}
                                    toYear={moment().year()}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="passport_expiry_date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Passport Expiry Date
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <Popover
                                open={isOpenExpiryDateInfant}
                                onOpenChange={setIsOpenExpiryDateInfant}
                              >
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className="justify-start font-normal h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                    >
                                      {field.value ? (
                                        moment(field.value).format(
                                          "DD-MMM-YYYY"
                                        )
                                      ) : (
                                        <span>Select a date</span>
                                      )}
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    defaultMonth={
                                      field.value &&
                                      moment(field.value).toDate()
                                    }
                                    captionLayout="dropdown-buttons"
                                    selected={moment(field.value).toDate()}
                                    onSelect={(value) => {
                                      field.onChange(value);
                                      setIsOpenExpiryDateInfant(false);
                                    }}
                                    disabled={(date) => date > new Date()}
                                    fromYear={1900}
                                    toYear={moment().year()}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name={"passport_no"}
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Passport Number
                                <span className="text-primary">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  placeholder="Passport Number"
                                  className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Country<span className="text-primary">*</span>
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300">
                                    <SelectValue placeholder="Select option" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="bangladesh">
                                    Bangladesh
                                  </SelectItem>
                                  <SelectItem value="india">India</SelectItem>
                                  <SelectItem value="pakistan">
                                    Pakistan
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-8 lg:gap-x-10">
                      <div className="col-span-6">
                        <h3 className="text-t-800 lg:text-base font-medium">
                          Contact Details
                        </h3>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Email<span className="text-primary">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="Enter email"
                                  className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-t-800 lg:text-base font-normal">
                                Phone<span className="text-primary">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="Enter phone number"
                                  className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-6 flex flex-col justify-end">
                        <Button type="submit" disabled={loading}>
                          {loading && <Loader className="w-6 h-6 opacity-75" />}
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </Form>
            </Card>
          </div>
          <Card className="col-span-12 xl:col-span-3 h-fit border-transparent relative overflow-hidden rounded-sm">
            <div className="px-[53px] pt-[30px] pb-6">
              <h2 className="text-t-800 text-base text-center font-medium leading-normal pb-4">
                Session Timeout in
              </h2>
              <div className="flex gap-x-[9px] items-center justify-center text-primary">
                <span className="p-1.5 text-base bg-primary font-semibold text-white rounded-[2px]">
                  20
                </span>
                :
                <span className="p-1.5 text-base bg-primary font-semibold text-white rounded-[2px]">
                  00
                </span>
              </div>
            </div>
            <hr className="border-[#EBEBEB]" />
            <div>
              <div className="space-y-1.5 text-center">
                <h2 className="text-t-800 text-lg font-medium leading-snug px-6 py-4">
                  Courtyard By Marriot
                </h2>
                <p className="text-xs text-t-600 leading-relaxed">
                  Bluewaters Island nD94, Dubai
                </p>
                <div className="inline-flex py-1.5 gap-1">
                  <StarAltIcon
                    className="fill-[#FF7B39] h-[18px] w-[18px]"
                    viewBox="0 0 19 19"
                  />
                  <StarAltIcon
                    className="fill-[#FF7B39] h-[18px] w-[18px]"
                    viewBox="0 0 19 19"
                  />
                  <StarAltIcon
                    className="fill-[#FF7B39] h-[18px] w-[18px]"
                    viewBox="0 0 19 19"
                  />
                  <StarAltIcon
                    className="fill-[#FF7B39] h-[18px] w-[18px]"
                    viewBox="0 0 19 19"
                  />
                  <StarAltIcon
                    className="fill-[#FF7B39] h-[18px] w-[18px]"
                    viewBox="0 0 19 19"
                  />
                  <p className="text-sm lg:text-base text-t-600 leading-relaxed pl-1">
                    4.8
                  </p>
                </div>
              </div>
              <div className="px-5 py-5">
                <div className="text-t-600 text-sm lg:text-base leading-normal px-[10px] py-[5px] rounded-sm bg-p-300">
                  Room Summary
                </div>
                <ul className="px-2.5 py-5 space-y-2 text-t-600 font-medium leading-6">
                  <li className="space-y-0.5 text-sm font-medium leading-relaxed">
                    Premier Room - 1 King bed
                  </li>
                  <li className="space-y-0.5 text-sm font-medium leading-relaxed">
                    Room Only
                  </li>
                </ul>
                <div className="text-t-600 text-sm lg:text-base leading-normal px-[10px] py-[5px] rounded-sm bg-p-300">
                  Booking Summary
                </div>
                <ul className="px-2.5 py-5 space-y-2 text-t-600 font-medium leading-6">
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Check In</p>
                    <p className="text-t-800">10 Oct 2023</p>
                  </li>
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Check Out</p>
                    <p className="text-t-800">17 Oct 2023</p>
                  </li>
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Total Room</p>
                    <p className="text-t-800">2 Rooms</p>
                  </li>
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Total Nights</p>
                    <p className="text-t-800">2 Nights</p>
                  </li>
                </ul>
                <div className="text-t-600 text-sm lg:text-base leading-normal px-[10px] py-[5px] rounded-sm bg-p-300">
                  Traveller Summary
                </div>
                <ul className="px-2.5 py-5 space-y-2 text-t-600 font-medium leading-6">
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Adults</p>
                    <p className="text-t-800">2 Pax</p>
                  </li>
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Childrem</p>
                    <p className="text-t-800">1 Pax</p>
                  </li>
                </ul>
                <div className="text-t-600 text-sm lg:text-base leading-normal px-[10px] py-[5px] rounded-sm bg-p-300">
                  Fare Summary
                </div>
                <ul className="px-2.5 py-5 space-y-2 text-t-600 font-medium leading-6">
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Hotel Base Fare</p>
                    <p className="text-t-800">BDT 30,000</p>
                  </li>
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Taxes + Others</p>
                    <p className="text-t-800">BDT 725</p>
                  </li>
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>*Sub - Total (3 pax)</p>
                    <p className="text-t-800">BDT 100000</p>
                  </li>
                </ul>
                <Button className="text-base lg:text-base font-semibold w-full px-[11px] py-2.5 ">
                  <Link href={`/hotel/${data.id}/payment`}>Book This Room</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default HotelTravellerDetailsPage;
