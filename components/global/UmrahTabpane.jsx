"use client";
import { getPackageDurationsForCustomers } from "@/actions/package-durations/get-package-durations";
import { getUmrahPackageTypesForCustomers } from "@/actions/umrahPackageTypes/get-umrah-package-types";
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


const UmrahTabpane = ({ icon, disabled, className, slug }) => {
  const router = useRouter();

  const [durations, setDurations] = useState([]);
  const [durationError, setDurationError] = useState(null);
  const [durationLoading, setDurationLoading] = useState(true);
  const [packageTypes, setPackageTypes] = useState([]);
  const [isDisabled, setIsDisabled] = useState(disabled);
  const [schedule, setSchedule] = useState(
    moment().format("MMMM").toLowerCase()
  );
  const [errors, setErrors] = useState(null);
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [isPackScheduleOpen, setIsPackScheduleOpen] = useState(false);
  const [isPackTypeOpen, setIsPackTypeOpen] = useState(false);
  const [isPackDurationOpen, setIsPackDurationOpen] = useState(false);
  let searchedValue;
  if (typeof window != undefined) {
     searchedValue = JSON.parse(localStorage.getItem("searchedValue"))
  }
  const [params, setParams] = useState(searchedValue ? searchedValue : {});
  const [isTravelersOpen, setIsTravelersOpen] = useState(false);
  // const [type, setType] = useState(null);
  // const [duration, setDuration] = useState(null);
  const [packageType, setPackageType] = useState(packageTypes[0]);
  const [packageDuration, setPackageDuration] = useState(null)
  const [travelers, setTravelers] = useState([
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
  ])




  useEffect(() => {
    const fetchPackageDurations = async () => {
      setDurationLoading(true);
      try {
        const { umrahPackageDurations, error } =
          await getPackageDurationsForCustomers();

        if (error) {
          setDurationError(error);
        } else {
          setDurations(umrahPackageDurations);
        }
      } catch (error) {
        setDurationError(error);
      } finally {
        setDurationLoading(false);
      }
    };

    fetchPackageDurations();
  }, []);
  useEffect(() => {
    const fetchPackageTypes = async () => {
      try {
        const { umrahPackageTypes, error } =
          await getUmrahPackageTypesForCustomers();

        if (error) {
          console.error("Error fetching package types:", error);
          return;
        }

        setPackageTypes(umrahPackageTypes || []);
      } catch (error) {
        console.error("Error fetching package types:", error);
      }
    };

    fetchPackageTypes();
  }, []);

  const checkValidation = () => {
    try {
      const validatedData = umrahSchema.parse({
        schedule,
        type: packageType._id,
        duration: packageDuration._id,
        travellers: {
          adultTravelers: travelers.find((t) => t.id === 1)?.count || 0,
          childTravelers: travelers.find((t) => t.id === 2)?.count || 0,
          infantsTravelers: travelers.find((t) => t.id === 3)?.count || 0,
        },
      });
      return validatedData;
    } catch (error) {
      console.log(error);
      setErrors(formatError(error));
      return false;
    }
  };

  const handleCounterIncrement = (id) => {
    const newTravelers = travelers.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count > 0 ? item.count + 1 : 1,
        };
      }
      return item;
    });
    setTravelers(newTravelers);
  };

  const handleCounterDecrement = (id) => {
    const newTravelers = travelers.map((item) => {
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

    setTravelers(newTravelers);
  };

  const handleDisableFields = () => {
    setIsDisabled(false);
  };

  const handleSubmit = async () => {
    const data = checkValidation();
    if (!data) return;
    const selectedValue = JSON.stringify({
      schedule: data.schedule,
      type: data.type,
      duration: data.duration,
      dataLength: 2,
      adultTravelers: data.travellers.adultTravelers,
      childTravelers: data.travellers.childTravelers,
      infantsTravelers: data.travellers.infantsTravelers,
      lastItemId: "",
    })
    if (typeof window != undefined) {
      localStorage.setItem("searchedValue", selectedValue)
    }
    try {
      const queryString = new URLSearchParams({
        schedule: data.schedule,
        type: data.type,
        duration: data.duration,
        dataLength: 2,
        adultTravelers: data.travellers.adultTravelers,
        childTravelers: data.travellers.childTravelers,
        infantsTravelers: data.travellers.infantsTravelers,
        lastItemId: "",
      }).toString();

      router.push(`/search/umrah?${queryString}`);
    } finally {
      setLoading(false); // Reset loading state after navigation
    }
  };
  useEffect(() => {
    const selectedPackageType = packageTypes.find((item) => item._id === params.type);
    const selectedDuration = durations.find((item) => item._id === params.duration);

    setSchedule(params.schedule ? params.schedule : schedules[7]);
    setPackageType(params.type ? selectedPackageType : packageTypes[0]);

    setTravelers((prev) => {
      // Create a copy of the previous travelers state
      const updatedTravelers = [...prev];

      // Update the count for each traveler type based on the params
      updatedTravelers[0] = {
        ...updatedTravelers[0],
        count: params.adultTravelers ? Number(params.adultTravelers) : 1
      };
      updatedTravelers[1] = {
        ...updatedTravelers[1],
        count: params.childTravelers ? Number(params.childTravelers) : 0
      };
      updatedTravelers[2] = {
        ...updatedTravelers[2],
        count: params.infantsTravelers ? Number(params.infantsTravelers) : 0
      };
      return updatedTravelers;
    });

    setPackageDuration(params.duration ? selectedDuration : durations[0]);
  }, [params?.type, packageTypes, params.duration, durations, params.schedule, params.adultTravelers, params.childTravelers, params.infantsTravelers]);

  return (
    <div
      className={cn(
        "bg-white flex flex-col lg:flex-row gap-x-4 gap-y-3 lg:gap-5 px-4 py-5 xs:px-4 xs:py-6 lg:px-6 sm:py-8 md:py-10 lg:py-12 rounded-md",
        className
      )}
    >
      <Popover
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
              {packageType?.name ? packageType.name : "Select"}
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
              {packageTypes.map((item) => (
                <li
                  key={item._id}
                  onClick={() => {
                    setPackageType(item)
                    setIsPackTypeOpen(false);
                  }}
                  className={cn(
                    "px-5 py-2.5 text-sm lg:text-base text-t-700 hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer capitalize",
                    {
                      "bg-p-900 text-white": packageType?._id === item._id,
                    }
                  )}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </ScrollArea>
        </PopoverContent>
      </Popover>
      <Popover
        defaultOpen={true}
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
            <span className="text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700">
              {packageDuration?.days
                ? packageDuration?.days + " Days"
                : "Select"}
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
              {durationLoading ? (
                <li className="p-5 text-center text-t-600">
                  <Loader className="animate-spin" />
                </li>
              ) : durationError ? (
                <li className="p-5 text-center text-red-500">
                  {durationError.message}
                </li>
              ) : (
                durations.map((item) => (
                  <li
                    key={item._id}
                    onClick={() => {
                      setPackageDuration(item);
                      setIsPackDurationOpen(false);
                    }}
                    className={cn(
                      "px-5 py-2.5 text-sm lg:text-base text-t-700 hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer capitalize",
                      {
                        "bg-p-900 text-white": packageDuration?._id === item._id,
                      }
                    )}
                  >
                    {item.days} Days
                  </li>
                ))
              )}
            </ul>
          </ScrollArea>
        </PopoverContent>
      </Popover>
      <Popover
        open={isTravelersOpen}
        onOpenChange={() => {
          setErrors((prevState) => ({ ...prevState, travellers: null }));
          setIsTravelersOpen(!isTravelersOpen);
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
              {travelers?.some((item) => item.count > 0)
                ? `${travelers?.reduce(
                  (acc, item) => acc + item.count,
                  0
                )} Traveller${travelers?.reduce((acc, item) => acc + item.count, 0) > 1
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
          {travelers.map((item) => (
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
            onClick={() => setIsTravelersOpen(false)}
            className="px-8 py-2 mx-4 my-4 text-sm lg:text-base"
          >
            Done
          </Button>
        </PopoverContent>
      </Popover>
      <DropdownMenuSeparator className="block lg:hidden" />
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
  );
};

export default UmrahTabpane;