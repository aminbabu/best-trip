import React from "react";
import { ExportIcon, FilterIcon, SearchIcon } from "../icons/svgr";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const PaymentTableFilter = () => {
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
        <Popover>
          <PopoverTrigger asChild>
            <Button className="px-3.5 py-2 lg:px-5 lg:py-2.5 gap-1.5 text-xs lg:text-sm bg-p-300 text-primary hover:text-white group">
              <FilterIcon
                className="w-3.5 h-3.5 fill-primary group-hover:fill-white"
                viewBox="0 0 512 512"
              />
              Filter
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-80 border-none p-0">
            <div className="grid gap-4">
              <div className="space-y-2 px-[22px] pt-4">
                <h4 className="font-semibold leading-none">Filter options</h4>
              </div>
              <hr className="border-gray-200" />
              <div className="grid gap-4 px-[22px] pb-4">
                <div className="space-y-3">
                  <Label htmlFor="width" className="text-base">
                    Select status :
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0 border-0 bg-[#f1f1f4] text-t-600">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="request">Request</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="width" className="text-base">
                    Select status :
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0 border-0 bg-[#f1f1f4] text-t-600">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="request">Request</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="width" className="text-base">
                    Select status :
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0 border-0 bg-[#f1f1f4] text-t-600">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="request">Request</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end items-center gap-4">
                  <Button className="px-5 py-2.5 bg-[#f1f1f4] hover:bg-p-300 text-t-600 hover:text-primary">
                    Reset
                  </Button>
                  <Button className="px-5 py-2.5">Apply</Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Button className="px-3.5 py-2 lg:px-5 lg:py-2.5 gap-1.5 text-xs lg:text-sm bg-p-300 text-primary hover:text-white group">
          <ExportIcon
            className="w-3.5 h-3.5 fill-primary group-hover:fill-white"
            viewBox="0 0 512 512"
            fill="#f70207"
          />{" "}
          Export
        </Button>
      </div>
    </div>
  );
};

export default PaymentTableFilter;
