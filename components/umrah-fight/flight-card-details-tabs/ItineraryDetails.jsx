import { BalakaIcon, LocationIcon, PlaneIcon } from "@/components/icons/svgr";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftRight } from "lucide-react";
import React from "react";
import ItineraryDetailsTab from "../ItineraryDetailsTab";

const ItineraryDetails = () => {
  return (
    <div className="p-6 md:px-10 md:py-6 text-xs">
      <ItineraryDetailsTab />
    </div>
  );
};

export default ItineraryDetails;
