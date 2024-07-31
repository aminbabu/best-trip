"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import TravellersDetailsCard from "@/components/global/TravellersDetailsCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FlightDetailsCard from "@/components/fight/FlightDetailsCard";
import { flightDetailsTabItems } from "@/data/flight";
import { Button } from "@/components/ui/button";
import HotelOverview from "@/components/hotel/HotelOverView";
import HotelDetailsTab from "@/components/hotel/hotel-details-tab/HotelDetailsTab";
import { StarAltIcon } from "@/components/icons/svgr";

const HotelPage = () => {
  return (
    <main className="bg-[#F6F6F6]">
      <section className="max-w-[calc(1280px-12px)] mx-auto px-7 lg:px-12 xl:px-16 py-8">
        <div className="grid grid-cols-11 xl:gap-x-[30px] gap-y-6">
          <div className="col-span-12 xl:col-span-8 space-y-6">
            <Card className="border-transparent relative overflow-hidden rounded-sm">
              <CardContent className="p-4 sm:p-5 lg:pl-6 lg:pb-[26px] lg:pt-5 lg:pr-6 xl:leading-8 flex flex-col justify-between gap-6">
                <HotelOverview />
              </CardContent>
            </Card>
            <HotelDetailsTab />
          </div>
          <Card className="col-span-12 xl:col-span-3 h-fit border-transparent relative overflow-hidden rounded-sm">
            <div className="px-[53px] pt-[30px] pb-6">
              <h2 className="text-t-800 text-base text-center font-medium leading-normal pb-4">
                Session Timeout in
              </h2>
              <div className="flex gap-x-[9px] items-center justify-center text-primary">
                <span className="p-1.5 text-base bg-primary font-semibold text-white rounded-[2px]">
                  20
                </span>
                :
                <span className="p-1.5 text-base bg-primary font-semibold text-white rounded-[2px]">
                  00
                </span>
              </div>
            </div>
            <hr />
            <div>
              <div className="space-y-1.5 text-center">
                <h2 className="text-t-800 text-lg font-medium leading-snug px-6 py-4">
                  Courtyard By Marriot
                </h2>
                <p className="text-xs text-t-600 leading-relaxed">
                  Bluewaters Island nD94, Dubai
                </p>
                <div className="inline-flex py-1.5 gap-1">
                  <StarAltIcon
                    className="fill-[#FF7B39] h-[18px] w-[18px]"
                    viewBox="0 0 19 19"
                  />
                  <StarAltIcon
                    className="fill-[#FF7B39] h-[18px] w-[18px]"
                    viewBox="0 0 19 19"
                  />
                  <StarAltIcon
                    className="fill-[#FF7B39] h-[18px] w-[18px]"
                    viewBox="0 0 19 19"
                  />
                  <StarAltIcon
                    className="fill-[#FF7B39] h-[18px] w-[18px]"
                    viewBox="0 0 19 19"
                  />
                  <StarAltIcon
                    className="fill-[#FF7B39] h-[18px] w-[18px]"
                    viewBox="0 0 19 19"
                  />
                  <p className="text-sm lg:text-base text-t-600 leading-relaxed pl-1">
                    4.8
                  </p>
                </div>
              </div>
              <div className="px-5 py-5">
                <div className="text-t-600 text-sm lg:text-base leading-normal px-[10px] py-[5px] rounded-sm bg-p-300">
                  Room Summary
                </div>
                <ul className="px-2.5 py-5 space-y-2 text-t-600 font-medium leading-6">
                  <li className="space-y-0.5 text-sm font-medium leading-relaxed">
                    Premier Room - 1 King bed
                  </li>
                  <li className="space-y-0.5 text-sm font-medium leading-relaxed">
                    Room Only
                  </li>
                </ul>
                <div className="text-t-600 text-sm lg:text-base leading-normal px-[10px] py-[5px] rounded-sm bg-p-300">
                  Booking Summary
                </div>
                <ul className="px-2.5 py-5 space-y-2 text-t-600 font-medium leading-6">
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Check In</p>
                    <p className="text-t-800">10 Oct 2023</p>
                  </li>
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Check Out</p>
                    <p className="text-t-800">17 Oct 2023</p>
                  </li>
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Total Room</p>
                    <p className="text-t-800">2 Rooms</p>
                  </li>
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Total Nights</p>
                    <p className="text-t-800">2 Nights</p>
                  </li>
                </ul>
                <div className="text-t-600 text-sm lg:text-base leading-normal px-[10px] py-[5px] rounded-sm bg-p-300">
                  Traveller Summary
                </div>
                <ul className="px-2.5 py-5 space-y-2 text-t-600 font-medium leading-6">
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Adults</p>
                    <p className="text-t-800">2 Pax</p>
                  </li>
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Childrem</p>
                    <p className="text-t-800">1 Pax</p>
                  </li>
                </ul>
                <div className="text-t-600 text-sm lg:text-base leading-normal px-[10px] py-[5px] rounded-sm bg-p-300">
                  Fare Summary
                </div>
                <ul className="px-2.5 py-5 space-y-2 text-t-600 font-medium leading-6">
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Hotel Base Fare</p>
                    <p className="text-t-800">BDT 30,000</p>
                  </li>
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>Taxes + Others</p>
                    <p className="text-t-800">BDT 725</p>
                  </li>
                  <li className="flex justify-between items-center text-sm font-medium leading-6">
                    <p>*Sub - Total (3 pax)</p>
                    <p className="text-t-800">BDT 100000</p>
                  </li>
                </ul>
                <div className="flex justify-center items-center text-center text-white text-base lg:text-base font-semibold leading-normal px-[11px] py-2.5 rounded-sm bg-primary">
                  Book This Room
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default HotelPage;
