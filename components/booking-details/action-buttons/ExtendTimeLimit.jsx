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

const ExtendTimeLimit = () => {
  const [isOpenExtendTimeLimit, setIsOpenExtendTimeLimit] = useState(false);

  const handleExtendTimeLimit = () => {
    setIsOpenExtendTimeLimit(!isOpenExtendTimeLimit);
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
          <p>Previous Booking Time Limit</p>
          <div>12 July 2024 at 22:00</div>
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
      </DialogContent>
    </Dialog>
  );
};

export default ExtendTimeLimit;
