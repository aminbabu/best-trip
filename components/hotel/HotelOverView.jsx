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
  StarAltIcon,
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
      fixedWidth: 240,
    },
  },
};

const HotelOverview = () => {
  const { items } = data;
  const pathname = usePathname();
  const cardId = pathname.split("/")[2];

  return (
    <section className="umrah-package-overview">
      <Card className="border-transparent">
        <CardContent className="grid grid-cols-2 gap-y-8 p-0">
          <div className="grid col-span-2">
            <h5 className="text-lg xl:text-2xl text-t-900 font-medium leading-relaxed py-2.5">
              Holiday Inn Express
            </h5>
            <div className="inline-flex py-1.5 gap-1">
              <StarAltIcon
                className="fill-[#FF7B39] h-[18px] w-[18px]"
                viewBox="0 0 19 19"
              />
              <StarAltIcon
                className="fill-[#FF7B39] h-[18px] w-[18px]"
                viewBox="0 0 19 19"
              />
              <StarAltIcon
                className="fill-[#FF7B39] h-[18px] w-[18px]"
                viewBox="0 0 19 19"
              />
              <StarAltIcon
                className="fill-[#FF7B39] h-[18px] w-[18px]"
                viewBox="0 0 19 19"
              />
              <StarAltIcon
                className="fill-[#FF7B39] h-[18px] w-[18px]"
                viewBox="0 0 19 19"
              />
              <p className="text-sm lg:text-base text-t-600 leading-relaxed pl-1">
                4.8
              </p>
            </div>
          </div>
          <div className="col-span-2 space-y-6">
            <Slider hasTrack={false} options={options}>
              <SplideTrack>
                {items?.map((item, index) => (
                  <SplideSlide key={index}>
                    <div className="aspect-square overflow-hidden rounded-sm">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={240}
                        height={240}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Slider>
            <div className="hidden lg:block">
              <p className="text-base text-t-600 leading-relaxed">
                <span className="text-base text-primary">
                  Hotel Amenities :{" "}
                </span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown nter took when an
                unknown printer took a galley of typ eer took a galley of
                industry&apos;s standard dummy text ever since the 1500s, when
                an unknown nter took when an unknown printer took a galley of
                typ eer took a galley of industry&apos;s standard dummy text
                ever since the 1500s, when an unknown nter took when an unknown
                printer{" "}
                <Link className="text-t-800" href={`/umrah/${cardId}/about`}>
                  Read more...
                </Link>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default HotelOverview;
