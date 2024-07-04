import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editBookingSchema, editBookingStatusSchema } from "@/schema/zod";
import { FlightTokenIcon } from "@/components/icons/svgr";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";

const EditBooking = () => {
  const [isOpenEditBooking, setIsOpenEditBooking] = useState(false);

  const handleEditBooking = () => {
    setIsOpenEditBooking(!isOpenEditBooking);
  };

  const form = useForm({
    resolver: zodResolver(editBookingSchema),
    defaultValues: {
      flight_status: "",
      makkah_hotel_status: "",
      madinah_hotel_status: "",
      visa_status: "",
    },
  });

  const swalWithTailwindButtons = Swal.mixin({
    customClass: {
      confirmButton:
        "bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded mr-3 text-sm",
      cancelButton:
        "bg-slate-50 hover:bg-slate-100 text-t-800 px-4 py-2 rounded text-sm",
      text: "!text-[14px] text-p-600 text-t-800",
    },
    buttonsStyling: false,
  });

  const onSubmit = (data) => {
    if (data) {
      setIsOpenEditBooking(false);
      console.log(data);
    }
    console.log(data);
    swalWithTailwindButtons.fire({
      icon: "success",
      text: "Your booking is successfully updated",
    });
  };

  const handleCancel = () => {
    setIsOpenEditBooking(false);

    swalWithTailwindButtons.fire({
      text: "Your booking is not updated)",
      icon: "error",
    });
  };

  return (
    <Dialog
      className="bg-black/20"
      open={isOpenEditBooking}
      onOpenChange={handleEditBooking}
    >
      <DialogTrigger asChild>
        <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
          <FlightTokenIcon /> Edit Booking
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] p-0">
        <DialogHeader className="shadow p-[27px] rounded">
          <DialogTitle className="text-[18px] text-t-800 font-medium">
            Edit Booking
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16">
            <div className="grid gap-4 px-5 lg:px-16 pt-8">
              <div className="">
                <FormField
                  control={form.control}
                  name="flight_status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Flight Status :
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="focus:ring-0 focus:ring-offset-0 border-0 bg-[#f9f9f9] text-base h-[44px]">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border-0 shadow">
                          <SelectItem
                            className="focus:bg-p-300"
                            value="pending"
                          >
                            Pending
                          </SelectItem>
                          <SelectItem
                            className="focus:bg-p-300"
                            value="in-process"
                          >
                            In Process
                          </SelectItem>
                          <SelectItem
                            className="focus:bg-p-300"
                            value="confirmed"
                          >
                            Confirmed
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="">
                <FormField
                  control={form.control}
                  name="makkah_hotel_status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Makkah Hotel Status :
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="focus:ring-0 focus:ring-offset-0 border-0 bg-[#f9f9f9] text-base h-[44px]">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border-0 shadow">
                          <SelectItem
                            className="focus:bg-p-300"
                            value="pending"
                          >
                            Pending
                          </SelectItem>
                          <SelectItem
                            className="focus:bg-p-300"
                            value="in-process"
                          >
                            In Process
                          </SelectItem>
                          <SelectItem
                            className="focus:bg-p-300"
                            value="confirmed"
                          >
                            Confirmed
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="">
                <FormField
                  control={form.control}
                  name="madinah_hotel_status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Madinah Hotel Status :
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="focus:ring-0 focus:ring-offset-0 border-0 bg-[#f9f9f9] text-base h-[44px]">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border-0 shadow">
                          <SelectItem
                            className="focus:bg-p-300"
                            value="pending"
                          >
                            Pending
                          </SelectItem>
                          <SelectItem
                            className="focus:bg-p-300"
                            value="in-process"
                          >
                            In Process
                          </SelectItem>
                          <SelectItem
                            className="focus:bg-p-300"
                            value="confirmed"
                          >
                            Confirmed
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="">
                <FormField
                  control={form.control}
                  name="visa_status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Visa Status :
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="focus:ring-0 focus:ring-offset-0 border-0 bg-[#f9f9f9] text-base h-[44px]">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border-0 shadow">
                          <SelectItem
                            className="focus:bg-p-300"
                            value="pending"
                          >
                            Pending
                          </SelectItem>
                          <SelectItem
                            className="focus:bg-p-300"
                            value="in-process"
                          >
                            In Process
                          </SelectItem>
                          <SelectItem
                            className="focus:bg-p-300"
                            value="confirmed"
                          >
                            Confirmed
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter className="gap-2 px-5 py-3 sm:justify-center mt-4 mb-8">
                <Button
                  onClick={handleCancel}
                  type="button"
                  className="border-0 bg-[#f9f9f9] text-t-800 hover:bg-[#f9f9f9] py-2 font-normal"
                >
                  Discard
                </Button>
                <Button className="py-2 font-normal" type="submit">
                  Submit
                </Button>
              </DialogFooter>{" "}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBooking;
