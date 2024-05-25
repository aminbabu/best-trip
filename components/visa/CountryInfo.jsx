"use client";

import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ArrowIcon } from "../icons/svgr";
import Notice from "./Notice";

const CountryInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          Saudi Arabia, officially the Kingdom of Saudi Arabia, is a country in
          West Asia. It covers the bulk of the Arabian Peninsula and has a land
          area of about 2150000 km², making it the fifth-largest country in Asia
          and the largest in the Middle East.
        </p>
      </div>
      <div className="grid grid-cols-12 justify-between mt-[30px] mb-10 gap-5">
        <div className="col-span-12 md:col-span-4">
          <ul className="space-y-4">
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                Country: <span className="text-t-600">Saudi Arabia (SA)</span>
              </span>
            </li>
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                Capital: <span className="text-t-600">Riyadh</span>
              </span>
            </li>
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                King: <span className="text-t-600">Salman of Saudi Arabia</span>
              </span>
            </li>
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                Currency: <span className="text-t-600">Saudi Riyal</span>
              </span>
            </li>
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                Government:{" "}
                <span className="text-t-600">
                  Monarchy, Absolute monarchy, Unitary state, Islamic state
                </span>
              </span>
            </li>
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                Population:{" "}
                <span className="text-t-600">
                  35.95 million (2021) World Bank
                </span>
              </span>
            </li>
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                Dialing code: <span className="text-t-600">+966</span>
              </span>
            </li>
            <li>
              <span className="text-sm xl:text-base text-t-800 font-normal leading-normal">
                Date format: <span className="text-t-600">dd/mm/yyyy (AH)</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Collapsible className="grid space-y-6">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.1833698326775!2d90.4178239799482!3d23.734298039743305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c5bb36059%3A0xef2e9a37765ee400!2sT%20%26%20T%20Colony%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1716620578187!5m2!1sen!2sbd"
                // width="637"
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
