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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
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
import { getImageData } from "@/lib/utils";
import { addBalanceRequest } from "@/actions/payment/add-balance-request";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  amount: z
    .number()
    .positive()
    .min(1, "Please enter a valid amount")
    .or(z.string().min(1, "Please enter a valid amount")),
  paymentMethod: z.string().min(1, "Please select a payment method"),
  account: z.string().min(1, "Please select an account"),
  paymentDate: z
    .string()
    .min(1, "Please select a valid date")
    .or(z.date("Please select a valid date")),
  // agree: z.boolean().refine((val) => val === true, {
  //   message: "Please agree to the terms and conditions",
  // }),
  attachment: z.string().min(1, "Please upload a payment proof"),
  reference: z.string().min(1, "Please enter a reference"),
});

const ManualBankingPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [file, setFile] = useState(null);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      paymentMethod: "",
      account: "",
      paymentDate: "",
      reference: "",
      attachment: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true)
    data.attachment = file;
    const formData = new FormData();
    formData.append("amount", data.amount);
    formData.append("paymentMethod", data.paymentMethod);
    formData.append("attachment", file)
    formData.append("account", data.account);
    formData.append("paymentDate", moment(data.paymentDate).format("YYYY-MM-DD"));
    try {
      const response = await addBalanceRequest(formData);
      if (response?.error) {
        return await withReactContent(Swal).fire({
           title: "Error",
           text: response?.error || "An error occurred. Please try again",
           icon: "error",
           confirmButtonText: "Try Again",
           confirmButtonColor: "#ff0f2f",
           allowOutsideClick: false,
         });
       }
      await withReactContent(Swal).fire({
        title: "Success",
        text: response?.message,
        icon: "success",
        confirmButtonText: "Continue",
        confirmButtonColor: "#3ad965",
        allowOutsideClick: false,
      });
      router.push(`/payment-method/review?status=${response?.paymentsRequest?.status}&refId=${response?.paymentsRequest?.refId}`);
    } catch (error) {
      console.log(error?.message);
      await withReactContent(Swal).fire({
        title: "Error",
        text: error?.message || "Something Went Wrong. Please try again",
        icon: "Error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#F70207",
        allowOutsideClick: false,
      });
    } finally {

      setLoading(false);
    }

  };

  return (
    <div className="mx-auto">
      <Card className="border-transparent mb-8 shadow-[0px_3px_4px_0px_rgba(0, 0, 0, 0.03)] border border-[#f1f1f4] p-6 lg:p-10">
        <CardHeader className="p-0">
          <CardTitle className="text-lg lg:text-xl font-medium text-t-800 text-left pb-5 lg:pb-8">
            Payment Upload
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-0 p-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <div className="grid grid-cols-2 gap-x-6 gap-y-[26px] mb-8">
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem className="space-y-3 col-span-2 lg:col-span-1">
                      <FormLabel className="text-t-800 text-sm lg:text-base">
                        Amount<span className="text-primary"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[3.25rem] text-base p-4 text-t-700 placeholder:text-t-600 placeholder:text-sm placeholder:lg:text-base border border-[#f5f5f5] focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Enter amount"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-normal" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3 col-span-2 lg:col-span-1">
                      <FormLabel className="text-t-800 text-sm lg:text-base">
                        Payment method<span className="text-primary"> *</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-[3.25rem] text-base p-4 text-t-700 placeholder:text-t-600 placeholder:text-sm placeholder:lg:text-base border border-[#f5f5f5] focus-visible:ring-0 focus-visible:ring-offset-0">
                            <SelectValue placeholder="Select payment method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bank transfer">
                            Bank Transfer
                          </SelectItem>
                          <SelectItem value="bank deposit">
                            Bank Deposit
                          </SelectItem>
                          <SelectItem value="cheque">Cheque</SelectItem>
                          <SelectItem value="cash">Cash</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="font-normal" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="account"
                  render={({ field }) => (
                    <FormItem className="space-y-3 col-span-2 lg:col-span-1">
                      <FormLabel className="text-t-800 text-sm lg:text-base">
                        Deposited A/C<span className="text-primary"> *</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-[3.25rem] text-base p-4 text-t-700 placeholder:text-t-600 placeholder:text-sm placeholder:lg:text-base border border-[#f5f5f5] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-0">
                            <SelectValue placeholder="Select an account" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Islami Bank Ltd">
                            Islami Bank Ltd. - Best Travels Ltd. -
                            13876342617476218 - Uttara Branch .
                          </SelectItem>
                          <SelectItem value="Pubali Bank Ltd">
                            Pubali Bank Ltd. - Best Travels Ltd. -
                            13876342617476218 - Uttara Branch .
                          </SelectItem>
                          <SelectItem value="AB Bank Ltd">
                            AB Bank Ltd. - Best Travels Ltd. - 13876342617476218
                            - Uttara Branch .
                          </SelectItem>
                          <SelectItem value="Duth-Bangla Bank Limited">
                            Duth-Bangla Bank Limited. - Best Travels Ltd. - 13876342617476218
                            - Uttara Branch .
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="font-normal" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="reference"
                  render={({ field }) => (
                    <FormItem className="space-y-3 col-span-2 lg:col-span-1">
                      <FormLabel className="text-t-800 text-sm lg:text-base">
                        Reference<span className="text-primary"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[3.25rem] text-base p-4 text-t-700 placeholder:text-t-600 placeholder:text-sm placeholder:lg:text-base border border-[#f5f5f5] focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Enter a reference"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-normal" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="paymentDate"
                  render={({ field }) => (
                    <FormItem className="space-y-3 col-span-2 lg:col-span-1 flex flex-col justify-between">
                      <FormLabel className="text-t-800 text-sm lg:text-base">
                        Deposited Date<span className="text-primary"> *</span>
                      </FormLabel>
                      <Popover open={isOpen} onOpenChange={setIsOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className="justify-start font-normal h-[3.25rem] text-base p-4 text-t-600 
                                border-[#f5f5f5] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100 !mt-0"
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
                            onSelect={(e) => {
                              field.onChange(e),
                                setIsOpen(false)
                            }}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            fromYear={1900}
                            toYear={moment().year()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage className="font-normal !mt-0" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="attachment"
                  render={({ field }) => (
                    <FormItem className="space-y-3 col-span-2 lg:col-span-1">
                      <FormLabel className="text-t-800 text-sm lg:text-base">
                        Attachment<span className="text-primary"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          className="p-0 file:h-[3.25rem] file:mr-4 file:text-sm text-t-700
                            border-[#f5f5f5] placeholder:text-t-300 file:p-4 file:rounded-l-md file:border-0 file:bg-p-300 file:text-p-900"
                          accept=".png,.jpg,.jpeg"
                          {...field}
                          onChange={(event) => {
                            const { file, displayUrl } = getImageData(event);
                            field.onChange(event?.target?.value);
                            setFile(file);
                          }}
                        />
                      </FormControl>
                      <FormMessage className="font-normal" />
                    </FormItem>
                  )}
                />
              </div>

              {/* <FormField
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
                  /> */}
              <div className="grid">
                <Button type="submit" disabled={loading}>
                  {loading && <Loader className="w-6 h-6 animate-spin" />}
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManualBankingPage;
