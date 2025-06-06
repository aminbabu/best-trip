import Image from "next/image";
import { ClockIcon, LocationIcon } from "@/components/icons/svgr";
import numeral from "numeral";
import Link from "next/link";
import { generateImage, renderInclusionIcon } from "@/lib/utils";

const UmrahZiyarahSlideumrahOffer = ({ umrahOffer }) => {
  return (
    <div className="group flex flex-col gap-y-4">
      <Link
        href={umrahOffer?.link}
        className="rounded-t-md flex aspect-[262/280] overflow-hidden"
      >
        <Image
          src={generateImage(umrahOffer?.thumbnail)}
          alt={umrahOffer?.title}
          width={262}
          height={280}
          className="rounded-t-md object-cover w-full h-full duration-300 group-hover:scale-110"
        />
      </Link>
      <div className="flex flex-col gap-y-1.5 lg:gap-y-4 p-2.5 pt-0">
        <h3 className="text-base lg:text-lg font-medium leading-tight mb-1 lg:mb-0">
          <Link
            href={umrahOffer?.link}
            className="text-t-800 duration-300 group-hover:text-p-900 line-clamp-1"
          >
            {umrahOffer?.title}
          </Link>
        </h3>
        <div className="flex umrahOffers-center justify-between gap-x-4 text-xs lg:text-sm">
          <div className="flex umrahOffers-center gap-x-1.5 text-t-600">
            <span className="text-t-500">
              <LocationIcon />
            </span>
            From {umrahOffer?.location}
          </div>
          <ul className="flex umrahOffers-center gap-x-1.5 text-t-500">
            {umrahOffer?.inclusions?.map((inclusion) => (
              <li
                key={inclusion}
                className="inline-flex items-center justify-center"
              >
                {renderInclusionIcon(inclusion)}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex umrahOffers-center gap-x-2.5 text-xs lg:text-sm mb-1 lg:mb-0">
          <span className="text-t-500">
            <ClockIcon />
          </span>
          <p className="text-t-600">
            {umrahOffer?.duration} Days | {umrahOffer?.duration - 1} Nights
          </p>
        </div>
        <div className="flex umrahOffers-center justify-between text-xs lg:text-sm gap-x-4 leading-relaxed">
          <p className="text-t-600">Starting from </p>
          <p className="text-p-900 font-medium">
            BDT {numeral(umrahOffer?.price).format("0,0.00")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UmrahZiyarahSlideumrahOffer;
