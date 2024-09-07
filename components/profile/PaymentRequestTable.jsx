"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import PaymentTablePagination from "./PaymentTablePagination";
import PaymentTableFilter from "./PaymentTableFilter";
import { usePathname } from "next/navigation";
import {
  paymentRequestTable,
} from "@/data/payment-tables";
import moment from "moment";
import Link from "next/link";

const PaymentRequestTable = ({ data, userData }) => {

  const [tableData, setTableData] = useState(paymentRequestTable);
  console.log(data);
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
                  <td ><Link href={`/booking-details/${item?._id}`} className="hover:text-red-500 ">{item?.refId}</Link></td>
                  <td >{item?.status}</td>
                  <td >{userData?.name || "N/A"}</td>
                  <td >{item?.paymentMethod}</td>
                  <td>{userData?.name}</td>
                  <td>{item?.amount}</td>
                  <td>{moment(item?.createdAt).format("MMM DD, YYYY")}</td>
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

export default PaymentRequestTable;
