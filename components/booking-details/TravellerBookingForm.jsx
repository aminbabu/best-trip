"use client";

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
import { travellerSchema } from "@/schema/zod";

const TravellerBookingForm = ({ traveler }) => {
  const form = useForm({
    resolver: zodResolver(travellerSchema),
    defaultValues: {
      travellers: "1",
      first_name: "Md. Irfanul",
      last_name: "Haque",
      gender: "Male",
      dob: "09-08-1996",
      emergency_contact: "+88019737475665",
      country: "Bangladesh",
      city: "Dhaka",
      present_address: "Village, P.O, District",
      permanent_address: "Village, P.O, District",
      passport_no: "EA04353852",
      document_issue_country: "Bangladesh",
      passport_expiry_date: "01-12-2028",
      email: "bestrip@bd.com",
      phone: "+8801973745665",
    },
  });
  // console.log(traveler);
  const adultTravelers = traveler?.filter((traveler) => traveler?.travelerType === "adult")
  const childTravelers = traveler?.filter((traveler) => traveler?.travelerType === "child")
  const infantTravelers = traveler?.filter((traveler) => traveler?.travelerType === "infant")
  console.log(adultTravelers, childTravelers, infantTravelers);
  return (
    // <h1>Traveller</h1>
    <Card className="border-transparent relative overflow-hidden">
      <CardContent className="p-4 sm:p-5 lg:p-8 lg:leading-relaxed  justify-between lg:items-center gap-5 xl:gap-9 text-t-700">
        <h3 className="text-lg font-medium text-[#494949] pb-10">
          Traveler {traveler?.[0]?.no} ({traveler?.[0]?.type})
        </h3>
        <Form {...form}>
          <form className="space-y-16">
            <div className="grid grid-cols-6 gap-8 lg:gap-x-10">
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="first_name"
                  disabled
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter first name"
                          disabled
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="last_name"
                  disabled
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          disabled
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="gender"
                  disabled
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Gender
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          disabled
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="dob"
                  disabled
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Date of Birth
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          disabled
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="country"
                  disabled
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Country
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          disabled
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="city"
                  disabled
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        City Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          disabled
                          placeholder="Enter city name"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <FormField
                  control={form.control}
                  name={"passport_no"}
                  disabled
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Passport Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          disabled
                          placeholder="Type passport number"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="document_issue_country"
                  disabled
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Document Issue Country
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          disabled
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <FormField
                  control={form.control}
                  disabled
                  name="passport_expiry_date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Passport Expiry Date
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter first name"
                          disabled
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="present_address"
                  disabled
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Present Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          disabled
                          placeholder="Enter last name"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="permanent_address"
                  disabled
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Permanent Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          disabled
                          placeholder="Enter last name"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="emergency_contact"
                  disabled
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Emergency Contact No.
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          disabled
                          placeholder="Enter emergency contact no."
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="email"
                  disabled
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          disabled
                          placeholder="Enter email"
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2 relative">
                <FormField
                  control={form.control}
                  name="phone"
                  disabled
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Phone
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          disabled
                          className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TravellerBookingForm;
