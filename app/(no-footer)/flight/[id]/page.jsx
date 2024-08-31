"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import TravellersDetailsCard from "@/components/global/TravellersDetailsCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FlightDetailsCard from "@/components/umrah-fight/FlightDetailsCard";
import { flightDetailsTabItems } from "@/data/flight";
import { Button } from "@/components/ui/button";

const FlightPage = () => {
  return (
    <main className="bg-[#F6F6F6]">
      <section className="max-w-[calc(1280px-12px)] mx-auto px-7 lg:px-12 xl:px-16 py-8">
        <div className="grid grid-cols-12 xl:gap-x-[30px] gap-y-6">
          <div className="col-span-12 xl:col-span-8 space-y-6">
            <Card className="border-transparent relative overflow-hidden rounded-sm">
              <CardContent className="p-4 sm:p-5 lg:pl-6 lg:pr-[30px] lg:py-[34px] xl:leading-8 flex flex-col justify-between gap-6">
                <h1 className="text-lg font-medium text-t-800">
                  Flight Details
                </h1>
                <div className="flex">
                  <Tabs
                    defaultValue={flightDetailsTabItems[0].value}
                    className="w-full"
                    data={flightDetailsTabItems}
                  >
                    <TabsList className="flex justify-start gap-5 overflow-x-auto overflow-y-hidden bg-white">
                      {flightDetailsTabItems.map((tab) => (
                        <TabsTrigger
                          className="py-2 px-2.5 data-[state=active]:bg-p-300 rounded-t rounded-b-none data-[state=active]:border-transparent border-x border-t border-b-none duration-300"
                          key={tab.id}
                          value={tab.value}
                        >
                          {tab.name}
                        </TabsTrigger>
                      ))}
                      <Button className="px-2.5 py-2 rounded bg-p-300 hover:bg-p-300 text-p-900 ml-auto">
                        Details Rules
                      </Button>
                    </TabsList>
                    {flightDetailsTabItems.map((tab) => (
                      <TabsContent key={tab.id} value={tab.value}>
                        <FlightDetailsCard />
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              </CardContent>
            </Card>
            <TravellersDetailsCard />
          </div>
          <Card className="col-span-12 xl:col-span-4 h-fit border-transparent relative overflow-hidden rounded-sm">
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
            <div>
              <div className="space-y-1.5">
                <h2 className="text-t-800 text-lg text-left font-medium leading-snug px-6 py-4">
                  Fare Summary
                </h2>
              </div>
              <div className="px-6 pt-5 pb-[34px]">
                <div className="text-t-600 text-sm lg:text-base leading-normal px-[10px] py-[5px] rounded-sm bg-p-300">
                  Adult (1 Traveller)
                </div>
                <ul className="px-2.5 py-5 space-y-2 text-t-600 font-medium leading-6">
                  <li className="space-y-0.5">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-normal leading-6">Base Fare</p>
                      <p className="text-base leading-7 font-normal">
                        BDT 30,000
                      </p>
                    </div>
                    <span className="grid justify-end text-sm leading-relaxed">
                      (3 X 30,000)
                    </span>
                  </li>
                  <li className="space-y-0.5">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-normal leading-6">
                        Taxes + Others
                      </p>
                      <p className="text-base leading-7 font-normal">
                        BDT 2,000
                      </p>
                    </div>
                    <span className="grid justify-end text-sm leading-relaxed">
                      (3 X 2,000)
                    </span>
                  </li>
                </ul>
                <div className="text-t-600 text-sm lg:text-base leading-normal px-[10px] py-[5px] rounded-sm bg-p-300">
                  Children (1 Traveller)
                </div>
                <ul className="px-2.5 py-5 space-y-2 text-t-600 font-medium leading-6">
                  <li className="space-y-0.5">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-normal leading-6">Base Fare</p>
                      <p className="text-base leading-7 font-normal">
                        BDT 30,000
                      </p>
                    </div>
                    <span className="grid justify-end text-sm leading-relaxed">
                      (3 X 30,000)
                    </span>
                  </li>
                  <li className="space-y-0.5">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-normal leading-6">
                        Taxes + Others
                      </p>
                      <p className="text-base leading-7 font-normal">
                        BDT 2,000
                      </p>
                    </div>
                    <span className="grid justify-end text-sm leading-relaxed">
                      (3 X 2,000)
                    </span>
                  </li>
                </ul>
                <div className="text-t-600 text-sm lg:text-base leading-normal px-[10px] py-[5px] rounded-sm bg-p-300">
                  Adult (1 Traveller)
                </div>
                <ul className="px-2.5 py-5 space-y-2 text-t-600 font-medium leading-6">
                  <li className="space-y-0.5">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-normal leading-6">Base Fare</p>
                      <p className="text-base leading-7 font-normal">
                        BDT 30,000
                      </p>
                    </div>
                    <span className="grid justify-end text-sm leading-relaxed">
                      (3 X 30,000)
                    </span>
                  </li>
                  <li className="space-y-0.5">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-normal leading-6">
                        Taxes + Others
                      </p>
                      <p className="text-base leading-7 font-normal">
                        BDT 2,000
                      </p>
                    </div>
                    <span className="grid justify-end text-sm leading-relaxed">
                      (3 X 2,000)
                    </span>
                  </li>
                  <li className="flex justify-between items-center pt-2">
                    <p className="text-base font-normal leading-6">
                      Sub - Total (3 pax)
                    </p>
                    <p className="text-base leading-6 text-t-600">BDT 96,000</p>
                  </li>
                </ul>
                <div className="flex justify-between items-center text-white text-base lg:text-base font-semibold leading-normal px-[11px] py-2.5 rounded-sm bg-primary">
                  <p className="text-sm leading-snug">Pay For (3 pax)</p>
                  <p className="text-base leading-snug">
                    BDT <span>96,000</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default FlightPage;
