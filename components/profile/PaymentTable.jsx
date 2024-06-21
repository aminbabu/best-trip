import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ExportIcon, FilterIcon, SearchIcon } from "../icons/svgr";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import PaymentTablePagination from "./PaymentTablePagination";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const PaymentTable = () => {
  return (
    <Card className="border-transparent mb-8">
      <CardContent className="lg:p-10 space-y-7">
        <div className="flex flex-col lg:flex-row justify-between gap-y-4 relative">
          <input
            className="bg-[#f9f9f9] pl-10 pr-4 py-2 outline-none rounded-lg placeholder:text-sm"
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
            <Button className="px-3.5 py-2 lg:px-5 lg:py-2.5 gap-1.5 text-xs lg:text-sm bg-p-300 text-primary hover:text-white group">
              <FilterIcon
                className="w-3.5 h-3.5 fill-primary group-hover:fill-white"
                viewBox="0 0 512 512"
              />
              Filter
            </Button>
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
        <div className="overflow-auto">
          <table class="w-full whitespace-nowrap text-sm text-t-600 font-normal ">
            <thead>
              <tr className="uppercase">
                <th className="min-w-36 font-medium">Ref. Number</th>
                <th className="min-w-36 font-medium">Status</th>
                <th className="min-w-36 font-medium">Customer</th>
                <th className="min-w-36 font-medium">Type</th>
                <th className="min-w-36 font-medium">Details</th>
                <th className="min-w-36 font-medium">Amount</th>
                <th className="min-w-36 font-medium">Created at</th>
                <th className="min-w-36 font-medium">Receipt</th>
                <th className="min-w-36 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {"abcdefghij".split("").map((row) => (
                <tr key={row} className="border-b border-dotted">
                  <td>BF000000009</td>
                  <td>
                    <span className="px-2.5 py-1 text-xs bg-blue-400 text-white rounded">
                      Request
                    </span>
                  </td>
                  <td>Md. Irafnul Haque</td>
                  <td>Bank Transfer</td>
                  <td>Nagad</td>
                  <td>1,500.00 BDT</td>
                  <td>14 Dec 2020, 8:43 pm</td>
                  <td>
                    <a
                      className="underline hover:no-underline hover:text-primary underline-offset-2"
                      href="#"
                    >
                      View Receipt
                    </a>
                  </td>
                  <td>
                    <Popover>
                      <PopoverTrigger>
                        <Button className="px-3 py-1.5 text-sm font-normal bg-p-300 text-t-600 hover:text-white rounded">
                          Actions
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        align={"start"}
                        className="w-36 text-xs p-4 border-none shadow-sm"
                      >
                        <ul className="space-y-3 text-t-600">
                          <li className="hover:bg-p-300 hover:text-primary px-2 py-2 rounded-sm">
                            Approved
                          </li>
                          <li className="hover:bg-p-300 hover:text-primary px-2 py-2 rounded-sm">
                            Rejected
                          </li>
                        </ul>
                      </PopoverContent>
                    </Popover>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <Select>
              <SelectTrigger className="w-[70px] py-0">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem selected value="10">
                  10
                </SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <PaymentTablePagination />
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentTable;
