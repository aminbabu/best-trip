"use client";

import Counter from "@/components/global/Counter";
import ScrollArea from "@/components/global/ScrollArea";
import { ArrowIcon, SearchIcon } from "@/components/icons/svgr";
import { Button } from "@/components/ui/button";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { useGetPackageDurationsQuery } from "@/lib/features/queries/PACKAGE_DURATION_API";
import { useGetPackageTypesCustomersQuery } from "@/lib/features/queries/UMRAH_PACKAGE_TYPES";
import { cn, formatError } from "@/lib/utils";
import { umrahSchema } from "@/schema/zod";
import { Loader } from "lucide-react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
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
// const types = ["economy", "standard", "premium"];
// const durations = [10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 90];
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

  const {
    data: durations,
    error: durationError,
    isLoading: durationLoading,
  } = useGetPackageDurationsQuery();

  const {
    data: packageTypes,
    error: packageTypesError,
    isLoading: packageTypesLoading,
  } = useGetPackageTypesCustomersQuery();

  const [isDisabled, setIsDisabled] = useState(disabled);
  const [schedule, setSchedule] = useState(
    moment().format("MMMM").toLowerCase()
  );

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isPackScheduleOpen, setIsPackScheduleOpen] = useState(false);
  const [isPackTypeOpen, setIsPackTypeOpen] = useState(false);
  const [isPackDurationOpen, setIsPackDurationOpen] = useState(false);
  const [isTravellersOpen, setIsTravellersOpen] = useState(false);

  const [type, setType] = useState(null);

  const [duration, setDuration] = useState(null);

  const [travellers, setTravellers] = useState(traveller);

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
        // Prevent decrementing Adult count below 1
        if (item.title === "Adults" && item.count === 1) {
          return item;
        }

        // Decrement count for other items or Adults if count > 1
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

    // const searchData = {
    //   packageSchedule: data.schedule,
    //   packageType: data.type,
    //   packageDuration: data.duration,
    //   adultTravelers: data.travellers.adultTravelers,
    //   childTravelers: data.travellers.childTravelers,
    //   infantsTravelers: data.travellers.infantsTravelers,
    // };
    // return console.log(searchData);

    // const searchUrl = `/search/umrah?${params.toString()}`;

    try {
      // await router.push(searchUrl); // Perform navigation
    } finally {
      setLoading(false); // Reset loading state after navigation
    }
  };

  useEffect(() => {
    if (durations?.umrahPackageDurations[0]._id) {
      setDuration(durations?.umrahPackageDurations[0]._id);
    }

    if (packageTypes?.umrahPackageTypes[0]._id) {
      setType(packageTypes?.umrahPackageTypes[0]._id);
    }
  }, [durations?.umrahPackageDurations, packageTypes?.umrahPackageTypes]);

  const packageType = packageTypes?.umrahPackageTypes.find(
    (item) => item._id === type
  );

  const packageDuration = durations?.umrahPackageDurations.find(
    (item) => item._id === duration
  );

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
              {packageType?.name ? packageType.name : "Select"}
              <ArrowIcon className='hidden lg:inline-block' />
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align='start'
          className='px-0 py-2 border-transparent min-w-[308px]'>
          <ScrollArea className='max-h-64'>
            <ul>
              {packageTypes?.umrahPackageTypes.map((item) => (
                <li
                  key={item._id}
                  onClick={() => {
                    setType(item._id);
                    setIsPackTypeOpen(false);
                  }}
                  className={cn(
                    "px-5 py-2.5 text-sm lg:text-base text-t-700 hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer capitalize",
                    {
                      "bg-p-900 text-white": type === item._id,
                    }
                  )}>
                  {item.name}
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
              {packageDuration?.days
                ? packageDuration?.days + " Days"
                : "Select"}
              <ArrowIcon className='hidden lg:inline-block' />
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align='start'
          className='px-0 py-2 border-transparent min-w-[308px]'>
          <ScrollArea className='max-h-64'>
            <ul>
              {durationLoading && !durations?.umrahPackageDurations.length ? (
                <li className='bg-gray-400 animate-pulse h-[70px]'>
                  Loading...
                </li>
              ) : (
                durations?.umrahPackageDurations.map((item) => (
                  <li
                    key={item._id}
                    onClick={() => {
                      setDuration(item._id);
                      setIsPackDurationOpen(false);
                    }}
                    className={cn(
                      "px-5 py-2.5 text-sm lg:text-base text-t-700 hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer",
                      {
                        "bg-p-900 text-white": duration === item._id,
                      }
                    )}>
                    {item.days} Days
                  </li>
                ))
              )}
            </ul>
          </ScrollArea>
        </PopoverContent>
      </Popover>
      <Popover
        open={isTravellersOpen}
        onOpenChange={() => {
          setErrors((prevState) => ({ ...prevState, travellers: null }));
          setIsTravellersOpen(!isTravellersOpen);
        }}>
        <PopoverTrigger asChild className='flex-1' disabled={isDisabled}>
          <Button
            variant='outline'
            className={cn(
              "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent p-3.5 border-t-400/50 lg:border-border",
              {
                "border-p-900 text-p-900": errors?.travellers,
              }
            )}>
            <span className='text-xs lg:text-sm text-t-700 lg:text-t-600 font-normal'>
              Travellers
            </span>
            <span className='text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize'>
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
              <ArrowIcon className='hidden lg:inline-block' />
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align='start'
          className='px-0 py-2 border-transparent min-w-[308px]'>
          <div className='text-primary font-semibold text-lg px-4 pt-1 pb-5 mb-1'>
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
              <DropdownMenuSeparator className='bg-border/25 h-[1px]' />
            </Fragment>
          ))}
          <Button
            size='sm'
            onClick={() => setIsTravellersOpen(false)}
            className='px-8 py-2 mx-4 my-4 text-sm lg:text-base'>
            Done
          </Button>
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
