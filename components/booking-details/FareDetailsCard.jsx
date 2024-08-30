import React from "react";
import { Card, CardContent } from "../ui/card";

const FareDetailsCard = ({ bookingData }) => {
  const adultTravelers = bookingData?.travelers?.filter((traveler) => traveler?.travelerType === "adult")
  const childTravelers = bookingData?.travelers?.filter((traveler) => traveler?.travelerType === "child")
  const infantTravelers = bookingData?.travelers?.filter((traveler) => traveler?.travelerType === "infant")
  const subtotal = Number(bookingData?.umrahPackage?.adultPrice) * adultTravelers?.length + Number(bookingData?.umrahPackage?.childPrice) * childTravelers?.length + Number(bookingData?.umrahPackage?.infantPrice) * infantTravelers?.length
  return (
    <Card className="border-transparent relative overflow-hidden">
      <CardContent className="p-4 sm:p-5 lg:p-8 xl:leading-8 flex flex-col justify-between">
        <h3 className="text-lg font-medium text-[#494949] pb-5 text-left">
          Fare Summary
        </h3>
        <div className="w-full overflow-auto">
          <div className="grid grid-rows-3 min-w-max lg:min-w-fit text-base text-center overflow-hidden text-t-800">
            <ul className="grid grid-cols-7 bg-[#FFEFEF]">
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
              <li className="flex col-span-2 items-center justify-center px-2.5 py-1.5">
                Total Amount
              </li>
            </ul>
           {adultTravelers?.length > 0 && <ul className="grid grid-cols-7 bg-white">
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                Adult
              </li>
              <li className="flex items-center col-span-2 justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                {bookingData?.umrahPackage?.adultPrice}
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                0
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                {adultTravelers?.length}
              </li>
              <li className="flex items-center justify-center col-span-2 px-2.5 py-1.5 border border-[#3D3D3D0D]">
                {adultTravelers?.length * bookingData?.umrahPackage?.adultPrice || 0}
              </li>
            </ul>}
           {childTravelers?.length > 0 && <ul className="grid grid-cols-7 bg-white">
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                Child
              </li>
              <li className="flex items-center col-span-2 justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                {bookingData?.umrahPackage?.childPrice}
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                0
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                {childTravelers?.length}
              </li>
              <li className="flex items-center justify-center col-span-2 px-2.5 py-1.5 border border-[#3D3D3D0D]">
                {childTravelers?.length * bookingData?.umrahPackage?.childPrice || 0}
              </li>
            </ul>}
           {infantTravelers?.length > 0 && <ul className="grid grid-cols-7 bg-white">
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                Infant
              </li>
              <li className="flex items-center col-span-2 justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                {bookingData?.umrahPackage?.infantPrice}
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                0
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                {infantTravelers?.length}
              </li>
              <li className="flex items-center justify-center col-span-2 px-2.5 py-1.5 border border-[#3D3D3D0D]">
                {adultTravelers?.length * bookingData?.umrahPackage?.infantPrice || 0}
              </li>
            </ul>}
            <ul className="grid grid-cols-7 bg-white">
              <li className="flex items-center justify-center col-span-4 px-2.5 py-1.5 border border-[#3D3D3D0D]">
                Sub-total
              </li>
              <li className="flex items-center justify-center px-2.5 py-1.5 border border-[#3D3D3D0D]">
                {bookingData?.travelers?.length}
              </li>
              <li className="flex items-center justify-center col-span-2 px-2.5 py-1.5 border border-[#3D3D3D0D]">
                {subtotal || 0}
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FareDetailsCard;
