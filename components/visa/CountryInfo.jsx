"use client";

import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ArrowIcon } from "../icons/svgr";
import Notice from "../global/Notice";

const CountryInfo = ({ countryInfo }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="pt-5 xl:pt-[30px] px-6 xl:px-[34px] pb-8 xl:pb-10">
      <div>
        <h4 className="text-sm xl:text-base text-t-800 font-medium leading-relaxed mb-[26px]">
          Country Information
        </h4>
        <p className="text-sm xl:text-base text-t-800 font-normal leading-normal">
          {countryInfo.intro}
        </p>
      </div>
      <div className="grid grid-cols-12 justify-between mt-[30px] mb-10 gap-5">
        <div className="col-span-12 md:col-span-4">
          <ul className="space-y-4">
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                Country :{" "}
                <span className="text-t-600">{countryInfo.countryName}</span>
              </span>
            </li>
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                Capital :{" "}
                <span className="text-t-600">{countryInfo.capital}</span>
              </span>
            </li>
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                King : <span className="text-t-600">{countryInfo.king}</span>
              </span>
            </li>
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                Currency : <span className="text-t-600">Saudi Riyal</span>
              </span>
            </li>
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                Government :{" "}
                <span className="text-t-600">
                  Monarchy, Absolute monarchy, Unitary state, Islamic state
                </span>
              </span>
            </li>
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                Population :{" "}
                <span className="text-t-600">
                  35.95 million (2021) World Bank
                </span>
              </span>
            </li>
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                Dialing code :{" "}
                <span className="text-t-600">{countryInfo.dialingCode}</span>
              </span>
            </li>
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                Date format :{" "}
                <span className="text-t-600">{countryInfo.dateFormat}</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Collapsible open={isOpen} className="grid space-y-6">
            <CollapsibleTrigger
              className="flex items-center lg:gap-[10px] justify-self-end text-primary"
              onClick={toggleCollapsible}
            >
              {isOpen ? "Hide Map" : "View Map"}
              <ArrowIcon className={` ${isOpen ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="justify-self-end w-full max-w-[637px]">
              <iframe
                className="w-full"
                src={countryInfo.location}
                height="297"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <Notice
        message={
          "Please contact support team for Document processing after the payment. Visa rate may change without any prior notice"
        }
      />
    </div>
  );
};

export default CountryInfo;
