"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import validator from "validator";
import moment from "moment";
import {
  CalendarIcon,
  EnvelopIcon,
  FlagIcon,
  FoldingDocIcon,
  LandmarkIcon,
  LocationAltIcon,
  LocationIcon,
  PhoneIcon,
  UserAltIcon,
} from "@/components/icons/svgr";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  fullname: z.string().min(3, "Please enter your full name"),
  dob: z.date({
    required_error: "Please enter your date of birth",
  }),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().refine(validator.isMobilePhone, {
    message: "Please enter a valid phone number",
  }),
  address: z.string().min(1, "Please enter a valid address"),
  city: z.string().min(1, "Please enter a valid city"),
  country: z.string().min(1, "Please enter a valid country"),
  flyerNo: z.string().min(1, "Please enter a valid flyer number"),
});

const ProfileForm = ({ edit, setEdit }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "Md Irfan",
      dob: moment(new Date(2015, 10, 6)).format("DD-MMM-YYYY"),
      email: "irfan@cholotrip.net",
      phone: "+880 1871 24 9015",
      address: "Dhaka, Bangladesh",
      city: "Dhaka",
      country: "Bangladesh",
      flyerNo: "5874564000",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <h2 className="text-t-700 text-xl lg:text-2xl font-medium mb-6 lg:mb-8">
              User Info
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 lg:gap-x-12">
              <div className="col-span-2 md:col-span-1 hidden md:block">
                <div className="flex items-center gap-x-2 rounded-md px-5 py-4 bg-primary-foreground text-t-600 leading-normal">
                  <UserAltIcon
                    className="flex-shrink-0 w-6 h-6"
                    viewBox="0 0 24 24"
                  />
                  Name
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <Input
                          disabled={!edit}
                          type="text"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-700 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600"
                          placeholder="Enter your full name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 md:col-span-1 hidden md:block">
                <div className="flex items-center gap-x-2 rounded-md px-5 py-4 bg-primary-foreground text-t-600 leading-normal">
                  <CalendarIcon
                    className="flex-shrink-0 w-6 h-6"
                    viewBox="0 0 24 24"
                  />
                  Birthday
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "text-left justify-start",
                                !field.value && "text-muted-foreground"
                              )}
                              disabled={!edit}
                            >
                              {field.value ? (
                                moment(field.value).format("DD-MMM-YYYY")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-t-700 text-xl lg:text-2xl font-medium mb-6 lg:mb-8">
              Contact Info
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 lg:gap-x-12">
              <div className="col-span-2 md:col-span-1 hidden md:block">
                <div className="flex items-center gap-x-2 rounded-md px-5 py-4 bg-primary-foreground text-t-600 leading-normal">
                  <EnvelopIcon
                    className="flex-shrink-0 w-6 h-6"
                    viewBox="0 0 24 24"
                  />
                  Email Address
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <Input
                          disabled={!edit}
                          type="email"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-700 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600"
                          placeholder="Enter email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 md:col-span-1 hidden md:block">
                <div className="flex items-center gap-x-2 rounded-md px-5 py-4 bg-primary-foreground text-t-600 leading-normal">
                  <PhoneIcon
                    className="flex-shrink-0 w-6 h-6"
                    viewBox="0 0 24 24"
                  />
                  Phone Number
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <Input
                          disabled={!edit}
                          type="text"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-700 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600"
                          placeholder="Enter phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 md:col-span-1 hidden md:block">
                <div className="flex items-center gap-x-2 rounded-md px-5 py-4 bg-primary-foreground text-t-600 leading-normal">
                  <LocationAltIcon
                    className="flex-shrink-0 w-6 h-6"
                    viewBox="0 0 24 24"
                  />
                  Address
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <Input
                          disabled={!edit}
                          type="text"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-700 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600"
                          placeholder="Enter phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 md:col-span-1 hidden md:block">
                <div className="flex items-center gap-x-2 rounded-md px-5 py-4 bg-primary-foreground text-t-600 leading-normal">
                  <LandmarkIcon
                    className="flex-shrink-0 w-6 h-6"
                    viewBox="0 0 24 24"
                  />
                  City
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <Input
                          disabled={!edit}
                          type="text"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-700 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600"
                          placeholder="Enter phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 md:col-span-1 hidden md:block">
                <div className="flex items-center gap-x-2 rounded-md px-5 py-4 bg-primary-foreground text-t-600 leading-normal">
                  <FlagIcon
                    className="flex-shrink-0 w-6 h-6"
                    viewBox="0 0 24 24"
                  />
                  Country
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <Input
                          disabled={!edit}
                          type="text"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-700 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600"
                          placeholder="Enter phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 md:col-span-1 hidden md:block">
                <div className="flex items-center gap-x-2 rounded-md px-5 py-4 bg-primary-foreground text-t-600 leading-normal">
                  <FoldingDocIcon
                    className="flex-shrink-0 w-6 h-6"
                    viewBox="0 0 24 24"
                  />
                  Frequent Flyer Number
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <FormField
                  control={form.control}
                  name="flyerNo"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <Input
                          disabled={!edit}
                          type="text"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-700 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600"
                          placeholder="Enter phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          {edit && (
            <div className="grid">
              <Button type="submit">Sign in</Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
