import React from "react";
import VisaCardSkeleton from "@/components/serach/VisaCardSkeleton";
import Container from "@/components/layouts/Container";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <Container className="bg-[#F6F6F6]">
      <Skeleton className="w-[1140px] h-[174px]"></Skeleton>
      {"abcdefgh".split("").map((i) => (
        <VisaCardSkeleton key={i} />
      ))}
    </Container>
  );
};

export default loading;
