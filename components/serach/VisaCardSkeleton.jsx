import React from "react";
import { Skeleton } from "../ui/skeleton";

const VisaCardSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default VisaCardSkeleton;
