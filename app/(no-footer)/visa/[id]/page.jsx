"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import visaCardImg from "@/public/images/search/visa/visa-card-img.png";
import {
  BusRedIcon,
  CalenderIcon,
  ClockRedIcon,
  DocRedIcon,
  VisaEntryTypeIcon,
} from "@/components/icons/svgr";
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { travellerSchema } from "@/schema/zod";
import { Input } from "@/components/ui/input";
import moment from "moment";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpenDob, setIsOpenDob] = useState(false);
  const [isOpenExpiryDate, setIsOpenExpiryDate] = useState(false);

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

  let travelers = [
    {
      id: 1,
      travelerNo: 1,
      type: "Adult",
    },
    {
      id: 2,
      travelerNo: 2,
      type: "Children",
    },
    {
      id: 3,
      travelerNo: 3,
      type: "Infant",
    },
  ];

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
        <div className="grid grid-cols-12 xl:gap-x-[30px] gap-y-6">
          <div className="col-span-12 xl:col-span-8 space-y-6">
            <Card className="border-transparent relative overflow-hidden rounded-sm">
              <CardContent className="p-4 sm:p-5 lg:pl-6 lg:pr-[30px] lg:py-[34px] xl:leading-8 flex flex-col md:flex-row lg:items-center justify-between gap-6">
                <Image
                  src={visaCardImg}
                  width={266}
                  height={266}
                  alt="Dubai - Electronic Visa"
                  className="aspect-square w-full md:mx-0 md:w-1/2 lg:w-64 flex-shrink-0 rounded-[0.1785rem] object-cover"
                />
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div>
                      <h4 className="text-base xl:text-lg text-t-900 font-medium leading-relaxed mb-1.5">
                        Saudi Arabia Umrah Visa
                      </h4>
                      <p className="text-sm lg:text-base text-t-800 mb-[35px] lg:mb-4 xl:mb-[35px]">
                        Electronic Visa (E-Visa)
                      </p>
                      <div className="flex gap-y-4">
                        <div className="text-t-600 text-sm lg:text-base leading-normal xl:text-center px-[10px] py-[5px] rounded-sm bg-p-300 mb-[18px]">
                          Basic information about visa processing
                        </div>
                      </div>
                      <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-x-12">
                        <ul className="grid xl:grid-cols-2 gap-x-[30px] gap-y-3 lg:gap-y-2 xl:gap-y-3">
                          <li className="flex gap-x-2 text-sm xl:text-md text-t-500 leading-normal">
                            <DocRedIcon className="mt-0.5 flex-shrink-0" />
                            <span className="flex-shrink-0">
                              Visa Type : E - Visa
                            </span>
                          </li>
                          <li className="flex gap-x-2 text-sm xl:text-md text-t-600 leading-normal">
                            <ClockRedIcon className="mt-0.5 flex-shrink-0" />
                            <span className="flex-shrink-0">
                              Maximum Stays : 30 Days
                            </span>
                          </li>
                          <li className="flex gap-x-2 text-sm xl:text-md text-t-600 leading-normal">
                            <VisaEntryTypeIcon className="mt-0.5 flex-shrink-0" />
                            <span className="flex-shrink-0">
                              Entry Type : Single Entry
                            </span>
                          </li>
                          <li className="flex gap-x-2 text-sm xl:text-md text-t-600 leading-normal">
                            <CalenderIcon
                              fill="#F50308"
                              className="mt-0.5 flex-shrink-0"
                            />
                            <span className="flex-shrink-0">
                              Validity : Max 30 Days
                            </span>
                          </li>
                          <li className="flex gap-x-2 text-sm xl:text-md text-t-600 leading-normal">
                            <CalenderIcon
                              fill="#F50308"
                              className="mt-0.5 flex-shrink-0"
                            />
                            <span className="flex-shrink-0">
                              Processing Time : 7 Days
                            </span>
                          </li>
                          <li className="flex gap-x-2 text-sm xl:text-md text-t-600 leading-normal">
                            <BusRedIcon
                              fill="#F50308"
                              className="mt-0.5 flex-shrink-0"
                            />
                            <span className="flex-shrink-0">
                              With Transport
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                  className="space-y-16"
                >
                  <div className="p-5 lg:px-10 lg:pt-[30px] lg:pb-[56px] space-y-[30px]">
                    {travelers.map((item) => (
                      <div
                        className="grid grid-cols-6 gap-8 lg:gap-x-10"
                        key={item.id}
                      >
                        <div className="col-span-6">
                          <h2 className="text-t-800 font-medium">
                            Traveler {item.travelerNo} ({item.type})
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
                                    <SelectItem value="female">
                                      Female
                                    </SelectItem>
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
                                <FormLabel className="text-t-800 lg:text-base font-normal">
                                  Date of Birth
                                  <span className="text-primary">*</span>
                                </FormLabel>
                                <Popover
                                  open={isOpenDob}
                                  onOpenChange={setIsOpenDob}
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
                                      onSelect={() => {
                                        field.onChange();
                                        setIsOpenDob(false);
                                      }}
                                      disabled={(date) =>
                                        date > new Date() ||
                                        date < new Date("1900-01-01")
                                      }
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
                            name="passport_expiry_date"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel className="text-t-800 lg:text-base font-normal">
                                  Passport Expiry Date
                                  <span className="text-primary">*</span>
                                </FormLabel>
                                <Popover
                                  open={isOpenExpiryDate}
                                  onOpenChange={setIsOpenExpiryDate}
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
                                      onSelect={() => {
                                        field.onChange();
                                        setIsOpenExpiryDate(false);
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
                    ))}
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
          <Card className="col-span-12 xl:col-span-4 h-fit border-transparent relative overflow-hidden rounded-sm divide-y divide-[#ebebeb]">
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
            <div>
              <div className="pt-6 space-y-1.5">
                <h2 className="text-t-800 text-lg text-center font-medium leading-snug">
                  Saudi Arabia Umrah Visa
                </h2>
                <p className="text-t-600 text-sm text-center leading-relaxed">
                  Electronic Visa (E-Visa)
                </p>
              </div>
              <div className="px-6 pt-5 pb-[34px]">
                <div className="text-t-600 text-sm lg:text-base leading-normal px-[10px] py-[5px] rounded-sm bg-p-300">
                  Fare Summary
                </div>
                <ul className="px-2.5 py-5 space-y-2 text-t-600 font-medium leading-6">
                  <li className="flex justify-between items-center py-[5px]">
                    <p className="text-sm font-normal leading-6">Visa Fee</p>
                    <p className="text-base leading-7 font-normal">
                      BDT 30,000
                    </p>
                  </li>
                  <li className="space-y-0.5">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-normal leading-6">
                        Total Traveler
                      </p>
                      <p className="text-base leading-7 font-normal">
                        BDT 30,000
                      </p>
                    </div>
                    <span className="grid justify-end text-sm leading-relaxed">
                      (3 X 30,000)
                    </span>
                  </li>
                  <li className="space-y-0.5">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-normal leading-6">
                        BT Service Fee
                      </p>
                      <p className="text-base leading-7 font-normal">
                        BDT 2,000
                      </p>
                    </div>
                    <span className="grid justify-end text-sm leading-relaxed">
                      (3 X 2,000)
                    </span>
                  </li>
                  <li className="flex justify-between items-center pt-2">
                    <p className="text-base font-normal leading-6">
                      Sub - Total (3 pax)
                    </p>
                    <p className="text-base leading-6 text-t-600">BDT 96,000</p>
                  </li>
                </ul>
                <div className="flex justify-between items-center text-white text-base lg:text-base font-semibold leading-normal px-[11px] py-2.5 rounded-sm bg-primary">
                  <p className="text-sm leading-snug">Pay For (3 pax)</p>
                  <p className="text-base leading-snug">
                    BDT <span>96,000</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Page;
