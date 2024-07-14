import ItineraryDetails from "@/components/umrah-fight/ItineraryDetails";
import CountryInfo from "@/components/visa/CountryInfo";
import RequirementList from "@/components/visa/RequirementList";
import TermsAnsConditions from "@/components/visa/TermsAnsConditions";
import VisaBasicInfo from "@/components/visa/VisaBasicInfo";

export const tabItems = [
  {
    id: 1,
    name: "Itinerary Details",
    value: "itinerary details",
    element: <ItineraryDetails />,
  },
  {
    id: 2,
    name: "Baggage Summary",
    value: "baggage summary",
    element: <RequirementList />,
  },
  {
    id: 3,
    name: "Fare Summary",
    value: "fare summary",
    element: <CountryInfo />,
  },
  {
    id: 4,
    name: "Fare Rules",
    value: "fare rules",
    element: <TermsAnsConditions />,
  },
];
