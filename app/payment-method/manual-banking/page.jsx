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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Container from "@/components/layouts/Container";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import moment from "moment";
import { Loader } from "lucide-react";

const formSchema = z.object({
  amount: z
    .number()
    .positive()
    .min(1, "Please enter a valid amount")
    .or(z.string().min(1, "Please enter a valid amount")),
  method: z.string().min(1, "Please select a payment method"),
  account: z.string().min(1, "Please select an account"),
  date: z
    .string()
    .min(1, "Please select a valid date")
    .or(z.date("Please select a valid date")),
  agree: z.boolean().refine((val) => val === true, {
    message: "Please agree to the terms and conditions",
  }),
  payment_prove: z.string().min(1, "Please upload a payment proof"),
  remarks: z.string().optional(),
});

const ManualBankingPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      method: "Bank Transfer",
      account: "",
      date: "",
      remarks: "",
      agree: false,
    },
  });

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(data);
      router.push("/payment-method/review");
    }, 2000);
  };

  return (
    <main className="py-20">
      <Container>
        <Card className="max-w-3xl mx-auto border-transparent mb-8">
          <CardHeader className="lg:p-10">
            <CardTitle className="lg:text-[2rem] text-t-800 text-center pt-5">
              Payment Upload
            </CardTitle>
          </CardHeader>
          <CardContent className="lg:p-10 lg:pt-0">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800">
                        Amount<span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[3.25rem] text-base px-5 py-4 text-t-700 placeholder:text-t-300"
                          placeholder="Enter amount"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="method"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800">
                        Payment Method<span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[3.25rem] text-base px-5 py-4 text-t-700 placeholder:text-t-300"
                          placeholder="Enter amount"
                          {...field}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="account"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-t-800">
                        Deposited A/C<span className="text-primary">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-[3.25rem] text-base px-5 py-4 text-t-700 placeholder:text-t-300">
                            <SelectValue placeholder="Select an account" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">
                            Islami Bank Ltd./ Best Travels Ltd./
                            13876342617476218/Uttara Branch .
                          </SelectItem>
                          <SelectItem value="2">
                            Pubali Bank Ltd./ Best Travels Ltd./
                            13876342617476218/Uttara Branch .
                          </SelectItem>
                          <SelectItem value="3">
                            AB Bank Ltd./ Best Travels Ltd./
                            13876342617476218/Uttara Branch .
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-t-800">
                        Deposited Date<span className="text-primary">*</span>
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className="justify-start font-normal h-[3.25rem] text-base px-5 py-4 text-t-600 placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                            >
                              {field.value ? (
                                moment(field.value).format("DD-MMMM-YYYY")
                              ) : (
                                <span>Select date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            // defaultMonth={moment(field.value).toDate()}
                            captionLayout="dropdown-buttons"
                            // selected={moment(field.value).toDate()}
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
                <FormField
                  control={form.control}
                  name="payment_prove"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800">Remarks</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          className="p-0 file:h-[3.25rem] file:mr-4 file:text-sm text-t-700 placeholder:text-t-300 file:py-4 file:px-5 file:rounded-l-md file:border-0 file:bg-p-300 file:text-p-900"
                          accept=".png,.jpg,.jpeg"
                          {...field}
                          onChange={(event) => {
                            const { file, displayUrl } = getImageData(event);
                            field.onChange(file?.name);
                            setFile(file);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="remarks"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-t-800">Remarks</FormLabel>
                      <FormControl>
                        <Input
                          className="h-[3.25rem] text-base px-5 py-4 text-t-700 placeholder:text-t-300"
                          placeholder="Enter comments"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="agree"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="flex items-center gap-x-2 font-normal">
                          I agree with Best Trips{" "}
                          <Link
                            href="/privacy-policy"
                            className="text-primary duration-300 hover:text-primary/75"
                          >
                            Privacy Policy
                          </Link>
                          and{" "}
                          <Link
                            href="/terms-and-conditions"
                            className="text-primary duration-300 hover:text-primary/75"
                          >
                            Terms & Conditions
                          </Link>
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid">
                  <Button type="submit" disabled={loading}>
                    {loading && <Loader className="w-6 h-6 animate-spin" />}
                    Sign in
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
};

export default ManualBankingPage;
