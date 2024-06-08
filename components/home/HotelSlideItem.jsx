import Image from "next/image";
import { LocationIcon, StarIcon } from "@/components/icons/svgr";
import numeral from "numeral";
import Link from "next/link";

const HotelSlideItem = ({ item }) => {
  return (
    <div className="group flex flex-col gap-y-4">
      <Link
        href="#"
        className="rounded-t-md flex aspect-[262/280] overflow-hidden"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={262}
          height={280}
          className="rounded-t-md object-cover w-full h-full duration-300 group-hover:scale-110"
        />
      </Link>
      <div className="flex flex-col gap-y-1.5 lg:gap-y-4 p-2.5 pt-0">
        <h3 className="text-base lg:text-lg font-medium leading-tight">
          <Link
            href="#"
            className="text-t-800 duration-300 group-hover:text-p-900 line-clamp-1"
          >
            {item?.title}
          </Link>
        </h3>
        <div className="flex items-center gap-x-1.5 mb-2.5">
          <span className="flex-shrink-0 text-t-500">
            <LocationIcon />
          </span>
          <p className="flex-1 text-t-600 text-xs lg:text-sm line-clamp-1">
            {item?.location}
          </p>
        </div>
        <div className="flex justify-between gap-x-4 text-xs lg:text-sm">
          <div className="flex gap-x-1.5">
            <span className="flex-shrink-0 text-[#FFD600]">
              <StarIcon
                viewBox="0 0 18 17"
                className="w-3.5 lg:w-[1.125rem] h-3.5 lg:h-[1.125rem]"
              />
            </span>
            <p className="text-t-700">
              <span className="font-medium">({item?.rating})</span> reviews
            </p>
          </div>
          <div className="text-right leading-relaxed">
            <p className="text-p-900 font-medium">
              BDT {numeral(item?.price).format("0,0.00")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSlideItem;
