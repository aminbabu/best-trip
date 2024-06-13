import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import {
  BusRedIcon,
  CalenderIcon,
  ClockAltIcon,
  ClockIcon,
  ClockRedIcon,
  HotelIcon,
  LocationCircleIcon,
  PassportCircleIcon,
  PeopleIcon,
  PlaneIcon,
  SpoonKnifeIcon,
} from "../icons/svgr";
import { Button } from "../ui/button";
import Link from "next/link";
import numeral from "numeral";
import cardImg from "@/public/images/search/01.png";

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

const UmrahBookingCard = () => {
  const renderInclusionIcon = (item) => {
    switch (item.toLowerCase()) {
      case "flight":
        return <PlaneIcon className="w-4 h-4" viewBox="0 0 14 14" />;
      case "hotel":
        return <HotelIcon className="w-4 h-4" viewBox="0 0 14 14" />;
      case "visa":
        return <PassportCircleIcon className="w-4 h-4" viewBox="0 0 14 14" />;
      case "trns":
        return <BusRedIcon className="w-4 h-4" viewBox="0 0 16 16" />;
      case "food":
        return <SpoonKnifeIcon className="w-4 h-4" viewBox="0 0 16 16" />;
      default:
        return null;
    }
  };

  return (
    <Card className="border-transparent relative overflow-hidden">
      <div className="absolute top-5 -right-9 rotate-45 bg-p-300 px-10 py-2 text-sm text-t-700 font-medium leading-snug capitalize pointer-events-none">
        {data.type}
      </div>
      <CardContent className="p-4 sm:p-5 lg:p-8 xl:leading-8 flex flex-col md:flex-row lg:items-center justify-between gap-6 lg:gap-9">
        <Image
          src={cardImg}
          width={266}
          height={266}
          alt={data.name}
          className="aspect-[263/266] w-full md:mx-0 md:w-1/2 lg:w-60 flex-shrink-0 rounded-[0.1785rem] object-cover"
        />
        <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <h4 className="text-base text-t-800 font-medium leading-relaxed mb-1.5">
              {data.name}
            </h4>
            <p className="text-sm lg:text-base text-t-800 mb-12 lg:mb-4 xl:mb-12">
              1 Friday In Makkah- 1 Friday In Madinah
            </p>
            <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-9">
              <ul className="space-y-3 lg:space-y-2 xl:space-y-3">
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <LocationCircleIcon className="mt-0.5 flex-shrink-0" />
                  <span className="flex-shrink-0">
                    From <span className="">{data.from}</span>
                  </span>
                </li>
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <CalenderIcon className="mt-0.5 flex-shrink-0" />
                  <span className="flex-shrink-0">
                    Journey Date : 20 Jun, 2024
                  </span>
                </li>
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <ClockAltIcon className="mt-0.5 flex-shrink-0" />
                  <span className="flex-shrink-0">
                    {data.days} Days | {data.nights} Nights
                  </span>
                </li>
              </ul>
              <div className="flex flex-col gap-y-4 justify-end">
                <div className="text-t-600 text-sm lg:text-base leading-normal xl:text-center px-4 py-2 rounded-sm bg-p-300">
                  Package Inclusion
                </div>
                <ul className="flex items-center xl:justify-center gap-x-4">
                  {data.inclusion.map((item, index) => (
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
