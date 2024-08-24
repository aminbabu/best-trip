"use client";
import { getUmrahPackageForCustomers } from "@/actions/umrahPackages/get-umrah-packages";
import CustomsCard from "@/components/serach/CustomsCard";
import UmrahFlightCard from "@/components/serach/UmrahFlightCard";
import VisaCard from "@/components/serach/VisaCard";
import visaData from "@/data/visa-result.json";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import { Card } from "../ui/card";
import FlightFilter from "../umrah-fight/FlightFilter";
import UmrahCard from "./UmrahCard";

const FilterResult = ({ slug }) => {
  let searchedValue;
  if (typeof window != undefined) {
    searchedValue = JSON.parse(localStorage.getItem("searchedValue"))
  }
  const [params, setParams] = useState(searchedValue ? searchedValue : {});
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);
  const [lastItemId, setLastItemId] = useState(""); // Initialize lastItemId
  const loaderRef = useRef(null);

  const loadInitialData = useCallback(
    async (isLoadMore = false) => {
      setLoading(true);
      try {
        const response = await getUmrahPackageForCustomers({
          packageSchedule: params.schedule,
          packageType: params.type,
          packageDuration: params.duration,
          dataLength: params.dataLength || 2,
          adultTravelers: params.adultTravelers,
          childTravelers: params.childTravelers,
          infantsTravelers: params.infantsTravelers,
          lastItemId: isLoadMore ? lastItemId : ""
        });
  
        const { umrahPackages } = response;
        if (umrahPackages && umrahPackages.umrahPackages.length > 0) {
          setItems((prevItems) => {
            // Create a new array combining previous items and new items
            const combinedItems = [
              ...prevItems,
              ...umrahPackages.umrahPackages,
            ];
  
            // Create a map to remove duplicates based on _id
            const uniqueItemsMap = new Map();
            combinedItems.forEach((item) => {
              uniqueItemsMap.set(item._id, item);
            });
  
            // Return an array of unique items
            return Array.from(uniqueItemsMap.values());
          });
  
          if (umrahPackages.nextCursor) {
            setLastItemId(umrahPackages.nextCursor);
          } else {
            setLastItemId(null);
          }
          setHasMore(umrahPackages?.hasMore);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingInitial(false);
        setLoading(false);
      }
    },
    [params, lastItemId]
  );
  
  useEffect(() => {
    loadInitialData();
  }, [params, loadInitialData]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200 &&
        hasMore &&
        !loading
      ) {
        loadInitialData(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading, lastItemId, loadInitialData]);

  if (items.length === 0 && visaData.length === 0) {
    return (
      <h2 className="text-2xl font-semibold text-center text-gray-700">
        No result found.
      </h2>
    );
  }

  switch (slug) {
    case "umrah-flight":
      return (
        <div className="grid grid-cols-11 gap-7">
          <div className="col-span-11 lg:col-span-3">
            <FlightFilter />
          </div>
          <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8 col-span-11 lg:col-span-8">
            <Card className="hidden md:grid grid-cols-9 col-span-1 gap-2 lg:gap-6 border-none px-5 h-[52px] text-xs lg:text-sm font-medium">
              <div className="col-span-2 flex items-center justify-center">
                Sort By : Duration
              </div>
              <div className="col-span-2 flex items-center justify-center">
                Departure
              </div>
              <div className="col-span-1"></div>
              <div className="col-span-2 flex items-center justify-center">
                Arrival
              </div>
              <div className="col-span-2 flex items-center justify-center">
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
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8 relative">
          {items?.map((item) => (
            <UmrahCard key={item.id} data={item} />
          ))}
          {hasMore && (
            <div ref={loaderRef} className="w-full text-center py-4">
              <p>Loading more...</p>
            </div>
          )}
        </div>
      );
    case "visa":
      return (
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8">
          {visaData.map((item) => (
            <VisaCard key={item.id} data={item} />
          ))}
        </div>
      );
    case "customs":
      return (
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8">
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