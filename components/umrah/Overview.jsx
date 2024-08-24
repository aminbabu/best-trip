"use client";

import Slider from "@/components/global/splide/Slider";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import data from "@/data/umrah-ziyarah.json";
import {
  BusIcon,
  CalenderIcon,
  ClockAltIcon,
  HotelIcon,
  LocationCircleIcon,
  PassportIcon,
  PeopleIcon,
  PlaneIcon,
  SpoonKnifeIcon,
} from "@/components/icons/svgr";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

import "@/styles/umrah/splide.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import moment from "moment";

const options = {
  type: "loop",
  fixedWidth: 224,
  perMove: 1,
  gap: 16,
  arrows: true,
  pagination: false,
  mediaQuery: "min",
  breakpoints: {
    480: {
      fixedWidth: 266,
    },
    1280: {
      gap: 24,
    },
  },
};

const Overview = ({ item }) => {
  const pathname = usePathname();
  const cardId = pathname.split("/")[2];

  return (
    <section className="umrah-package-overview">
      <Card className="border-transparent">
        <CardContent className="grid grid-cols-2 gap-y-8 p-4 sm:p-6 lg:p-[30px]">
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <Slider hasTrack={false} options={options}>
              <SplideTrack>
                {item?.extraThumbnails?.map((item, index) => (
                  <SplideSlide key={index}>
                    <div className="aspect-square overflow-hidden rounded-sm">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={266}
                        height={266}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Slider>
            <div className="hidden lg:block">
              <p className="text-base text-t-600 leading-relaxed">
                <span className="text-base text-primary">About Umrah : </span>
                {item?.umrahDescription}
                {/* <Link className="text-t-800" href={`/umrah/${cardId}/about`}>
                  Read more...
                </Link> */}
              </p>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 space-y-7 lg:pl-[50px]">
            <div>
              <h1 className="text-lg xl:text-[22px] text-t-800 font-medium mb-2.5">
                {item?.title}
              </h1>
              <p className="text-sm md:text-base text-t-800">
                {item?.subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-y-7">
              <ul className="space-y-3 lg:space-y-2 xl:space-y-3">
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <LocationCircleIcon
                    className="mt-0.5 flex-shrink-0 h-6 w-6 text-primary"
                    viewBox="0 0 16 17"
                  />
                  <span className="flex-shrink-0">From {item?.departureLocation}</span>
                </li>
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <CalenderIcon
                    fill="#F50308"
                    className="mt-0.5 flex-shrink-0 h-6 w-6 text-primary"
                    viewBox="0 0 16 17"
                  />
                  <span className="flex-shrink-0">
                    Journey Date : {moment(item?.journeyDate).format("DD MMM YYYY")}
                  </span>
                </li>
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <ClockAltIcon
                    className="mt-0.5 flex-shrink-0 h-6 w-6 text-primary"
                    viewBox="0 0 16 17"
                  />
                  <span className="flex-shrink-0">{item?.totalDaysAndNights.days} Days | {item?.totalDaysAndNights.nights} Nights</span>
                </li>
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <PeopleIcon
                    className="mt-0.5 flex-shrink-0 h-6 w-6 text-primary"
                    viewBox="0 0 16 17"
                  />
                  <span className="flex-shrink-0">
                    Group Available : {item?.seats} Pax
                  </span>
                </li>
              </ul>
              <div className="flex flex-col gap-y-4 lg:max-w-fit">
                {/* <div className="text-t-700 text-base lg:text-lg leading-normal">
                  Inclusions
                </div> */}
                <div className="text-t-600 text-sm lg:text-base leading-normal xl:text-center px-4 py-2 rounded-sm bg-p-300 ">
                  Package Inclusion
                </div>
                <ul className="flex items-center gap-x-4">
                  {
                    item?.inclusions.includes("flight") && <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-600 capitalize">
                      <PlaneIcon
                        className="w-6 h-6 rotate-45 text-primary"
                        viewBox="0 0 14 14"
                      />
                      Flight
                    </li>
                  }
                  {
                    item?.inclusions.includes("hotel") && <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-600 capitalize">
                      <HotelIcon
                        className="w-6 h-6 text-primary"
                        viewBox="0 0 14 14"
                      />
                      Hotel
                    </li>
                  }
                  {
                    item?.inclusions.includes("visa") && <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-600 capitalize">
                      <PassportIcon
                        className="w-6 h-6 text-primary"
                        viewBox="0 0 14 14"
                      />
                      Visa
                    </li>
                  }
                  {
                    item?.inclusions.includes("transport") && <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-600 capitalize">
                      <BusIcon
                        className="w-6 h-6 text-primary"
                        viewBox="0 0 14 14"
                      />
                      Transport
                    </li>
                  }
                  {
                    item?.inclusions.includes("food") &&
                    <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-600 capitalize">
                      <SpoonKnifeIcon
                        fill="#F50308"
                        className="w-6 h-6 text-primary"
                        viewBox="0 0 16 16"
                      />
                      Food
                    </li>
                  }
                </ul>
              </div>
              <div className="lg:hidden">
                <p className="text-sm md:text-base text-t-600 leading-relaxed">
                  <span className="text-sm md:text-base text-primary">
                    About Umrah :{" "}
                  </span>
                  Umrah is an act of worshipping Allah by entering the state of
                  Ihram, circumambul{" "}
                  <Link className="text-t-800" href={`/umrah/${cardId}/about`}>
                    Read more...
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Overview;
