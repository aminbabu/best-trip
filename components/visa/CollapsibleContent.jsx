import React from "react";
import { CollapsibleContent } from "../ui/collapsible";
import VisaCardDetailsTabs from "./VisaCardDetailsTabs";
import { usePathname } from "next/navigation";
import FlightCardDetailsTabs from "../fight/flight-card-details-tabs/FlightCardDetailsTabs";

const CardCollapsibleContent = () => {
  const pathname = usePathname();
  return (
    <CollapsibleContent>
      {pathname === "/search/visa" && <VisaCardDetailsTabs />}
      {pathname === "/search/flight" && <FlightCardDetailsTabs />}
    </CollapsibleContent>
  );
};

export default CardCollapsibleContent;
