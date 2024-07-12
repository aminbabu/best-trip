"use client";

import {
  ArrowIcon,
  CalenderTwoLineIcon,
  CrossIcon,
  PlusCircleIcon,
  SearchIcon,
} from "@/components/icons/svgr";
import { Button } from "@/components/ui/button";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Fragment, useState } from "react";
import ScrollArea from "@/components/global/ScrollArea";
import { cn } from "@/lib/utils";
import Counter from "@/components/global/Counter";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "../ui/calendar";
import moment from "moment";
import { ArrowLeftRight } from "lucide-react";
import { flightSchema } from "@/schema/zod";
import UnderDevelopment from "./UnderDevelopment";
import { useRouter } from "next/navigation";
const flightTypes = ["One way", "Round trip", "Multi - city"];

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

const UmrahFlightTabpane = ({ icon, disabled, className }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [flightType, setFlightType] = useState("One way");
  const [classType, setClassType] = useState("Economy");
  const [fromDestination, setFromDestination] = useState(destinations[0]);
  const [toDestination, setToDestination] = useState(destinations[4]);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [duration, setDuration] = useState("");
  const [travellerCounts, setTravellerCounts] = useState(travellers);
  const [traveller, setTraveller] = useState(1);
  const [errors, setErrors] = useState(null);
  const [filterNo, setFilterNo] = useState("a");

  const [isDisabled, setIsDisabled] = useState(disabled);
  const [isFlightTypeOpen, setIsFlightTypeOpen] = useState(false);
  const [isTravellersOpen, setIsTravellersOpen] = useState(false);
  const [isFromDestinationOpen, setIsFromDestinationOpen] = useState(false);
  const [isToDestinationOpen, setIsToDestinationOpen] = useState(false);
  const [isDepartureDateOpen, setIsDepartureDateOpen] = useState("");
  const [isReturnDateOpen, setIsReturnDateOpen] = useState("");

  const handleDropdown = (index) => {
    setOpen(index);
  };

  const handleDisableFields = () => {
    setIsDisabled(false);
  };

  const handleDisableDate = (date) => {
    return date > new Date() || date < new Date("1900-01-01");
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

  const handleFilterNoIncrement = () => {
    setFilterNo(filterNo + "a");
  };

  const handleFilterNoDecrement = () => {
    if (filterNo.split("").length > 1) {
      setFilterNo(filterNo.slice(0, -1));
    }
  };

  const checkValidation = () => {
    try {
      const validatedData = flightSchema.parse({
        flightType,
        classType,
        travellers: travellers.reduce((acc, item) => acc + item.count, 0),
        fromDestination,
        toDestination,
        departureDate,
        returnDate,
      });
      return validatedData;
    } catch (error) {
      // parse zod error
      setErrors(formatError(error));
      return false;
    }
  };

  const handleFilter = () => {
    const data = checkValidation();

    router.push("/search/umrah");
    console.log(data);
  };

  return (
    <div
      className={cn(
        "bg-white  px-2 py-4 xs:px-4 xs:py-6 lg:px-6 sm:py-8 md:py-10 lg:py-12 rounded-md shadow-[0_3px_12px_0_rgba(0,0,0,0.03)] space-y-7",
        className
      )}
    >
      <div className="flex gap-7">
        {/* flight type */}
        <Popover open={isFlightTypeOpen} onOpenChange={handleFlightType}>
          <PopoverTrigger className="flex items-center gap-3">
            <p className="text-xs lg:text-lg text-t-700">{flightType}</p>
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
                    {
                      item !== "Multi - city" && setFilterNo("a");
                    }
                    setIsFlightTypeOpen(false);
                  }}
                  className={cn(
                    "px-2.5 py-1.5 text-sm lg:text-base text-t-700 hover:bg-p-900 focus:bg-p-900 hover:text-white focus:text-white rounded-none cursor-pointer",
                    {
                      "bg-p-900 text-white": flightType === item,
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
            <p className="text-xs lg:text-lg text-t-700">
              {traveller > 1
                ? `${traveller} Traveler`
                : `${traveller} Travelers`}{" "}
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
      {filterNo.split("").map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col lg:flex-row gap-x-4 gap-y-5 lg:gap-x-5 relative"
        >
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
                    "border-p-900 text-p-900": errors?.fromDestination,
                  }
                )}
              >
                <span className="text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal">
                  From
                </span>
                <span className="text-sm lg:text-base flex flex-wrap items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize">
                  <p className="lg:max-w-[142px] xl:max-w-[195px] truncate">
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
          {/* arrow icon */}
          {flightType === "Multi - city" || (
            <div className="bg-p-900 hidden lg:flex h-9 w-9 items-center justify-center rounded-full absolute z-10 top-[50%] lg:left-[19.3%] xl:left-[20.3%] translate-y-[-50%]">
              <ArrowLeftRight className="text-white" />
            </div>
          )}
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
                  <p className="lg:max-w-[142px] xl:max-w-[195px] truncate">
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
                          "bg-p-300": toDestination === item,
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
              setErrors((prevState) => ({ ...prevState, departureDate: null }));
              setIsDepartureDateOpen(!isDepartureDateOpen);
            }}
          >
            <PopoverTrigger asChild className="flex-1" disabled={isDisabled}>
              <Button
                variant="outline"
                className={cn(
                  "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border",
                  {
                    "border-p-900 text-p-900": errors?.departureDate,
                  }
                )}
              >
                <span className="text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal">
                  Depaerture Date
                </span>
                <span className="text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize">
                  {departureDate ? (
                    moment(departureDate).format("DD-MMM-YYYY")
                  ) : (
                    <span>Select a date</span>
                  )}
                  {/* <ArrowIcon className="hidden lg:inline-block" /> */}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                defaultMonth={moment().toDate()}
                captionLayout="dropdown-buttons"
                selected={departureDate}
                onSelect={(value) => {
                  setDepartureDate(value);
                  setIsDepartureDateOpen(false);
                }}
                disabled={(date) => handleDisableDate(date)}
                fromYear={1990}
                toYear={2030}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {/* calender icon */}
          {flightType === "Multi - city" || (
            <div className="bg-p-900 h-9 w-9 hidden lg:flex items-center justify-center rounded-full absolute z-10 top-[50%] lg:left-[64.3%] xl:left-[65.7%] translate-y-[-50%]">
              <CalenderTwoLineIcon className="text-white" />
            </div>
          )}
          {/* return date */}
          {flightType === "Multi - city" || (
            <Popover
              open={isReturnDateOpen}
              onOpenChange={() => {
                setErrors((prevState) => ({ ...prevState, returnDate: null }));
                setIsReturnDateOpen(!isReturnDateOpen);
              }}
            >
              <PopoverTrigger
                asChild
                className="flex-1"
                disabled={flightType === "One way" ? !isDisabled : isDisabled}
              >
                <Button
                  variant="outline"
                  className={cn(
                    "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border",
                    {
                      "border-p-900 text-p-900": errors?.returnDate,
                    }
                  )}
                >
                  <span className="text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal">
                    Return Date
                  </span>
                  <span className="text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize">
                    {returnDate ? (
                      moment(returnDate).format("DD-MMM-YYYY")
                    ) : (
                      <span>Select a date</span>
                    )}
                    {/* <ArrowIcon className="hidden lg:inline-block" /> */}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  defaultMonth={moment().toDate()}
                  captionLayout="dropdown-buttons"
                  selected={returnDate}
                  onSelect={(value) => {
                    setReturnDate(value);
                    setIsReturnDateOpen(false);
                  }}
                  disabled={(date) => handleDisableDate(date)}
                  fromYear={1990}
                  toYear={2030}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          )}
          {flightType === "Multi - city" ? (
            <Button
              className="bg-transparent hover:bg-transparent p-0 ml-2.5"
              size="lg"
              onClick={handleFilterNoDecrement}
            >
              {icon ? icon : <CrossIcon />}
            </Button>
          ) : (
            <Button size="lg" onClick={handleFilter}>
              {icon ? icon : <SearchIcon />}
            </Button>
          )}
        </div>
      ))}

      {flightType === "Multi - city" && (
        <div className="flex flex-col lg:flex-row gap-3 items-center justify-between">
          <Button
            onClick={handleFilterNoIncrement}
            className="bg-transparent hover:bg-transparent text-p-900"
          >
            <PlusCircleIcon /> Add New City
          </Button>
          <Button className="px-10 py-4 " onClick={handleFilter} asChild>
            <Link href="/search/umrah">
              {icon ? (
                icon
              ) : (
                <SearchIcon viewBox="0 0 33 33" className="w-6 h-6" />
              )}{" "}
              Search
            </Link>
          </Button>
        </div>
      )}

      {/* <UnderDevelopment /> */}
    </div>
  );
};

export default UmrahFlightTabpane;
