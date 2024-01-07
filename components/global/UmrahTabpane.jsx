"use client";

import { umrahSchema } from "@/schema/zod";

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
import { cn, formatError } from "@/lib/utils";
import Counter from "@/components/global/Counter";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import moment from "moment";

const schedules = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "auguest",
  "september",
  "dctober",
  "november",
  "december",
];
const types = ["economy", "standard", "premium"];
const durations = [14, 20, 30, 35, 40];
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
  const [isDisabled, setIsDisabled] = useState(disabled);
  const [open, setOpen] = useState(0);
  const [schedule, setSchedule] = useState(moment().format("MMMM"));
  const [type, setType] = useState("economy");
  const [duration, setDuration] = useState(14);
  const [travellers, setTravellers] = useState(traveller);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkValidation = () => {
    try {
      const validatedData = umrahSchema.parse({
        schedule,
        type,
        duration,
        travellers: travellers.reduce((acc, item) => acc + item.count, 0),
      });
      return validatedData;
    } catch (error) {
      // parse zod error
      setErrors(formatError(error));
      return false;
    }
  };

  const handleDropdown = (index) => {
    setOpen(index);
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
    setLoading(true);
    const data = checkValidation();

    if (!data) {
      return setLoading(false);
    }

    // TODO: Handle submit
    setTimeout(() => {
      console.log(data);
      setLoading(false);
      router.push("/search/umrah");
    }, 2000);
  };

  return (
    <div
      className={cn(
        "bg-white flex flex-col lg:flex-row gap-x-4 gap-y-5 lg:gap-x-5 px-2 py-4 xs:px-4 xs:py-6 lg:px-6 sm:py-8 md:py-10 lg:py-12 rounded-md shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]",
        className
      )}
    >
      <DropdownMenu
        open={open === 1}
        onOpenChange={(state) => {
          setErrors((prevState) => ({ ...prevState, schedule: null }));
          handleDropdown(state ? 1 : -1);
        }}
      >
        <DropdownMenuTrigger asChild className="flex-1" disabled={isDisabled}>
          <Button
            variant="outline"
            className={cn(
              "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent",
              {
                "border-p-900 text-p-900": errors?.schedule,
              }
            )}
          >
            <span className="text-sm text-t-600 font-normal">
              Package Schedule
            </span>
            <span className="flex items-center justify-between gap-x-4 text-t-700 capitalize">
              {schedule ? schedule : "Select"}
              <ArrowIcon />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="px-0 py-2 border-transparent min-w-[308px]"
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
        onOpenChange={(state) => {
          setErrors((prevState) => ({ ...prevState, type: null }));
          handleDropdown(state ? 2 : -1);
        }}
      >
        <DropdownMenuTrigger asChild className="flex-1" disabled={isDisabled}>
          <Button
            variant="outline"
            className={cn(
              "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent",
              {
                "border-p-900 text-p-900": errors?.type,
              }
            )}
          >
            <span className="text-sm text-t-600 font-normal">Package Type</span>
            <span className="flex items-center justify-between gap-x-4 text-t-700 capitalize">
              {type ? type : "Select"}
              <ArrowIcon />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="px-0 py-2 border-transparent min-w-[308px]"
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
        onOpenChange={(state) => {
          setErrors((prevState) => ({ ...prevState, duration: null }));
          handleDropdown(state ? 3 : -1);
        }}
      >
        <DropdownMenuTrigger asChild className="flex-1" disabled={isDisabled}>
          <Button
            variant="outline"
            className={cn(
              "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent",
              {
                "border-p-900 text-p-900": errors?.duration,
              }
            )}
          >
            <span className="text-sm text-t-600 font-normal">
              Package Duration
            </span>
            <span className="flex items-center justify-between gap-x-4 text-t-700">
              {duration ? `${duration} Days` : "Select"}
              <ArrowIcon />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="px-0 py-2 border-transparent min-w-[308px]"
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
                {item} Days
              </DropdownMenuItem>
            ))}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu
        open={open === 4}
        onOpenChange={(state) => {
          setErrors((prevState) => ({ ...prevState, travellers: null }));
          handleDropdown(state ? 4 : -1);
        }}
      >
        <DropdownMenuTrigger asChild className="flex-1" disabled={isDisabled}>
          <Button
            variant="outline"
            className={cn(
              "flex-col items-stretch gap-y-1 text-left focus-visible:ring-transparent",
              {
                "border-p-900 text-p-900": errors?.travellers,
              }
            )}
          >
            <span className="text-sm text-t-600 font-normal">Travellers</span>
            <span className="flex items-center justify-between gap-x-4 text-t-700">
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
              <ArrowIcon />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="px-0 py-2 border-transparent min-w-[308px]"
        >
          <ScrollArea className="max-h-80">
            <div className="text-primary font-semibold text-lg px-4 py-3">
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
                <DropdownMenuSeparator className="bg-border h-[0.5px]" />
              </Fragment>
            ))}
            <Button
              size="sm"
              onClick={() => handleDropdown(0)}
              className="px-8 py-2 mx-4 my-3"
            >
              Done
            </Button>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        size="lg"
        onClick={isDisabled ? handleDisableFields : handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <Loader className="animate-spin w-8 h-8" />
        ) : isDisabled ? (
          icon
        ) : (
          <SearchIcon />
        )}
      </Button>
    </div>
  );
};

export default UmrahTabpane;
