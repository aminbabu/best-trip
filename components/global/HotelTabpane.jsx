"use client";

import { Button } from "@/components/ui/button";
import { ArrowIcon, SearchIcon } from "@/components/icons/svgr";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Fragment, useState } from "react";
import ScrollArea from "@/components/global/ScrollArea";
import { cn, formatError } from "@/lib/utils";
import Counter from "@/components/global/Counter";
import Link from "next/link";
import UnderDevelopment from "./UnderDevelopment";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import moment from "moment";
import { Loader } from "lucide-react";
import { flightSchema, hotelSchema } from "@/schema/zod";
import { useRouter } from "next/navigation";

const destinations = [
  {
    id: 1,
    city: "Kuala Lumpur",
    country: "Malaysia",
    code: "MY",
  },
  {
    id: 2,
    city: "London",
    country: "United Kingdom",
    code: "UK",
  },
  {
    id: 3,
    city: "Bangkok",
    country: "Thailand",
    code: "TH",
  },
  {
    id: 4,
    city: "Islamabad",
    country: "Pakistan",
    code: "PK",
  },
  {
    id: 5,
    city: "New Delhi",
    country: "India",
    code: "IN",
  },
  {
    id: 6,
    city: "Dhaka",
    country: "Bangladesh",
    code: "BD",
  },
];
const nationalities = [
  { country: "United states", id: 1, code: "US" },
  { country: "Australia", id: 2, code: "AU" },
  { country: "Canada", id: 3, code: "CA" },
  { country: "Bangladesh", id: 4, code: "BD" },
  { country: "India", id: 5, code: "IN" },
  { country: "Singapore", id: 6, code: "SI" },
  { country: "Thailand", id: 7, code: "TH" },
  { country: "Sri Lanka", id: 8, code: "SL" },
  { country: "United Kingdom", id: 9, code: "UK" },
];
const traveller = [
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
  // {
  //   id: 3,
  //   title: "Infants",
  //   description: "0-2 years",
  //   count: 0,
  // },
];

