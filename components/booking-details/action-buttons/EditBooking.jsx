import React, { useState } from "react";
import {
  Dialog,
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
import { Button } from "@/components/ui/button";
import { FlightTokenIcon } from "@/components/icons/svgr";

const EditBooking = () => {
  const [isOpenEditBooking, setIsOpenEditBooking] = useState(false);

  const handleEditBooking = () => {
    setIsOpenEditBooking(!isOpenEditBooking);
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
        <DialogHeader className="shadow-sm p-5 rounded">
          <DialogTitle className="text-[18px] text-t-800 font-medium">
            Edit Booking
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 px-16 pt-8">
          <p>Flight Status</p>
          <Select>
            <SelectTrigger className="focus:ring-0 focus:ring-offset-0 border-0 bg-[#f9f9f9] text-base h-[44px]">
              <SelectValue placeholder="Pending" />
            </SelectTrigger>
            <SelectContent className="border-0 shadow">
              <SelectItem
                className="focus:bg-p-300 font-medium"
                value="pending"
              >
                Pending
              </SelectItem>
              <SelectItem
                className="focus:bg-p-300 font-medium"
                value="in-process"
              >
                In Process
              </SelectItem>
              <SelectItem
                className="focus:bg-p-300 font-medium"
                value="Confirmed"
              >
                Confirmed
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-4 px-16 pt-4">
          <p>Makkah Hotel Status</p>
          <Select>
            <SelectTrigger className="focus:ring-0 focus:ring-offset-0 border-0 bg-[#f9f9f9] text-base h-[44px]">
              <SelectValue placeholder="Pending" />
            </SelectTrigger>
            <SelectContent className="border-0 shadow">
              <SelectItem
                className="focus:bg-p-300 font-medium"
                value="pending"
              >
                Pending
              </SelectItem>
              <SelectItem
                className="focus:bg-p-300 font-medium"
                value="processing"
              >
                Processing
              </SelectItem>
              <SelectItem
                className="focus:bg-p-300 font-medium"
                value="Confirmed"
              >
                Confirmed
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-4 px-16 pt-4">
          <p>Madinah Hotel Status</p>
          <Select>
            <SelectTrigger className="focus:ring-0 focus:ring-offset-0 border-0 bg-[#f9f9f9] text-base h-[44px]">
              <SelectValue placeholder="Pending" />
            </SelectTrigger>
            <SelectContent className="border-0 shadow">
              <SelectItem
                className="focus:bg-p-300 font-medium"
                value="pending"
              >
                Pending
              </SelectItem>
              <SelectItem
                className="focus:bg-p-300 font-medium"
                value="processing"
              >
                Processing
              </SelectItem>
              <SelectItem
                className="focus:bg-p-300 font-medium"
                value="Confirmed"
              >
                Confirmed
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-4 px-16 pt-4">
          <p>Visa Status</p>
          <Select>
            <SelectTrigger className="focus:ring-0 focus:ring-offset-0 border-0 bg-[#f9f9f9] text-base h-[44px]">
              <SelectValue placeholder="Pending" />
            </SelectTrigger>
            <SelectContent className="border-0 shadow">
              <SelectItem
                className="focus:bg-p-300 font-medium"
                value="pending"
              >
                Pending
              </SelectItem>
              <SelectItem
                className="focus:bg-p-300 font-medium"
                value="processing"
              >
                Processing
              </SelectItem>
              <SelectItem
                className="focus:bg-p-300 font-medium"
                value="Confirmed"
              >
                Confirmed
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter className="gap-x-2 px-5 py-3 sm:justify-center mt-4 mb-8">
          <Button
            onClick={handleEditBooking}
            className="border-0 bg-[#f9f9f9] text-t-800 hover:bg-[#f9f9f9] py-2"
          >
            Discard
          </Button>
          <Button onClick={handleEditBooking} className="py-2" type="submit">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditBooking;
