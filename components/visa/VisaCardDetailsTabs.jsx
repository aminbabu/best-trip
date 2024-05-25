import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import VisaBasicInfo from "./VisaBasicInfo";
import RequirementList from "./RequirementList";
import TermsAnsConditions from "./TermsAnsConditions";

const VisaCardDetailsTabs = () => {
  const tabItems = [
    {
      id: 1,
      name: "Basic Information",
      value: "basic information",
      element: <VisaBasicInfo />,
    },
    {
      id: 2,
      name: "Requirement list",
      value: "requirement list",
      element: <RequirementList />,
    },
    {
      id: 3,
      name: "Country Information",
      value: "country Information",
      element: "Country Information are here",
    },
    {
      id: 4,
      name: "Terms & Conditions",
      value: "terms & Conditions",
      element: <TermsAnsConditions />,
    },
  ];

  return (
    <Tabs className="mt-[-10px]" defaultValue={tabItems[0].value}>
      <TabsList className="bg-p-300 px-4 sm:px-6 lg:px-8 h-[47px] overflow-y-hidden flex items-center justify-start gap-x-6 md:gap-x-14 lg:gap-x-[70px] rounded-none">
        {tabItems.map((tab) => (
          <TabsTrigger
            key={tab.id}
            className="flex-shrink-0 flex items-center justify-center text-base leading-normal data-[state=active]:bg-p-300 data-[state=active]:text-primary data-[state=active]:shadow-none"
            value={tab.value}
          >
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabItems.map((tab) => (
        <TabsContent key={tab.id} value={tab.value}>
          {tab.element}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default VisaCardDetailsTabs;
