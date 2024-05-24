import React from "react";
import { TickRedIcon } from "../icons/svgr";
import Notice from "./Notice";

const RequirementList = () => {
  return (
    <div className="pt-5 xl:pt-[30px] px-6 xl:px-[34px] pb-8 xl:pb-10">
      <div>
        <h4 className="text-sm xl:text-base text-t-800 font-medium leading-relaxed mb-[26px]">
          Required Documents For Dubai Tourist Visa
        </h4>
        <p className="text-sm xl:text-base text-t-600 font-normal leading-normal">
          Saudi Arabia, officially the Kingdom of Saudi Arabia, is a country in
          West Asia. It covers the bulk of the Arabian Peninsula and has a land
          area of about 2150000 km², making it the fifth-largest country in Asia
          and the largest in the Middle East.
        </p>
      </div>
      <div className="mt-5 mb-10">
        <ul className="space-y-4">
          <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
            <TickRedIcon className="mt-1 flex-shrink-0" />
            <span>Passport (6 months validation on travel date)</span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
            <TickRedIcon className="mt-1 flex-shrink-0" />
            <span>
              Bank Statement last 6 Month (Last balance per person minimum BDT
              70,000/- )
            </span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
            <TickRedIcon className="mt-1 flex-shrink-0" />
            <span>Bank Solvency</span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
            <TickRedIcon className="mt-1 flex-shrink-0" />
            <span>
              Trade license (Notarized with English translation)/ NOC for Job
              Holder
            </span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
            <TickRedIcon className="mt-1 flex-shrink-0" />
            <span>Tin (If Have)</span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
            <TickRedIcon className="mt-1 flex-shrink-0" />
            <span>Company pad/letterhead (Business Profession)</span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
            <TickRedIcon className="mt-1 flex-shrink-0" />
            <span>Visiting Card/Office ID card</span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
            <TickRedIcon className="mt-1 flex-shrink-0" />
            <span>Salary Certificate with pay slip (For Job Holder)</span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
            <TickRedIcon className="mt-1 flex-shrink-0" />
            <span>Photo</span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
            <TickRedIcon className="mt-1 flex-shrink-0" />
            <span>35/45 (4 Copy- Lab print, mat paper, white background)</span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
            <TickRedIcon className="mt-1 flex-shrink-0" />
            <span>
              35/50 (2Copy- Lab print, mat paper, white background for Malaysia)
            </span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
            <TickRedIcon className="mt-1 flex-shrink-0" />
            <span>Vaccination Card (for Singapore, Malaysia)</span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
            <TickRedIcon className="mt-1 flex-shrink-0" />
            <span>Marriage certificate (for Newly Married couple)</span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal">
            <TickRedIcon className="mt-1 flex-shrink-0" />
            <span>
              NOC letter from school/college/University of children and ID card
            </span>
          </li>
        </ul>
      </div>
      <Notice
        message={
          "Please contact support team for Document processing after the payment. Visa rate may change without any prior notice"
        }
      />
    </div>
  );
};

export default RequirementList;
