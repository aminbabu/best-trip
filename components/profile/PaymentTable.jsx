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

const PaymentTable = () => {
  return (
    <Card className="border-transparent mb-8">
      <CardContent className="lg:p-10 space-y-7">
        <div className="flex flex-col lg:flex-row justify-between gap-y-4 relative">
          <input
            className="bg-[#f9f9f9] pl-10 pr-4 py-2 outline-none rounded-lg placeholder:text-sm"
            placeholder="Search umrah booking"
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
          <table class="w-full whitespace-nowrap text-sm">
            <thead>
              <tr>
                <th className="min-w-36">Ref. Number</th>
                <th className="min-w-36">Status</th>
                <th className="min-w-36">Customer</th>
                <th className="min-w-36">Type</th>
                <th className="min-w-36">Details</th>
                <th className="min-w-36">Amount</th>
                <th className="min-w-36">Created at</th>
                <th className="min-w-36">Receipt</th>
                <th className="min-w-36">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BF000000009</td>
                <td>Request</td>
                <td>Md. Irafnul Haque</td>
                <td>Bank Transfer</td>
                <td>Nagad</td>
                <td>1500 BDT</td>
                <td>14 Dec 2020, 8:43 pm</td>
                <td>View Receipt</td>
                <td>Actions</td>
              </tr>
              <tr>
                <td>BF000000009</td>
                <td>Request</td>
                <td>Md. Irafnul Haque</td>
                <td>Bank Transfer</td>
                <td>Nagad</td>
                <td>1500 BDT</td>
                <td>14 Dec 2020, 8:43 pm</td>
                <td>View Receipt</td>
                <td>Actions</td>
              </tr>
              <tr>
                <td>BF000000009</td>
                <td>Request</td>
                <td>Md. Irafnul Haque</td>
                <td>Bank Transfer</td>
                <td>Nagad</td>
                <td>1500 BDT</td>
                <td>14 Dec 2020, 8:43 pm</td>
                <td>View Receipt</td>
                <td>Actions</td>
              </tr>
              <tr>
                <td>BF000000009</td>
                <td>Request</td>
                <td>Md. Irafnul Haque</td>
                <td>Bank Transfer</td>
                <td>Nagad</td>
                <td>1500 BDT</td>
                <td>14 Dec 2020, 8:43 pm</td>
                <td>View Receipt</td>
                <td>Actions</td>
              </tr>
              <tr>
                <td>BF000000009</td>
                <td>Request</td>
                <td>Md. Irafnul Haque</td>
                <td>Bank Transfer</td>
                <td>Nagad</td>
                <td>1500 BDT</td>
                <td>14 Dec 2020, 8:43 pm</td>
                <td>View Receipt</td>
                <td>Actions</td>
              </tr>
              <tr>
                <td>BF000000009</td>
                <td>Request</td>
                <td>Md. Irafnul Haque</td>
                <td>Bank Transfer</td>
                <td>Nagad</td>
                <td>1500 BDT</td>
                <td>14 Dec 2020, 8:43 pm</td>
                <td>View Receipt</td>
                <td>Actions</td>
              </tr>
              <tr>
                <td>BF000000009</td>
                <td>Request</td>
                <td>Md. Irafnul Haque</td>
                <td>Bank Transfer</td>
                <td>Nagad</td>
                <td>1500 BDT</td>
                <td>14 Dec 2020, 8:43 pm</td>
                <td>View Receipt</td>
                <td>Actions</td>
              </tr>
              <tr>
                <td>BF000000009</td>
                <td>Request</td>
                <td>Md. Irafnul Haque</td>
                <td>Bank Transfer</td>
                <td>Nagad</td>
                <td>1500 BDT</td>
                <td>14 Dec 2020, 8:43 pm</td>
                <td>View Receipt</td>
                <td>Actions</td>
              </tr>
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
