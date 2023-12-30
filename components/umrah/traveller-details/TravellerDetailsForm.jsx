"use client";

import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { InfoIcon } from "lucide-react";

const TravellerDetailsForm = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-t-700 text-lg font-medium">Traveler Details</h2>

      <div className="bg-p-300 font-normal lg:text-lg text-t-800 rounded-sm px-4 py-3 flex items-center gap-x-2.5">
        <InfoCircledIcon className="w-6 h-6 text-p-900 flex-shrink-0" />
        Enter details exactly as they appear on your passport
      </div>
    </div>
  );
};

export default TravellerDetailsForm;
