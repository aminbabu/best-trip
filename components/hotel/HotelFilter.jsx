"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { StarAltIcon } from "../icons/svgr";
const mealBasis = [
  { id: 1, type: "Room Only (365)", isChecked: true },
  { id: 2, type: "Room Only (570)", isChecked: false },
  { id: 3, type: "Breakfast (350)", isChecked: false },
  { id: 4, type: "Half Bread (295)", isChecked: false },
  { id: 5, type: "Full Bread (324)", isChecked: false },
  { id: 6, type: "Dinner (2)", isChecked: false },
  { id: 7, type: "Breakfast For (6)", isChecked: false },
  { id: 8, type: "All Inclusive (20)", isChecked: false },
  { id: 9, type: "Breakfast For (1)", isChecked: false },
  { id: 10, type: "All Inclusive (2)", isChecked: false },
];

const propertyType = [
  { id: 1, type: "Hotel (1256)", isChecked: true },
  { id: 2, type: "Palace (371)", isChecked: false },
  { id: 3, type: "Resort (283)", isChecked: false },
  { id: 4, type: "Aparthotel (19)", isChecked: false },
  { id: 5, type: "Residence (123)", isChecked: false },
  { id: 6, type: "Villa (341)", isChecked: false },
  { id: 7, type: "Homes (96)", isChecked: false },
  { id: 8, type: "Aparthotel (19)", isChecked: false },
  { id: 9, type: "Palace (371)", isChecked: false },
  { id: 10, type: "Homes (96)", isChecked: false },
  { id: 11, type: "Residence (123)", isChecked: false },
  { id: 12, type: "Resort (283)", isChecked: false },
  { id: 13, type: "Villa (341)", isChecked: false },
];

const HotelFilter = () => {
  const [minPrice, setMinPrice] = useState(9575);
  const [defaultPrice, setDefaultPrice] = useState(25575);
  const [maxPrice, setMaxPrice] = useState(110350);
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
          <h4 className="text-t-800 font-medium mb-4">Price</h4>
          <div>
            <Slider
              className="h-3"
              defaultValue={[defaultPrice]}
              max={maxPrice}
              min={minPrice}
              step={1}
              onValueChange={(value) => setDefaultPrice(value)}
            />
            <div className="flex justify-between items-center mt-2.5 text-t-700 text-sm font-medium leading-relaxed">
              <p>BDT {minPrice}</p>
              <p>BDT {maxPrice}</p>
            </div>
          </div>
        </div>
        {/* departure time */}
        <div className="py-1.5">
          <h4 className="text-t-800 font-medium mb-4">Departure Time</h4>
          <div className="space-y-2.5">
            <div className="items-center flex space-x-2 col-span-1">
              <Checkbox checked className="h-4 w-4" id="stop1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="stop1"
                  className="flex items-center gap-1 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
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
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 col-span-1">
              <Checkbox className="h-4 w-4" id="stop1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="stop1"
                  className="flex items-center gap-1 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
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
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 col-span-1">
              <Checkbox className="h-4 w-4" id="stop1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="stop1"
                  className="flex items-center gap-1 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
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
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 col-span-1">
              <Checkbox className="h-4 w-4" id="stop1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="stop1"
                  className="flex items-center gap-1 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <StarAltIcon
                    className="fill-[#FF7B39] h-[18px] w-[18px]"
                    viewBox="0 0 19 19"
                  />
                  <StarAltIcon
                    className="fill-[#FF7B39] h-[18px] w-[18px]"
                    viewBox="0 0 19 19"
                  />
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 col-span-1">
              <Checkbox className="h-4 w-4" id="stop1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="stop1"
                  className="flex items-center gap-1 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <StarAltIcon
                    className="fill-[#FF7B39] h-[18px] w-[18px]"
                    viewBox="0 0 19 19"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Meal basis  */}
        <div className="py-1.5 mb-4">
          <h4 className="text-t-800 font-medium mb-4">Meal Basis</h4>
          <div className="space-y-3 grid">
            {mealBasis.map((meal) => (
              <div
                key={meal.id}
                className="items-center flex space-x-2 col-span-1"
              >
                <Checkbox
                  checked={meal.isChecked}
                  className="h-4 w-4"
                  id="stop1"
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="stop1"
                    className="flex items-center gap-2 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {meal.type}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* property type */}
        <div className="py-1.5">
          <h4 className="text-t-800 font-medium mb-4">Property Type</h4>
          <div className="space-y-2.5 max-h-[212px] overflow-auto scrollbar-thin">
            {propertyType.map((property) => (
              <div
                key={property.id}
                className="items-center flex space-x-2 col-span-1"
              >
                <Checkbox
                  checked={property.isChecked}
                  className="h-4 w-4"
                  id="stop1"
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="stop1"
                    className="flex items-center gap-2 text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {property.type}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button className="flex w-full p-2 text-sm font-semibold mt-6">
          Clear Filter
        </Button>
      </div>
    </Card>
  );
};

export default HotelFilter;
