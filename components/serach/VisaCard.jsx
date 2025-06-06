"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import {
  VisaEntryTypeIcon,
  DocRedIcon,
  ArrowIcon,
  ClockRedIcon,
  CalenderIcon,
  BusRedIcon,
} from "../icons/svgr";
import Link from "next/link";
import { Button } from "../ui/button";
import numeral from "numeral";
import { useState } from "react";
import { Collapsible, CollapsibleTrigger } from "../ui/collapsible";
import CardCollapsibleContent from "../visa/CollapsibleContent";

const VisaCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card className="border-transparent relative overflow-hidden">
      <Collapsible>
        <CardContent className="p-4 sm:p-5 lg:p-[34px] xl:leading-8 flex flex-col md:flex-row lg:items-center justify-between gap-6 lg:gap-9">
          <Image
            src={data.img}
            width={266}
            height={266}
            alt={data.name}
            className="aspect-square w-full md:mx-0 md:w-1/2 lg:w-64 flex-shrink-0 rounded-[0.1785rem] object-cover"
          />
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:pr-[14px]">
              <div>
                <h4 className="text-base xl:text-lg text-t-900 font-medium leading-relaxed mb-1.5">
                  Saudi Arabia Umrah Visa
                </h4>
                <p className="text-sm lg:text-base text-t-800 mb-[35px] lg:mb-4 xl:mb-[35px]">
                  Electronic Visa (E-Visa)
                </p>
                <div className="flex gap-y-4">
                  <div className="text-t-600 text-sm lg:text-base leading-normal xl:text-center px-[10px] py-[5px] rounded-sm bg-p-300 mb-[18px]">
                    Basic information about visa processing
                  </div>
                </div>
                <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-x-12">
                  <ul className="grid xl:grid-cols-2 gap-x-[36px] gap-y-3 lg:gap-y-2 xl:gap-y-3 font-normal">
                    <li className="flex gap-x-2 text-sm xl:text-base text-t-500 leading-normal">
                      <DocRedIcon className="mt-0.5 flex-shrink-0" />
                      <span className="flex-shrink-0">
                        Visa Category : Single Visa
                      </span>
                    </li>
                    <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
                      <ClockRedIcon className="mt-0.5 flex-shrink-0" />
                      <span className="flex-shrink-0">Max Stay : 15 Days</span>
                    </li>
                    <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
                      <VisaEntryTypeIcon className="mt-0.5 flex-shrink-0" />
                      <span className="flex-shrink-0">
                        Entry Type : Single Entry
                      </span>
                    </li>
                    <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
                      <CalenderIcon
                        fill="#F50308"
                        className="mt-0.5 flex-shrink-0"
                      />
                      <span className="flex-shrink-0">
                        Validity : {data.validity} Days
                      </span>
                    </li>
                    <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
                      <CalenderIcon
                        fill="#F50308"
                        className="mt-0.5 flex-shrink-0 size-4"
                      />
                      <span className="flex-shrink-0">
                        Processing Time : {data.processingTime} Days
                      </span>
                    </li>
                    <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
                      <BusRedIcon
                        fill="#F50308"
                        className="mt-0.5 flex-shrink-0"
                      />
                      <span className="flex-shrink-0">With Transport</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:self-end lg:text-right space-y-4">
                <ul className="grid grid-cols-2 gap-1.5">
                  <li className="col-span-2 text-t-600 text-sm lg:text-base xl:text-lg">
                    Per Pax Price :
                    <span className="text-t-900 ml-2">
                      {numeral(data.visaFee).format("0,0")} BDT
                    </span>
                  </li>
                  <li className="col-span-2 text-t-600 text-sm lg:text-base xl:text-lg">
                    Sub Total :
                    <span className="text-t-900 ml-2">
                      {numeral(data.visaFee).format("0,0")} BDT
                    </span>
                  </li>
                </ul>
                <Button
                  size="sm"
                  className="font-semibold text-sm lg:text-base"
                  href={`/visa/${data.id}`}
                  asChild
                >
                  <Link>Select For Processing</Link>
                </Button>
                <div className="flex flex-col lg:flex-row justify-end lg:items-center text-t-600 leading-normal text-sm lg:text-base md:pr-2 gap-4 mt-[51px]">
                  <CollapsibleTrigger
                    onClick={toggleCollapsible}
                    className="flex items-center lg:gap-[10px] text-t-900"
                  >
                    {isOpen ? "Hide Details" : "View More Details"}
                    <ArrowIcon
                      className={`text-primary ${isOpen ? "rotate-180" : ""}`}
                    />
                  </CollapsibleTrigger>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardCollapsibleContent />
      </Collapsible>
    </Card>
  );
};

export default VisaCard;
