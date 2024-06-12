"use client";

import { useForm } from "react-hook-form";

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
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { travellerSchema } from "@/schema/zod";
import { useEffect, useState } from "react";
import { getImageData } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import moment from "moment";
import { Loader } from "lucide-react";
import { DocAltIcon } from "@/components/icons/svgr";
import { countries } from "@/data/countries";
import PhoneInputComponent from "./PhoneInputComponent";

const TravellerDetailsForm = ({ hideTravellerForm }) => {
  const today = new Date();
  const twoYearsBack = new Date(today);
  const twelveYearsBack = new Date(today);
  twoYearsBack.setFullYear(today.getFullYear() - 2);
  twelveYearsBack.setFullYear(today.getFullYear() - 12);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [passport, setPassport] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [nid, setNid] = useState(null);
  const [covid_certificate, setCovidCertificate] = useState(null);
  const [isOpenDob, setIsOpenDob] = useState(false);
  const [isOpenExpiryDate, setIsOpenExpiryDate] = useState(false);
  const [travelerType, setTravellerType] = useState("");
  const [dobFrom, setDobFrom] = useState(1900);
  const [dobTo, setDobTo] = useState(moment().year());
  const [countryValue, setCountryValue] = useState("");

  let initialSelectedDate = moment().toDate();
  if (travelerType === "A") {
    initialSelectedDate = twelveYearsBack;
  } else if (travelerType === "C") {
    initialSelectedDate = twoYearsBack;
  } else {
    initialSelectedDate = moment().toDate();
  }

  useEffect(() => {
    if (travelerType === "A") {
      setDobFrom(1900);
      setDobTo(moment().year() - 12);
    }
    if (travelerType === "C") {
      setDobFrom(moment().year() - 12);
      setDobTo(moment().year() - 2);
    }
    if (travelerType === "I") {
      setDobFrom(moment().year() - 2);
      setDobTo(moment().year());
    }
  }, [travelerType]);

  const form = useForm({
    resolver: zodResolver(travellerSchema),
    defaultValues: {
      passport: "",
      photo: "",
      nid: "",
      covid_certificate: "",
      travellers: "",
      first_name: "",
      last_name: "",
      gender: "",
      dob: "",
      emergency_contact: "",
      // marital_status: "",
      country: "",
      city: "",
      // division: "",
      present_address: "",
      permanent_address: "",
      passport_no: "",
      document_issue_country: "",
      passport_expiry_date: "",
      email: "",
      phone: "",
    },
  });

  const travellersList = [
    {
      id: 1,
      travellerNo: 1,
      travellerType: "Adult",
    },
    {
      id: 2,
      travellerNo: 2,
      travellerType: "Adult",
    },
    {
      id: 3,
      travellerNo: 3,
      travellerType: "Child",
    },
    {
      id: 4,
      travellerNo: 4,
      travellerType: "Child",
    },
    {
      id: 5,
      travellerNo: 5,
      travellerType: "Infant",
    },
  ];

  const handleDisableDate = (date) => {
    if (travelerType === "A") {
      return date > twelveYearsBack || date < new Date("1900-01-01");
    }
    if (travelerType === "C") {
      return date > twoYearsBack || date < twelveYearsBack;
    }
    if (travelerType === "I") {
      return date > today || date < twoYearsBack;
    }
  };

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
    <div className="space-y-7 bg-white p-4 lg:p-[50px]">
      <h2 className="text-t-500 text-lg font-medium">Traveler Details</h2>
      <div className="bg-p-300 font-normal lg:text-lg text-t-800 rounded-sm px-4 py-3 flex items-center gap-x-2.5">
        <InfoCircledIcon className="w-6 h-6 text-p-900 flex-shrink-0" />
        Enter details exactly as they appear on your passport
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16">
          <div className="grid grid-cols-6 gap-8 lg:gap-x-10">
            <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-8">
              <FormField
                control={form.control}
                name="passport"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-base font-normal">
                      Upload Passport<span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="p-0 file:h-[3.25rem] file:mr-4 file:text-sm text-t-500 placeholder:text-t-300 file:py-4 file:px-5 file:rounded-l-md file:border-0 file:bg-p-300 file:text-p-900 border-transparent bg-[#F8F8F8] focus-visible:ring-0 focus-visible:ring-offset-0"
                        accept=".png,.jpg,.jpeg"
                        {...field}
                        onChange={(event) => {
                          const { file, displayUrl } = getImageData(event);
                          field.onChange(event);
                          setPassport(file);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="px-4 py-20 flex flex-col items-center justify-center space-y-8 text-center text-t-500 border border-[#cccccc] rounded-sm">
                <DocAltIcon />
                <p>
                  <span className="text-primary">Drag and drop</span> files here
                  or <span className="text-primary">browse</span> begin the
                  upload The Accepted File Extensions (Jpg, Jpeg, png) and the
                  maximum sizesize is (2MB)
                </p>
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2 space-y-8">
              <FormField
                control={form.control}
                name="photo"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-base font-normal">
                      Upload Photo<span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="p-0 file:h-[3.25rem] file:mr-4 file:text-sm text-t-500 placeholder:text-t-300 file:py-4 file:px-5 file:rounded-l-md file:border-0 file:bg-p-300 file:text-p-900 border-transparent bg-[#F8F8F8]"
                        accept=".png,.jpg,.jpeg"
                        {...field}
                        onChange={(event) => {
                          const { file, displayUrl } = getImageData(event);
                          field.onChange(event);
                          setPhoto(file);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="px-4 py-20 flex flex-col items-center justify-center space-y-8 text-center text-t-500 border border-[#cccccc] rounded-sm">
                <DocAltIcon />
                <p>
                  <span className="text-primary">Drag and drop</span> files here
                  or <span className="text-primary">browse</span> begin the
                  upload.
                </p>
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col gap-8">
              <div className="col-span-2 sm:col-span-1 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="nid"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Upload NID<span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          className="p-0 file:h-[3.25rem] file:mr-4 file:text-sm text-t-500 placeholder:text-t-300 file:py-4 file:px-5 file:rounded-l-md file:border-0 file:bg-p-300 file:text-p-900 border-transparent bg-[#F8F8F8]"
                          accept=".png,.jpg,.jpeg"
                          {...field}
                          onChange={(event) => {
                            const { file, displayUrl } = getImageData(event);
                            field.onChange(event);
                            setNid(file);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 sm:col-span-1 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="covid_certificate"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Upload Covid Certificate
                        <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          className="p-0 file:h-[3.25rem] file:mr-4 file:text-sm text-t-500 placeholder:text-t-300 file:py-4 file:px-5 file:rounded-l-md file:border-0 file:bg-p-300 file:text-p-900 border-transparent bg-[#F8F8F8]"
                          accept=".png,.jpg,.jpeg"
                          {...field}
                          onChange={(event) => {
                            const { file, displayUrl } = getImageData(event);
                            field.onChange(event);
                            setCovidCertificate(file);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 sm:col-span-1 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="travellers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Travellers<span className="text-primary">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          setTravellerType(value.split(" ")[2].split("")[1]);
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-800">
                            <SelectValue placeholder="Select traveller" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-40">
                          {travellersList.map((traveller) => (
                            <SelectItem
                              key={traveller.id}
                              value={`Travellers ${traveller.travellerNo} (${traveller.travellerType})`}
                            >
                              Travellers {traveller.travellerNo} ({" "}
                              {traveller.travellerType} )
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-8 lg:gap-x-10">
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-base font-normal">
                      First Name<span className="text-primary">*</span>
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
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-base font-normal">
                      Last Name<span className="text-primary">*</span>
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
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-t-800 lg:text-base font-normal">
                      Date of Birth<span className="text-primary">*</span>
                    </FormLabel>
                    <Popover open={isOpenDob} onOpenChange={setIsOpenDob}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className="justify-start font-normal h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          >
                            {field.value ? (
                              moment(field.value).format("DD-MMM-YYYY")
                            ) : (
                              <span>Select a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          defaultMonth={field.value || initialSelectedDate}
                          captionLayout="dropdown-buttons"
                          selected={moment(field.value).toDate()}
                          onSelect={(value) => {
                            field.onChange(value);
                            setIsOpenDob(false);
                          }}
                          disabled={(date) => handleDisableDate(date)}
                          fromYear={dobFrom}
                          toYear={dobTo}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-t-800 lg:text-base font-normal">
                      Country<span className="text-primary">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        setCountryValue(value);
                      }}
                      defaultValue={countryValue}
                    >
                      <FormControl>
                        <SelectTrigger className="h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem value={country.name} key={country.id}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="division"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-t-800 lg:text-base font-normal">
                      Division<span className="text-primary">*</span>
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
                        <SelectItem value="dhaka">Dhaka</SelectItem>
                        <SelectItem value="chittagong">Chittagong</SelectItem>
                        <SelectItem value="rajshahi">Rajshahi</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div> */}
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-base font-normal">
                      City Name<span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter city name"
                        className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name={"passport_no"}
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-base font-normal">
                      Passport Number<span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Type passport number"
                        className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="document_issue_country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-t-800 lg:text-base font-normal">
                      Document Issue Country
                      <span className="text-primary">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      defaultValue={countryValue}
                    >
                      <FormControl>
                        <SelectTrigger className="h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem value={country.name} key={country.id}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
                              moment(field.value).format("DD-MMM-YYYY")
                            ) : (
                              <span>Select a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          defaultMonth={
                            field.value && moment(field.value).toDate()
                          }
                          captionLayout="dropdown-buttons"
                          selected={moment(field.value).toDate()}
                          onSelect={(value) => {
                            field.onChange(value);
                            setIsOpenExpiryDate(false);
                          }}
                          disabled={(date) => date < new Date()}
                          fromYear={moment().year()}
                          toYear={2100}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="present_address"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-base font-normal">
                      Present Address<span className="text-primary">*</span>
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
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="permanent_address"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-base font-normal">
                      Permanent Address<span className="text-primary">*</span>
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
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="emergency_contact"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-base font-normal">
                      Emergency Contact No.
                      <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter emergency contact no."
                        className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-6">
              <h3 className="text-t-800 lg:text-base font-medium">
                Contact Details
              </h3>
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
            <div className="col-span-6 sm:col-span-3 lg:col-span-2 relative">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
                      Phone<span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <PhoneInputComponent
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        name={field.name}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col justify-end">
              <Button type="submit" disabled={loading}>
                {loading && <Loader className="w-6 h-6 opacity-75" />}
                Save & Exit
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TravellerDetailsForm;
