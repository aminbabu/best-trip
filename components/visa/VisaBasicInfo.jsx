import React from "react";
import {
  EnvelopeRedIcon,
  LocationRedIcon,
  PhoneRedIcon,
  PrinterRedIcon,
} from "../icons/svgr";
import Notice from "../global/Notice";

const VisaBasicInfo = () => {
  return (
    <div className="pt-5 xl:pt-[30px] px-6 xl:px-[34px] pb-8 xl:pb-10 space-y-10">
      <div>
        <h4 className="text-sm xl:text-base text-t-800 font-medium leading-relaxed mb-[18px]">
          For Dubai Tourist Visa Best Trip Provides
        </h4>
        <p className="text-sm xl:text-base text-t-600 font-normal leading-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <h4 className="text-sm xl:text-base text-t-800 font-medium leading-relaxed mb-[18px]">
          About UAE Embassy, Dhaka
        </h4>
        <p className="text-sm xl:text-base text-t-600 font-normal leading-normal">
          The UAE Embassy, Dhaka plays an important role in the strong
          partnership between the UAE and Bangladesh Governments that supports
          understanding, recovery and prosperity for both countries. Since the
          establishment of the United Arab Emirates on 2 December 1971, the UAE
          adopted a balanced foreign policy based on adoption of dialogue,
          respect of international conventions, commitment to the United Nations
          Charter and non-interference of other country&apos;s internal affairs,
          and the settlement of disputes by peaceful means. One of the main
          anchoresses of the UAE&apos;s foreign policy has been building
          cooperation-based relations with all countries of the world. As a part
          of this UAE embassy, Dhaka was established in 1987.since its creation,
          the UAE Embassy has been playing an important role in fostering the
          strong and close relationship between UAE and Bangladesh.
        </p>
      </div>
      <div className="flex flex-col justify-between max-w-[655px] mx-auto">
        <ul className="grid lg:grid-cols-3 gap-x-[150px] gap-y-3 lg:gap-y-2 xl:gap-y-3 mb-[30px]">
          <li className="flex gap-x-2 text-sm xl:text-base text-t-800 leading-normal col-span-1">
            <PhoneRedIcon className="mt-1 flex-shrink-0" />
            <span className="flex-shrink-0">008802222282277</span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-800 leading-normal col-span-2">
            <EnvelopeRedIcon className="mt-1 flex-shrink-0" />
            <span className="flex-shrink-0">dhakaemd@mofaic.gov.ae</span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-800 leading-normal col-span-1">
            <PrinterRedIcon className="mt-1 flex-shrink-0" />
            <span className="flex-shrink-0">880284789845738</span>
          </li>
          <li className="flex gap-x-2 text-sm xl:text-base text-t-800 leading-normal col-span-2">
            <LocationRedIcon className="mt-1 flex-shrink-0" />
            <span className="">
              House No: 191, Road No: 69, Gulshan North Ave, Dhaka 1212, Dhaka,
              Bangladesh
            </span>
          </li>
        </ul>
        <p className="text-center text-sm xl:text-base mb-4 text-t-800">
          Web: mofa.gov.ae
        </p>
        <p className="text-center text-sm xl:text-base text-t-800">
          Office Hours: Sunday to Thursday (9;00 AM to 1:00 PM and 2:00 PM to
          5:00 PM)
        </p>
      </div>
      <Notice
        message={
          "Please contact support team for Document processing after the payment. Visa rate may change without any prior notice"
        }
      />
    </div>
  );
};

export default VisaBasicInfo;
