import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { itineraryDetailsTabItems } from "@/data/flight";

const ItineraryDetailsTab = () => {
  return (
    <Tabs
      className="space-y-9"
      defaultValue={itineraryDetailsTabItems[0].value}
    >
      <TabsList className="flex justify-start gap-x-7 bg-white overflow-x-auto overflow-y-hidden">
        {itineraryDetailsTabItems.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.value}
            className="flex-shrink-0 flex items-center justify-center text-xs font-normal leading-normal text-t-900 border border-transparent data-[state=active]:border data-[state=active]:border-red-300  data-[state=active]:shadow-none duration-300"
          >
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {itineraryDetailsTabItems.map((tab) => (
        <TabsContent key={tab.id} value={tab.value}>
          {tab.element}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ItineraryDetailsTab;
