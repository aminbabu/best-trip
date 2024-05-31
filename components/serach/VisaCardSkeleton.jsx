import React from "react";
import { Skeleton } from "../ui/skeleton";

const VisaCardSkeleton = () => {
  return (
    <div className="p-4 sm:p-5 lg:p-[34px] xl:leading-8 flex flex-col md:flex-row lg:items-center justify-between gap-6 lg:gap-9 bg-white">
      <Skeleton className="aspect-square w-full md:mx-0 md:w-1/2 lg:w-64 flex-shrink-0 rounded-[0.1785rem] bg-gray-200" />
      <div className="flex-1">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:pr-[14px]">
          <div>
            <Skeleton className="w-[228px] h-7 bg-gray-200 mb-1.5"></Skeleton>
            <Skeleton className="w-[186px] h-6 bg-gray-200 mb-[35px] lg:mb-4 xl:mb-[35px]"></Skeleton>
            <div className="flex gap-y-4">
              <Skeleton className="w-[342px] h-[34px] rounded-sm bg-p-300 mb-[18px]"></Skeleton>
            </div>
            <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-x-12">
              <ul className="grid xl:grid-cols-2 gap-x-[36px] gap-y-3 lg:gap-y-2 xl:gap-y-3 font-normal">
                <Skeleton className="w-[220px] h-[24px] bg-gray-200"></Skeleton>
                <Skeleton className="w-[220px] h-[24px] bg-gray-200"></Skeleton>
                <Skeleton className="w-[220px] h-[24px] bg-gray-200"></Skeleton>
                <Skeleton className="w-[220px] h-[24px] bg-gray-200"></Skeleton>
                <Skeleton className="w-[220px] h-[24px] bg-gray-200"></Skeleton>
                <Skeleton className="w-[220px] h-[24px] bg-gray-200"></Skeleton>
              </ul>
            </div>
          </div>
          <div className="lg:self-end space-y-4">
            <ul className="grid grid-cols-2 gap-1.5">
              <Skeleton className="col-span-2 w-[224px] h-[26px] bg-gray-200"></Skeleton>
              <Skeleton className="col-span-2 w-[224px] h-[26px] bg-gray-200"></Skeleton>
            </ul>
            <Skeleton className="w-[200px] h-[40px] bg-primary/20"></Skeleton>
            <Skeleton className="w-[175px] h-[24px] mt-[51px] bg-gray-200"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaCardSkeleton;
