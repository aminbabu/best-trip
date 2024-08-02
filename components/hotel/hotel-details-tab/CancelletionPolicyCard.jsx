import { BulbOnIcon } from "@/components/icons/svgr";
import React from "react";

const CancelletionPolicyCard = () => {
  return (
    <div className="space-y-6 w-full overflow-auto">
      <div className="w-full overflow-auto">
        <div className="grid grid-rows-3 min-w-max lg:min-w-fit text-sm overflow-hidden text-t-800">
          <ul className="grid grid-cols-3 bg-[#FFEFEF]">
            <li className="flex items-center col-span-1 px-5 py-4">
              Cancellation From
            </li>
            <li className="flex items-center col-span-1 px-5 py-4 border border-white">
              Cancellation To
            </li>
            <li className="flex items-center col-span-1 px-5 py-4 border border-white">
              Cancellation Charge
            </li>
          </ul>
          <ul className="grid grid-cols-3 bg-white">
            <li className="flex items-center col-span-1 px-4 py-2.5 border border-[#3D3D3D0D]">
              Sep 14, 2023 11:20 PM
            </li>
            <li className="flex items-center col-span-1 px-4 py-2.5 border border-[#3D3D3D0D]">
              Sep 14, 2023 11:20 PM
            </li>
            <li className="flex items-center col-span-1 px-4 py-2.5 border border-[#3D3D3D0D]">
              BDT 500
            </li>
          </ul>
          <ul className="grid grid-cols-3 bg-white">
            <li className="flex items-center col-span-1 px-4 py-2.5 border border-[#3D3D3D0D]">
              Sep 14, 2023 11:20 PM
            </li>
            <li className="flex items-center col-span-1 px-4 py-2.5 border border-[#3D3D3D0D]">
              Sep 14, 2023 11:20 PM
            </li>
            <li className="flex items-center col-span-1 px-4 py-2.5 border border-[#3D3D3D0D]">
              BDT 5,5000
            </li>
          </ul>
          <ul className="grid grid-cols-3 bg-white">
            <li className="flex items-center col-span-1 px-4 py-2.5 border border-[#3D3D3D0D]">
              Sep 14, 2023 11:20 PM
            </li>
            <li className="flex items-center col-span-1 px-4 py-2.5 border border-[#3D3D3D0D]">
              Sep 14, 2023 11:20 PM
            </li>
            <li className="flex items-center col-span-1 px-4 py-2.5 border border-[#3D3D3D0D]">
              BDT 1,00000
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center leading-7 gap-x-1.5 text-sm text-t-800 bg-p-300 rounded-sm p-2">
        <BulbOnIcon className="text-t-600 flex-shrink-0" />
        Cancellation fee depend on hotel policy, it may not be actual fee.
      </div>
    </div>
  );
};

export default CancelletionPolicyCard;
