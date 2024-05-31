import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import VisaCardSkeleton from "@/components/serach/VisaCardSkeleton";

const loading = () => {
  return (
    <div className="">
      <VisaCardSkeleton />
    </div>
  );
};

export default loading;
