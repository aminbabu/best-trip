import React from "react";

const FareDetailsCard = () => {
  return (
    <div className="w-full overflow-auto ">
      <div class="grid grid-rows-3 min-w-max lg:min-w-fit text-sm text-center overflow-hidden">
        <ul className="grid grid-cols-6 bg-[#FFEFEF]">
          <li className="flex items-center justify-center px-2.5 py-1">
            Passenger
          </li>
          <li className="flex items-center justify-center px-2.5 py-1 border border-white">
            Base Fare & Taxes
          </li>
          <li className="flex items-center justify-center px-2.5 py-1 border border-white">
            Service Fee
          </li>
          <li className="flex items-center justify-center px-2.5 py-1 border border-white">
            Markup
          </li>
          <li className="flex items-center justify-center px-2.5 py-1 border border-white">
            Pax Count
          </li>
          <li className="flex items-center justify-center px-2.5 py-1">
            Total Amount
          </li>
        </ul>
        <ul className="grid grid-cols-6">
          <li className="flex items-center justify-center px-2.5 py-1 border border-[#3D3D3D0D]">
            Adult
          </li>
          <li className="flex items-center justify-center px-2.5 py-1 border border-[#3D3D3D0D]">
            1,00,000
          </li>
          <li className="flex items-center justify-center px-2.5 py-1 border border-[#3D3D3D0D]">
            0
          </li>
          <li className="flex items-center justify-center px-2.5 py-1 border border-[#3D3D3D0D]">
            0
          </li>
          <li className="flex items-center justify-center px-2.5 py-1 border border-[#3D3D3D0D]">
            2
          </li>
          <li className="flex items-center justify-center px-2.5 py-1 border border-[#3D3D3D0D]">
            2,00,000
          </li>
        </ul>
        <ul className="grid grid-cols-6">
          <li className="flex items-center justify-center col-span-4 px-2.5 py-1 border border-[#3D3D3D0D]">
            Sub-total
          </li>
          <li className="flex items-center justify-center px-2.5 py-1 border border-[#3D3D3D0D]">
            2
          </li>
          <li className="flex items-center justify-center px-2.5 py-1 border border-[#3D3D3D0D]">
            2,00,000
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FareDetailsCard;
