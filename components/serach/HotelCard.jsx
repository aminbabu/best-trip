import { LocationAltIcon, StarAltIcon } from "@/components/icons/svgr";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HotelCard = ({ data }) => {
  return (
    <Card className="border-transparent relative overflow-hidden">
      <CardContent className="p-4 sm:px-5 sm:py-[22px] xl:leading-8 flex flex-col md:flex-row lg:items-center justify-between gap-5">
        <Image
          src={data.img}
          width={266}
          height={266}
          alt={data.name}
          className="aspect-[228/230] w-full lg:max-w-[228px] md:mx-0 md:w-1/2 lg:w-60 flex-shrink-0 rounded-[0.1785rem] object-cover"
        />
        <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-2">
            <h4 className="text-base xl:text-lg text-t-800 font-medium leading-relaxed">
              {data.name}
            </h4>
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
                {data.rating}
              </p>
            </div>
            <div className="text-sm flex gap-2 pb-1.5 leading-relaxed text-t-600">
              <div>
                <LocationAltIcon className="w-4 h-4" viewBox="0 0 24 24" />
              </div>
              <p className="text-xs leading-relaxed line-clamp-2">
                {data.address}
              </p>
            </div>
            <div className="p-2 rounded-sm bg-p-300 w-[90%]">
              <p className="text-t-600 text-xs line-clamp-1 leading-relaxed">
                {data.shortDetails}
              </p>
            </div>
            <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-5">
              <ul className="space-y-3 lg:space-y-2">
                {data.includes?.map((spec) => (
                  <li
                    key={spec.id}
                    className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal"
                  >
                    {spec.icons}
                    <span className="flex-shrink-0 text-xs leading-relaxed">
                      {spec.service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:self-end space-y-4 lg:text-right lg:w-[60%]">
            <div className="flex flex-col gap-0.5 leading-relaxed">
              <p className="text-t-600 text-xs">
                <span className="text-p-900">*</span>Starting From per Night
              </p>
              <p className="text-t-900 font-medium text-sm lg:text-base xl:text-lg">
                BDT {data.roomFee}
              </p>
              <p className="text-t-600 text-xs">Includes taxes & charges</p>
            </div>
            <Button
              size="sm"
              className="font-semibold text-sm lg:text-base px-3 py-2"
              href={`/hotel/${data.id}`}
              asChild
            >
              <Link>Select Room</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
