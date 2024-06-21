import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ExportIcon, FilterIcon, SearchIcon } from "../icons/svgr";
import PaymentTablePagination from "./PaymentTablePagination";
import PaymentTableFilter from "./PaymentTableFilter";

const PaymentTable = () => {
  return (
    <Card className="border-transparent mb-8">
      <CardContent className="lg:p-10 space-y-7">
        <PaymentTableFilter />
        <div className="overflow-auto scrollbar-thin scrollbar-thumb-[#CFD1D4] scrollbar-track-[#F4F4F4]">
          {/* <div className="px-5 py-4 bg-p-300 rounded">
            <p>No Records!..</p>
          </div> */}
          <table class="w-full whitespace-nowrap text-t-600 text-sm font-medium">
            <thead>
              <tr className="uppercase border-b border-dotted border-[#f1f1f4]">
                <th className="min-w-36 font-semibold">Ref. Number</th>
                <th className="min-w-36 font-semibold">Status</th>
                <th className="min-w-36 font-semibold">Type</th>
                <th className="min-w-36 font-semibold">Amount</th>
                <th className="min-w-36 font-semibold">Created at</th>
                <th className="min-w-36 font-semibold text-right">Reason</th>
              </tr>
            </thead>
            <tbody>
              {"abcdefghij".split("").map((row) => (
                <tr
                  key={row}
                  className="border-b border-dotted border-[#f1f1f4] text-sm lg:text-base font-normal"
                >
                  <td>BF000000009</td>
                  <td>
                    <span className="px-2.5 py-1 text-xs bg-blue-400 text-white rounded">
                      Request
                    </span>
                  </td>
                  <td>Bank Transfer</td>
                  <td>1,500.00 BDT</td>
                  <td>14 Dec 2020, 8:43 pm</td>
                  <td className="text-right">NA</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PaymentTablePagination />
      </CardContent>
    </Card>
  );
};

export default PaymentTable;
