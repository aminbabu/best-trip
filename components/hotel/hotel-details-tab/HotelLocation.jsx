"use client";

import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ArrowIcon } from "@/components/icons/svgr";

const HotelLocation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="pt-5 xl:pt-[30px] px-6 xl:px-[34px] pb-8 xl:pb-10">
      <div>
        <h4 className="text-sm xl:text-base text-t-800 font-medium leading-relaxed mb-[26px]">
          Hotel location
        </h4>
        <p className="text-sm xl:text-base text-t-600 font-normal leading-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has typesetting, remaining essentially
          unchanged. It was popularised in the 1960.
        </p>
      </div>
      <div className="mt-5 lg:mt-[30px]">
        <Collapsible open={isOpen} className="grid space-y-6">
          <CollapsibleTrigger
            className="flex items-center lg:gap-[10px] justify-self-end text-primary"
            onClick={toggleCollapsible}
          >
            {isOpen ? "Hide Map" : "View Map"}
            <ArrowIcon className={` ${isOpen ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="justify-self-end w-full">
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14903546.801014509!2d45.07408335!3d24.222141999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2sbd!4v1717065919590!5m2!1sen!2sbd"
              height="353"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default HotelLocation;
