import { BalakaIcon, LocationIcon, PlaneIcon } from "@/components/icons/svgr";
import Container from "@/components/layouts/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import InfoTable from "@/components/umrah/InfoTable";

const table = {
  header: [
    {
      title: "Traveller Type",
      className:
        "text-t-700 text-center font-normal h-auto px-3 py-2 border-r border-r-[#f5f5f5] last:border-r-0",
    },
    {
      title: "Check in",
      className:
        "text-t-700 text-center font-normal h-auto px-3 py-2 border-r border-r-[#f5f5f5] last:border-r-0",
    },
    {
      title: "Cabin",
      className:
        "text-t-700 text-center font-normal h-auto px-3 py-2 border-r border-r-[#f5f5f5] last:border-r-0",
    },
  ],
  body: [
    [
      {
        cell: "Adult",
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
      {
        cell: 20,
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
      {
        cell: 7,
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
    ],
    [
      {
        cell: "Children",
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
      {
        cell: 20,
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
      {
        cell: 7,
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
    ],
    [
      {
        cell: "Infant",
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
      {
        cell: 0,
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
      {
        cell: 0,
        className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
      },
    ],
  ],
};

const UmrahDetailsPage = ({ params }) => {
  const { id } = params;

  return (
    <div className="py-4">
      <Accordion type="multiple" className="space-y-6" collapsible>
        <AccordionItem className="border-none" value="item-1">
          <h2 className="text-base lg:text-lg text-t-800 mb-4 lg:mb-6">
            Outbound Flight Details
          </h2>
          <AccordionTrigger
            className="bg-white hover:no-underline relative font-normal text-left py-0 pr-4 sm:pr-6 md:pr-0 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
            iconClassName="h-5 w-5 text-primary md:absolute lg:static md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
          >
            <div className="flex-1 flex flex-col lg:flex-row lg:items-center">
              <div className="flex-shrink-0 hidden md:flex items-center gap-x-4 bg-p-300 p-6 lg:px-8 lg:py-12">
                <BalakaIcon className="text-primary" />
                <div>
                  <div className="text-t-900 text-lg">Biman Bangladesh</div>
                  <div className="text-t-800">BG611</div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-between md:justify-around gap-x-4 px-3 xs:px-4 py-4 sm:px-6 md:px-4">
                <div className="text-right space-y-1 lg:space-y-1.5">
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Dhaka
                  </p>
                  <div className="text-sm sm:text-base md:text-lg lg:text-[1.375rem] text-t-900">
                    DAC 08:00
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Wed, 25 Dec 2023
                  </p>
                </div>
                <div className="text-center space-y-1 lg:space-y-1.5">
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    06h 46m
                  </p>
                  <div className="hidden md:flex items-center gap-x-4">
                    <PlaneIcon
                      className="text-primary w-4 h-4 rotate-90"
                      viewBox="0 0 14 14"
                    />
                    <Separator className="flex-1 bg-t-800 w-28" />
                    <LocationIcon
                      className="text-primary w-4 h-4"
                      viewBox="0 0 14 14"
                    />
                  </div>
                  <div className="flex md:hidden items-center gap-x-1">
                    <Separator className="flex-1 bg-t-800 w-6 sm:w-10" />
                    <BalakaIcon
                      className="text-primary w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 51 51"
                    />
                    <Separator className="flex-1 bg-t-800 w-6 sm:w-10" />
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    (Non Stop)
                  </p>
                </div>
                <div className="text-left  space-y-1 lg:space-y-1.5">
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Jeddah
                  </p>
                  <div className="text-sm sm:text-base md:text-lg lg:text-[1.375rem] text-t-900">
                    JED 13:45
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Wed, 26 Dec 2023
                  </p>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-white flex flex-col lg:flex-row gap-8 xl:gap-x-10 text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12">
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-6">
              <div className="flex sm:flex-col justify-between gap-x-8 gap-y-4">
                <p>08:00</p>
                <p>01 h 25m</p>
                <p>13:45</p>
              </div>
              <div className="flex sm:flex-col items-center justify-between gap-4">
                <PlaneIcon
                  className="text-primary w-4 h-4 rotate-90 sm:rotate-180"
                  viewBox="0 0 14 14"
                />
                <Separator
                  className="flex-1 bg-[#E1E1E1] hidden sm:block"
                  orientation="vertical"
                />
                <Separator className="flex-1 bg-[#E1E1E1] sm:hidden" />
                <LocationIcon
                  className="text-primary w-4 h-4"
                  viewBox="0 0 14 14"
                />
              </div>
              <div className="flex flex-col justify-between gap-y-4 sm:gap-y-6">
                <p>Hazrat Shahjalal International Ariport (DAC)</p>
                <div className="flex items-center gap-x-2.5">
                  <BalakaIcon
                    className="text-primary w-6 h-6"
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
                <p>Jeddah - King Abdulaziz International Airport (JED) </p>
              </div>
            </div>
            <div className="flex-1">
              <InfoTable table={table} />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-none" value="item-2">
          <h2 className="text-base lg:text-lg text-t-800 mb-4 lg:mb-6">
            Inbound Flight Details
          </h2>
          <AccordionTrigger
            className="bg-white hover:no-underline relative font-normal text-left py-0 pr-4 sm:pr-6 md:pr-0 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
            iconClassName="h-5 w-5 text-primary md:absolute lg:static md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
          >
            <div className="flex-1 flex flex-col lg:flex-row lg:items-center">
              <div className="flex-shrink-0 hidden md:flex items-center gap-x-4 bg-p-300 p-6 lg:px-8 lg:py-12">
                <BalakaIcon className="text-primary" />
                <div>
                  <div className="text-t-900 text-lg">Biman Bangladesh</div>
                  <div className="text-t-800">BG611</div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-between md:justify-around gap-x-4 px-3 xs:px-4 py-4 sm:px-6 md:px-4">
                <div className="text-right space-y-1 lg:space-y-1.5">
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Dhaka
                  </p>
                  <div className="text-sm sm:text-base md:text-lg lg:text-[1.375rem] text-t-900">
                    DAC 08:00
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Wed, 25 Dec 2023
                  </p>
                </div>
                <div className="text-center space-y-1 lg:space-y-1.5">
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    06h 46m
                  </p>
                  <div className="hidden md:flex items-center gap-x-4">
                    <PlaneIcon
                      className="text-primary w-4 h-4 rotate-90"
                      viewBox="0 0 14 14"
                    />
                    <Separator className="flex-1 bg-t-800 w-28" />
                    <LocationIcon
                      className="text-primary w-4 h-4"
                      viewBox="0 0 14 14"
                    />
                  </div>
                  <div className="flex md:hidden items-center gap-x-1">
                    <Separator className="flex-1 bg-t-800 w-6 sm:w-10" />
                    <BalakaIcon
                      className="text-primary w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 51 51"
                    />
                    <Separator className="flex-1 bg-t-800 w-6 sm:w-10" />
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    (Non Stop)
                  </p>
                </div>
                <div className="text-left  space-y-1 lg:space-y-1.5">
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Jeddah
                  </p>
                  <div className="text-sm sm:text-base md:text-lg lg:text-[1.375rem] text-t-900">
                    JED 13:45
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-t-800">
                    Wed, 26 Dec 2023
                  </p>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-white flex flex-col lg:flex-row gap-8 xl:gap-x-10 text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12">
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-6">
              <div className="flex sm:flex-col justify-between gap-x-8 gap-y-4">
                <p>08:00</p>
                <p>01 h 25m</p>
                <p>13:45</p>
              </div>
              <div className="flex sm:flex-col items-center justify-between gap-4">
                <PlaneIcon
                  className="text-primary w-4 h-4 rotate-90 sm:rotate-180"
                  viewBox="0 0 14 14"
                />
                <Separator
                  className="flex-1 bg-[#E1E1E1] hidden sm:block"
                  orientation="vertical"
                />
                <Separator className="flex-1 bg-[#E1E1E1] sm:hidden" />
                <LocationIcon
                  className="text-primary w-4 h-4"
                  viewBox="0 0 14 14"
                />
              </div>
              <div className="flex flex-col justify-between gap-y-4 sm:gap-y-6">
                <p>Hazrat Shahjalal International Ariport (DAC)</p>
                <div className="flex items-center gap-x-2.5">
                  <BalakaIcon
                    className="text-primary w-6 h-6"
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
                <p>Jeddah - King Abdulaziz International Airport (JED) </p>
              </div>
            </div>
            <div className="flex-1">
              <InfoTable table={table} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default UmrahDetailsPage;
