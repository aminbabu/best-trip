import { BulbOnIcon } from "@/components/icons/svgr";
import InfoTable from "@/components/umrah/InfoTable";
import React from "react";

const table = {
  header: [
    {
      title: "Sector",
      className:
        "text-t-900 text-left font-normal h-auto px-6 py-3 border-r border-r-[#f5f5f5] last:border-r-0 text-xs",
    },
    {
      title: "Checkin Baggage",
      className:
        "text-t-900 text-left font-normal h-auto px-6 py-3 border-r border-r-[#f5f5f5] last:border-r-0 text-xs",
    },
    {
      title: "Cabin Baggage",
      className:
        "text-t-900 text-left font-normal h-auto px-6 py-3 border-r border-r-[#f5f5f5] last:border-r-0 text-xs",
    },
  ],
  body: [
    [
      {
        cell: "DAC - CGP",
        className:
          "px-6 py-5 border-r border-r-[#f5f5f5] last:borer-r-0 text-xs text-t-600",
      },
      {
        cell: "Adult : 30KG, Children : 30KG, Infant : 10KG",
        className:
          "px-6 py-5 border-r border-r-[#f5f5f5] last:borer-r-0 text-xs text-t-600",
      },
      {
        cell: "Adult : 7KG, Children : 7KG, Infant : 0KG",
        className:
          "px-6 py-5 border-r border-r-[#f5f5f5] last:borer-r-0 text-xs text-t-600",
      },
    ],
    [
      {
        cell: "CGP - DAC",
        className:
          "px-6 py-5 border-r border-r-[#f5f5f5] last:borer-r-0 text-xs text-t-600",
      },
      {
        cell: "Adult : 30KG, Children : 30KG, Infant : 10KG",
        className:
          "px-6 py-5 border-r border-r-[#f5f5f5] last:borer-r-0 text-xs text-t-600",
      },
      {
        cell: "Adult : 7KG, Children : 7KG, Infant : 0KG",
        className:
          "px-6 py-5 border-r border-r-[#f5f5f5] last:borer-r-0 text-xs text-t-600",
      },
    ],
    [
      {
        cell: "DAC - CGP",
        className:
          "px-6 py-5 border-r border-r-[#f5f5f5] last:borer-r-0 text-xs text-t-600",
      },
      {
        cell: "Adult : 30KG, Children : 30KG, Infant : 10KG",
        className:
          "px-6 py-5 border-r border-r-[#f5f5f5] last:borer-r-0 text-xs text-t-600",
      },
      {
        cell: "Adult : 7KG, Children : 7KG, Infant : 0KG",
        className:
          "px-6 py-5 border-r border-r-[#f5f5f5] last:borer-r-0 text-xs text-t-600",
      },
    ],
  ],
};

const BaggageSummary = () => {
  return (
    <div className="px-10 py-6 space-y-9">
      <div>
        <InfoTable table={table} />
      </div>
      <div className="flex items-center leading-relaxed gap-x-2.5 text-xs text-t-800 bg-p-300 rounded-sm p-2">
        <BulbOnIcon className="text-t-600 flex-shrink-0" />
        Add baggage in the next step of this booking to lock down the best rates
      </div>
    </div>
  );
};

export default BaggageSummary;
