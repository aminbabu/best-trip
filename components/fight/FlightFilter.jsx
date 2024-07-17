"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import {
  HalfSunIcon,
  MoonStarsIcon,
  SunHorizonIcon,
  SunIcon,
} from "../icons/svgr";
import { Button } from "../ui/button";

const FlightFilter = () => {
  const [checkedTime1, setCheckedTime1] = useState(true);
  const [checkedTime2, setCheckedTime2] = useState(false);
  const [checkedTime3, setCheckedTime3] = useState(false);
  const [checkedTime4, setCheckedTime4] = useState(false);

  return (
    <Card className="col-span-12 xl:col-span-4 h-fit border-transparent relative overflow-hidden rounded-sm p-5">
      <div className="pb-5">
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
        {/* departure time */}
        <div className="py-1.5">
          <h4 className="text-t-800 font-medium mb-4">Departure Time</h4>
          <div className="space-y-2.5">
            <div
              className={`items-center flex space-x-2 p-1.5 ${checkedTime1 ? "bg-p-300" : ""}`}
            >
              <Checkbox
                checked={checkedTime1}
                onCheckedChange={() => setCheckedTime1(!checkedTime1)}
                className="h-4 w-4"
                id="time1"
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="time1"
                  className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <SunIcon />{" "}
                  <span className="text-xs font-normal">06:00 - 11:59</span>
                </label>
              </div>
            </div>
            <div
              className={`items-center flex space-x-2 p-1.5 ${checkedTime2 ? "bg-p-300" : ""}`}
            >
              <Checkbox
                className="h-4 w-4"
                id="time2"
                checked={checkedTime2}
                onCheckedChange={() => setCheckedTime2(!checkedTime2)}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="time2"
                  className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <SunHorizonIcon />{" "}
                  <span className="text-xs font-normal">12:00 - 17:59</span>
                </label>
              </div>
            </div>
            <div
              className={`items-center flex space-x-2 p-1.5 ${checkedTime3 ? "bg-p-300" : ""}`}
            >
              <Checkbox
                className="h-4 w-4"
                id="time3"
                checked={checkedTime3}
                onCheckedChange={() => setCheckedTime3(!checkedTime3)}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="time3"
                  className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <HalfSunIcon />{" "}
                  <span className="text-xs font-normal">18:00 - 23:59</span>
                </label>
              </div>
            </div>
            <div
              className={`items-center flex space-x-2 p-1.5 ${checkedTime4 ? "bg-p-300" : ""}`}
            >
              <Checkbox
                className="h-4 w-4"
                id="time4"
                checked={checkedTime4}
                onCheckedChange={() => setCheckedTime4(!checkedTime4)}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="time4"
                  className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <MoonStarsIcon />{" "}
                  <span className="text-xs font-normal">01:00 - 05.59</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* stops  */}
        <div className="py-1.5 mb-4">
          <h4 className="text-t-800 font-medium mb-4">Stops</h4>
          <div className="space-y-3 grid grid-cols-2">
            <div className="items-center flex space-x-2 col-span-1">
              <Checkbox checked className="h-4 w-4" id="stop1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="stop1"
                  className="flex items-center gap-2 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Direct
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 col-span-1">
              <Checkbox className="h-4 w-4" id="stop2" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="stop2"
                  className="flex items-center gap-2 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  One Stop
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 col-span-1">
              <Checkbox className="h-4 w-4" id="stop3" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="stop3"
                  className="flex items-center gap-2 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Two Stop
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 col-span-1">
              <Checkbox className="h-4 w-4" id="stop4" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="stop4"
                  className="flex items-center gap-2 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Two Stop+
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* refundable  */}
        <div className="py-1.5">
          <h4 className="text-t-800 font-medium mb-4">Refundable</h4>
          <div className="space-y-2.5">
            <div className="items-center flex space-x-2 p-1.5 checked:bg-p-300 hover:bg-p-300">
              <Checkbox checked className="h-4 w-4" id="refund1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="refund1"
                  className="flex items-center gap-2 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Partially Refundable
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 p-1.5 checked:bg-p-300 hover:bg-p-300">
              <Checkbox className="h-4 w-4" id="refund2" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="refund2"
                  className="flex items-center gap-2 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Refundable
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 p-1.5 checked:bg-p-300 hover:bg-p-300">
              <Checkbox className="h-4 w-4" id="refund3" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="refund3"
                  className="flex items-center gap-2 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Non Refundable
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* airlines */}
        <div className="py-1.5">
          <h4 className="text-t-800 font-medium mb-4">Airlines</h4>
          <div className="space-y-2.5 max-h-[116px] overflow-auto scrollbar-thin">
            <div className="items-center flex space-x-2 p-1.5 checked:bg-p-300 hover:bg-p-300">
              <Checkbox checked className="h-4 w-4" id="air1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="air1"
                  className="flex items-center gap-2 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Novoair
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 p-1.5 checked:bg-p-300 hover:bg-p-300">
              <Checkbox className="h-4 w-4" id="air4" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="air4"
                  className="flex items-center gap-2 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Biman Bangladesh Airlines
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 p-1.5 checked:bg-p-300 hover:bg-p-300">
              <Checkbox className="h-4 w-4" id="air2" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="air2"
                  className="flex items-center gap-2 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Air Astra
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 p-1.5 checked:bg-p-300 hover:bg-p-300">
              <Checkbox className="h-4 w-4" id="air3" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="air3"
                  className="flex items-center gap-2 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  US - Bangla Airlines
                </label>
              </div>
            </div>
          </div>
        </div>
        <Button className="flex w-full p-2 text-sm font-semibold mt-6">
          Clear Filter
        </Button>
      </div>
    </Card>
  );
};

export default FlightFilter;
