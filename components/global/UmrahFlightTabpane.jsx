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
import UnderDevelopment from "./UnderDevelopment";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

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

const flightTypes = ["One way", "Round trip", "Multi - city"];

const UmrahFlightTabpane = ({ icon, disabled, className }) => {
  const [open, setOpen] = useState(0);
  const [schedule, setSchedule] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [traveller, setTraveller] = useState(0);
  const [flightType, setFlightType] = useState("One way");
  const [travellerCounts, setTravellerCounts] = useState(travellers);
  const [isDisabled, setIsDisabled] = useState(disabled);
  const [errors, setErrors] = useState(null);

  const [isFlightTypeOpen, setIsFlightTypeOpen] = useState(false);
  const [isTravellersOpen, setIsTravellersOpen] = useState(false);
  const [isPackScheduleOpen, setIsPackScheduleOpen] = useState(false);
  const [isPackTypeOpen, setIsPackTypeOpen] = useState(false);
  const [isPackDurationOpen, setIsPackDurationOpen] = useState(false);

  const handleDropdown = (index) => {
    setOpen(index);
  };

  const handleDisableFields = () => {
    setIsDisabled(false);
  };

  const handleFlightType = () => {
    setIsFlightTypeOpen(!isFlightTypeOpen);
  };

  const handleTravellers = () => {
    setIsTravellersOpen(!isTravellersOpen);
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
        "bg-white  px-2 py-4 xs:px-4 xs:py-6 lg:px-6 sm:py-8 md:py-10 lg:py-12 rounded-md shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <div className="flex mb-7 gap-7">
        {/* flight type */}
        <Popover open={isFlightTypeOpen} onOpenChange={handleFlightType}>
          <PopoverTrigger className="flex items-center gap-3">
            <p className="text-lg text-t-700">{flightType}</p>
            <ArrowIcon
              className={`${isFlightTypeOpen && "rotate-180"} trasition duration-300 fill-p-900`}
            />
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="px-0 py-2 border-transparent w-[134px] drop-shadow"
          >
            <ul>
              {flightTypes.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setFlightType(item);
                    setIsFlightTypeOpen(false);
                  }}
                  className={cn(
                    "px-2.5 py-1.5 text-sm lg:text-base text-t-700 hover:bg-p-900 focus:bg-p-900 hover:text-white focus:text-white rounded-none cursor-pointer",
                    {
                      "bg-p-900 text-white": duration === item,
                    }
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
        {/* travellers  */}
        <Popover open={isTravellersOpen} onOpenChange={handleTravellers}>
          <PopoverTrigger className="flex items-center gap-3">
            <p className="text-lg text-t-700">Travellers</p>
            <ArrowIcon
              className={`${isTravellersOpen && "rotate-180"} trasition duration-300 fill-p-900`}
            />
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="px-0 py-2 border-transparent min-w-[308px]"
          >
            <div className="text-primary font-semibold text-lg px-4 pt-1 pb-5 mb-1">
              Travelers
            </div>
            {travellers.map((item) => (
              <Fragment key={item.id}>
                <Counter
                  title={item.title}
                  description={item.description}
                  count={item.count}
                  onIncrement={() => handleCounterIncrement(item.id)}
                  onDecrement={() => handleCounterDecrement(item.id)}
                />
                <DropdownMenuSeparator className="bg-border/25 h-[1px]" />
              </Fragment>
            ))}
            <div className="text-primary font-semibold text-lg px-4 pt-1 pb-5 mb-1">
              Class
            </div>
            <Button
              size="sm"
              onClick={() => setIsTravellersOpen(false)}
              className="px-8 py-2 mx-4 my-4 text-sm lg:text-base"
            >
              Done
            </Button>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-4 gap-y-5 lg:gap-x-5">
        {/* <Popover
          open={isPackScheduleOpen}
          onOpenChange={() => {
            setErrors((prevState) => ({ ...prevState, schedule: null }));
            setIsPackScheduleOpen(!isPackScheduleOpen);
          }}
        >
          <PopoverTrigger asChild className="flex-1" disabled={isDisabled}>
            <Button
              variant="outline"
              className={cn(
                "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border",
                {
                  "border-p-900 text-p-900": errors?.schedule,
                }
              )}
            >
              <span className="text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal">
                Package Schedule
              </span>
              <span className="text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize">
                {schedule ? schedule : "Select"}
                <ArrowIcon className="hidden lg:inline-block" />
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="px-0 py-2 border-transparent min-w-[308px]"
          >
            <ScrollArea className="max-h-64">
              <ul>
                {schedules.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setSchedule(item);
                      setIsPackScheduleOpen(false);
                    }}
                    className={cn(
                      "px-5 py-2.5 text-sm lg:text-base text-t-700 hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer capitalize",
                      {
                        "bg-p-900 text-white": schedule === item,
                      }
                    )}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </PopoverContent>
        </Popover>
        <Popover
          open={isPackTypeOpen}
          onOpenChange={() => {
            setErrors((prevState) => ({ ...prevState, type: null }));
            setIsPackTypeOpen(!isPackTypeOpen);
          }}
        >
          <PopoverTrigger asChild className="flex-1" disabled={isDisabled}>
            <Button
              variant="outline"
              className={cn(
                "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border",
                {
                  "border-p-900 text-p-900": errors?.type,
                }
              )}
            >
              <span className="text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal">
                Package Type
              </span>
              <span className="text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize">
                {type ? type : "Select"}
                <ArrowIcon className="hidden lg:inline-block" />
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="px-0 py-2 border-transparent min-w-[308px]"
          >
            <ScrollArea className="max-h-64">
              <ul>
                {types.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "px-5 py-2.5 text-sm lg:text-base text-t-700 hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer capitalize",
                      {
                        "bg-p-900 text-white": type === item,
                      }
                    )}
                    onClick={() => {
                      setType(item);
                      setIsPackTypeOpen(false);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </PopoverContent>
        </Popover>
        <Popover
          open={isPackDurationOpen}
          onOpenChange={() => {
            setErrors((prevState) => ({ ...prevState, duration: null }));
            setIsPackDurationOpen(!isPackDurationOpen);
          }}
        >
          <PopoverTrigger asChild className="flex-1" disabled={isDisabled}>
            <Button
              variant="outline"
              className={cn(
                "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border",
                {
                  "border-p-900 text-p-900": errors?.duration,
                }
              )}
            >
              <span className="text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal">
                Package Duration
              </span>
              <span className="text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize">
                {duration ? `${duration} days` : "Select"}
                <ArrowIcon className="hidden lg:inline-block" />
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="px-0 py-2 border-transparent min-w-[308px]"
          >
            <ScrollArea className="max-h-64">
              <ul>
                {durations.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setDuration(item);
                      setIsPackDurationOpen(false);
                    }}
                    className={cn(
                      "px-5 py-2.5 text-sm lg:text-base text-t-700 hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer",
                      {
                        "bg-p-900 text-white": duration === item,
                      }
                    )}
                  >
                    {item} Days
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </PopoverContent>
        </Popover>
        <Popover
          open={isTravellersOpen}
          onOpenChange={() => {
            setErrors((prevState) => ({ ...prevState, travellers: null }));
            setIsTravellersOpen(!isTravellersOpen);
          }}
        >
          <PopoverTrigger asChild className="flex-1" disabled={isDisabled}>
            <Button
              variant="outline"
              className={cn(
                "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border",
                {
                  "border-p-900 text-p-900": errors?.travellers,
                }
              )}
            >
              <span className="text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal">
                Travellers
              </span>
              <span className="text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize">
                {travellers.some((item) => item.count > 0)
                  ? `${travellers.reduce(
                      (acc, item) => acc + item.count,
                      0
                    )} Traveller${
                      travellers.reduce((acc, item) => acc + item.count, 0) > 1
                        ? "s"
                        : ""
                    }`
                  : "Select"}
                <ArrowIcon className="hidden lg:inline-block" />
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="px-0 py-2 border-transparent min-w-[308px]"
          >
            <div className="text-primary font-semibold text-lg px-4 pt-1 pb-5 mb-1">
              Travelers
            </div>
            {travellers.map((item) => (
              <Fragment key={item.id}>
                <Counter
                  title={item.title}
                  description={item.description}
                  count={item.count}
                  onIncrement={() => handleCounterIncrement(item.id)}
                  onDecrement={() => handleCounterDecrement(item.id)}
                />
                <DropdownMenuSeparator className="bg-border/25 h-[1px]" />
              </Fragment>
            ))}
            <Button
              size="sm"
              onClick={() => setIsTravellersOpen(false)}
              className="px-8 py-2 mx-4 my-4 text-sm lg:text-base"
            >
              Done
            </Button>
          </PopoverContent>
        </Popover> */}
        <Button size="lg" onClick={handleFilter} asChild>
          <Link href="/search/umrah">{icon ? icon : <SearchIcon />}</Link>
        </Button>
      </div>

      {/* <UnderDevelopment /> */}
    </div>
  );
};

export default UmrahFlightTabpane;
