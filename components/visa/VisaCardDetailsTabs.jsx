import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { tabItems } from "@/data/visa";

const VisaCardDetailsTabs = () => {
  return (
    <Tabs defaultValue={tabItems[0].value}>
      <TabsList className="bg-p-300 px-4 sm:px-6 lg:px-8 h-[47px] overflow-y-hidden flex items-center justify-start gap-x-6 md:gap-x-14 lg:gap-x-[70px] rounded-none">
        {tabItems?.map((tab) => (
          <TabsTrigger
            key={tab.id}
            className="flex-shrink-0 flex items-center justify-center text-base font-normal leading-normal data-[state=active]:bg-p-300 data-[state=active]:text-primary data-[state=active]:shadow-none"
            value={tab.value}
          >
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabItems?.map((tab) => (
        <TabsContent key={tab.id} value={tab.value}>
          {tab.element}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default VisaCardDetailsTabs;
