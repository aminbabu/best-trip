import BaggageSummary from "@/components/umrah-fight/flight-card-details-tabs/BaggageSummary";
import FareRules from "@/components/umrah-fight/flight-card-details-tabs/FareRules";
import FareSummary from "@/components/umrah-fight/flight-card-details-tabs/FareSummary";
import ItineraryDetails from "@/components/umrah-fight/flight-card-details-tabs/ItineraryDetails";
import FlightDetailsCard from "@/components/umrah-fight/FlightDetailsCard";
import ItineraryDetailsTabContent from "@/components/umrah-fight/ItineraryDetailsTabContent";

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
    element: <FareRules />,
  },
];

export const flightDetailsTabItems = [
  {
    id: 1,
    name: "Dubai-Lisbon",
    value: "Dubai-Lisbon",
    element: <FlightDetailsCard />,
  },
  {
    id: 2,
    name: "Dubai-Dhaka",
    value: "Dubai-Dhaka",
    element: <FlightDetailsCard />,
  },
  {
    id: 3,
    name: "Dubai-Chittagong",
    value: "Dubai-Chittagong",
    element: <FlightDetailsCard />,
  },
];

export const itineraryDetailsTabItems = [
  {
    id: 1,
    name: "Dubai-Lisbon",
    value: "Dubai-Lisbon",
    element: <ItineraryDetailsTabContent />,
  },
  {
    id: 2,
    name: "Dubai-Dhaka",
    value: "Dubai-Dhaka",
    element: <ItineraryDetailsTabContent />,
  },
  {
    id: 3,
    name: "Dubai-Chittagong",
    value: "Dubai-Chittagong",
    element: <ItineraryDetailsTabContent />,
  },
];
