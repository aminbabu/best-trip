import React, { useState } from "react";
import { ExportIcon, FilterIcon, SearchIcon } from "../icons/svgr";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { filterSchema } from "@/schema/zod";
import { useForm } from "react-hook-form";
import { Calendar } from "../ui/calendar";
import moment from "moment";

const PaymentTableFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStatus, setIsStatus] = useState("");
  const [isType, setIsType] = useState("");
  const [isDate, setIsDate] = useState("");
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [dateFrom, setDateFrom] = useState(1900);
  const [dateTo, setDateTo] = useState(moment().year());

  const form = useForm({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      status: "",
      type: "",
      date: "",
    },
  });

  const handleReset = () => {
    console.log("clicked reset");
    setIsStatus("");
    setIsType("");
    setIsDate("");
  };

  const handleStatus = (value) => {
    setIsStatus(value);
  };
  // console.log(isStatus);

  const onSubmit = (data) => {
    setIsOpen(false);
    console.log(data);
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-y-4 relative">
      <input
        className="bg-[#f9f9f9] pl-10 pr-4 py-2 outline-none rounded-lg text-sm placeholder:text-sm"
        placeholder="Search by ID"
        type="text"
        name="searchbar"
        id="searchabar"
      />
      <SearchIcon
        viewBox="0 0 33 33"
        className="w-4 h-4 absolute top-3 left-3.5 fill-slate-400"
      />
      <div className="inline-flex gap-2.5">
        <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
          <PopoverTrigger asChild>
            <Button className="px-3.5 py-2 lg:px-5 lg:py-2.5 gap-1.5 text-xs lg:text-sm bg-p-300 text-primary hover:text-white group">
              <FilterIcon
                className="w-3.5 h-3.5 fill-primary group-hover:fill-white"
                viewBox="0 0 512 512"
              />
              Filter
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-[325px] border-none p-0 drop-shadow-[0px_0px_50px_0px_rgba(82, 63, 105, 0.15)] shadow-2xl"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-16"
              >
                <div className="grid gap-[22px]">
                  <div className="space-y-2 px-[22px] pt-4">
                    <h4 className="font-semibold leading-none">
                      Filter Options
                    </h4>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="grid gap-8 px-[22px] pb-4">
                    <div className="space-y-3">
                      <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                          <FormItem className="space-y-4">
                            <FormLabel className="text-t-800 lg:text-base font-medium">
                              Select Type :
                            </FormLabel>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(isStatus);
                                handleStatus(value);
                              }}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0 border-0 bg-[#f9f9f9] text-t-600">
                                  <SelectValue placeholder="Select a type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="border-0">
                                <SelectItem
                                  className="focus:bg-p-300"
                                  value="cash"
                                >
                                  Cash
                                </SelectItem>
                                <SelectItem
                                  className="focus:bg-p-300"
                                  value="bank transfer"
                                >
                                  Bank transfer
                                </SelectItem>
                                <SelectItem
                                  className="focus:bg-p-300"
                                  value="bank deposit"
                                >
                                  Bank deposit
                                </SelectItem>
                                <SelectItem
                                  className="focus:bg-p-300"
                                  value="cheque"
                                >
                                  Cheque
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-3">
                      <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem className="space-y-4">
                            <FormLabel className="text-t-800 lg:text-base font-medium">
                              Details Type :
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0 border-0 bg-[#f9f9f9] text-t-600">
                                  <SelectValue placeholder="Select a type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="border-0">
                                <SelectItem
                                  className="focus:bg-p-300"
                                  value="nagad"
                                >
                                  Nagad
                                </SelectItem>
                                <SelectItem
                                  className="focus:bg-p-300"
                                  value="bkash"
                                >
                                  Bkash
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-3">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-t-800 lg:text-base font-medium">
                              Select Date Range :
                            </FormLabel>
                            <Popover
                              open={isOpenDate}
                              onOpenChange={setIsOpenDate}
                            >
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className="justify-start font-normal border-0 text-base px-3 py-2 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                  >
                                    {field.value ? (
                                      moment(field.value).format("DD-MMM-YYYY")
                                    ) : (
                                      <span className="text-sm leading-[1.72]">
                                        Pick a date
                                      </span>
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
                                    field.value //|| initialSelectedDate
                                  }
                                  captionLayout="dropdown-buttons"
                                  selected={moment(field.value).toDate()}
                                  onSelect={(value) => {
                                    field.onChange(value);
                                    setIsOpenDate(false);
                                  }}
                                  // disabled={(date) => handleDisableDate(date)}
                                  fromYear={dateFrom}
                                  toYear={dateTo}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex justify-end items-center gap-4 mt-2.5">
                      <Button
                        onClick={() => handleReset()}
                        type="button"
                        className="px-5 py-2.5 text-sm bg-[#f1f1f4] hover:bg-p-300 text-t-600 hover:text-primary"
                      >
                        Reset
                      </Button>

                      <Button className="px-5 py-2.5 text-sm" type="submit">
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default PaymentTableFilter;
