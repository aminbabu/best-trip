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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const types = ["Economy", "Standard", "Premium"];
const durations = ["5 Days", "10 Days", "15 Days", "20 Days", "25 Days"];
const travellers = [
  {
    id: 1,
    title: "Adults",
    description: "12+ years",
    count: 1,
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

const destinations = [
  {
    id: 1,
    city: "Dhaka",
    country: "Bangladesh",
    airport: "Hazrat Shahjalal International Airport",
    code: "DAC",
  },
  {
    id: 2,
    city: "Cox's Bazar",
    country: "Bangladesh",
    airport: "Hazrat Shahjalal International Airport",
    code: "CXB",
  },
  {
    id: 3,
    city: "Chittagong",
    country: "Bangladesh",
    airport: "Shah Amanat International Airport",
    code: "CGP",
  },
  {
    id: 4,
    city: "Sylhet",
    country: "Bangladesh",
    airport: "Osmani International Airport",
    code: "ZYP",
  },
  {
    id: 5,
    city: "Saidpur",
    country: "Bangladesh",
    airport: "Saidpur Airport",
    code: "SPD",
  },
  {
    id: 6,
    city: "Jashore",
    country: "Bangladesh",
    airport: "Jashore Airport",
    code: "JSR",
  },
];

const flightTypes = ["One way", "Round trip", "Multi - city"];

const UmrahFlightTabpane = ({ icon, disabled, className }) => {
  const [open, setOpen] = useState(0);
  const [fromDestination, setFromDestination] = useState("");
  const [toDestination, setToDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [duration, setDuration] = useState("");
  const [travellerCounts, setTravellerCounts] = useState(travellers);
  const [traveller, setTraveller] = useState(1);
  const [flightType, setFlightType] = useState("One way");
  const [classType, setClassType] = useState("Economy");
  const [errors, setErrors] = useState(null);

  const [isDisabled, setIsDisabled] = useState(disabled);
  const [isFlightTypeOpen, setIsFlightTypeOpen] = useState(false);
  const [isTravellersOpen, setIsTravellersOpen] = useState(false);
  const [isFromDestinationOpen, setIsFromDestinationOpen] = useState(false);
  const [isToDestinationOpen, setIsToDestinationOpen] = useState(false);
  const [isDepartureDateOpen, setIsDepartureDateOpen] = useState("");
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
    console.log(fromDestination, type, duration, traveller);
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
            <p className="text-sm lg:text-lg text-t-700">{flightType}</p>
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
            <p className="text-sm lg:text-lg text-t-700">
              {traveller > 1
                ? `${traveller} Traveler`
                : `${traveller} Travelers`}
              , {classType}
            </p>
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
            {travellerCounts.map((item) => (
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
            {/* class type in travellers */}
            <div className="text-primary font-semibold text-lg p-4 mb-1">
              Class
            </div>
            <RadioGroup
              className="px-4 pb-6 grid-cols-5"
              defaultValue={classType}
              onValueChange={(value) => setClassType(value)}
            >
              <div className="flex items-center space-x-2 col-span-2">
                <RadioGroupItem value="Economy" id="Economy" />
                <Label className="text-xs font-normal" htmlFor="Economy">
                  Economy
                </Label>
              </div>
              <div className="flex items-center space-x-2 col-span-3">
                <RadioGroupItem
                  value="Premium - economy"
                  id="Premium - economy"
                />
                <Label
                  className="text-xs font-normal"
                  htmlFor="Premium - economy"
                >
                  Premium Economy
                </Label>
              </div>
              <div className="flex items-center space-x-2 col-span-2">
                <RadioGroupItem value="First - class" id="First - class" />
                <Label className="text-xs font-normal" htmlFor="First - class">
                  First Class
                </Label>
              </div>
              <div className="flex items-center space-x-2 col-span-3">
                <RadioGroupItem value="Business" id="Business" />
                <Label className="text-xs font-normal" htmlFor="Business">
                  Business
                </Label>
              </div>
            </RadioGroup>
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
        {/* from destination */}
        <Popover
          open={isFromDestinationOpen}
          onOpenChange={() => {
            setErrors((prevState) => ({ ...prevState, schedule: null }));
            setIsFromDestinationOpen(!isFromDestinationOpen);
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
                From
              </span>
              <span className="text-sm lg:text-base flex flex-wrap items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize">
                <p className=" lg:max-w-[195px] truncate">
                  {fromDestination ? fromDestination.city : "Dhaka"}-
                  {fromDestination
                    ? fromDestination.airport
                    : "Hazrat Shahjalal International Airport"}
                </p>
                {/* <ArrowIcon className="hidden lg:inline-block" /> */}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="px-0 py-2 border-transparent min-w-[360px]"
          >
            <ScrollArea className="max-h-64">
              <ul>
                {destinations.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      setFromDestination(item);
                      setIsFromDestinationOpen(false);
                    }}
                    className={cn(
                      "flex justify-between items-center px-5 py-2.5 text-sm lg:text-base text-t-700 hover:bg-p-900/5 focus:bg-p-900/5 rounded-l cursor-pointer capitalize",
                      {
                        "bg-p-300": fromDestination === item,
                      }
                    )}
                  >
                    <div className="grid font-medium">
                      {item.city}, {item.country}
                      <span className="text-[8px] font-normal leading-normal">
                        {item.airport}
                      </span>
                    </div>
                    <div className="text-sm px-2.5 py-1 bg-p-900 text-white rounded font-semibold">
                      {item.code}
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </PopoverContent>
        </Popover>
        {/* to destination */}
        <Popover
          open={isToDestinationOpen}
          onOpenChange={() => {
            setErrors((prevState) => ({ ...prevState, type: null }));
            setIsToDestinationOpen(!isToDestinationOpen);
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
                To
              </span>
              <span className="text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize">
                <p className=" lg:max-w-[195px] truncate">
                  {toDestination ? toDestination.city : "Cox's Bazar"}-
                  {toDestination
                    ? toDestination.airport
                    : "Shah Amanat International Airport"}
                </p>
                {/* <ArrowIcon className="hidden lg:inline-block" /> */}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="px-0 py-2 border-transparent min-w-[308px]"
          >
            <ScrollArea className="max-h-64">
              <ul>
                {destinations.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      setToDestination(item);
                      setIsToDestinationOpen(false);
                    }}
                    className={cn(
                      "flex justify-between items-center px-5 py-2.5 text-sm lg:text-base text-t-700 hover:bg-p-900/5 focus:bg-p-900/5 rounded-l cursor-pointer capitalize",
                      {
                        "bg-p-300": fromDestination === item,
                      }
                    )}
                  >
                    <div className="grid font-medium">
                      {item.city}, {item.country}
                      <span className="text-[8px] font-normal leading-normal">
                        {item.airport}
                      </span>
                    </div>
                    <div className="text-sm px-2.5 py-1 bg-p-900 text-white rounded font-semibold">
                      {item.code}
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </PopoverContent>
        </Popover>
        {/* departure date */}
        <Popover
          open={isDepartureDateOpen}
          onOpenChange={() => {
            setErrors((prevState) => ({ ...prevState, duration: null }));
            setIsDepartureDateOpen(!isDepartureDateOpen);
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
                Depaerture Date
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
        {/* return date */}
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
        <Button size="lg" onClick={handleFilter} asChild>
          <Link href="/search/umrah">{icon ? icon : <SearchIcon />}</Link>
        </Button>
      </div>

      {/* <UnderDevelopment /> */}
    </div>
  );
};

export default UmrahFlightTabpane;
