"use client";

import { useState } from "react";
import { ArrowIcon, BalakaIcon, LocationIcon, PlaneIcon } from "../icons/svgr";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Collapsible, CollapsibleTrigger } from "../ui/collapsible";
import { Separator } from "../ui/separator";
import CardCollapsibleContent from "../visa/CollapsibleContent";
import Link from "next/link";

const FlightCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="border-transparent relative overflow-hidden">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardContent className="p-0 xl:leading-8 flex flex-col md:flex-row lg:items-center justify-between gap-6 lg:gap-9">
          <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-2">
            <div className="w-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-2">
                <div className="flex-shrink-0 flex md:flex-col items-center gap-2 p-4 sm:p-5 lg:pl-10 lg:pr-6 lg:py-[30px]">
                  <BalakaIcon
                    className="text-primary h-[34px] w-[34px]"
                    viewBox="0 0 51 51"
                  />
                  <div className="md:text-center text-xs">
                    <div className="text-t-900 leading-5">Biman Bangladesh</div>
                    <div className="text-t-800 leading-5">BG611</div>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center gap-x-4 xl:gap-x-10 px-3 border-r border-[#F5F5F5]">
                  <div className="text-right space-y-1.5">
                    <p className="text-xs text-t-800">Dhaka</p>
                    <div className="text-xs font-medium sm:text-base text-t-900">
                      DAC 08:00
                    </div>
                    <p className="text-xs text-t-800">Fri, 15 Oct 2024</p>
                  </div>
                  <div className="text-center space-y-1.5">
                    <p className="text-xs text-t-800">0h 46m</p>
                    <div className="flex items-center gap-x-2 md:gap-x-4">
                      <PlaneIcon
                        className="text-primary w-4 h-4 rotate-90"
                        viewBox="0 0 14 14"
                      />
                      <Separator className="flex-1 bg-t-800 w-10 md:w-[68px]" />
                      <LocationIcon
                        className="text-primary w-4 h-4"
                        viewBox="0 0 14 14"
                      />
                    </div>
                    <p className="text-xs text-t-800">(Non Stop)</p>
                  </div>
                  <div className="text-left space-y-1.5">
                    <p className="text-xs text-t-800">Chittagong</p>
                    <div className="text-xs font-medium sm:text-base text-t-900">
                      CGP 08:45
                    </div>
                    <p className="text-xs text-t-800">Fri, 15 Oct 2024</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-2">
                <div className="flex-shrink-0 flex md:flex-col items-center gap-2 p-4 sm:p-5 lg:pl-10 lg:pr-6 lg:py-[30px]">
                  <BalakaIcon
                    className="text-primary h-[34px] w-[34px]"
                    viewBox="0 0 51 51"
                  />
                  <div className="md:text-center text-xs">
                    <div className="text-t-900 leading-5">Biman Bangladesh</div>
                    <div className="text-t-800 leading-5">BG611</div>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center gap-x-4 xl:gap-x-10 px-3 border-r border-[#F5F5F5]">
                  <div className="text-right space-y-1.5">
                    <p className="text-xs text-t-800">Dhaka</p>
                    <div className="text-xs font-medium sm:text-base text-t-900">
                      DAC 08:00
                    </div>
                    <p className="text-xs text-t-800">Fri, 15 Oct 2024</p>
                  </div>
                  <div className="text-center space-y-1.5">
                    <p className="text-xs text-t-800">0h 46m</p>
                    <div className="flex items-center gap-x-2 md:gap-x-4">
                      <PlaneIcon
                        className="text-primary w-4 h-4 rotate-90"
                        viewBox="0 0 14 14"
                      />
                      <Separator className="flex-1 bg-t-800 w-10 md:w-[68px]" />
                      <LocationIcon
                        className="text-primary w-4 h-4"
                        viewBox="0 0 14 14"
                      />
                    </div>
                    <p className="text-xs text-t-800">(Non Stop)</p>
                  </div>
                  <div className="text-left space-y-1.5">
                    <p className="text-xs text-t-800">Chittagong</p>
                    <div className="text-xs font-medium sm:text-base text-t-900">
                      CGP 08:45
                    </div>
                    <p className="text-xs text-t-800">Fri, 15 Oct 2024</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-2">
                <div className="flex-shrink-0 flex md:flex-col items-center gap-2 p-4 sm:p-5 lg:pl-10 lg:pr-6 lg:py-[30px]">
                  <BalakaIcon
                    className="text-primary h-[34px] w-[34px]"
                    viewBox="0 0 51 51"
                  />
                  <div className="md:text-center text-xs">
                    <div className="text-t-900 leading-5">Biman Bangladesh</div>
                    <div className="text-t-800 leading-5">BG611</div>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center gap-x-4 xl:gap-x-10 px-3 border-r border-[#F5F5F5]">
                  <div className="text-right space-y-1.5">
                    <p className="text-xs text-t-800">Dhaka</p>
                    <div className="text-xs font-medium sm:text-base text-t-900">
                      DAC 08:00
                    </div>
                    <p className="text-xs text-t-800">Fri, 15 Oct 2024</p>
                  </div>
                  <div className="text-center space-y-1.5">
                    <p className="text-xs text-t-800">0h 46m</p>
                    <div className="flex items-center gap-x-2 md:gap-x-4">
                      <PlaneIcon
                        className="text-primary w-4 h-4 rotate-90"
                        viewBox="0 0 14 14"
                      />
                      <Separator className="flex-1 bg-t-800 w-10 md:w-[68px]" />
                      <LocationIcon
                        className="text-primary w-4 h-4"
                        viewBox="0 0 14 14"
                      />
                    </div>
                    <p className="text-xs text-t-800">(Non Stop)</p>
                  </div>
                  <div className="text-left space-y-1.5">
                    <p className="text-xs text-t-800">Chittagong</p>
                    <div className="text-xs font-medium sm:text-base text-t-900">
                      CGP 08:45
                    </div>
                    <p className="text-xs text-t-800">Fri, 15 Oct 2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 flex md:flex-col items-center gap-x-4 p-4 sm:p-5 lg:pl-6 lg:pr-10 lg:py-[30px]">
              <p className="font-medium md:mb-2.5">BDT 3,35,000</p>
              <div>
                <Button
                  size="sm"
                  className="font-semibold text-sm px-[14px] py-2 rounded"
                  href={`/flight/${data.id}`}
                  asChild
                >
                  <Link>Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <div className="grid grid-cols-9 col-span-1 gap-2 lg:gap-6 px-5 h-[45px] text-xs lg:text-sm font-medium border-t border-[#F5F5F5]">
          <div className="lg:col-span-2"></div>
          <div className="lg:col-span-2"></div>
          <div className="lg:col-span-1"></div>

          <CollapsibleTrigger asChild>
            <Button className="col-span-9 lg:col-span-2 inline-flex items-center justify-center gap-2.5 cursor-pointer text-t-800 bg-transparent hover:bg-transparent p-0">
              {isOpen ? "Hide Details" : "Flight Details"}
              <ArrowIcon
                className={`text-primary fill-p-900 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </CollapsibleTrigger>

          <div className="lg:col-span-2"></div>
        </div>
        <CardCollapsibleContent />
      </Collapsible>
    </Card>
  );
};

export default FlightCard;
