import BaggageSummary from "@/components/umrah-fight/flight-card-details-tabs/BaggageSummary";
import FareRules from "@/components/umrah-fight/flight-card-details-tabs/FareRules";
import FareSummary from "@/components/umrah-fight/flight-card-details-tabs/FareSummary";
import ItineraryDetails from "@/components/umrah-fight/flight-card-details-tabs/ItineraryDetails";
import FlightDetailsCard from "@/components/umrah-fight/FlightDetailsCard";
import ItineraryDetailsTabContent from "@/components/umrah-fight/ItineraryDetailsTabContent";

const detailsRuleText1 = (
  <p className="h-[300px] overflow-y-auto pr-4 text-xs text-t-600 leading-5">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
    simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    been the industry&apos;s standard dummy text ever since the 1500s, when an
    unknown printer took a galley of type and scrambled it to make a type
    specimen book. It has survived not only five centuries, but also the leap
    into electronic typesetting, remaining essentially unchanged. It was
    popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in
    the 1960s with the release of Letraset sheets containing Lorem Ipsum
    passages, and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
    text of the printing and typesetting industry. Lorem Ipsum has been the
    industry&apos;s standard dummy text ever since the 1500s, when an unknown
    printe. Lorem Ipsum is simply dummy text of the printing and typesetting
    industry.
  </p>
);

const detailsRuleText2 = (
  <p className="h-[300px] overflow-y-auto pr-4 text-xs text-t-600 leading-5">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
    simply dummy text of the printing and typesetting industry.
  </p>
);

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

export const detailRulesTabItems = [
  {
    id: 1,
    name: "Ru.rule application",
    value: "Ru.rule application",
    element: detailsRuleText1,
  },
  {
    id: 2,
    name: "Ap.advance res/tkt",
    value: "Ap.advance res/tkt",
    element: detailsRuleText2,
  },
  {
    id: 3,
    name: "Cd.child discounts",
    value: "Cd.child discounts",
    element: detailsRuleText1,
  },
  {
    id: 4,
    name: "Od.other discounts",
    value: "Od.other discounts",
    element: detailsRuleText2,
  },
  {
    id: 5,
    name: "Te.tkt endorsement",
    value: "Te.tkt endorsement",
    element: detailsRuleText1,
  },
];
