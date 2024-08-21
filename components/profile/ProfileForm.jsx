"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PencilSquareIcon } from "@/components/icons/svgr";
import * as z from "zod";
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
  PhoneIcon,
  UserAltIcon,
} from "@/components/icons/svgr";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import profileUpdate from "@/actions/profile/profile-update";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const formSchema = z.object({
  name: z.string().min(1, "Please enter your full name"),
  dob: z
    .string()
    .refine((val) => moment(val).isValid(), {
      message: "Please enter a valid date",
    })
    .or(
      z.date({
        required_error: "Please enter a valid date",
      })
    ),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().refine(validator.isMobilePhone, {
    message: "Please enter a valid phone number",
  }),
  address: z.string().min(1, "Please enter a valid address"),
  city: z.string().min(1, "Please enter a valid city"),
  country: z.string().min(1, "Please enter a valid country"),
  flyerNumber: z.string().min(1, "Please enter a valid flyer number"),
});

const ProfileForm = ({ user }) => {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      dob: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      flyerNo: "",
    },
    values: {
      fullname: user?.name || "",
      dob: user?.dob ? moment("16-06-1999", "DD-MMM-YYYY").toDate() : "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
      city: user?.city || "",
      country: user?.country || "",
      flyerNo: user?.flyerNumber || "",
    },
    disabled: !edit,
  });

  // const onSubmit = (data) => {
  //   console.log(data);
  //   setEdit(false); // Change to false to disable editing
  // };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await profileUpdate(data);

      const result = await withReactContent(Swal).fire({
        title: "Success",
        text: response.message,
        icon: "success",
        confirmButtonText: "Sign In",
        confirmButtonColor: "#3ad965",
        allowOutsideClick: false,
      });
    } catch (error) {
      await withReactContent(Swal).fire({
        title: "Error",
        text: error?.message || "An error occurred. Please try again",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#ff0f2f",
        allowOutsideClick: false,
      });
    } finally {
      setLoading(false);
      // form.reset();
    }
  };

  return (
    <div className="!mt-5">
      {!edit && (
        <div className="mb-10 text-center">
          <Button size="sm" onClick={() => setEdit(true)}>
            Edit Profile
            <PencilSquareIcon />
          </Button>
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <h2 className="text-t-800 text-xl lg:text-base font-medium mb-6 lg:mb-8">
              User Info
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 xl:gap-x-12">
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
                          type="text"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          placeholder="Enter your full name"
                          onChange={(e) => {
                            console.log(e.target.value);
                            field.onChange(e);
                          }}
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
                              className="justify-start font-normal h-[3.25rem] text-base px-5 py-4 text-t-600 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                              disabled={!edit}
                            >
                              {field.value ? (
                                moment(field.value).format("DD-MMM-YYYY")
                              ) : (
                                <span>Select your date of birth</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            defaultMonth={
                              field?.value ? moment(field.value).toDate() : null
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
            </div>
          </div>
          <div>
            <h2 className="text-t-800 text-xl lg:text-base font-medium mb-6 lg:mb-8">
              Contact Info
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 xl:gap-x-12">
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
                          type="email"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
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
                          type="text"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
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
                          type="text"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
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
                          type="text"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
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
                          type="text"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
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
                          type="text"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
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
              <Button type="submit">Update</Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
