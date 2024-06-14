import React from "react";
import { Card, CardContent } from "../ui/card";

const FareDetailsCard = () => {
  return (
    <Card className="border-transparent relative overflow-hidden">
      <CardContent className="p-4 sm:p-5 lg:p-8 xl:leading-8 flex flex-col md:flex-row lg:items-center justify-between gap-6 lg:gap-9">
        <div className="w-full overflow-auto ">
          <h3 className="text-lg font-medium text-[#494949] pb-5">
            Fare Summary
          </h3>
          <div class="grid grid-rows-3 min-w-max lg:min-w-fit text-base text-center overflow-hidden text-t-800">
            <ul className="grid grid-cols-6 bg-[#FFEFEF]">
              <li className="flex items-center justify-center px-2.5 py-1.5">
                Passenger
              </li>
              <li className="flex items-center col-span-2 justify-center px-2.5 py-1.5 border border-white">
                Base Fare & Taxes
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-white">
                Markup
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-white">
                Pax Count
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5">
                Total Amount
              </li>
            </ul>
            <ul className="grid grid-cols-6 bg-white">
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                Adult
              </li>
              <li className="flex items-center col-span-2 justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                1,00,000
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                0
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                2
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                2,00,000
              </li>
            </ul>
            <ul className="grid grid-cols-6 bg-white">
              <li className="flex items-center justify-center col-span-4 px-2.5 py-1.5 border border-[#3D3D3D0D]">
                Sub-total
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                2
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                2,00,000
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FareDetailsCard;
