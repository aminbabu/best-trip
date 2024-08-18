"use client";
import { getUmrahPackageForCustomers } from "@/actions/umrahPackages/get-umrah-packages";
import CustomsCard from "@/components/serach/CustomsCard";
import UmrahFlightCard from "@/components/serach/UmrahFlightCard";
import VisaCard from "@/components/serach/VisaCard";
import umrahData from "@/data/umrah-result.json";
import visaData from "@/data/visa-result.json";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Card } from "../ui/card";
import FlightFilter from "../umrah-fight/FlightFilter";

const FilterResult = ({ slug }) => {
  const [params, setParams] = useState({});
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loadingInitial, setLoadingInitial] = useState(true); // Track initial load

  const loaderRef = useRef(null);
  const searchParams = useSearchParams();

  /* 
  
       packageSchedule: data.schedule,
        packageType: data.type,
        packageDuration: data.duration,
        dataLength: 3,
        adultTravelers: data.travellers.adultTravelers,
        childTravelers: data.travellers.childTravelers,
        infantsTravelers: data.travellers.infantsTravelers,
        lastItemId: "",
  */

  useEffect(() => {
    const searchParamsObj = {};
    searchParams.forEach((value, key) => {
      searchParamsObj[key] = value;
    });
    setParams(searchParamsObj);
    console.log(searchParamsObj);
  }, [searchParams]);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const response = await getUmrahPackageForCustomers({
          packageSchedule: params.schedule,
          packageType: params.type,
          packageDuration: params.duration,
          dataLength: params.dataLength,
          adultTravelers: params.adultTravelers,
          childTravelers: params.childTravelers,
          infantsTravelers: params.infantsTravelers,
          lastItemId: "",
        });
        const { umrahPackages, hasMore: moreItemsAvailable } = response;

        if (umrahPackages.length > 0) {
          setItems(umrahPackages);
        }
        setHasMore(moreItemsAvailable);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingInitial(false);
      }
    };

    loadInitialData();
  }, [params]);

  useEffect(() => {
    const loadMore = async () => {
      try {
        const response = await getUmrahPackageForCustomers({
          packageSchedule: params.schedule,
          packageType: params.type,
          packageDuration: params.duration,
          dataLength: params.dataLength,
          adultTravelers: params.adultTravelers,
          childTravelers: params.childTravelers,
          infantsTravelers: params.infantsTravelers,
          lastItemId: params.lastItemId,
        });
        const { umrahPackages, hasMore: moreItemsAvailable } = response;

        console.log(umrahPackages);

        if (umrahPackages.length > 0) {
          setItems((prevItems) => [...prevItems, ...umrahPackages]);
        }
        setHasMore(moreItemsAvailable);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const handleScroll = () => {
      if (loaderRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;
        if (scrollHeight - scrollTop <= clientHeight * 1.5 && hasMore) {
          loadMore();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [params, hasMore]);

  if (umrahData.length === 0 || visaData.length === 0) {
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
          {items.map((item) => (
            <h1 key={item._id}>Hello</h1>
          ))}
          {hasMore && (
            <div ref={loaderRef} className='w-full text-center py-4'>
              <p>Loading more...</p>
            </div>
          )}
          {/*  {umrahData.map((item) => (
            <UmrahCard key={item.id} data={item} />
          ))} */}
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
          {visaData.map((item) => (
            <CustomsCard key={item.id} data={item} />
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default FilterResult;
