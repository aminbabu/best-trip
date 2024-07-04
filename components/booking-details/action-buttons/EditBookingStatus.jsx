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
import { editBookingStatusSchema } from "@/schema/zod";
import { FlightTokenIcon } from "@/components/icons/svgr";
import Swal from "sweetalert2";

const EditBookingStatus = () => {
  const [isOpenBookingStatus, setIsOpenBookingStatus] = useState(false);

  const handleBookingStatusDialog = () => {
    setIsOpenBookingStatus(!isOpenBookingStatus);
  };

  const form = useForm({
    resolver: zodResolver(editBookingStatusSchema),
    defaultValues: {
      updated_booking_status: "",
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
      console.log(data);
      setIsOpenBookingStatus(false);
    }
    swalWithTailwindButtons.fire({
      icon: "success",
      text: "Your booking status is successfully updated",
    });
  };

  const handleCancel = () => {
    setIsOpenBookingStatus(false);

    swalWithTailwindButtons.fire({
      text: "Your booking status is not updated)",
      icon: "error",
    });
  };
  return (
    <Dialog
      className="bg-black/20"
      open={isOpenBookingStatus}
      onOpenChange={handleBookingStatusDialog}
    >
      <DialogTrigger asChild>
        <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
          <FlightTokenIcon /> Edit Booking Status
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] p-0">
        <DialogHeader className="shadow p-[27px] rounded">
          <DialogTitle className="text-[18px] text-t-800 font-medium">
            Edit Booking Status
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16">
            <div className="grid gap-4 px-5 lg:px-16 pt-8">
              <div className="">
                <FormField
                  control={form.control}
                  name="updated_booking_status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-t-800 lg:text-base font-normal">
                        Booking Status :
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
                            value="in-process"
                            selected
                          >
                            In Process
                          </SelectItem>
                          <SelectItem
                            className="focus:bg-p-300"
                            value="under-review"
                          >
                            Under Review
                          </SelectItem>
                          <SelectItem className="focus:bg-p-300" value="booked">
                            Booked
                          </SelectItem>
                          <SelectItem
                            className="focus:bg-p-300"
                            value="success"
                          >
                            Success
                          </SelectItem>
                          <SelectItem
                            className="focus:bg-p-300"
                            value="pending"
                          >
                            Pending
                          </SelectItem>
                          <SelectItem
                            className="focus:bg-p-300"
                            value="cenceled"
                          >
                            Canceled
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

export default EditBookingStatus;
