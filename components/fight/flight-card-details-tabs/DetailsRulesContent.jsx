import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { detailRulesTabItems } from "@/data/flight";

const DetailsRulesContent = () => {
  return (
    <div className="px-10 py-6 space-y-6">
      <h1>Details Rules</h1>
      <Tabs
        defaultValue={detailRulesTabItems[0].value}
        className="grid grid-cols-7 gap-5 md:gap-7"
      >
        <TabsList className="col-span-2 flex-col gap-y-5 items-start justify-normal h-auto">
          {detailRulesTabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.value}
              className="block focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-p-300 data-[state=active]:text-t-600 data-[state=active]:shadow-sm w-full"
            >
              <div className="flex gap-3 items-center">
                <input
                  id={tab.value}
                  className="substituted"
                  type="checkbox"
                  aria-hidden="true"
                />
                <label
                  htmlFor={tab.value}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {tab.name}
                </label>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {detailRulesTabItems.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.value}
            className="col-span-5 bg-p-300 p-4 pr-2"
          >
            {tab.element}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default DetailsRulesContent;
