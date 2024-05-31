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
import { cn, formatError } from "@/lib/utils";
import Counter from "@/components/global/Counter";
import { Loader } from "lucide-react";
import { visaSchema } from "@/schema/zod";
import { useRouter } from "next/navigation";

const destinations = [
  {
    id: 1,
    name: "Saudi Arabia",
    code: "SA",
  },
  // {
  //   id: 2,
  //   name: "Australia",
  //   code: "AU",
  // },
  // {
  //   id: 3,
  //   name: "Canada",
  //   code: "CA",
  // },
  // {
  //   id: 4,
  //   name: "Bangladesh",
  //   code: "BD",
  // },
  // {
  //   id: 5,
  //   name: "India",
  //   code: "IN",
  // },
  // {
  //   id: 6,
  //   name: "Singapore",
  //   code: "SG",
  // },
  // {
  //   id: 7,
  //   name: "Thailand",
  //   code: "TH",
  // },
  // {
  //   id: 8,
  //   name: "Sri Lanka",
  //   code: "LK",
  // },
  // {
  //   id: 9,
  //   name: "United Kingdom",
  //   code: "UK",
  // },
];
const nationalities = [
  "United states",
  "Australia",
  "Canada",
  "Bangladesh",
  "India",
  "Singapore",
  "Thailand",
  "Sri Lanka",
  "United Kingdom",
];
const types = ["Umrah Visa"];
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

const VisaTabpane = ({ icon, disabled, className }) => {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(disabled);
  const [open, setOpen] = useState(0);
  const [destination, setDestination] = useState("Saudi Arabia");
  const [nationality, setNationality] = useState("Bangladesh");
  const [type, setType] = useState("Umrah Visa");

  const [travellers, setTravellers] = useState(traveller);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkValidation = () => {
    try {
      const validatedData = visaSchema.parse({
        destination,
        type,
        nationality,
        travellers: travellers.reduce((acc, item) => acc + item.count, 0),
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
    setTravellers(newTravellers.reduce((acc, item) => acc + item.count, 0));
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
    setTravellers(newTravellers.reduce((acc, item) => acc + item.count, 0));
    setTravellers(newTravellers);
  };

  const handleFilter = () => {
    console.log(destination, type, nationality, traveller);
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
      router.push("/search/visa");
    }, 2000);
  };

  return (
    <div
      className={cn(
        "bg-white flex flex-col lg:flex-row gap-x-4 gap-y-3 lg:gap-5 px-4 py-5 xs:px-4 xs:py-6 lg:px-6 sm:py-8 md:py-10 lg:py-12 rounded-md",
        className
      )}
    >
      <DropdownMenu
        open={open === 1}
        onOpenChange={(state) => {
          setErrors((prevState) => ({ ...prevState, destination: null }));
          handleDropdown(state ? 1 : 0);
        }}
      >
        <DropdownMenuTrigger asChild className="flex-1" disabled={isDisabled}>
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
              {destination ? destination : "Select Destination"}
              <ArrowIcon className="hidden lg:inline-block" />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="px-0 py-2 border-transparent min-w-[308px]"
        >
          <ScrollArea className="max-h-64">
            {destinations.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => setDestination(item.name)}
                className={cn(
                  "flex justify-between items-center px-5 py-2.5 text-base text-t-800 hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer group",
                  {
                    "bg-p-900 text-white": destination === item.name,
                  }
                )}
              >
                <span>{item.name}</span>
                <span
                  className={cn(
                    "text-t-600 group-hover:text-p-900 group-focus:text-p-900",
                    { "text-white": destination === item.name }
                  )}
                >
                  {item.code}
                </span>
              </DropdownMenuItem>
            ))}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu
        open={open === 2}
        onOpenChange={(state) => {
          handleDropdown(state ? 2 : 0);
          setErrors((prevState) => ({ ...prevState, nationality: null }));
        }}
      >
        <DropdownMenuTrigger asChild className="flex-1" disabled={isDisabled}>
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
              {nationality ? nationality : "Select Nationality"}
              <ArrowIcon className="hidden lg:inline-block" />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="px-0 py-2 border-transparent min-w-[308px]"
        >
          <ScrollArea className="max-h-64">
            {nationalities.map((item) => (
              <DropdownMenuItem
                key={item}
                className={cn(
                  "px-5 py-2.5 text-base text-t-700 hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer",
                  {
                    "bg-p-900 text-white": nationality === item,
                  }
                )}
                onSelect={() => setNationality(item)}
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
          handleDropdown(state ? 3 : 0);
          setErrors((prevState) => ({ ...prevState, type: null }));
        }}
      >
        <DropdownMenuTrigger asChild className="flex-1" disabled={isDisabled}>
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
              Visa Type
            </span>
            <span className="text-sm lg:text-base flex items-center justify-between gap-x-4 text-t-800 lg:text-t-700 capitalize">
              {type ? type : "Select Type"}
              <ArrowIcon className="hidden lg:inline-block" />
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
                onSelect={() => setType(item)}
                className={cn(
                  "px-5 py-2.5 text-base text-t-700 hover:bg-p-900/5 focus:bg-p-900/5 hover:text-p-900 focus:text-p-900 rounded-none cursor-pointer",
                  {
                    "bg-p-900 text-white": type === item,
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
        </DropdownMenuTrigger>
        <DropdownMenuContent
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
            onClick={() => handleDropdown(0)}
            className="px-8 py-2 mx-4 my-4 text-sm lg:text-base"
          >
            Done
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
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

export default VisaTabpane;
