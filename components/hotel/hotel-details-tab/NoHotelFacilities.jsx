import { XBigIcon } from "@/components/icons/svgr";
import React from "react";

const NoHotelFacilities = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:max-w-[70%] mx-auto gap-4 py-16 lg:py-28 text-center text-t-600 lg:text-lg">
      <XBigIcon className="h-" />
      <p className="pt-[14px]">No facilities visible in their option</p>
      <p>Please contact support</p>
      <p>
        If you have any query please call us at : +088 708568965 or by sending
        mail to: support@beststrip.travel
      </p>
    </div>
  );
};

export default NoHotelFacilities;
