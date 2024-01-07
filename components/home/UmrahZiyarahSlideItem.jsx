import Image from "next/image";
import {
  BusIcon,
  ClockIcon,
  HotelIcon,
  LocationIcon,
  PassportIcon,
  PlaneIcon,
} from "@/components/icons/svgr";
import numeral from "numeral";
import Link from "next/link";

const UmrahZiyarahSlideItem = ({ item }) => {
  return (
    <div className="group flex flex-col gap-y-4">
      <Link
        href="#"
        className="rounded-t-md flex aspect-[262/280] overflow-hidden"
      >
        <Image
          src={item?.image}
          alt={item?.title}
          width={262}
          height={280}
          className="rounded-t-md object-cover w-full h-full duration-300 group-hover:scale-110"
        />
      </Link>
      <div className="flex flex-col gap-y-4 p-2.5 pt-0">
        <h3 className="text-lg font-medium leading-tight">
          <Link
            href="#"
            className="text-t-800 duration-300 group-hover:text-p-900 line-clamp-1"
          >
            {item?.title}
          </Link>
        </h3>
        <div className="flex items-center justify-between gap-x-4 text-sm">
          <div className="flex items-center gap-x-1.5 text-sm text-t-600">
            <span className="text-t-500">
              <LocationIcon />
            </span>
            From {item?.from}
          </div>
          <div className="flex items-center gap-x-1.5 text-t-500">
            <PlaneIcon />
            <BusIcon />
            <PassportIcon />
            <HotelIcon />
          </div>
        </div>
        <div className="flex items-center gap-x-2.5">
          <span className="text-t-500">
            <ClockIcon />
          </span>
          <p className="text-sm text-t-600">
            {item?.days} Days | {item?.nights} Nights
          </p>
        </div>
        <div className="flex items-center justify-between text-sm gap-x-4 leading-relaxed">
          <p className="text-t-600">Starting from </p>
          <p className="text-p-900 font-medium">
            {numeral(item?.price).format("$0,0.00")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UmrahZiyarahSlideItem;
