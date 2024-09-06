import Image from "next/image";
import {
  ExchangeAltIcon,
  ExchangeIcon,
  OneWayIcon,
  ReverseExchangeIcon,
  TwoWayIcon,
} from "@/components/icons/svgr";
import numeral from "numeral";
import Link from "next/link";
import { generateImage } from "@/lib/utils";

const PopularDestinationSlideItem = ({ flightOffer }) => {
  return (
    <div className="group flex flex-col gap-y-4">
      <Link
        href={flightOffer?.link}
        className="rounded-t-md flex aspect-[262/280] overflow-hidden"
      >
        <Image
          src={generateImage(flightOffer?.thumbnail)}
          alt={`${flightOffer?.departure} - ${flightOffer?.arrival}`}
          width={262}
          height={280}
          className="rounded-t-md object-cover w-full h-full duration-300 group-hover:scale-110"
        />
      </Link>
      <div className="flex flex-col gap-y-1.5 lg:gap-y-4 p-2.5 pt-0">
        <h3 className="text-base lg:text-lg font-medium leading-tight">
          <Link
            href={flightOffer?.link}
            className="text-t-800 duration-300 hover:text-p-900 flex items-center gap-x-2.5 line-clamp-1"
          >
            {flightOffer?.departure}
            <span className="text-p-900">
            {flightOffer?.flightType === "one-way" ? <OneWayIcon className="rotate-[180deg]"/> : <TwoWayIcon />}
            </span>
            {flightOffer?.arrival}
          </Link>
        </h3>
        <div className="flex items-center gap-x-1.5">
          <p className="flex-1 text-t-600 text-xs lg:text-sm line-clamp-1">
            {flightOffer?.airline}
          </p>
        </div>
        <div className="flex items-center justify-between gap-x-4 leading-relaxed text-xs lg:text-sm">
          <p className="text-t-600">Starting from </p>
          <p className="text-p-900 font-medium">
            BDT {numeral(flightOffer?.price).format("0,0.00")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinationSlideItem;
