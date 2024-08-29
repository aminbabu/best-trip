"use client";
import Counter from "@/components/global/Counter";
import ScrollArea from "@/components/global/ScrollArea";
import { ArrowIcon, SearchIcon } from "@/components/icons/svgr";
import { Button } from "@/components/ui/button";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { cn, formatError } from "@/lib/utils";
import { umrahSchema } from "@/schema/zod";
import { Loader } from "lucide-react";
import moment, { duration } from "moment";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { getCookie } from 'cookies-next';

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


const UmrahTabpane = ({ icon, disabled, className, umrahData: initialUmrahData }) => {
  const [umrahData, setUmrahData] = useState(initialUmrahData || null);
  const router = useRouter();
  const [durations, setDurations] = useState(umrahData?.umrahPackageDurations || []);
  const [packageTypes, setPackageTypes] = useState(umrahData?.umrahPackageTypes || []);
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
  ]);
  const [durationError, setDurationError] = useState(null);
  const [durationLoading, setDurationLoading] = useState(true);
  const [packageLoading, setPackageLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(disabled);
  const [schedule, setSchedule] = useState(
    moment().format("MMMM").toLowerCase()
  );
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPackScheduleOpen, setIsPackScheduleOpen] = useState(false);
  const [isPackTypeOpen, setIsPackTypeOpen] = useState(false);
  const [isPackDurationOpen, setIsPackDurationOpen] = useState(false);

  const [params, setParams] = useState({});
  const [isTravelersOpen, setIsTravelersOpen] = useState(false);
  const [packageType, setPackageType] = useState(packageTypes[0]);
  const [packageDuration, setPackageDuration] = useState(null)

  useEffect(() => {
    if (typeof window != undefined) {
      setParams(JSON.parse(localStorage.getItem("searchedValue")))
    }
  }, [])


  // Check The Validation Of Schedule Type And Duration
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
      setErrors(formatError(error));
      return false;
    }
  };
  // Increment The Count Of Travelers
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
  // Decrement The Count Of Travelers
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
  // Disable The Fields Conditionally
  const handleDisableFields = () => {
    setIsDisabled(false);
  };
  // Submit The Form And Redirect To Umrah Search Page
  const handleSubmit = async () => {
    setLoading(true)
    const data = checkValidation();
    if (!data) return;
    const selectedValue = JSON.stringify({
      schedule: data.schedule,
      type: data.type,
      duration: data.duration,
      dataLength: 20,
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
        dataLength: 20,
        adultTravelers: data.travellers.adultTravelers,
        childTravelers: data.travellers.childTravelers,
        infantsTravelers: data.travellers.infantsTravelers,
        lastItemId: "",
      }).toString();

      router.push(`/search/umrah?${queryString}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // On initial render, check if umrahData is in localStorage
    const storedUmrahData = localStorage.getItem('umrahData');
    if (storedUmrahData !== undefined && storedUmrahData !== null) {
      setUmrahData(JSON.parse(storedUmrahData));
    } else if (initialUmrahData) {
      // If not found, use the umrahData from props and store it in localStorage
      localStorage.setItem('umrahData', JSON.stringify(initialUmrahData));
      setUmrahData(initialUmrahData);
    }
  }, [initialUmrahData]);

  useEffect(() => {
    setDurations(umrahData?.umrahPackageDurations || []);
    setPackageTypes(umrahData?.umrahPackageTypes || []);
    setPackageLoading(false)
    setDurationLoading(false)
  }, [umrahData])



  // Update the state based on the params => From LocalStorage or Default
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
              {packageLoading ? <li className="p-5 text-center text-t-600"><Loader className="animate-spin" /></li> : packageTypes.map((item) => (
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