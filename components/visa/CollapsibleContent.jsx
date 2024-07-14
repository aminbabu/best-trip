import React from "react";
import { CollapsibleContent } from "../ui/collapsible";
import VisaCardDetailsTabs from "./VisaCardDetailsTabs";
import FlightCardDetailsTabs from "../umrah-fight/FlightCardDetailsTabs";
import { usePathname } from "next/navigation";

const CardCollapsibleContent = () => {
  const pathname = usePathname();
  return (
    <CollapsibleContent>
      {pathname === "/search/visa" && <VisaCardDetailsTabs />}
      {pathname === "/search/umrah-flight" && <FlightCardDetailsTabs />}
    </CollapsibleContent>
  );
};

export default CardCollapsibleContent;
