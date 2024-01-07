import Image from "next/image";
import { StarIcon } from "@/components/icons/svgr";
import numeral from "numeral";
import Link from "next/link";

const PlacesInBDSlideItem = ({ item }) => {
  return (
    <div className="group flex flex-col gap-y-4 relative">
      <Link
        href="places-in-bd/1"
        className="rounded-md flex aspect-[262/320] overflow-hidden relative before:block before:absolute before:pointer-events-none before:-inset-0 before:bg-gradient-to-b before:from-black/0 before:to-black before:z-10"
      >
        <Image
          src={item?.image}
          alt={item?.title}
          width={262}
          height={320}
          className="rounded-t-md object-cover w-full h-full duration-300 group-hover:scale-110 z-0"
        />
      </Link>
      <div className="flex flex-col justify-end gap-y-1 absolute inset-0 px-5 py-4 pointer-events-none z-20">
        <h3 className="text-lg font-medium leading-tight pointer-events-auto">
          <Link
            href="#"
            className="text-white duration-300 hover:text-p-900 flex items-center gap-x-2.5 line-clamp-1"
          >
            {item?.title}
          </Link>
        </h3>
        <div className="flex gap-x-4 font-medium text-white pointer-events-auto">
          <div className="flex-shrink-0 flex items-center gap-x-1.5">
            <span className="text-sm">{item?.rating}</span>
            <span className="flex-shrink-0 text-[#FFD600]">
              <StarIcon />
            </span>
          </div>
          <span className="text-sm">
            ({numeral(item?.count).format("0a.0")})
          </span>
        </div>
        <p className="text-sm text-white line-clamp-1 pointer-events-auto">
          {item?.address}
        </p>
      </div>
    </div>
  );
};

export default PlacesInBDSlideItem;
