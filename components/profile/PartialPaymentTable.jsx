"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import PaymentTablePagination from "./PaymentTablePagination";
import PaymentTableFilter from "./PaymentTableFilter";
import { usePathname } from "next/navigation";
import {
  partialPaymentTable,
} from "@/data/payment-tables";
import moment from "moment";
import Link from "next/link";

const PartialPaymentTable = ({ data }) => {

  const pathname = usePathname();
  const [tableData, setTableData] = useState(partialPaymentTable);
  return (
    <Card className="border-transparent mb-8 drop-shadow-[ 0px_3px_4px_0px_rgba(0, 0, 0, 0.03)] ">
      <CardContent className="lg:p-10 space-y-7">
        <div>
          <h1 className="text-t-800 font-medium text-xl mb-8">
            {tableData?.title}
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
                {tableData?.tableHeads?.map((head) => (
                  <th key={head.id} className="min-w-36 font-semibold">
                    {head.item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((item, ind) => (
                <tr key={ind} className="border-b border-dashed border-[#f1f1f4] text-sm lg:text-base font-normal [&>*:last-child]:text-right">
                  {console.log(item)}
                  <td >{item?.serialNumber || "N/A"}</td>
                  <td >{item?.customer?.name}</td>
                  <td className="hover:text-red-500 ">{item?.bookingDetails?.bookingRefId}</td>
                  <td >{"Partial Payment"}</td>
                  <td >{moment(item?.bookingDetails?.createdAt).format("MMM DD, YYYY")}</td>
                  <td >{moment(item?.bookingDetails?.journeyDate).format("MMM DD, YYYY")}</td>
                  <td>{moment(item?.partialPaymentExpiryDate).format("MMM DD, YYYY")}</td>
                  <td>{item?.totalAmount.toLocaleString()}</td>
                  <td>{item?.paidAmount.toLocaleString()}</td>
                  <td>{item?.partialPaymentRestAmount.toLocaleString()}</td>
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

export default PartialPaymentTable;
