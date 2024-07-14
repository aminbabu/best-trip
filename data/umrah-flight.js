import BaggageSummary from "@/components/umrah-fight/BaggageSummary";
import FareSummary from "@/components/umrah-fight/FareSummary";
import ItineraryDetails from "@/components/umrah-fight/ItineraryDetails";
import CountryInfo from "@/components/visa/CountryInfo";
import TermsAnsConditions from "@/components/visa/TermsAnsConditions";

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
    element: <BaggageSummary />,
  },
  {
    id: 3,
    name: "Fare Summary",
    value: "fare summary",
    element: <FareSummary />,
  },
  {
    id: 4,
    name: "Fare Rules",
    value: "fare rules",
    element: <TermsAnsConditions />,
  },
];
