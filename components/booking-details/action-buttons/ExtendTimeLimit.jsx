import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FlightTokenIcon } from "@/components/icons/svgr";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  extendTimeLimitSchema,
  ticketNumberSchema,
  travellerSchema,
} from "@/schema/zod";
import moment from "moment";

const ExtendTimeLimit = () => {
  const [isOpenExtendTimeLimit, setIsOpenExtendTimeLimit] = useState(false);
  const [dobFrom, setDobFrom] = useState(1900);
  const [dobTo, setDobTo] = useState(moment().year());
  const [isOpenNewDate, setIsOpenNewDate] = useState(false);

  const today = new Date();

  let initialSelectedDate = moment().toDate();

  const handleExtendTimeLimit = () => {
    setIsOpenExtendTimeLimit(!isOpenExtendTimeLimit);
  };

  const handleDisableDate = (date) => {
    return date < today;
  };

  const form = useForm({
    resolver: zodResolver(extendTimeLimitSchema),
    defaultValues: {
      new_time: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Dialog
      className="bg-black/20"
      open={isOpenExtendTimeLimit}
      onOpenChange={handleExtendTimeLimit}
    >
      <DialogTrigger asChild>
        <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
          <FlightTokenIcon /> Extend Time Limit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] p-0">
        <DialogHeader className="shadow-sm p-5 rounded">
          <DialogTitle className="text-[18px] text-t-800 font-medium">
            Extend Time Limit
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 px-16 pt-8">
          <p>Previous Time Limit</p>
          <div>12 July 2024 at 22:00</div>
        </div>
        <div className="grid gap-4 px-16 pt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-full overflow-auto">
                <div className="grid min-w-max lg:min-w-fit text-base text-left overflow-hidden text-t-800">
                  <FormField
                    control={form.control}
                    name="new_time"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-t-800 lg:text-base font-normal">
                          New Time Limit
                        </FormLabel>
                        <Popover
                          open={isOpenNewDate}
                          onOpenChange={setIsOpenNewDate}
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
                              defaultMonth={field.value || initialSelectedDate}
                              captionLayout="dropdown-buttons"
                              selected={moment(field.value).toDate()}
                              onSelect={(value) => {
                                field.onChange(value);
                                setIsOpenNewDate(false);
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
              </div>
              <DialogFooter className="gap-x-2 px-5 py-3 sm:justify-center mt-4 mb-8">
                <Button
                  onClick={handleExtendTimeLimit}
                  className="bg-slate-50 text-t-800 hover:bg-slate-100 border py-2"
                >
                  Discard
                </Button>
                <Button
                  onClick={handleExtendTimeLimit}
                  className="py-2"
                  type="submit"
                >
                  Submit
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
        {/* <DialogFooter className="gap-x-2 px-5 py-3 sm:justify-center mt-4 mb-8">
          <Button
            onClick={handleExtendTimeLimit}
            className="bg-slate-50 text-t-800 hover:bg-slate-100 border py-2"
          >
            Discard
          </Button>
          <Button
            onClick={handleExtendTimeLimit}
            className="py-2"
            type="submit"
          >
            Submit
          </Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default ExtendTimeLimit;
