import BaggageSummary from "@/components/fight/flight-card-details-tabs/BaggageSummary";
import DetailsRulesContent from "@/components/fight/flight-card-details-tabs/DetailsRulesContent";
import FareRules from "@/components/fight/flight-card-details-tabs/FareRules";
import FareSummary from "@/components/fight/flight-card-details-tabs/FareSummary";
import ItineraryDetails from "@/components/fight/flight-card-details-tabs/ItineraryDetails";
import FlightDetailsCard from "@/components/fight/FlightDetailsCard";
import ItineraryDetailsTabContent from "@/components/fight/ItineraryDetailsTabContent";

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
    element: <DetailsRulesContent />,
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
const detailsRuleText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
export const detailRulesTabItems = [
  {
    id: 1,
    name: "Ru.rule application",
    value: "Ru.rule application",
    element: { detailsRuleText },
  },
  {
    id: 2,
    name: "Ap.advance res/tkt",
    value: "Ap.advance res/tkt",
    element: { detailsRuleText },
  },
  {
    id: 3,
    name: "Cd.child discounts",
    value: "Cd.child discounts",
    element: { detailsRuleText },
  },
  {
    id: 4,
    name: "Od.other discounts",
    value: "Od.other discounts",
    element: { detailsRuleText },
  },
  {
    id: 5,
    name: "Te.tkt endorsement",
    value: "Te.tkt endorsement",
    element: { detailsRuleText },
  },
];
