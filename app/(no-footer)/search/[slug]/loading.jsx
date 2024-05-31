import React from "react";
import VisaCardSkeleton from "@/components/serach/VisaCardSkeleton";
import Container from "@/components/layouts/Container";

const loading = () => {
  return (
    <Container>
      {"abcdefgh".split("").map((i) => (
        <VisaCardSkeleton key={i} />
      ))}
    </Container>
  );
};

export default loading;
