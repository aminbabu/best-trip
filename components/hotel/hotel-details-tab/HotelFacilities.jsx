import { TickIcon } from "@/components/icons/svgr";
import { hotelFacilities } from "@/data/hotel";
import React from "react";
import NoHotelFacilities from "./NoHotelFacilities";

const HotelFacilities = () => {
  return (
    <div className="pt-5 xl:pt-[30px] px-6 xl:px-[34px] pb-8 xl:pb-10 space-y-[30px]">
      {hotelFacilities.length === 0 ? (
        <NoHotelFacilities />
      ) : (
        <div>
          <h4 className="text-base xl:text-lg text-t-800 font-medium leading-relaxed mb-3.5">
            Hotel Facilities
          </h4>
          <div className="mt-5 mb-10">
            <ul className="gap-4 grid grid-cols-2 max-h-[456px] overflow-y-auto">
              {hotelFacilities.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal col-span-2 md:col-span-1"
                >
                  <TickIcon fill="#F50308" className="mt-1 flex-shrink-0" />
                  <span>{item.req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelFacilities;
