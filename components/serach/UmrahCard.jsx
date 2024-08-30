import {
  BusRedIcon,
  CalenderIcon,
  ClockRedIcon,
  HotelIcon,
  LocationCircleIcon,
  PassportCircleIcon,
  PeopleIcon,
  PlaneIcon,
  SpoonKnifeIcon,
} from "@/components/icons/svgr";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import numeral from "numeral";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { renderInclusionIcon } from "@/lib/utils";
import moment from "moment";

const UmrahCard = ({ data }) => {
  return (
    <Card className="border-transparent relative overflow-hidden">
      <div className="absolute top-5 -right-9 rotate-45 bg-p-300 px-10 py-2 text-sm lg:text-base text-t-700 font-medium leading-snug capitalize pointer-events-none">
        {data?.type}
      </div>
      <CardContent className="p-4 sm:p-5 lg:p-10 xl:leading-8 flex flex-col md:flex-row lg:items-center justify-between gap-6 lg:gap-9">
        <Image
          src={process.env.NEXT_PUBLIC_API_URL+data?.thumbnail}
          width={266}
          height={266}
          alt={data?.name}
          className="aspect-[240/263] w-full md:mx-0 md:w-1/2 lg:w-60 flex-shrink-0 rounded-[0.1785rem] object-cover"
        />
        <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <h4 className="text-base xl:text-lg text-t-900 font-medium leading-relaxed mb-1.5">
              {data?.name}
            </h4>
            <p className="text-sm lg:text-base text-t-800 mb-12 lg:mb-4 xl:mb-12">
             {data?.title}
            </p>
            <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-5">
              <ul className="space-y-3 lg:space-y-2 xl:space-y-3">
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <LocationCircleIcon
                    fill="#F50308"
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="flex-shrink-0">
                    From <span className="">{data?.departureLocation}</span>
                  </span>
                </li>
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <CalenderIcon
                    fill="#F50308"
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span className="flex-shrink-0">
                    Journey Date : {moment(data?.journeyDate).format("DD-MM-YYYY")}
                  </span>
                </li>
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <ClockRedIcon className="mt-0.5 flex-shrink-0" />
                  <span className="flex-shrink-0">
                    {data?.totalDaysAndNights?.days} Days | {data?.totalDaysAndNights?.days} Nights
                  </span>
                </li>
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <PeopleIcon fill="#F50308" className="mt-0.5 flex-shrink-0" />
                  <span className="flex-shrink-0">
                    Group Available : {data?.seats} Pax
                  </span>
                </li>
              </ul>
              <div className="flex flex-col gap-y-4 justify-end">
                <div className="text-t-600 text-sm lg:text-base leading-normal xl:text-center px-4 py-2 rounded-sm bg-p-300">
                  Package Inclusion
                </div>
                <ul className="flex items-center xl:justify-center gap-x-4">
                  {data?.inclusions.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-600 capitalize"
                    >
                      {renderInclusionIcon(item)}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:self-end space-y-4 lg:text-right">
            <ul className="grid grid-cols-2 gap-1.5">
              <li className="col-span-2 text-t-600 text-sm lg:text-base xl:text-lg">
                Adult Price :
                <span className="text-t-900 ml-2">
                  {numeral(data?.adultPrice).format("0,0")} BDT
                </span>
              </li>
              <li className="col-span-2 text-t-600 text-sm lg:text-base xl:text-lg">
                Children Price :
                <span className="text-t-900 ml-2">
                  {numeral(data?.childPrice).format("0,0")} BDT
                </span>
              </li>
              <li className="col-span-2 text-t-600 text-sm lg:text-base xl:text-lg">
                Infant Price :
                <span className="text-t-900 ml-2">
                  {numeral(data?.infantPrice).format("0,0")} BDT
                </span>
              </li>
              <li className="col-span-2 text-t-600 text-sm lg:text-base xl:text-lg">
                Sub Total :
                <span className="text-t-900 ml-2">
                  {Number(data?.childPrice) + Number(data?.infantPrice) + Number(data?.adultPrice)}
                  BDT
                </span>
              </li>
            </ul>
            <Button
              size="sm"
              className="font-semibold text-sm lg:text-base"
              href={`/umrah/${data?._id}`}
              asChild
            >
              <Link>View Package Details</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UmrahCard;