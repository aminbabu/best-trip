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
          For Saudi Arabia Umrah Visa Best Trip Provides
        </h4>
        <p className="text-sm xl:text-base text-t-600 font-normal leading-normal">
          Besttrip provides only consultancy services and doesn&apos;t provide
          any guarantee for visas. Visa issuance rights reserved by the embassy.
          File processing for visas will start only after receiving all
          necessary documents. Processing time, requirements, and fees are
          subject to change by the Embassy without any prior notice. The Embassy
          reserves the right to ask for any additional documents with the
          above-mentioned checklist. Visa fee and biometric submission fee to
          embassy are non-refundable. Service charges are non-refundable.
        </p>
      </div>
      <div>
        <h4 className="text-sm xl:text-base text-t-800 font-medium leading-relaxed mb-[18px]">
          About Kingdom of Saudi Arabia KSA Embassy, Dhaka
        </h4>
        <p className="text-sm xl:text-base text-t-600 font-normal leading-normal">
          Saudi Arabian Embassy in Dhaka runs an inclusive range of consular
          services to local, Saudi Arabian, and international citizens in
          Bangladesh.The Saudi Arabian Embassy in Dhaka supports Bangladesh
          citizens through its consular services, if they: Need general or
          specific info regarding Saudi Arabian economy, culture, sports,
          education and more. Need information regarding requirements
          andimmigration process in Kingdom of Saudi Arabia.Specific contacts
          and information in Saudi Arabia. Want to apply and obtain Saudi
          Arabian Visa. Office Address : House 5 (NE) L, Road
          83,Gulshan-2,Dhaka-1212. Phone Number : 0088028834078, 0088028834079.
          Fax : 00880248810948. Email : bdemb@mofa.gov.sa Operational Hours :
          From 9:00 a.m. to 16:00 p.m. Holidays : Friday and Saturday.
        </p>
      </div>
      {/* <div className="flex flex-col justify-between max-w-[655px] mx-auto">
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
      </div> */}
      <Notice
        message={
          "** VISA FEES IS NON-REFUNDABLE **** VISA FEES IS NON-REFUNDABLE **"
        }
      />
    </div>
  );
};

export default VisaBasicInfo;
