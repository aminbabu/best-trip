"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ExportIcon, FilterIcon, SearchIcon } from "../icons/svgr";
import PaymentTablePagination from "./PaymentTablePagination";
import PaymentTableFilter from "./PaymentTableFilter";
import { usePathname } from "next/navigation";
import {
  bestPayTable,
  bookingListTable,
  generalLedgerTable,
  partialPaymentTable,
} from "@/data/payment-tables";

const PaymentTable = () => {
  const pathname = usePathname();
  const [tableData, setTableData] = useState(bestPayTable);

  useEffect(() => {
    if (pathname == "/profile/booking") {
      setTableData(bookingListTable);
    }
    if (pathname == "/profile/partial-payment-bookings") {
      setTableData(partialPaymentTable);
    }
    if (pathname == "/profile/general-ledger") {
      setTableData(generalLedgerTable);
    }
  }, [pathname]);

  return (
    <Card className="border-transparent mb-8">
      <CardContent className="lg:p-10 space-y-7">
        <div>
          <h1 className="text-t-800 font-medium text-xl mb-8">
            {tableData.title}
          </h1>
        </div>
        <PaymentTableFilter />
        <div className="overflow-auto scrollbar-thin scrollbar-thumb-[#CFD1D4] scrollbar-track-[#F4F4F4]">
          {/* <div className="px-5 py-4 bg-p-300 rounded">
            <p>No Records!..</p>
          </div> */}
          <table className="w-full whitespace-nowrap text-t-600 text-sm font-normal">
            <thead>
              <tr className="uppercase border-b border-dashed border-[#f1f1f4] [&>*:last-child]:text-right">
                {tableData.tableHeads.map((head) => (
                  <th key={head.id} className="min-w-36 font-semibold">
                    {head.item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {"abcdefghij".split("").map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-dashed border-[#f1f1f4] text-sm lg:text-base font-normal [&>*:last-child]:text-right"
                >
                  {tableData.tableRows.map((rowData) => (
                    <td key={rowData.id}>{rowData.item}</td>
                  ))}
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
