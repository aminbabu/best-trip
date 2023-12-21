"use client";

import { Button } from "@/components/ui/button";
import { ArrowIcon, SearchIcon } from "@/components/icons/svgr";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Fragment, useState } from "react";
import ScrollArea from "@/components/global/ScrollArea";
import { cn } from "@/lib/utils";
import Counter from "@/components/global/Counter";
import Link from "next/link";

const schedules = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Auguest",
  "September",
  "October",
  "November",
  "December",
];
const types = ["Economy", "Standard", "Premium"];
const durations = ["5 Days", "10 Days", "15 Days", "20 Days", "25 Days"];
const travellers = [
  {
    id: 1,
    title: "Adults",
    description: "12+ years",
    count: 0,
  },
  {
    id: 2,
    title: "Children",
    description: "2-12 years",
    count: 0,
  },
  {
    id: 3,
    title: "Infants",
    description: "0-2 years",
    count: 0,
  },
];

const UmrahTabpane = ({ icon, className }) => {
  const [open, setOpen] = useState(0);
  const [schedule, setSchedule] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [traveller, setTraveller] = useState(0);
  const [travellerCounts, setTravellerCounts] = useState(travellers);

  const handleDropdown = (index) => {
    setOpen(index);
  };

  const handleCounterIncrement = (id) => {
    const newTravellers = travellerCounts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count > 0 ? item.count + 1 : 1,
        };
      }
      return item;
    });
    setTraveller(newTravellers.reduce((acc, item) => acc + item.count, 0));
    setTravellerCounts(newTravellers);
  };

  const handleCounterDecrement = (id) => {
    const newTravellers = travellerCounts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count > 0 ? item.count - 1 : 0,
        };
      }
      return item;
    });
    setTraveller(newTravellers.reduce((acc, item) => acc + item.count, 0));
    setTravellerCounts(newTravellers);
  };

  const handleFilter = () => {
    console.log(schedule, type, duration, traveller);
  };

  return (
    <div
      className={cn(
        "bg-white flex flex-col lg:flex-row gap-x-4 gap-y-5 lg:gap-x-5",
        className
      )}
    >
      <DropdownMenu
        open={open === 1}
        onOpenChange={(state) => handleDropdown(state ? 1 : 0)}
      >
        <DropdownMenuTrigger asChild className="flex-1">
          <Button
            variant="outline"
            className="flex-col items-stretch gap-y-1 text-left"
          >
            <span className="text-sm text-t-600 font-normal">
              Package Schedule
            </span>
            <span className="flex items-center justify-between gap-x-4">
              {schedule ? schedule : "Select"}
              <ArrowIcon
                className={cn("duration-300", {
                  "transform rotate-180": open === 1,
                })}
              />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="px-0 py-2 border-transparent min-w-[17rem]"
        >
          <ScrollArea className="max-h-64">
            {schedules.map((item) => (
              <DropdownMenuItem
                key={item}
                onClick={() => setSchedule(item)}
                className={cn(
                  "px-5 py-2.5 text-base text-t-700 font-medium hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer",
                  {
                    "bg-p-900 text-white": schedule === item,
                  }
                )}
              >
                {item}
              </DropdownMenuItem>
            ))}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu
        open={open === 2}
        onOpenChange={(state) => handleDropdown(state ? 2 : 0)}
      >
        <DropdownMenuTrigger asChild className="flex-1">
          <Button
            variant="outline"
            className="flex-col items-stretch gap-y-1 text-left"
          >
            <span className="text-sm text-t-600 font-normal">Package Type</span>
            <span className="flex items-center justify-between gap-x-4">
              {type ? type : "Select"}
              <ArrowIcon
                className={cn("duration-300", {
                  "transform rotate-180": open === 2,
                })}
              />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="px-0 py-2 border-transparent min-w-[17rem]"
        >
          <ScrollArea className="max-h-64">
            {types.map((item) => (
              <DropdownMenuItem
                key={item}
                className={cn(
                  "px-5 py-2.5 text-base text-t-700 font-medium hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer",
                  {
                    "bg-p-900 text-white": type === item,
                  }
                )}
                onSelect={() => setType(item)}
              >
                {item}
              </DropdownMenuItem>
            ))}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu
        open={open === 3}
        onOpenChange={(state) => handleDropdown(state ? 3 : 0)}
      >
        <DropdownMenuTrigger asChild className="flex-1">
          <Button
            variant="outline"
            className="flex-col items-stretch gap-y-1 text-left"
          >
            <span className="text-sm text-t-600 font-normal">
              Package Duration
            </span>
            <span className="flex items-center justify-between gap-x-4">
              {duration ? duration : "Select"}
              <ArrowIcon
                className={cn("duration-300", {
                  "transform rotate-180": open === 3,
                })}
              />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="px-0 py-2 border-transparent min-w-[17rem]"
        >
          <ScrollArea className="max-h-64">
            {durations.map((item) => (
              <DropdownMenuItem
                key={item}
                onSelect={() => setDuration(item)}
                className={cn(
                  "px-5 py-2.5 text-base text-t-700 font-medium hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer",
                  {
                    "bg-p-900 text-white": duration === item,
                  }
                )}
              >
                {item}
              </DropdownMenuItem>
            ))}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu
        open={open === 4}
        onOpenChange={(state) => handleDropdown(state ? 4 : 0)}
      >
        <DropdownMenuTrigger asChild className="flex-1">
          <Button
            variant="outline"
            className="flex-col items-stretch gap-y-1 text-left"
          >
            <span className="text-sm text-t-600 font-normal">Travellers</span>
            <span className="flex items-center justify-between gap-x-4">
              {traveller
                ? `${traveller} Traveller${traveller > 1 ? "s" : ""}`
                : "Select"}
              <ArrowIcon
                className={cn("duration-300", {
                  "transform rotate-180": open === 4,
                })}
              />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="px-0 py-2 border-transparent min-w-[17rem]"
        >
          <ScrollArea className="max-h-64">
            {travellerCounts.map((item) => (
              <Fragment key={item.id}>
                <Counter
                  title={item.title}
                  description={item.description}
                  count={item.count}
                  onIncrement={() => handleCounterIncrement(item.id)}
                  onDecrement={() => handleCounterDecrement(item.id)}
                />
                <DropdownMenuSeparator className="bg-border/50" />
              </Fragment>
            ))}
            <Button
              size="sm"
              onClick={() => handleDropdown(0)}
              className="px-8 py-2 mx-4 my-2"
            >
              Done
            </Button>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button size="lg" onClick={handleFilter} asChild>
        <Link href="/search/umrah">{icon ? icon : <SearchIcon />}</Link>
      </Button>
    </div>
  );
};

export default UmrahTabpane;
