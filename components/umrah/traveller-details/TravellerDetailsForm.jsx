"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { InfoIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { travellerSchema } from "@/schema/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { getImageData } from "@/lib/utils";
import { Input } from "@/components/ui/input";
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
import { Calendar } from "@/components/ui/calendar";
import moment from "moment";
import { Loader } from "lucide-react";
import { DocAltIcon, DocIcon } from "@/components/icons/svgr";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

const TravellerDetailsForm = ({ hideTravellerForm }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [passport, setPassport] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [nid, setNid] = useState(null);
  const [covid_certificate, setCovidCertificate] = useState(null);
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
    <div className="space-y-7 bg-white">
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
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
                      Upload Passport<span className="text-primary">*</span>
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
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
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
                      <FormLabel className="text-t-800 lg:text-lg font-normal">
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
                      <FormLabel className="text-t-800 lg:text-lg font-normal">
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
            </div>
          </div>
          <div className="grid grid-cols-6 gap-8 lg:gap-x-10">
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
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
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
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
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
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
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
                      Date of Birth<span className="text-primary">*</span>
                    </FormLabel>
                    {/* <DropdownMenu>
                      <DropdownMenuTrigger asChild>
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
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-auto p-0" align="start">
                        <DropdownMenuItem>
                          <Calendar
                            mode="single"
                            defaultMonth={
                              field.value && moment(field.value).toDate()
                            }
                            captionLayout="dropdown-buttons"
                            selected={moment(field.value).toDate()}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            fromYear={1900}
                            toYear={moment().year()}
                            initialFocus
                          />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu> */}
                    <Popover>
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
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
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
            {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="marital_status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
                      Marital Status<span className="text-primary">*</span>
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
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="unmarried">Unmarried</SelectItem>
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
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
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
                        <SelectItem value="bangladesh">Bangladesh</SelectItem>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="pakistan">Pakistan</SelectItem>
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
                name="division"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
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
            </div>
            {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="present_address"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
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
            </div> */}
            {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="permanent_address"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
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
            </div> */}
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name={"passport_no"}
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
                      Passport Number<span className="text-primary">*</span>
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
                name="document_issue_country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
                      Document Issue Country
                      <span className="text-primary">*</span>
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
                        <SelectItem value="bangladesh">Bangladesh</SelectItem>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="pakistan">Pakistan</SelectItem>
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
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
                      Passport Expiry Date
                      <span className="text-primary">*</span>
                    </FormLabel>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
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
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-auto p-0" align="start">
                        <DropdownMenuItem>
                          <Calendar
                            mode="single"
                            defaultMonth={
                              field.value && moment(field.value).toDate()
                            }
                            captionLayout="dropdown-buttons"
                            selected={moment(field.value).toDate()}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() || date < new Date("1900-01-01")
                            }
                            fromYear={moment().year()}
                            toYear={2100}
                            initialFocus
                          />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    {/* <Popover>
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
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          fromYear={moment().year()}
                          toYear={2100}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-6">
              <h3 className="text-t-800 lg:text-lg font-medium">
                Contact Details
              </h3>
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
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
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 lg:text-lg font-normal">
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
