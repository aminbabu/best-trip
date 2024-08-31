import React from "react";
import { BulbOnIcon } from "@/components/icons/svgr";

const FareSummary = () => {
  return (
    <div className="px-10 py-6 space-y-9">
      <div className="w-full overflow-auto">
        <div className="grid grid-rows-3 min-w-max lg:min-w-fit text-xs text-center overflow-hidden text-t-800">
          <ul className="grid grid-cols-10 text-t-900">
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              Traveller Type
            </li>
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              Base Fare
            </li>
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              Taxes + Others
            </li>
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              Per Pax
            </li>
            <li className="flex col-span-2 items-center justify-start px-3 py-2">
              Total
            </li>
          </ul>
          <ul className="grid grid-cols-10 bg-white text-t-600">
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              Adult
            </li>
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              BDT 3,000
            </li>
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              BDT 925
            </li>
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              BDT 3,925 X 1
            </li>
            <li className="flex items-center justify-start col-span-2 px-3 py-2">
              BDT 3,925
            </li>
          </ul>
          <ul className="grid grid-cols-10 bg-white text-t-600">
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              Adult
            </li>
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              BDT 3,000
            </li>
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              BDT 925
            </li>
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              BDT 3,925 X 1
            </li>
            <li className="flex items-center justify-start col-span-2 px-3 py-2">
              BDT 3,925
            </li>
          </ul>
          <ul className="grid grid-cols-10 bg-white text-t-600">
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              Adult
            </li>
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              BDT 3,000
            </li>
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              BDT 925
            </li>
            <li className="flex items-center col-span-2 justify-start px-3 py-2">
              BDT 3,925 X 1
            </li>
            <li className="flex items-center justify-start col-span-2 px-3 py-2">
              BDT 3,925
            </li>
          </ul>
          <ul className="grid grid-cols-10 bg-white text-t-900">
            <li className="col-span-6"></li>
            <li className="flex items-center justify-start col-span-2 px-3 py-2">
              Sub Total (3 pax )
            </li>
            <li className="flex items-center justify-start col-span-2 px-3 py-2">
              BDT 9,575
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center leading-relaxed gap-x-2.5 text-xs text-t-800 bg-p-300 rounded-sm p-2">
        <BulbOnIcon className="text-t-600 flex-shrink-0" />
        The airline fees are continuously changing. Best Trip doesn&apos;t
        certify the fees/price shown above
      </div>
    </div>
  );
};

export default FareSummary;
