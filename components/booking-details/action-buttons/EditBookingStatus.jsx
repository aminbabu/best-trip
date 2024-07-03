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
import { FlightTokenIcon } from "@/components/icons/svgr";

const EditBookingStatus = () => {
  const [isOpenBookingStatus, setIsOpenBookingStatus] = useState(false);

  const handleBookingStatusDialog = () => {
    setIsOpenBookingStatus(!isOpenBookingStatus);
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
        <DialogHeader className="shadow-sm p-5 rounded">
          <DialogTitle className="text-[18px] text-t-800 font-medium">
            Edit Booking Status
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 px-16 pt-8">
          {/* <Card className="p-6 drop-shadow-md border-0"> */}
          <p>Booking Status :</p>
          <Select>
            <SelectTrigger className="focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="focus:bg-p-300" value="in-process">
                In Process
              </SelectItem>
              <SelectItem className="focus:bg-p-300" value="under-review">
                Under Review
              </SelectItem>
              <SelectItem className="focus:bg-p-300" value="booked">
                Booked
              </SelectItem>
              <SelectItem className="focus:bg-p-300" value="success">
                Success
              </SelectItem>
              <SelectItem className="focus:bg-p-300" value="pending">
                Pending
              </SelectItem>
              <SelectItem className="focus:bg-p-300" value="cenceled">
                Canceled
              </SelectItem>
            </SelectContent>
          </Select>
          {/* </Card> */}
        </div>
        <DialogFooter className="gap-x-2 px-5 py-3 sm:justify-center mt-4 mb-8">
          <Button
            onClick={handleBookingStatusDialog}
            className="bg-slate-50 text-t-800 hover:bg-slate-100 border py-2"
          >
            Discard
          </Button>
          <Button
            onClick={handleBookingStatusDialog}
            className="py-2"
            type="submit"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditBookingStatus;
