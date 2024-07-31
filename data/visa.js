import CountryInfo from "@/components/visa/CountryInfo";
import RequirementList from "@/components/visa/RequirementList";
import TermsAnsConditions from "@/components/visa/TermsAnsConditions";
import VisaBasicInfo from "@/components/visa/VisaBasicInfo";

export const reqmntList = [
  {
    id: 1,
    req: "Passport copy with minimum 6 months validity",
  },
  {
    id: 2,
    req: "Passport size photo (white background)",
  },
  {
    id: 3,
    req: "ID card/ Birth certificate",
  },
  {
    id: 4,
    req: "Return Ticket Booking copy",
  },
  {
    id: 5,
    req: "Hotel Booking copy",
  },
];

export const tabItems = [
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
    element: <CountryInfo />,
  },
  {
    id: 4,
    name: "Terms & Conditions",
    value: "terms & Conditions",
    element: <TermsAnsConditions />,
  },
];