const HotelTabpane = ({ icon, disabled, className }) => {
  const router = useRouter();
  const [roomNo, setRoomNo] = useState(1);
  const [destination, setDestination] = useState("");
  const [nationality, setNationality] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [travellers, setTravellers] = useState(traveller);
  const [isDisabled, setIsDisabled] = useState(disabled);

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isTravellersOpen, setIsTravellersOpen] = useState(false);
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const [isNationalityOpen, setIsNationalityOpen] = useState(false);
  const [isCheckInDateOpen, setIsCheckInDateOpen] = useState(false);
  const [isCheckOutDateOpen, setIsCheckOutDateOpen] = useState(false);

  const checkValidation = () => {
    try {
      const validatedData = hotelSchema.parse({
        roomNo,
        destination,
        nationality,
        travellers: travellers.reduce((acc, item) => acc + item.count, 0),
        checkInDate,
        checkOutDate,
      });
      return validatedData;
    } catch (error) {
      // parse zod error
      setErrors(formatError(error));
      return false;
    }
  };

  const handleDisableFields = () => {
    setIsDisabled(false);
  };

  const handleDisableCheckInDate = (date) => {
    return date > new Date() || date < new Date("1900-01-01");
  };

  const handleDisableCheckOutDate = (date) => {
    return date > new Date() || date < new Date("1900-01-01");
  };

  const handleTravellers = () => {
    setIsTravellersOpen(!isTravellersOpen);
  };

  const handleCounterIncrement = (id) => {
    const newTravellers = travellers.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count > 0 ? item.count + 1 : 1,
        };
      }
      return item;
    });
    setTravellers(newTravellers);
  };

  const handleCounterDecrement = (id) => {
    const newTravellers = travellers.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count > 0 ? item.count - 1 : 0,
        };
      }
      return item;
    });
    setTravellers(newTravellers);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const data = checkValidation();

    if (!data) {
      return setLoading(false);
    }
    router.push("/search/hotel");

    // TODO: Handle submit
    // setTimeout(() => {
    //   console.log(data);
    //   setLoading(false);
    //   router.push("/search/hotel");
    // }, 1000);
  };

  return (
    <div
      className={cn(
        "bg-white px-5 py-4 xs:px-4 xs:py-6 lg:px-6 sm:py-8 md:py-10 lg:py-12 rounded-md shadow-[0_3px_12px_0_rgba(0,0,0,0.03)] space-y-7",
        className
      )}
    >
      <div className="flex gap-7">
        {/* travellers  */}
        <Popover open={isTravellersOpen} onOpenChange={handleTravellers}>
          <PopoverTrigger
            className="flex items-center gap-3"
            disabled={isDisabled}
          >
            <p className="text-xs lg:text-lg text-t-700">
              {roomNo} Room ,
              {travellers.some((item) => item.count > 0)
                ? `${travellers.reduce(
                    (acc, item) => acc + item.count,
                    0
                  )} Guest${
                    travellers.reduce((acc, item) => acc + item.count, 0) > 1
                      ? "s"
                      : ""
                  }`
                : "Select Guest"}
            </p>
            <ArrowIcon
              className={`${
                isTravellersOpen && "rotate-180"
              } trasition duration-300 fill-p-900`}
            />
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="px-0 py-2 border-transparent min-w-[308px]"
          >
            <div className="text-primary font-semibold text-lg px-4 pt-1 pb-5 mb-1">
              Travelers
            </div>
            <Counter
              title="Room"
              count={roomNo}
              onIncrement={() => setRoomNo(roomNo + 1)}
              onDecrement={() => {
                if (roomNo >= 2) {
                  setRoomNo(roomNo - 1);
                }
              }}
            />
            <DropdownMenuSeparator className="bg-border/25 h-[1px]" />
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
        </Popover>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-4 gap-y-5 lg:gap-x-5 relative">
        {/* Destination */}
        <Popover
          open={isDestinationOpen}
          onOpenChange={() => {
            setErrors((prevState) => ({ ...prevState, destination: null }));
            setIsDestinationOpen(!isDestinationOpen);
          }}
        >
          <PopoverTrigger asChild className="flex-1" disabled={isDisabled}>
            <Button
              variant="outline"
              className={cn(
                "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border",
                {
                  "border-p-900 text-p-900": errors?.destination,
                }
              )}
            >
              <span className="text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal">
                Destination
              </span>
              <span className="text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize">
                {destination ? destination.country : "Select Destination"}
                <ArrowIcon className="hidden lg:inline-block" />
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="px-0 py-2 border-transparent min-w-[17rem]"
          >
            <ScrollArea className="max-h-64">
              <ul>
                {destinations.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      setDestination(item);
                      setIsDestinationOpen(false);
                    }}
                    className={cn(
                      "flex justify-between items-center px-5 py-2.5 text-sm lg:text-base text-t-700 hover:bg-p-900/5 focus:bg-p-900/5 rounded-l cursor-pointer capitalize",
                      {
                        "bg-p-300": destination === item,
                      }
                    )}
                  >
                    <div className="grid text-sm font-medium">
                      {item.city}
                      <span className="text-xs font-normal leading-normal">
                        {item.country}
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
        {/* Nationality */}
        <Popover
          open={isNationalityOpen}
          onOpenChange={() => {
            setErrors((prevState) => ({ ...prevState, nationality: null }));
            setIsNationalityOpen(!isNationalityOpen);
          }}
        >
          <PopoverTrigger asChild className="flex-1" disabled={isDisabled}>
            <Button
              variant="outline"
              className={cn(
                "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border",
                {
                  "border-p-900 text-p-900": errors?.nationality,
                }
              )}
            >
              <span className="text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal">
                Nationality
              </span>
              <span className="text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize">
                {nationality ? nationality.country : "Select Nationality"}
                <ArrowIcon className="hidden lg:inline-block" />
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="px-0 py-2 border-transparent min-w-[17rem]"
          >
            <ScrollArea className="max-h-64">
              <ul>
                {nationalities.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => setDestination(item.name)}
                    className={cn(
                      "flex justify-between items-center px-5 py-2.5 text-base text-t-800 hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer group",
                      {
                        "bg-p-900 text-white": nationality === item.name,
                      }
                    )}
                  >
                    <span>{item.country}</span>
                    <span
                      className={cn(
                        "text-t-600 group-hover:text-p-900 group-focus:text-p-900",
                        { "text-white": nationality === item.code }
                      )}
                    >
                      {item.code}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </PopoverContent>
        </Popover>
        {/* check in date */}
        <Popover
          open={isCheckInDateOpen}
          onOpenChange={() => {
            setErrors((prevState) => ({ ...prevState, checkInDate: null }));
            setIsCheckInDateOpen(!isCheckInDateOpen);
          }}
        >
          <PopoverTrigger asChild className="flex-1" disabled={isDisabled}>
            <Button
              variant="outline"
              className={cn(
                "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border",
                {
                  "border-p-900 text-p-900": errors?.checkInDate,
                }
              )}
            >
              <span className="text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal">
                Check In
              </span>
              <span className="text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize">
                {checkInDate ? (
                  moment(checkInDate).format("DD-MMM-YYYY")
                ) : (
                  <span>Select</span>
                )}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              defaultMonth={moment().toDate()}
              captionLayout="dropdown-buttons"
              selected={checkInDate}
              onSelect={(value) => {
                setCheckInDate(value);
                setIsCheckInDateOpen(false);
              }}
              disabled={(date) => handleDisableCheckInDate(date)}
              fromYear={1990}
              toYear={2030}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {/* check out date */}
        <Popover
          open={isCheckOutDateOpen}
          onOpenChange={() => {
            setErrors((prevState) => ({ ...prevState, checkOutDate: null }));
            setIsCheckOutDateOpen(!isCheckOutDateOpen);
          }}
        >
          <PopoverTrigger asChild className="flex-1" disabled={isDisabled}>
            <Button
              variant="outline"
              className={cn(
                "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border",
                {
                  "border-p-900 text-p-900": errors?.checkOutDate,
                }
              )}
            >
              <span className="text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal">
                Check Out
              </span>
              <span className="text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize">
                {checkOutDate ? (
                  moment(checkOutDate).format("DD-MMM-YYYY")
                ) : (
                  <span>Select</span>
                )}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              defaultMonth={moment().toDate()}
              captionLayout="dropdown-buttons"
              selected={checkOutDate}
              onSelect={(value) => {
                setCheckOutDate(value);
                setIsCheckOutDateOpen(false);
              }}
              disabled={(date) => handleDisableCheckOutDate(date)}
              fromYear={1990}
              toYear={2030}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button
          size="lg"
          className="py-2.5 lg:py-5 rounded-lg lg:roundemd text-sm lg:text-base"
          onClick={isDisabled ? handleDisableFields : handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <Loader className="animate-spin w-8 h-8" />
          ) : isDisabled ? (
            icon
          ) : (
            <>
              <span className="hidden lg:block">
                <SearchIcon />
              </span>
              <span className="lg:hidden">Search</span>
            </>
          )}
        </Button>
      </div>
      {/* <UnderDevelopment /> */}
    </div>
  );
};

export default HotelTabpane;
