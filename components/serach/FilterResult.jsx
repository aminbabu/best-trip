"use client";
import CustomsCard from "@/components/serach/CustomsCard";
import UmrahCard from "@/components/serach/UmrahCard";
import UmrahFlightCard from "@/components/serach/UmrahFlightCard";
import VisaCard from "@/components/serach/VisaCard";
import visaData from "@/data/visa-result.json";
import { Card } from "../ui/card";
import FlightFilter from "../umrah-fight/FlightFilter";

const FilterResult = ({ slug, data }) => {
  if (data.length === 0) {
    return (
      <h2 className='text-2xl font-semibold text-center text-gray-700'>
        No result found.
      </h2>
    );
  }

  switch (slug) {
    case "umrah-flight":
      return (
        <div className='grid grid-cols-11 gap-7'>
          <div className='col-span-11 lg:col-span-3'>
            <FlightFilter />
          </div>
          <div className='grid grid-cols-1 gap-y-6 lg:gap-y-8 col-span-11 lg:col-span-8'>
            <Card className='hidden md:grid grid-cols-9 col-span-1 gap-2 lg:gap-6 border-none px-5 h-[52px] text-xs lg:text-sm font-medium'>
              <div className='col-span-2 flex items-center justify-center'>
                Sort By : Duration
              </div>
              <div className='col-span-2 flex items-center justify-center'>
                Departure
              </div>
              <div className='col-span-1'></div>
              <div className='col-span-2 flex items-center justify-center'>
                Arrival
              </div>
              <div className='col-span-2 flex items-center justify-center'>
                Price
              </div>
            </Card>
            {visaData.map((item) => (
              <UmrahFlightCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      );
    case "umrah":
      return (
        <div className='grid grid-cols-1 gap-y-6 lg:gap-y-8'>
          {data.map((item) => (
            <UmrahCard key={item.id} data={item} />
          ))}
        </div>
      );
    case "visa":
      return (
        <div className='grid grid-cols-1 gap-y-6 lg:gap-y-8'>
          {visaData.map((item) => (
            <VisaCard key={item.id} data={item} />
          ))}
        </div>
      );
    case "customs":
      return (
        <div className='grid grid-cols-1 gap-y-6 lg:gap-y-8'>
          {data.map((item) => (
            <CustomsCard key={item.id} data={item} />
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default FilterResult;
