"use client";

import { Button } from "@/components/ui/button";
import { ArrowIcon, SearchIcon } from "../icons/svgr";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import ScrollArea from "@/components/global/ScrollArea";
import { cn } from "@/lib/utils";

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

const UmrahTabpane = () => {
  const [open, setOpen] = useState(0);
  const [schedule, setSchedule] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [travellers, setTravellers] = useState(0);

  const handleOpen = (index) => {
    setOpen(index);
  };

  return (
    <div className="py-4 flex flex-col lg:flex-row gap-x-4 gap-y-5 lg:gap-x-5">
      <DropdownMenu onOpenChange={(state) => handleOpen(state ? 1 : 0)}>
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
          className="px-0 py-2 border-transparent min-w-[15rem]"
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
                onSelect={() => setSchedule(item)}
              >
                {item}
              </DropdownMenuItem>
            ))}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu onOpenChange={(state) => handleOpen(state ? 2 : 0)}>
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
          className="px-0 py-2 border-transparent min-w-[15rem]"
        >
          <ScrollArea className="max-h-64">
            {types.map((item) => (
              <DropdownMenuItem
                key={item}
                onClick={() => setSchedule(item)}
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
      <DropdownMenu onOpenChange={(state) => handleOpen(state ? 3 : 0)}>
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
          className="px-0 py-2 border-transparent min-w-[15rem]"
        >
          <ScrollArea className="max-h-64">
            {durations.map((item) => (
              <DropdownMenuItem
                key={item}
                onClick={() => setSchedule(item)}
                className={cn(
                  "px-5 py-2.5 text-base text-t-700 font-medium hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer",
                  {
                    "bg-p-900 text-white": duration === item,
                  }
                )}
                onSelect={() => setDuration(item)}
              >
                {item}
              </DropdownMenuItem>
            ))}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu onOpenChange={(state) => handleOpen(state ? 4 : 0)}>
        <DropdownMenuTrigger asChild className="flex-1">
          <Button
            variant="outline"
            className="flex-col items-stretch gap-y-1 text-left"
          >
            <span className="text-sm text-t-600 font-normal">Travelers</span>
            <span className="flex items-center justify-between gap-x-4">
              {travellers ? travellers : "Select"}
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
          className="px-0 py-2 border-transparent min-w-[15rem]"
        >
          <ScrollArea className="max-h-64">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            nisi odio dolores esse quibusdam. Esse sunt odit dolorem natus, ea
            illum ut neque minus vel nam fuga eaque veritatis voluptas?
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button size="lg">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default UmrahTabpane;
