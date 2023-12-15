import Image from "next/image";
import { ExchangeIcon, LocationIcon, StarIcon } from "../icons/svgr";
import numeral from "numeral";
import Link from "next/link";

const PopularDestinationSlideItem = ({ item }) => {
  return (
    <div className="group flex flex-col gap-y-4">
      <Link
        href="#"
        className="rounded-t-md flex aspect-[262/280] overflow-hidden"
      >
        <Image
          src={item?.image}
          alt={`${item?.from} - ${item?.to}`}
          width={262}
          height={280}
          className="rounded-t-md object-cover w-full h-full duration-300 group-hover:scale-110"
        />
      </Link>
      <div className="flex flex-col gap-y-4">
        <h3 className="text-lg font-medium line-clamp-1 leading-tight">
          <Link
            href="#"
            className="text-t-800 duration-300 hover:text-p-900 flex items-center gap-x-2.5"
          >
            {item?.from}
            <span className="text-p-900">
              <ExchangeIcon />
            </span>
            {item?.to}
          </Link>
        </h3>
        <div className="flex items-center gap-x-1.5">
          <p className="flex-1 text-t-600 text-sm line-clamp-1">
            {item?.airline}
          </p>
        </div>
        <div className="flex items-center justify-between text-sm gap-x-4">
          <p className="text-t-600">Starting from </p>
          <p className="text-p-900 font-medium">
            {numeral(item?.price).format("$0,0.00")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinationSlideItem;
