"use client";

import Slider from "@/components/global/splide/Slider";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import {
  BalakaIcon,
  BulbOnIcon,
  BusIcon,
  CheckCircleFilledIcon,
  CheckXCircleFilledIcon,
  ExchangeAltIcon,
  GMapIcon,
  HotelIcon,
  KabaIcon,
  LocationCircleIcon,
  LocationDistanceIcon,
  LocationIcon,
  ManWalkingIcon,
  PlaneIcon,
  StarAltIcon,
  VisaIcon,
} from "@/components/icons/svgr";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import InfoTable from "@/components/umrah/InfoTable";
import Image from "next/image";
import data from "@/data/umrah-ziyarah.json";

import "@/styles/umrah/splide.css";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Minus } from "lucide-react";
import { useState } from "react";
import {
  busServiceList,
  madinahZiyarahList,
  makkahZiyarahList,
  taifZiyarahList,
  transportTypes,
} from "@/data/package-details";

const table = {
  header: [
    {
      title: "Traveller Type",
      className:
        "text-t-700 text-center font-normal h-auto px-3 py-2 border-r border-r-[#f5f5f5] last:border-r-0",
    },
    {
      title: "Check in",
      className:
        "text-t-700 text-center font-normal h-auto px-3 py-2 border-r border-r-[#f5f5f5] last:border-r-0",
    },
    {
      title: "Cabin",
      className:
        "text-t-700 text-center font-normal h-auto px-3 py-2 border-r border-r-[#f5f5f5] last:border-r-0",
    },
  ],
  body: [
    [
      {
        cell: "Adult",
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
      {
        cell: 20,
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
      {
        cell: 7,
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
    ],
    [
      {
        cell: "Children",
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
      {
        cell: 20,
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
      {
        cell: 7,
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
    ],
    [
      {
        cell: "Infant",
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
      {
        cell: 0,
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
      {
        cell: 0,
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
    ],
  ],
};

const options = {
  type: "loop",
  fixedWidth: 168,
  perMove: 1,
  gap: 16,
  arrows: true,
  pagination: false,
};

const UmrahDetailsPage = ({ params }) => {
  const { id } = params;
  const { items } = data;
  const [showBus, isShowBus] = useState(true);
  const [showTransportTypes, isShowTransportTypes] = useState(true);
  const [showMakkah, isShowMakkah] = useState(true);
  const [showMadinah, isShowMadinah] = useState(true);
  const [showTaif, isShowTaif] = useState(true);

  const handleShowBusMore = () => {
    isShowBus(!showBus);
  };

  const handleShowTrasnportTypesMore = () => {
    isShowTransportTypes(!showTransportTypes);
  };

  const handleShowMakkahMore = () => {
    isShowMakkah(!showMakkah);
  };

  const handleShowMadinahMore = () => {
    isShowMadinah(!showMadinah);
  };

  const handleShowTaifMore = () => {
    isShowTaif(!showTaif);
  };

  return (
    <div className="py-4 umrah-details-cards">
      <Accordion type="multiple" className="space-y-6" collapsible="true">
        <AccordionItem className="border-none" value="item-1">
          <h2 className="text-sm md:text-base text-t-800 mb-4 lg:mb-6">
            Outbound Flight Details
          </h2>
          <AccordionTrigger
            className="bg-white hover:no-underline relative font-normal text-left py-0 pr-0 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
            iconClassName="h-5 w-5 text-primary absolute lg:static top-[2.125rem] right-4 md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
          >
            <div className="flex-1 flex flex-col lg:flex-row">
              <div className="flex-shrink-0 flex items-center gap-x-4 bg-p-300 px-4 py-6 md:p-6 lg:px-8 lg:py-12 lg:w-80">
                <BalakaIcon
                  className="text-primary h-10 w-10 md:h-[51px] md:w-[51px]"
                  viewBox="0 0 51 51"
                />
                <div>
                  <div className="text-t-900 text-base md:text-lg">
                    Biman Bangladesh
                  </div>
                  <div className="text-t-800">BG611</div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-around gap-x-4 px-4 xs:px-4 py-5 sm:px-6 md:px-4">
                <div className="text-right space-y-1.5 border-l border-[#f4f4f4] pl-[1px]">
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Dhaka
                  </p>
                  <div className="text-xs font-medium md:font-normal sm:text-base md:text-lg lg:text-[1.375rem] text-t-900">
                    DAC 08:00
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Wed, 25 Dec 2023
                  </p>
                </div>
                <div className="text-center space-y-1.5">
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    06h 46m
                  </p>
                  <div className="flex items-center gap-x-2 md:gap-x-4">
                    <PlaneIcon
                      className="text-primary w-4 h-4 rotate-90"
                      viewBox="0 0 14 14"
                    />
                    <Separator className="flex-1 bg-t-800 w-10 md:w-28" />
                    <LocationIcon
                      className="text-primary w-4 h-4"
                      viewBox="0 0 14 14"
                    />
                  </div>
                  {/* <div className="flex md:hidden items-center gap-x-1">
                    <Separator className="flex-1 bg-t-800 w-6 sm:w-10" />
                    <BalakaIcon
                      className="text-primary w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 51 51"
                    />
                    <Separator className="flex-1 bg-t-800 w-6 sm:w-10" />
                  </div> */}
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    (Non Stop)
                  </p>
                </div>
                <div className="text-left space-y-1.5">
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Jeddah
                  </p>
                  <div className="text-xs font-medium md:font-normal sm:text-base md:text-lg lg:text-[1.375rem] text-t-900">
                    JED 13:45
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Wed, 26 Dec 2023
                  </p>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-white text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12 space-y-8">
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-x-10">
              <div className="flex-shrink-0 flex flex-col sm:flex-row gap-6">
                <div className="flex sm:flex-col justify-between gap-x-8 gap-y-4">
                  <p>08:00</p>
                  <p>01 h 25m</p>
                  <p>13:45</p>
                </div>
                <div className="flex sm:flex-col items-center justify-between gap-4">
                  <PlaneIcon
                    className="text-primary w-4 h-4 rotate-90 sm:rotate-180"
                    viewBox="0 0 14 14"
                  />
                  <Separator
                    className="flex-1 bg-[#E1E1E1] hidden sm:block"
                    orientation="vertical"
                  />
                  <Separator className="flex-1 bg-[#E1E1E1] sm:hidden" />
                  <LocationIcon
                    className="text-primary w-4 h-4"
                    viewBox="0 0 14 14"
                  />
                </div>
                <div className="flex flex-col justify-between gap-y-4 sm:gap-y-6">
                  <p>Hazrat Shahjalal International Ariport (DAC)</p>
                  <div className="flex items-center gap-x-2.5">
                    <BalakaIcon
                      className="text-primary w-6 h-6"
                      viewBox="0 0 51 51"
                    />
                    <p>Biman Bangladesh Airlines</p>
                  </div>
                  <div className="flex gap-x-2 h-5 leading-tight">
                    <div>BG611</div>
                    <Separator
                      className="bg-[#E1E1E1]"
                      orientation="vertical"
                    />
                    <div>Economy</div>
                    <Separator
                      className="bg-[#E1E1E1]"
                      orientation="vertical"
                    />
                    <div>Boing-787</div>
                  </div>
                  <p>Jeddah - King Abdulaziz International Airport (JED) </p>
                </div>
              </div>
              <div className="flex-1">
                <InfoTable table={table} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-none" value="item-2">
          <h2 className="text-sm md:text-base text-t-800 mb-4 lg:mb-6">
            Makkah Hotel Details
          </h2>
          <AccordionTrigger
            className="bg-white hover:no-underline relative font-normal text-left py-0 pr-0 sm:pr-6 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
            iconClassName="h-5 w-5 text-primary absolute lg:static top-[2.125rem] right-4 md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
          >
            <div className="flex-1 flex flex-col lg:flex-row">
              <div className="flex-shrink-0 flex items-center gap-x-4 bg-p-300 px-4 py-6 md:p-6 lg:px-8 lg:py-12 lg:w-80">
                <HotelIcon
                  className="text-primary h-10 w-10 md:h-[60px] md:w-[60px]"
                  viewBox="0 0 14 14"
                />
                <div>
                  <div className="text-t-900 text-base md:text-lg">
                    Stay 7 Night
                  </div>
                  <div className="text-t-800">In Makkah</div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-around gap-5 px-4 xs:px-4 py-5 sm:px-6 md:px-4 lg:px-8 xl:px-14">
                <div className="aspect-[70/85] md:aspect-[171/127] overflow-hidden flex-shrink-0 w-[75px] md:w-44 ">
                  <Image
                    src="/images/details/umrah/01.png"
                    alt="Hotel"
                    width="171"
                    height="127"
                    className="rounded-sm w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-sm md:text-base">
                  <h4 className="text-xs line-clamp-1 md:text-lg text-t-900 mb-1 md:line-clamp-2 leading-loose  md:leading-normal">
                    Swissotel Al Maqam Makkah / Similar Hotel{" "}
                  </h4>
                  <p className="text-xs line-clamp-1 text-t-800 mb-1 md:line-clamp-2 leading-loose md:leading-normal">
                    St Tower F, Ibrahim Al Khalil, St, Tower F, Al Maqam
                  </p>
                  <div className="flex items-center gap-x-2 text-t-600  leading-loose md:leading-normal">
                    <ul className="flex items-center gap-x-1 md:gap-x-2">
                      <li className="text-[#FF7B39]">
                        <StarAltIcon size={18} />
                      </li>
                      <li className="text-[#FF7B39]">
                        <StarAltIcon size={18} />
                      </li>
                      <li className="text-[#FF7B39]">
                        <StarAltIcon size={18} />
                      </li>
                      <li className="text-[#FF7B39]">
                        <StarAltIcon size={18} />
                      </li>
                      <li className="text-[#FF7B39]">
                        <StarAltIcon size={18} />
                      </li>
                    </ul>
                    <span className="mt-1.5 md:mt-1 text-xs md:text-base">
                      4.8
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-white text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12 space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-[352px]">
                <Slider hasTrack={false} options={options}>
                  <SplideTrack>
                    {items.map((item, index) => (
                      <SplideSlide key={index}>
                        <div className="aspect-square overflow-hidden  rounded-sm">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={156}
                            height={146}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </SplideSlide>
                    ))}
                  </SplideTrack>
                </Slider>
              </div>
              <Separator
                className="bg-[#E1E1E1] hidden md:block h-auto"
                orientation="vertical"
              />
              <Separator className="bg-[#E1E1E1] md:hidden" />
              <div className="text-t-600 space-y-3">
                <p>Swissotel Al Maqam Makkah / Similar Hotel </p>
                <ul className="grid gap-y-3">
                  <li className="flex gap-x-2.5">
                    <LocationCircleIcon className="text-primary flex-shrink-0" />
                    <span>
                      St Tower F, Ibrahim Al Khalil, St, Tower F, Al Maqam
                    </span>
                  </li>
                  <li className="flex gap-x-2.5">
                    <LocationDistanceIcon className="text-primary flex-shrink-0" />
                    <span>
                      Hotel Distance from Masjid Al Haram : 1000 Mettter
                    </span>
                  </li>
                  <li className="flex gap-x-2.5">
                    <ManWalkingIcon className="text-primary flex-shrink-0" />
                    <span>
                      Hotel to Majid Al Haram Walking Distance : 5-10 Minutes
                    </span>
                  </li>
                  <li className="flex gap-x-2.5">
                    <GMapIcon className="text-primary flex-shrink-0" />
                    <span>
                      Google Map Link :{" "}
                      <Link href="#" className="text-primary">
                        Click Here
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-x-2.5 text-t-800 bg-p-300 rounded-sm p-2.5">
              <BulbOnIcon className="text-t-600 flex-shrink-0" />
              Breakfast / Lunch / Dinner facilities depend on your booking
              package
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-none" value="item-3">
          <h2 className="text-sm md:text-base text-t-800 mb-4 lg:mb-6">
            Madinah Hotel Details
          </h2>
          <AccordionTrigger
            className="bg-white hover:no-underline relative font-normal text-left py-0 pr-0 sm:pr-6 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
            iconClassName="h-5 w-5 text-primary absolute lg:static top-[2.125rem] right-4 md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
          >
            <div className="flex-1 flex flex-col lg:flex-row">
              <div className="flex-shrink-0 flex items-center gap-x-4 bg-p-300 px-4 py-6 md:p-6 lg:px-8 lg:py-12 lg:w-80">
                <HotelIcon
                  className="text-primary h-10 w-10 md:h-[60px] md:w-[60px]"
                  viewBox="0 0 14 14"
                />
                <div>
                  <div className="text-t-900 text-base md:text-lg">
                    Stay 7 Night
                  </div>
                  <div className="text-t-800">In Madinah</div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-around gap-5 px-4 xs:px-4 py-5 sm:px-6 md:px-4 lg:px-8 xl:px-14">
                <div className="aspect-[70/85] md:aspect-[171/127] overflow-hidden flex-shrink-0 w-[75px] md:w-44 ">
                  <Image
                    src="/images/details/umrah/01.png"
                    alt="Hotel"
                    width="171"
                    height="127"
                    className="rounded-sm w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-sm md:text-base">
                  <h4 className="text-xs line-clamp-1 md:text-lg text-t-900 mb-1 md:line-clamp-2 leading-loose  md:leading-normal">
                    Swissotel Al Maqam Makkah / Similar Hotel{" "}
                  </h4>
                  <p className="text-xs line-clamp-1 text-t-800 mb-1 md:line-clamp-2 leading-loose md:leading-normal">
                    St Tower F, Ibrahim Al Khalil, St, Tower F, Al Maqam
                  </p>
                  <div className="flex items-center gap-x-2 text-t-600  leading-loose md:leading-normal">
                    <ul className="flex items-center gap-x-1 md:gap-x-2">
                      <li className="text-[#FF7B39]">
                        <StarAltIcon size={18} />
                      </li>
                      <li className="text-[#FF7B39]">
                        <StarAltIcon size={18} />
                      </li>
                      <li className="text-[#FF7B39]">
                        <StarAltIcon size={18} />
                      </li>
                      <li className="text-[#FF7B39]">
                        <StarAltIcon size={18} />
                      </li>
                      <li className="text-[#FF7B39]">
                        <StarAltIcon size={18} />
                      </li>
                    </ul>
                    <span className="mt-1.5 md:mt-1 text-xs md:text-base">
                      4.8
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-white text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12 space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-[352px]">
                <Slider hasTrack={false} options={options}>
                  <SplideTrack>
                    {items.map((item, index) => (
                      <SplideSlide key={index}>
                        <div className="aspect-square overflow-hidden  rounded-sm">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={156}
                            height={146}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </SplideSlide>
                    ))}
                  </SplideTrack>
                </Slider>
              </div>
              <Separator
                className="bg-[#E1E1E1] hidden md:block h-auto"
                orientation="vertical"
              />
              <Separator className="bg-[#E1E1E1] md:hidden" />
              <div className="text-t-600 space-y-3">
                <p>Swissotel Al Maqam Makkah / Similar Hotel </p>
                <ul className="grid gap-y-3">
                  <li className="flex gap-x-2.5">
                    <LocationCircleIcon className="text-primary flex-shrink-0" />
                    <span>
                      St Tower F, Ibrahim Al Khalil, St, Tower F, Al Maqam
                    </span>
                  </li>
                  <li className="flex gap-x-2.5">
                    <LocationDistanceIcon className="text-primary flex-shrink-0" />
                    <span>
                      Hotel Distance from Masjid Al Haram : 1000 Mettter
                    </span>
                  </li>
                  <li className="flex gap-x-2.5">
                    <ManWalkingIcon className="text-primary flex-shrink-0" />
                    <span>
                      Hotel to Majid Al Haram Walking Distance : 5-10 Minutes
                    </span>
                  </li>
                  <li className="flex gap-x-2.5">
                    <GMapIcon className="text-primary flex-shrink-0" />
                    <span>
                      Google Map Link :{" "}
                      <Link href="#" className="text-primary">
                        Click Here
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-x-2.5 text-t-800 bg-p-300 rounded-sm p-2.5">
              <BulbOnIcon className="text-t-600 flex-shrink-0" />
              Breakfast / Lunch / Dinner facilities depend on your booking
              package
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-none" value="item-4">
          <h2 className="text-sm md:text-base text-t-800 mb-4 lg:mb-6">
            Inbound Flight Details
          </h2>
          <AccordionTrigger
            className="bg-white hover:no-underline relative font-normal text-left py-0 pr-0 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
            iconClassName="h-5 w-5 text-primary absolute lg:static top-[2.125rem] right-4 md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
          >
            <div className="flex-1 flex flex-col lg:flex-row">
              <div className="flex-shrink-0 flex items-center gap-x-4 bg-p-300 px-4 py-6 md:p-6 lg:px-8 lg:py-12 lg:w-80">
                <BalakaIcon
                  className="text-primary h-10 w-10 md:h-[51px] md:w-[51px]"
                  viewBox="0 0 51 51"
                />
                <div>
                  <div className="text-t-900 text-base md:text-lg">
                    Biman Bangladesh
                  </div>
                  <div className="text-t-800">BG611</div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-around gap-x-4 px-4 xs:px-4 py-5 sm:px-6 md:px-4">
                <div className="text-right space-y-1.5 border-l border-[#f4f4f4] pl-[1px]">
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Dhaka
                  </p>
                  <div className="text-xs font-medium md:font-normal sm:text-base md:text-lg lg:text-[1.375rem] text-t-900">
                    DAC 08:00
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Wed, 25 Dec 2023
                  </p>
                </div>
                <div className="text-center space-y-1.5">
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    06h 46m
                  </p>
                  <div className="flex items-center gap-x-2 md:gap-x-4">
                    <PlaneIcon
                      className="text-primary w-4 h-4 rotate-90"
                      viewBox="0 0 14 14"
                    />
                    <Separator className="flex-1 bg-t-800 w-10 md:w-28" />
                    <LocationIcon
                      className="text-primary w-4 h-4"
                      viewBox="0 0 14 14"
                    />
                  </div>
                  {/* <div className="flex md:hidden items-center gap-x-1">
                    <Separator className="flex-1 bg-t-800 w-6 sm:w-10" />
                    <BalakaIcon
                      className="text-primary w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 51 51"
                    />
                    <Separator className="flex-1 bg-t-800 w-6 sm:w-10" />
                  </div> */}
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    (Non Stop)
                  </p>
                </div>
                <div className="text-left space-y-1.5">
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Jeddah
                  </p>
                  <div className="text-xs font-medium md:font-normal sm:text-base md:text-lg lg:text-[1.375rem] text-t-900">
                    JED 13:45
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Wed, 26 Dec 2023
                  </p>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-white text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12 space-y-8">
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-x-10">
              <div className="flex-shrink-0 flex flex-col sm:flex-row gap-6">
                <div className="flex sm:flex-col justify-between gap-x-8 gap-y-4">
                  <p>08:00</p>
                  <p>01 h 25m</p>
                  <p>13:45</p>
                </div>
                <div className="flex sm:flex-col items-center justify-between gap-4">
                  <PlaneIcon
                    className="text-primary w-4 h-4 rotate-90 sm:rotate-180"
                    viewBox="0 0 14 14"
                  />
                  <Separator
                    className="flex-1 bg-[#E1E1E1] hidden sm:block"
                    orientation="vertical"
                  />
                  <Separator className="flex-1 bg-[#E1E1E1] sm:hidden" />
                  <LocationIcon
                    className="text-primary w-4 h-4"
                    viewBox="0 0 14 14"
                  />
                </div>
                <div className="flex flex-col justify-between gap-y-4 sm:gap-y-6">
                  <p>Hazrat Shahjalal International Ariport (DAC)</p>
                  <div className="flex items-center gap-x-2.5">
                    <BalakaIcon
                      className="text-primary w-6 h-6"
                      viewBox="0 0 51 51"
                    />
                    <p>Biman Bangladesh Airlines</p>
                  </div>
                  <div className="flex gap-x-2 h-5 leading-tight">
                    <div>BG611</div>
                    <Separator
                      className="bg-[#E1E1E1]"
                      orientation="vertical"
                    />
                    <div>Economy</div>
                    <Separator
                      className="bg-[#E1E1E1]"
                      orientation="vertical"
                    />
                    <div>Boing-787</div>
                  </div>
                  <p>Jeddah - King Abdulaziz International Airport (JED) </p>
                </div>
              </div>
              <div className="flex-1">
                <InfoTable table={table} />
              </div>
            </div>
            <div className="flex items-center gap-x-2.5 text-t-800 bg-p-300 rounded-sm p-2.5">
              <ExchangeAltIcon className="text-t-600 flex-shrink-0" />
              4h 20m layover in Madinah - Prince Mohammad bin Abdulaziz
              International Airport (MED)
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-none" value="item-5">
          <h2 className="text-sm md:text-base text-t-800 mb-4 lg:mb-6">
            Visa Details
          </h2>
          <AccordionTrigger
            className="bg-white hover:no-underline relative font-normal text-left py-0 pr-0 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
            iconClassName="h-5 w-5 text-primary absolute lg:static top-[2.125rem] right-4 md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
          >
            <div className="flex-1 flex flex-col lg:flex-row">
              <div className="flex-shrink-0 flex items-center gap-x-4 bg-p-300 px-4 py-6 md:p-6 lg:px-8 lg:py-12 lg:w-80">
                <VisaIcon
                  className="text-primary flex-shrink-0 w-10 h-10 md:w-[61px] md:h-[62px]"
                  viewBox="0 0 61 62"
                />
                <div>
                  <div className="text-t-900 text-base md:text-lg">
                    Visa Type
                  </div>
                  <div className="text-t-800">Umrah Visa</div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-between md:justify-around gap-x-4 md:gap-x-16 px-4 py-5 sm:px-6 md:pl-[50px] md:pr-1 lg:px-4 xl:pl-14 xl:pr-2">
                <div className="flex-1 text-right sm:text-left border-l border-[#f4f4f4] pl-[1px]">
                  <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                    Number Of Entries
                  </div>
                  <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                    Single
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left border-l border-[#f4f4f4] pl-[1px]">
                  <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                    Max Stay
                  </div>
                  <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                    15 Days
                  </div>
                </div>
                <div className="flex-1 border-l border-[#f4f4f4] pl-[1px]">
                  <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                    Visa Valid
                  </div>
                  <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                    30 Days
                  </div>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-white text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12 space-y-8">
            <div className="space-y-4">
              <p className="text-t-800">Visa Required</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                <li className="col-span-2 md:col-span-1">
                  *Passport copy with minimum 6 months validity
                </li>
                <li className="col-span-2 md:col-span-1">
                  *Passport size photo (white background)
                </li>
                <li className="col-span-2 md:col-span-1">
                  *ID card / Birth certificate
                </li>
                <li className="col-span-2 md:col-span-1">
                  *Return ticket booking copy
                </li>
                <li className="col-span-2 md:col-span-1">
                  *Hotel booking copy
                </li>
                <li className="col-span-2 md:col-span-1">
                  *Required covid 19 vaccines certificate
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-x-2.5 text-t-800 bg-p-300 rounded-sm p-2.5">
              <BulbOnIcon className="text-t-600 flex-shrink-0" />
              <span>
                Visa Fee is <span className="text-primary">Non-Refundable</span>{" "}
                ** Visa Fee is{" "}
                <span className="text-primary">Non-Refundable</span> ** Visa Fee
                is <span className="text-primary">Non-Refundable</span>
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-none" value="item-6">
          <h2 className="text-sm md:text-base text-t-800 mb-4 lg:mb-6">
            Transport Details
          </h2>
          <AccordionTrigger
            className="bg-white hover:no-underline relative font-normal text-left py-0 pr-0 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
            iconClassName="h-5 w-5 text-primary absolute lg:static top-[2.125rem] right-4 md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
          >
            <div className="flex-1 flex flex-col lg:flex-row">
              <div className="flex-shrink-0 flex items-center gap-x-4 bg-p-300 px-4 py-6 md:p-6 lg:px-8 lg:py-12 lg:w-80">
                <BusIcon
                  className="text-primary flex-shrink-0 w-10 h-10 md:w-[60] md:h-[60]"
                  viewBox="0 0 14 14"
                />
                <div>
                  <div className="text-t-900 text-base md:text-lg">
                    Transport Type
                  </div>
                  <div className="text-t-800">by Bus</div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-between md:justify-around gap-x-4 md:gap-x-16 px-4 py-5 sm:px-6 md:pl-[50px] md:pr-1 lg:px-4 xl:pl-14 xl:pr-2">
                <div className="flex-1 text-right sm:text-left border-l border-[#f4f4f4] pl-[1px]">
                  <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                    Airport to Hotel
                  </div>
                  <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                    Yes
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left border-l border-[#f4f4f4] pl-[1px]">
                  <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                    Visitor Place
                  </div>
                  <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                    Yes
                  </div>
                </div>
                <div className="flex-1 border-l border-[#f4f4f4] pl-[1px]">
                  <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                    Hotel to Aiport
                  </div>
                  <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                    Yes
                  </div>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-white text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12 space-y-8">
            <div className="space-y-4">
              <p className="text-t-800">Bus Service (Round Trip)</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1 flex flex-col md:items-start">
                  <ul
                    className={`space-y-3 h-40 lg:h-44 ${showBus ? "overflow-hidden" : "overflow-y-auto"} pr-4 scrollbar-thin scrollbar-thumb-[#CFD1D4] scrollbar-track-[#F4F4F4]`}
                  >
                    {busServiceList.map((service) => (
                      <li key={service.id} className="flex gap-x-2">
                        <CheckCircleFilledIcon className="text-primary flex-shrink-0" />
                        {service.serviceName}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="text-primary justify-start px-0.5 hover:bg-transparent"
                    onClick={handleShowBusMore}
                  >
                    <span className="flex-shrink-0 w-4 h-4 inline-flex items-center justify-center bg-primary text-white rounded-full">
                      {showBus ? <Plus size={16} /> : <Minus size={16} />}
                    </span>
                    {showBus ? "Show more" : "Show less"}
                  </Button>
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col md:items-start">
                  <ul
                    className={`space-y-3 h-40 lg:h-44 ${showTransportTypes ? "overflow-hidden" : "overflow-y-auto"} pr-4 scrollbar-thin scrollbar-thumb-[#CFD1D4] scrollbar-track-[#F4F4F4]`}
                  >
                    {transportTypes.map((type) => (
                      <li key={type.id} className="flex gap-x-2">
                        {type.icon}
                        {type.name}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="text-primary justify-start px-0.5 hover:bg-transparent"
                    onClick={handleShowTrasnportTypesMore}
                  >
                    <span className="flex-shrink-0 w-4 h-4 inline-flex items-center justify-center bg-primary text-white rounded-full">
                      {showTransportTypes ? (
                        <Plus size={16} />
                      ) : (
                        <Minus size={16} />
                      )}
                    </span>
                    {showTransportTypes ? "Show more" : "Show less"}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-2.5 text-t-800 bg-p-300 rounded-sm p-2.5">
              <BulbOnIcon className="text-t-600 flex-shrink-0" />
              <span>
                Note: Pickup Time and Location will be according to the time and
                date you prescribe.
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-none" value="item-7">
          <h2 className="text-sm md:text-base text-t-800 mb-4 lg:mb-6">
            Ziyara Details
          </h2>
          <AccordionTrigger
            className="bg-white hover:no-underline relative font-normal text-left py-0 pr-0 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
            iconClassName="h-5 w-5 text-primary absolute lg:static top-[2.125rem] right-4 md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
          >
            <div className="flex-1 flex flex-col lg:flex-row">
              <div className="flex-shrink-0 flex items-center gap-x-4 bg-p-300 p-6 lg:px-8 lg:py-12 lg:w-80">
                <KabaIcon
                  className="text-primary flex-shrink-0 w-10 h-10 md:w-[60px] md:h-[60px]"
                  viewBox="0 0 26 27"
                />
                <div>
                  <div className="text-t-900 text-base md:text-lg">
                    Ziyara /Sightseeing
                  </div>
                  <div className="text-t-800">Within 14 Days</div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-between md:justify-around gap-x-4 md:gap-x-16 px-4 py-5 sm:px-6 md:pl-[50px] md:pr-1 lg:px-4 xl:pl-14 xl:pr-2">
                <div className="flex-1 text-right sm:text-left border-l border-[#f4f4f4] pl-[1px]">
                  <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                    Makkah Ziyara
                  </div>
                  <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                    Included
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left border-l border-[#f4f4f4] pl-[1px]">
                  <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                    Madina Ziyara
                  </div>
                  <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                    Included
                  </div>
                </div>
                <div className="flex-1 border-l border-[#f4f4f4] pl-[1px]">
                  <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                    Taif Ziyara
                  </div>
                  <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                    Not Included
                  </div>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-white text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12 space-y-8">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex flex-col md:items-start gap-y-4">
                  <p className="text-t-800">Makkah Ziyarah</p>
                  <div>
                    <ul
                      className={`space-y-3 h-40 lg:h-44 ${showMakkah ? "overflow-hidden" : "overflow-y-auto"} pr-4 scrollbar-thin scrollbar-thumb-[#CFD1D4] scrollbar-track-[#F4F4F4]`}
                    >
                      {makkahZiyarahList.map((item) => (
                        <li key={item.id} className="flex gap-x-2">
                          <CheckCircleFilledIcon className="text-primary flex-shrink-0" />
                          {item.name}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="ghost"
                      className="text-primary justify-start px-0.5 hover:bg-transparent"
                      onClick={handleShowMakkahMore}
                    >
                      <span className="flex-shrink-0 w-4 h-4 inline-flex items-center justify-center bg-primary text-white rounded-full">
                        {showMakkah ? <Plus size={16} /> : <Minus size={16} />}
                      </span>
                      {showMakkah ? "Show more" : "Show less"}
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col md:items-start gap-y-4">
                  <p className="text-t-800">Madinah Ziyarah</p>
                  <div>
                    <ul
                      className={`space-y-3 h-40 lg:h-44 ${showMadinah ? "overflow-hidden" : "overflow-y-auto"} pr-4 scrollbar-thin scrollbar-thumb-[#CFD1D4] scrollbar-track-[#F4F4F4]`}
                    >
                      {madinahZiyarahList.map((item) => (
                        <li key={item.id} className="flex gap-x-2">
                          <CheckCircleFilledIcon className="text-primary flex-shrink-0" />
                          {item.name}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="ghost"
                      className="text-primary justify-start px-0.5 hover:bg-transparent"
                      onClick={handleShowMadinahMore}
                    >
                      <span className="flex-shrink-0 w-4 h-4 inline-flex items-center justify-center bg-primary text-white rounded-full">
                        {showMadinah ? <Plus size={16} /> : <Minus size={16} />}
                      </span>
                      {showMadinah ? "Show more" : "Show less"}
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col md:items-start gap-y-4">
                  <p className="text-t-800">Taif Ziyarah</p>
                  <div>
                    <ul
                      className={`space-y-3 h-40 lg:h-44 ${showTaif ? "overflow-hidden" : "overflow-y-auto"} pr-4 scrollbar-thin scrollbar-thumb-[#CFD1D4] scrollbar-track-[#F4F4F4]`}
                    >
                      {taifZiyarahList.map((item) => (
                        <li key={item.id} className="flex gap-x-2">
                          <CheckCircleFilledIcon className="text-primary flex-shrink-0" />
                          {item.name}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="ghost"
                      className="text-primary justify-start px-0.5 hover:bg-transparent"
                      onClick={handleShowTaifMore}
                    >
                      <span className="flex-shrink-0 w-4 h-4 inline-flex items-center justify-center bg-primary text-white rounded-full">
                        {showTaif ? <Plus size={16} /> : <Minus size={16} />}
                      </span>
                      {showTaif ? "Show more" : "Show less"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default UmrahDetailsPage;
