import React from "react";
import { CollapsibleContent } from "../ui/collapsible";
import VisaCardDetailsTabs from "./VisaCardDetailsTabs";

const CardCollapsibleContent = () => {
  return (
    <CollapsibleContent>
      <VisaCardDetailsTabs />
    </CollapsibleContent>
  );
};

export default CardCollapsibleContent;
