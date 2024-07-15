import React from "react";
import {
  BalakaIcon,
  LocationIcon,
  LuggageIcon,
  PlaneIcon,
  TravellerIcon,
} from "../icons/svgr";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { ArrowLeftRight } from "lucide-react";

const FlightDetailsCard = () => {
  return (
    <div className="w-full">
      <div className="flex-1 flex flex-col justify-between gap-5 md:gap-2 pt-6 md:pt-9 space-y-6">
        <div className="w-full flex flex-col md:flex-row gap-y-4">
          <div className="flex flex-col md:flex-col justify-between gap-4 md:gap-6">
            <div className="flex-shrink-0 flex gap-2.5 sm:px-3">
              <BalakaIcon
                className="text-primary h-[28px] w-[28px]"
                viewBox="0 0 51 51"
              />
              <div className="text-sm md:text-base space-y-2">
                <div className="text-t-900 leading-normal">
                  Biman Bangladesh
                </div>
                <div className="flex gap-x-2 h-5 text-t-800 text-sm leading-6">
                  <div>BG611</div>
                  <Separator className="bg-[#E1E1E1]" orientation="vertical" />
                  <div>Economy</div>
                  <Separator className="bg-[#E1E1E1]" orientation="vertical" />
                  <div>Boing-787</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-start gap-x-4 xl:gap-x-10 sm:px-3">
              <div className="text-left space-y-1">
                <p className="text-xs sm:text-sm text-t-800">Dhaka</p>
                <div className="text-base font-medium sm:text-lg text-t-900">
                  DAC 08:00
                </div>
                <p className="text-xs sm:text-sm text-t-800">
                  Fri, 15 Oct 2024
                </p>
              </div>
              <div className="text-center space-y-1">
                <p className="text-xs sm:text-sm text-t-800">0h 46m</p>
                <div className="flex items-center gap-x-2 md:gap-x-4">
                  <PlaneIcon
                    className="text-primary w-2.5 h-2.5 rotate-90"
                    viewBox="0 0 14 14"
                  />
                  <Separator className="flex-1 bg-t-800 w-10 md:w-[68px]" />
                  <LocationIcon
                    className="text-primary w-2.5 h-2.5"
                    viewBox="0 0 14 14"
                  />
                </div>
              </div>
              <div className="text-left space-y-1">
                <p className="text-xs sm:text-sm text-t-800">Chittagong</p>
                <div className="text-base font-medium sm:text-lg text-t-900">
                  CGP 08:45
                </div>
                <p className="text-xs sm:text-sm text-t-800">
                  Fri, 15 Oct 2024
                </p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 flex md:flex-col items-center gap-x-4 px-0 sm:px-5">
            <div className="flex flex-col gap-x-8 gap-y-2 text-t-600 md:ml-4 text-sm leading-6">
              <p>Refundable</p>
              <p>Fare Type : Publish Fare</p>
              <p>Operated by : BG</p>
              <p>Class : Economy</p>
              <p>Booking Seat : G</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-x-3">
            <div className="flex items-center gap-2.5 col-span-1">
              <TravellerIcon />
              <p className="text-sm text-t-600 leading-6">
                Traveler Type - Adult
              </p>
            </div>
            <div className="flex items-center gap-2.5 col-span-1">
              <LuggageIcon />
              <p className="text-sm text-t-600 leading-6">Check in: 20KG</p>
            </div>
            <div className="flex items-center gap-2.5 col-span-1">
              <LuggageIcon />
              <p className="text-sm text-t-600 leading-6">Cabin: 10KG</p>
            </div>
          </div>
        </div>
        <div className="flex items-center leading-relaxed gap-x-2.5 text-sm text-t-800 bg-p-300 rounded-sm p-2">
          <ArrowLeftRight className="text-[#3D3D3D26] flex-shrink-0 h-[14px] w-[14px]" />
          4h 20m layover in Sylhet(ZYL)
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between gap-5 md:gap-2 pt-6 md:pt-9 space-y-6">
        <div className="w-full flex flex-col md:flex-row gap-y-4">
          <div className="flex flex-col md:flex-col justify-between gap-4 md:gap-6">
            <div className="flex-shrink-0 flex gap-2.5 sm:px-3">
              <BalakaIcon
                className="text-primary h-[28px] w-[28px]"
                viewBox="0 0 51 51"
              />
              <div className="text-sm md:text-base space-y-2">
                <div className="text-t-900 leading-normal">
                  Biman Bangladesh
                </div>
                <div className="flex gap-x-2 h-5 text-t-800 text-sm leading-6">
                  <div>BG611</div>
                  <Separator className="bg-[#E1E1E1]" orientation="vertical" />
                  <div>Economy</div>
                  <Separator className="bg-[#E1E1E1]" orientation="vertical" />
                  <div>Boing-787</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-start gap-x-4 xl:gap-x-10 sm:px-3">
              <div className="text-left space-y-1">
                <p className="text-xs sm:text-sm text-t-800">Dhaka</p>
                <div className="text-base font-medium sm:text-lg text-t-900">
                  DAC 08:00
                </div>
                <p className="text-xs sm:text-sm text-t-800">
                  Fri, 15 Oct 2024
                </p>
              </div>
              <div className="text-center space-y-1">
                <p className="text-xs sm:text-sm text-t-800">0h 46m</p>
                <div className="flex items-center gap-x-2 md:gap-x-4">
                  <PlaneIcon
                    className="text-primary w-2.5 h-2.5 rotate-90"
                    viewBox="0 0 14 14"
                  />
                  <Separator className="flex-1 bg-t-800 w-10 md:w-[68px]" />
                  <LocationIcon
                    className="text-primary w-2.5 h-2.5"
                    viewBox="0 0 14 14"
                  />
                </div>
              </div>
              <div className="text-left space-y-1">
                <p className="text-xs sm:text-sm text-t-800">Chittagong</p>
                <div className="text-base font-medium sm:text-lg text-t-900">
                  CGP 08:45
                </div>
                <p className="text-xs sm:text-sm text-t-800">
                  Fri, 15 Oct 2024
                </p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 flex md:flex-col items-center gap-x-4 px-0 sm:px-5">
            <div className="flex flex-col gap-x-8 gap-y-2 text-t-600 md:ml-4 text-sm leading-6">
              <p>Refundable</p>
              <p>Fare Type : Publish Fare</p>
              <p>Operated by : BG</p>
              <p>Class : Economy</p>
              <p>Booking Seat : G</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-x-3">
            <div className="flex items-center gap-2.5 col-span-1">
              <TravellerIcon />
              <p className="text-sm text-t-600 leading-6">
                Traveler Type - Adult
              </p>
            </div>
            <div className="flex items-center gap-2.5 col-span-1">
              <LuggageIcon />
              <p className="text-sm text-t-600 leading-6">Check in: 20KG</p>
            </div>
            <div className="flex items-center gap-2.5 col-span-1">
              <LuggageIcon />
              <p className="text-sm text-t-600 leading-6">Cabin: 10KG</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-3">
            <div className="flex items-center gap-2.5 col-span-1">
              <TravellerIcon />
              <p className="text-sm text-t-600 leading-6">
                Traveler Type - Adult
              </p>
            </div>
            <div className="flex items-center gap-2.5 col-span-1">
              <LuggageIcon />
              <p className="text-sm text-t-600 leading-6">Check in: 20KG</p>
            </div>
            <div className="flex items-center gap-2.5 col-span-1">
              <LuggageIcon />
              <p className="text-sm text-t-600 leading-6">Cabin: 10KG</p>
            </div>
          </div>
        </div>
        <div className="flex items-center leading-relaxed gap-x-2.5 text-sm text-t-800 bg-p-300 rounded-sm p-2">
          <ArrowLeftRight className="text-[#3D3D3D26] flex-shrink-0 h-[14px] w-[14px]" />
          4h 20m layover in Sylhet(ZYL)
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between gap-5 md:gap-2 pt-6 md:pt-9 space-y-6">
        <div className="w-full flex flex-col md:flex-row gap-y-4">
          <div className="flex flex-col md:flex-col justify-between gap-4 md:gap-6">
            <div className="flex-shrink-0 flex gap-2.5 sm:px-3">
              <BalakaIcon
                className="text-primary h-[28px] w-[28px]"
                viewBox="0 0 51 51"
              />
              <div className="text-sm md:text-base space-y-2">
                <div className="text-t-900 leading-normal">
                  Biman Bangladesh
                </div>
                <div className="flex gap-x-2 h-5 text-t-800 text-sm leading-6">
                  <div>BG611</div>
                  <Separator className="bg-[#E1E1E1]" orientation="vertical" />
                  <div>Economy</div>
                  <Separator className="bg-[#E1E1E1]" orientation="vertical" />
                  <div>Boing-787</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-start gap-x-4 xl:gap-x-10 sm:px-3">
              <div className="text-left space-y-1">
                <p className="text-xs sm:text-sm text-t-800">Dhaka</p>
                <div className="text-base font-medium sm:text-lg text-t-900">
                  DAC 08:00
                </div>
                <p className="text-xs sm:text-sm text-t-800">
                  Fri, 15 Oct 2024
                </p>
              </div>
              <div className="text-center space-y-1">
                <p className="text-xs sm:text-sm text-t-800">0h 46m</p>
                <div className="flex items-center gap-x-2 md:gap-x-4">
                  <PlaneIcon
                    className="text-primary w-2.5 h-2.5 rotate-90"
                    viewBox="0 0 14 14"
                  />
                  <Separator className="flex-1 bg-t-800 w-10 md:w-[68px]" />
                  <LocationIcon
                    className="text-primary w-2.5 h-2.5"
                    viewBox="0 0 14 14"
                  />
                </div>
              </div>
              <div className="text-left space-y-1">
                <p className="text-xs sm:text-sm text-t-800">Chittagong</p>
                <div className="text-base font-medium sm:text-lg text-t-900">
                  CGP 08:45
                </div>
                <p className="text-xs sm:text-sm text-t-800">
                  Fri, 15 Oct 2024
                </p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 flex md:flex-col items-center gap-x-4 px-0 sm:px-5">
            <div className="flex flex-col gap-x-8 gap-y-2 text-t-600 md:ml-4 text-sm leading-6">
              <p>Refundable</p>
              <p>Fare Type : Publish Fare</p>
              <p>Operated by : BG</p>
              <p>Class : Economy</p>
              <p>Booking Seat : G</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-x-3">
            <div className="flex items-center gap-2.5 col-span-1">
              <TravellerIcon />
              <p className="text-sm text-t-600 leading-6">
                Traveler Type - Adult
              </p>
            </div>
            <div className="flex items-center gap-2.5 col-span-1">
              <LuggageIcon />
              <p className="text-sm text-t-600 leading-6">Check in: 20KG</p>
            </div>
            <div className="flex items-center gap-2.5 col-span-1">
              <LuggageIcon />
              <p className="text-sm text-t-600 leading-6">Cabin: 10KG</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-3">
            <div className="flex items-center gap-2.5 col-span-1">
              <TravellerIcon />
              <p className="text-sm text-t-600 leading-6">
                Traveler Type - Adult
              </p>
            </div>
            <div className="flex items-center gap-2.5 col-span-1">
              <LuggageIcon />
              <p className="text-sm text-t-600 leading-6">Check in: 20KG</p>
            </div>
            <div className="flex items-center gap-2.5 col-span-1">
              <LuggageIcon />
              <p className="text-sm text-t-600 leading-6">Cabin: 10KG</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-3">
            <div className="flex items-center gap-2.5 col-span-1">
              <TravellerIcon />
              <p className="text-sm text-t-600 leading-6">
                Traveler Type - Adult
              </p>
            </div>
            <div className="flex items-center gap-2.5 col-span-1">
              <LuggageIcon />
              <p className="text-sm text-t-600 leading-6">Check in: 20KG</p>
            </div>
            <div className="flex items-center gap-2.5 col-span-1">
              <LuggageIcon />
              <p className="text-sm text-t-600 leading-6">Cabin: 10KG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsCard;
