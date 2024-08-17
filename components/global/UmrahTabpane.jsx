"use client";

import Counter from "@/components/global/Counter";
import ScrollArea from "@/components/global/ScrollArea";
import { ArrowIcon, SearchIcon } from "@/components/icons/svgr";
import { Button } from "@/components/ui/button";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { cn, formatError } from "@/lib/utils";
import { umrahSchema } from "@/schema/zod";
import { Loader } from "lucide-react";
import moment from "moment";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const schedules = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const types = ["economy", "standard", "premium"];
const durations = [10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 90];
const traveller = [
  {
    id: 1,
    title: "Adults",
    description: "12 years+",
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

const UmrahTabpane = ({ icon, disabled, className }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isDisabled, setIsDisabled] = useState(disabled);
  const [schedule, setSchedule] = useState(
    moment().format("MMMM").toLowerCase()
  );
  const [type, setType] = useState("economy");
  const [duration, setDuration] = useState(15);
  const [travellers, setTravellers] = useState(() => {
    const adultTravelers = parseInt(searchParams.get("adultTravelers")) || 1;
    const childTravelers = parseInt(searchParams.get("childTravelers")) || 0;
    const infantsTravelers =
      parseInt(searchParams.get("infantsTravelers")) || 0;

    return traveller.map((item) => {
      if (item.id === 1) return { ...item, count: adultTravelers };
      if (item.id === 2) return { ...item, count: childTravelers };
      if (item.id === 3) return { ...item, count: infantsTravelers };
      return item;
    });
  });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isPackScheduleOpen, setIsPackScheduleOpen] = useState(false);
  const [isPackTypeOpen, setIsPackTypeOpen] = useState(false);
  const [isPackDurationOpen, setIsPackDurationOpen] = useState(false);
  const [isTravellersOpen, setIsTravellersOpen] = useState(false);

  const checkValidation = () => {
    try {
      const validatedData = umrahSchema.parse({
        schedule,
        type,
        duration,
        travellers: {
          adultTravelers: travellers.find((t) => t.id === 1)?.count || 0,
          childTravelers: travellers.find((t) => t.id === 2)?.count || 0,
          infantsTravelers: travellers.find((t) => t.id === 3)?.count || 0,
        },
      });
      return validatedData;
    } catch (error) {
      setErrors(formatError(error));
      return false;
    }
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

  const handleDisableFields = () => {
    setIsDisabled(false);
  };

  const handleSubmit = async () => {
    const data = checkValidation();
    if (!data) return;

    setLoading(true); // Set loading state to true

    const searchData = {
      packageSchedule: data.schedule,
      packageType: data.type,
      packageDuration: data.duration,
      adultTravelers: data.travellers.adultTravelers,
      childTravelers: data.travellers.childTravelers,
      infantsTravelers: data.travellers.infantsTravelers,
    };
    return console.log(searchData);

    // const searchUrl = `/search/umrah?${params.toString()}`;

    try {
      // await router.push(searchUrl); // Perform navigation
    } finally {
      setLoading(false); // Reset loading state after navigation
    }
  };

  return (
    <div
      className={cn(
        "bg-white flex flex-col lg:flex-row gap-x-4 gap-y-3 lg:gap-5 px-4 py-5 xs:px-4 xs:py-6 lg:px-6 sm:py-8 md:py-10 lg:py-12 rounded-md",
        className
      )}>
      <Popover
        open={isPackScheduleOpen}
        onOpenChange={() => {
          setErrors((prevState) => ({ ...prevState, schedule: null }));
          setIsPackScheduleOpen(!isPackScheduleOpen);
        }}>
        <PopoverTrigger asChild className='flex-1' disabled={isDisabled}>
          <Button
            variant='outline'
            className={cn(
              "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border",
              {
                "border-p-900 text-p-900": errors?.schedule,
              }
            )}>
            <span className='text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal'>
              Package Schedule
            </span>
            <span className='text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize'>
              {schedule ? schedule : "Select"}
              <ArrowIcon className='hidden lg:inline-block' />
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align='start'
          className='px-0 py-2 border-transparent min-w-[308px]'>
          <ScrollArea className='max-h-64'>
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
                  )}>
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
        }}>
        <PopoverTrigger asChild className='flex-1' disabled={isDisabled}>
          <Button
            variant='outline'
            className={cn(
              "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border",
              {
                "border-p-900 text-p-900": errors?.type,
              }
            )}>
            <span className='text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal'>
              Package Type
            </span>
            <span className='text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize'>
              {type ? type : "Select"}
              <ArrowIcon className='hidden lg:inline-block' />
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align='start'
          className='px-0 py-2 border-transparent min-w-[308px]'>
          <ScrollArea className='max-h-64'>
            <ul>
              {types.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setType(item);
                    setIsPackTypeOpen(false);
                  }}
                  className={cn(
                    "px-5 py-2.5 text-sm lg:text-base text-t-700 hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer capitalize",
                    {
                      "bg-p-900 text-white": type === item,
                    }
                  )}>
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
        }}>
        <PopoverTrigger asChild className='flex-1' disabled={isDisabled}>
          <Button
            variant='outline'
            className={cn(
              "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border",
              {
                "border-p-900 text-p-900": errors?.duration,
              }
            )}>
            <span className='text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal'>
              Package Duration
            </span>
            <span className='text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700'>
              {duration ? duration + " Days" : "Select"}
              <ArrowIcon className='hidden lg:inline-block' />
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align='start'
          className='px-0 py-2 border-transparent min-w-[308px]'>
          <ScrollArea className='max-h-64'>
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
                  )}>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollArea>
        </PopoverContent>
      </Popover>
      <Popover
        open={isTravellersOpen}
        onOpenChange={() => setIsTravellersOpen(!isTravellersOpen)}>
        <PopoverTrigger asChild className='flex-1' disabled={isDisabled}>
          <Button
            variant='outline'
            className={cn(
              "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border"
            )}>
            <span className='text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal'>
              Travellers
            </span>
            <span className='text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700'>
              {travellers.reduce((acc, t) => acc + t.count, 0)} Traveller(s)
              <ArrowIcon className='hidden lg:inline-block' />
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align='start'
          className='px-0 py-2 border-transparent min-w-[308px]'>
          <ScrollArea className='max-h-64'>
            <ul className='divide-y divide-t-400/30'>
              {travellers.map((item) => (
                <li
                  key={item.id}
                  className={cn(
                    "px-5 py-2.5 text-sm lg:text-base text-t-700 hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer capitalize flex items-center justify-between"
                  )}>
                  <div>
                    <h6 className='font-medium'>{item.title}</h6>
                    <p className='text-xs text-t-500'>{item.description}</p>
                  </div>
                  <Counter
                    min={0}
                    value={item.count}
                    onIncrement={() => handleCounterIncrement(item.id)}
                    onDecrement={() => handleCounterDecrement(item.id)}
                  />
                </li>
              ))}
            </ul>
          </ScrollArea>
        </PopoverContent>
      </Popover>
      <DropdownMenuSeparator className='block lg:hidden' />
      <Button
        size='lg'
        className='py-2.5 lg:py-5 rounded-lg lg:roundemd text-sm lg:text-base'
        onClick={isDisabled ? handleDisableFields : handleSubmit}
        disabled={loading}>
        {loading ? (
          <Loader className='animate-spin w-8 h-8' />
        ) : isDisabled ? (
          icon
        ) : (
          <>
            <span className='hidden lg:block'>
              <SearchIcon />
            </span>
            <span className='lg:hidden'>Search</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default UmrahTabpane;
