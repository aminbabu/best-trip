import DetailsTab from "@/components/umrah/DetailsTab";
import Overview from "@/components/umrah/Overview";
import React from "react";

const UmrahDetailsLayout = ({ params }) => {
  const { id } = params;

  return (
    <main className="bg-secondary py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 space-y-6">
      <Overview />
      <DetailsTab />
    </main>
  );
};

export default UmrahDetailsLayout;
