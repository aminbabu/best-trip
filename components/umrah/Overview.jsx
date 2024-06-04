"use client";

import Slider from "@/components/global/splide/Slider";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import data from "@/data/umrah-ziyarah.json";
import {
  BusIcon,
  CalenderRedIcon,
  ClockAltIcon,
  HotelIcon,
  LocationCircleIcon,
  PassportIcon,
  PeopleIcon,
  PlaneIcon,
  SpoonKnifeRedIcon,
} from "@/components/icons/svgr";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

import "@/styles/umrah/splide.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Overview = () => {
  const { items } = data;
  const pathname = usePathname();
  const cardId = pathname.split("/")[2];

  return (
    <section className="umrah-package-overview">
      <Card className="border-transparent">
        <CardContent className="grid grid-cols-2 gap-y-8 p-4 sm:p-6 lg:p-[30px]">
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <Slider hasTrack={false} options={options}>
              <SplideTrack>
                {items.map((item, index) => (
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
            <div>
              <p className="text-xs lg:text-base text-t-600 leading-relaxed">
                <span className="text-base text-primary">About Umrah : </span>
                Umrah is an act of worshipping Allah by entering the state of
                Ihram, circumambulating the House, running between Safa and
                Marwa, and having the head shaved or trimmed{" "}
                <Link className="text-t-900" href={`/umrah/${cardId}/about`}>
                  Read more...
                </Link>
              </p>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 space-y-9 lg:pl-12">
            <div>
              <h1 className="text-lg text-t-900 font-medium mb-2.5">
                Quad Share Basis Package
              </h1>
              <p className="text-t-800">
                1 Friday In Makkah- 1 Friday In Madinah
              </p>
            </div>
            <div className="flex flex-col gap-y-9">
              <ul className="space-y-3 lg:space-y-2 xl:space-y-3">
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <LocationCircleIcon
                    className="mt-0.5 flex-shrink-0 h-6 w-6 text-primary"
                    viewBox="0 0 16 17"
                  />
                  <span className="flex-shrink-0">From Dhaka , Bangladesh</span>
                </li>
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <CalenderRedIcon
                    className="mt-0.5 flex-shrink-0 h-6 w-6 text-primary"
                    viewBox="0 0 16 17"
                  />
                  <span className="flex-shrink-0">
                    Journey Date : 20 Jun, 2024
                  </span>
                </li>
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <ClockAltIcon
                    className="mt-0.5 flex-shrink-0 h-6 w-6 text-primary"
                    viewBox="0 0 16 17"
                  />
                  <span className="flex-shrink-0">15 Days | 14 Nights</span>
                </li>
                <li className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal">
                  <PeopleIcon
                    className="mt-0.5 flex-shrink-0 h-6 w-6 text-primary"
                    viewBox="0 0 16 17"
                  />
                  <span className="flex-shrink-0">
                    Group Available : 30 Pax
                  </span>
                </li>
              </ul>
              <div className="flex flex-col gap-y-4">
                {/* <div className="text-t-700 text-base lg:text-lg leading-normal">
                  Inclusions
                </div> */}
                <div className="text-t-600 text-sm lg:text-base leading-normal xl:text-left px-4 py-2 rounded-sm bg-p-300 max-w-fit">
                  Package Inclusion
                </div>
                <ul className="flex items-center gap-x-4">
                  <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-900 capitalize">
                    <PlaneIcon
                      className="w-6 h-6 rotate-45 text-primary"
                      viewBox="0 0 14 14"
                    />
                    Flight
                  </li>
                  <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-900 capitalize">
                    <HotelIcon
                      className="w-6 h-6 text-primary"
                      viewBox="0 0 14 14"
                    />
                    Hotel
                  </li>
                  <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-900 capitalize">
                    <PassportIcon
                      className="w-6 h-6 text-primary"
                      viewBox="0 0 14 14"
                    />
                    Visa
                  </li>
                  <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-900 capitalize">
                    <BusIcon
                      className="w-6 h-6 text-primary"
                      viewBox="0 0 14 14"
                    />
                    Transport
                  </li>
                  <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-900 capitalize">
                    <SpoonKnifeRedIcon
                      className="w-6 h-6 text-primary"
                      viewBox="0 0 16 16"
                    />
                    Food
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Overview;
