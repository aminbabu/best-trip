import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import VisaBasicInfo from "./VisaBasicInfo";
import RequirementList from "./RequirementList";
import TermsAnsConditions from "./TermsAnsConditions";
import CountryInfo from "./CountryInfo";

let reqList = [
  {
    id: 1,
    req: "Passport (6 months validation on travel date)",
  },
  {
    id: 2,
    req: "Bank Statement last 6 Month (Last balance per person minimum BDT 70,000/- )",
  },
  {
    id: 3,
    req: "Bank Solvency",
  },
  {
    id: 4,
    req: "Trade license (Notarized with English translation)/ NOC for Job Holder",
  },
  {
    id: 5,
    req: "Tin (If Have)",
  },
  {
    id: 6,
    req: "Company pad/letterhead (Business Profession)",
  },
  {
    id: 7,
    req: "Visiting Card/Office ID card",
  },
  {
    id: 8,
    req: "Photo",
  },
  {
    id: 9,
    req: "35/45 (4 Copy- Lab print, mat paper, white background)",
  },
  {
    id: 10,
    req: "35/50 (2Copy- Lab print, mat paper, white background for Malaysia)",
  },
  {
    id: 11,
    req: "Vaccination Card (for Singapore, Malaysia)",
  },
  {
    id: 12,
    req: "Marriage certificate (for Newly Married couple)",
  },
  {
    id: 13,
    req: "NOC letter from school/college/University of children and ID card",
  },
];

let countryInfo = {
  intro:
    "Saudi Arabia, officially the Kingdom of Saudi Arabia, is a country in West Asia. It covers the bulk of the Arabian Peninsula and has a land area of about 2150000 km², making it the fifth-largest country in Asia and the largest in the Middle East.",
  countryName: "Saudi Arabia (SA)",
  capital: "Riyadh",
  king: "Salman of Saudi Arabia",
  currency: "Saudi Riyal",
  government: "Monarchy, Absolute monarchy, Unitary state, Islamic state",
  Population: "35.95 million (2021) World Bank",
  dialingCode: "+966",
  dateFormat: "dd/mm/yyyy (AH)",
  location:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.1833698326775!2d90.4178239799482!3d23.734298039743305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c5bb36059%3A0xef2e9a37765ee400!2sT%20%26%20T%20Colony%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1716620578187!5m2!1sen!2sbd",
};

const VisaCardDetailsTabs = () => {
  const tabItems = [
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
      element: <RequirementList reqList={reqList} />,
    },
    {
      id: 3,
      name: "Country Information",
      value: "country Information",
      element: <CountryInfo countryInfo={countryInfo} />,
    },
    {
      id: 4,
      name: "Terms & Conditions",
      value: "terms & Conditions",
      element: <TermsAnsConditions />,
    },
  ];

  return (
    <Tabs className="mt-[-10px]" defaultValue={tabItems[0].value}>
      <TabsList className="bg-p-300 px-4 sm:px-6 lg:px-8 h-[47px] overflow-y-hidden flex items-center justify-start gap-x-6 md:gap-x-14 lg:gap-x-[70px] rounded-none">
        {tabItems.map((tab) => (
          <TabsTrigger
            key={tab.id}
            className="flex-shrink-0 flex items-center justify-center text-base leading-normal data-[state=active]:bg-p-300 data-[state=active]:text-primary data-[state=active]:shadow-none"
            value={tab.value}
          >
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabItems.map((tab) => (
        <TabsContent key={tab.id} value={tab.value}>
          {tab.element}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default VisaCardDetailsTabs;
