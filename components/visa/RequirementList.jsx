import React from "react";
import { TickIcon } from "../icons/svgr";
import Notice from "../global/Notice";

let reqList = [
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
    req: "Return Ticket Booking copy",
  },
  {
    id: 5,
    req: "Hotel Booking copy",
  },
];

const RequirementList = () => {
  return (
    <div className="pt-5 xl:pt-[30px] px-6 xl:px-[34px] pb-8 xl:pb-10">
      {/* <div>
        <h4 className="text-sm xl:text-base text-t-800 font-medium leading-relaxed mb-[26px]">
          Required Documents For Dubai Tourist Visa
        </h4>
        <p className="text-sm xl:text-base text-t-600 font-normal leading-normal">
          Saudi Arabia, officially the Kingdom of Saudi Arabia, is a country in
          West Asia. It covers the bulk of the Arabian Peninsula and has a land
          area of about 2150000 km², making it the fifth-largest country in Asia
          and the largest in the Middle East.
        </p>
      </div> */}
      <div className="mt-5 mb-10">
        <ul className="space-y-4">
          {reqList.map((item) => (
            <li
              key={item.id}
              className="flex gap-x-2 text-sm xl:text-base text-t-600 leading-normal"
            >
              <TickIcon fill="#F50308" className="mt-1 flex-shrink-0" />
              <span>{item.req}</span>
            </li>
          ))}
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
