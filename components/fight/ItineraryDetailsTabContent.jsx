import React from "react";
import { BalakaIcon, LocationIcon, PlaneIcon } from "../icons/svgr";
import { Separator } from "../ui/separator";
import { ArrowLeftRight } from "lucide-react";

const ItineraryDetailsTabContent = () => {
  return (
    <div>
      <div className="flex-shrink-0 flex flex-col sm:flex-row gap-6">
        <div className="flex sm:flex-col justify-between gap-x-8 gap-y-4">
          <p>08:00</p>
          <p className="text-t-600">0 h 45m</p>
          <p>08:45</p>
        </div>
        <div className="flex sm:flex-col items-center justify-between gap-2">
          <PlaneIcon
            className="text-primary w-4 h-4 rotate-90 sm:rotate-180"
            viewBox="0 0 14 14"
          />
          <Separator
            className="flex-1 bg-[#E1E1E1] hidden sm:block"
            orientation="vertical"
          />
          <Separator className="flex-1 bg-[#E1E1E1] sm:hidden" />
          <LocationIcon className="text-primary w-4 h-4" viewBox="0 0 14 14" />
        </div>
        <div className="flex flex-col justify-between gap-y-4 sm:gap-y-[18px] leading-relaxed">
          <div className="sapce-y-2.5">
            <p>15 Oct 2023 - Dhaka - DAC</p>
            <div className="flex flex-wrap gap-x-2 h-5 text-t-600">
              <div>Hazrat Shahjalal International Ariport</div>
              <Separator className="bg-[#E1E1E1]" orientation="vertical" />
              <div>Terminal - 1</div>
            </div>
          </div>
          <div className="space-y-1.5 text-t-600">
            <div className="flex items-center gap-x-2.5">
              <BalakaIcon
                className="text-primary w-[18px] h-[18px]"
                viewBox="0 0 51 51"
              />
              <p>Biman Bangladesh Airlines</p>
            </div>
            <div className="flex gap-x-2 h-5 leading-tight">
              <div>BG611</div>
              <Separator className="bg-[#E1E1E1]" orientation="vertical" />
              <div>Economy</div>
              <Separator className="bg-[#E1E1E1]" orientation="vertical" />
              <div>Boing-787</div>
            </div>
          </div>
          <div className="sapce-y-2.5">
            <p>15 Oct 2023 - Chittagong - CGP</p>
            <div className="flex flex-wrap gap-x-2 h-5 text-t-600">
              <div>Shah Amanat International Airport</div>
              <Separator className="bg-[#E1E1E1]" orientation="vertical" />
              <div>Terminal - D</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-x-8 gap-y-2.5 text-t-600 md:ml-4">
          <p className="text-t-900">Refundable</p>
          <p>
            Fare Type : <span className="text-t-900">Publish Fare</span>
          </p>
          <p>
            Operated by : <span className="text-t-900">BG</span>
          </p>
          <p>
            Booking Class : <span className="text-t-900">(V)</span>
          </p>
          <p>
            Available Seat : <span className="text-t-900">9</span>
          </p>
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col sm:flex-row md:gap-6 my-[26px] md:my-2.5">
        <div className="hidden md:flex md:flex-col justify-between gap-x-8 gap-y-4 invisible">
          <p className="text-t-600">0 h 45m</p>
        </div>
        <div className="hidden md:flex sm:flex-col items-center justify-between gap-4 ">
          <div className="border-dashed border-r-[1px] w-full border-[#E1E1E1] ml-[5px] flex-1"></div>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center md:py-4 md:ml-2.5">
          <div className="flex items-center leading-normal gap-x-2.5 text-t-800 bg-p-300 rounded-sm p-1.5 w-full">
            <ArrowLeftRight className="text-t-600 flex-shrink-0 h-4 w-4" />
            4h 20m layover in Sylhet(ZYL)
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col sm:flex-row gap-6">
        <div className="flex sm:flex-col justify-between gap-x-8 gap-y-4">
          <p>08:00</p>
          <p className="text-t-600">0 h 45m</p>
          <p>08:45</p>
        </div>
        <div className="flex sm:flex-col items-center justify-between gap-2">
          <PlaneIcon
            className="text-primary w-4 h-4 rotate-90 sm:rotate-180"
            viewBox="0 0 14 14"
          />
          <Separator
            className="flex-1 bg-[#E1E1E1] hidden sm:block"
            orientation="vertical"
          />
          <Separator className="flex-1 bg-[#E1E1E1] sm:hidden" />
          <LocationIcon className="text-primary w-4 h-4" viewBox="0 0 14 14" />
        </div>
        <div className="flex flex-col justify-between gap-y-4 sm:gap-y-[18px] leading-relaxed">
          <div className="sapce-y-2.5">
            <p>15 Oct 2023 - Dhaka - DAC</p>
            <div className="flex flex-wrap gap-x-2 h-5 text-t-600">
              <div>Hazrat Shahjalal International Ariport</div>
              <Separator className="bg-[#E1E1E1]" orientation="vertical" />
              <div>Terminal - 1</div>
            </div>
          </div>
          <div className="space-y-1.5 text-t-600">
            <div className="flex items-center gap-x-2.5">
              <BalakaIcon
                className="text-primary w-[18px] h-[18px]"
                viewBox="0 0 51 51"
              />
              <p>Biman Bangladesh Airlines</p>
            </div>
            <div className="flex gap-x-2 h-5 leading-tight">
              <div>BG611</div>
              <Separator className="bg-[#E1E1E1]" orientation="vertical" />
              <div>Economy</div>
              <Separator className="bg-[#E1E1E1]" orientation="vertical" />
              <div>Boing-787</div>
            </div>
          </div>
          <div className="sapce-y-2.5">
            <p>15 Oct 2023 - Chittagong - CGP</p>
            <div className="flex flex-wrap gap-x-2 h-5 text-t-600">
              <div>Shah Amanat International Airport</div>
              <Separator className="bg-[#E1E1E1]" orientation="vertical" />
              <div>Terminal - D</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-x-8 gap-y-2.5 text-t-600 md:ml-4">
          <p className="text-t-900">Refundable</p>
          <p>
            Fare Type : <span className="text-t-900">Publish Fare</span>
          </p>
          <p>
            Operated by : <span className="text-t-900">BG</span>
          </p>
          <p>
            Booking Class : <span className="text-t-900">(V)</span>
          </p>
          <p>
            Available Seat : <span className="text-t-900">9</span>
          </p>
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col sm:flex-row md:gap-6 my-[26px] md:my-2.5">
        <div className="hidden md:flex md:flex-col justify-between gap-x-8 gap-y-4 invisible">
          <p className="text-t-600">0 h 45m</p>
        </div>
        <div className="flex sm:flex-col items-center justify-between gap-4">
          <div className="border-dashed border-r-[1px] w-full border-[#E1E1E1] ml-[5px] flex-1"></div>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center md:py-4 md:ml-2.5">
          <div className="flex items-center leading-normal gap-x-2.5 text-t-800 bg-p-300 rounded-sm p-1.5 w-full">
            <ArrowLeftRight className="text-t-600 flex-shrink-0 h-4 w-4" />
            4h 20m layover in Sylhet(ZYL)
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col sm:flex-row gap-6 ">
        <div className="flex sm:flex-col justify-between gap-x-8 gap-y-4">
          <p>08:00</p>
          <p className="text-t-600">0 h 45m</p>
          <p>08:45</p>
        </div>
        <div className="flex sm:flex-col items-center justify-between gap-2">
          <PlaneIcon
            className="text-primary w-4 h-4 rotate-90 sm:rotate-180"
            viewBox="0 0 14 14"
          />
          <Separator
            className="flex-1 bg-[#E1E1E1] hidden sm:block"
            orientation="vertical"
          />
          <Separator className="flex-1 bg-[#E1E1E1] sm:hidden" />
          <LocationIcon className="text-primary w-4 h-4" viewBox="0 0 14 14" />
        </div>
        <div className="flex flex-col justify-between gap-y-4 sm:gap-y-[18px] leading-relaxed">
          <div className="sapce-y-2.5">
            <p>15 Oct 2023 - Dhaka - DAC</p>
            <div className="flex flex-wrap gap-x-2 h-5 text-t-600">
              <div>Hazrat Shahjalal International Ariport</div>
              <Separator className="bg-[#E1E1E1]" orientation="vertical" />
              <div>Terminal - 1</div>
            </div>
          </div>
          <div className="space-y-1.5 text-t-600">
            <div className="flex items-center gap-x-2.5">
              <BalakaIcon
                className="text-primary w-[18px] h-[18px]"
                viewBox="0 0 51 51"
              />
              <p>Biman Bangladesh Airlines</p>
            </div>
            <div className="flex gap-x-2 h-5 leading-tight">
              <div>BG611</div>
              <Separator className="bg-[#E1E1E1]" orientation="vertical" />
              <div>Economy</div>
              <Separator className="bg-[#E1E1E1]" orientation="vertical" />
              <div>Boing-787</div>
            </div>
          </div>
          <div className="sapce-y-2.5">
            <p>15 Oct 2023 - Chittagong - CGP</p>
            <div className="flex flex-wrap gap-x-2 h-5 text-t-600">
              <div>Shah Amanat International Airport</div>
              <Separator className="bg-[#E1E1E1]" orientation="vertical" />
              <div>Terminal - D</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-x-8 gap-y-2.5 text-t-600 md:ml-4">
          <p className="text-t-900">Refundable</p>
          <p>
            Fare Type : <span className="text-t-900">Publish Fare</span>
          </p>
          <p>
            Operated by : <span className="text-t-900">BG</span>
          </p>
          <p>
            Booking Class : <span className="text-t-900">(V)</span>
          </p>
          <p>
            Available Seat : <span className="text-t-900">9</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetailsTabContent;
