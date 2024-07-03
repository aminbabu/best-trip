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

const EditSupplier = () => {
  const [isOpenSupplierDialog, setIsOpenSupplierDialog] = useState(false);

  const handleSupplierDialog = () => {
    setIsOpenSupplierDialog(!isOpenSupplierDialog);
  };

  return (
    <Dialog
      className="bg-black/20"
      open={isOpenSupplierDialog}
      onOpenChange={handleSupplierDialog}
    >
      <DialogTrigger asChild>
        <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
          <FlightTokenIcon /> Edit Supplier
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] p-0">
        <DialogHeader className="shadow p-[27px] rounded">
          <DialogTitle className="text-[18px] text-t-800 font-medium">
            Update Issuing Supplier
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 px-16 pt-8">
          <p>Select Vendor</p>
          <Select>
            <SelectTrigger className="focus:ring-0 focus:ring-offset-0 border-0 bg-[#f9f9f9] text-base h-[44px]">
              <SelectValue placeholder="Select Vendor" />
            </SelectTrigger>
            <SelectContent className="border-0 shadow">
              <SelectItem className="focus:bg-p-300" value="default">
                Best Trip
              </SelectItem>
              <SelectItem className="focus:bg-p-300" value="bangla">
                US - Bangla Airlines
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter className="gap-x-2 px-5 py-3 sm:justify-center mt-4 mb-8">
          <Button
            onClick={handleSupplierDialog}
            className="border-0 bg-[#f9f9f9] text-t-800 hover:bg-[#f9f9f9] py-2 font-normal"
          >
            Discard
          </Button>
          <Button
            onClick={handleSupplierDialog}
            className="py-2 font-normal"
            type="submit"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditSupplier;
