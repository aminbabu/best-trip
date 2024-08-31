import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import VisaBasicInfo from "../../visa/VisaBasicInfo";
import RequirementList from "../../visa/RequirementList";
import CountryInfo from "../../visa/CountryInfo";
import SelectRoom from "./SelectRoom";
import HotelFacilities from "./HotelFacilities";
import HotelLocation from "./HotelLocation";

const hotelTabItems = [
  {
    id: 1,
    name: "Select Room",
    value: "Select Room",
    element: <SelectRoom />,
  },
  {
    id: 2,
    name: "Hotel Facilities",
    value: "Hotel Facilities",
    element: <HotelFacilities />,
  },
  {
    id: 3,
    name: "Hotel Location",
    value: "Hotel Location",
    element: <HotelLocation />,
  },
];

const HotelDetailsTab = () => {
  return (
    <Tabs className="bg-white" defaultValue={hotelTabItems[0].value}>
      <TabsList className="bg-p-300 px-4 sm:px-6 lg:px-8 h-[47px] overflow-y-hidden flex items-center justify-start gap-x-6 md:gap-x-14 lg:gap-x-[70px] rounded-none">
        {hotelTabItems?.map((tab) => (
          <TabsTrigger
            key={tab.id}
            className="flex-shrink-0 flex items-center justify-center text-base font-normal leading-normal data-[state=active]:bg-p-300 data-[state=active]:text-primary data-[state=active]:shadow-none"
            value={tab.value}
          >
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {hotelTabItems?.map((tab) => (
        <TabsContent key={tab.id} value={tab.value}>
          {tab.element}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default HotelDetailsTab;
