import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import {
  CalenderIcon,
  ClockAltIcon,
  LocationCircleIcon,
  PeopleIcon,
} from "../icons/svgr";
import cardImg from "@/public/images/search/01.png";
import { generateImage, renderInclusionIcon } from "@/lib/utils";
import moment from "moment";

const data = {
  id: 1,
  type: "standard",
  name: "Quad Share Basis Package",
  from: "Dhaka, Bangladesh",
  days: 15,
  nights: 14,
  group: 30,
  img: { cardImg },
  inclusion: ["flight", "hotel", "visa", "trns", "food"],
  prices: {
    adult: 10000,
    child: 8000,
    infant: 5000,
  },
};

const UmrahBookingCard = ({ data }) => {

  return (
    <Card className="border-transparent relative overflow-hidden">
      <CardContent className="p-4 sm:p-5 lg:p-8 xl:leading-8 flex flex-col md:flex-row lg:items-center justify-between gap-6 lg:gap-9">
        <Image
          src={generateImage(data?.thumbnail)}
          width={266}
          height={266}
          alt={data?.title}
          className="aspect-[263/266] w-full md:mx-0 md:w-1/2 lg:w-60 flex-shrink-0 rounded-[0.1785rem] object-cover"
        />
        <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <h4 className="text-base text-t-800 font-medium leading-relaxed mb-1.5">
              {data?.title}
            </h4>
            <p className="text-sm lg:text-base text-t-800 mb-12 lg:mb-4 xl:mb-12">
              {data?.subtitle}
            </p>
            <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-9">
              <ul className="space-y-3 lg:space-y-2 xl:space-y-3">
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <LocationCircleIcon className="mt-0.5 flex-shrink-0" />
                  <span className="flex-shrink-0">
                    From <span className="">{data?.departureLocation}</span>
                  </span>
                </li>
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <CalenderIcon className="mt-0.5 flex-shrink-0" />
                  <span className="flex-shrink-0">
                    Journey Date : {moment(data?.journeyDate).format("DD-MM-YYYY")}
                  </span>
                </li>
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <ClockAltIcon className="mt-0.5 flex-shrink-0" />
                  <span className="flex-shrink-0">
                    {data?.totalDaysAndNights?.days} Days | {data?.totalDaysAndNights?.days} Nights
                  </span>
                </li>
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <PeopleIcon className="mt-0.5 flex-shrink-0" />
                  <span className="flex-shrink-0">Package Type : Standard</span>
                </li>
              </ul>
              <div className="flex flex-col gap-y-4 justify-end flex-1">
                <div className="text-t-600 text-sm lg:text-base leading-normal xl:text-center px-4 py-2 rounded-sm bg-p-300">
                  Package Inclusion
                </div>
                <ul className="flex flex-wrap  xl:justify-center gap-x-4 gap-y-2">
                  {data?.inclusions?.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-600 capitalize"
                    >
                      {renderInclusionIcon(item)}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UmrahBookingCard;
