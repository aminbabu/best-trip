"use client";

import UmrahTabpane from "@/components/global/UmrahTabpane";
import { ArrowIcon, PencliLineIcon } from "@/components/icons/svgr";
import Container from "@/components/layouts/Container";
import Filters from "@/components/serach/Filters";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useGetUmrahPackagesForCustomersQuery } from "@/lib/features/queries/UMRAH_PACKAGES_API";
import { cn } from "@/lib/utils";
import BgCurve from "@/public/images/search/curve.svg?url";
import Image from "next/image";
import { useSelector } from "react-redux";

const SearchPage = ({ params }) => {
  const { slug } = params;

  const searchQueries = useSelector((state) => state.package);

  const data = useGetUmrahPackagesForCustomersQuery(searchQueries);

  console.log(data);
  return (
    <Collapsible>
      <div
        className={cn(
          "flex items-center justify-between gap-y-1 text-left focus-visible:ring-transparent py-3.5 px-7 border-t-400/50 lg:border-border bg-primary xs:hidden"
        )}>
        <div className='flex gap-2.5 items-center'>
          <ArrowIcon className='rotate-90 text-white' />
          <div>
            <span className='text-sm lg:text-base flex items-center justify-between gap-x-4 text-white capitalize'>
              Standard Package
            </span>
            <span className='text-xs lg:text-sm text-white font-normal'>
              Travel Date - December | 14 Days
            </span>
          </div>
        </div>
        <CollapsibleTrigger asChild>
          <Button className='text-white px-2 py-1.5 border border-white rounded-sm'>
            <PencliLineIcon />
          </Button>
        </CollapsibleTrigger>
      </div>
      <main className='relative pt-8 bg-[#F6F6F6] pb-10 sm:pb-14 lg:pb-8 min-h-[calc(100vh-93px)]'>
        <Image
          src={BgCurve}
          alt='Bg curve'
          className='absolute top-0 left-0 w-full -mt-12 2xl:-mt-40 z-10 object-cover object-center hidden lg:block'
        />

        <Container className='space-y-6 lg:space-y-8 relative z-20'>
          <CollapsibleContent className='px-0 py-2 border-transparent min-w-[308px] -mt-5 static xs:hidden'>
            <UmrahTabpane />
          </CollapsibleContent>

          <div className='hidden xs:block'>
            <Filters slug={slug} />
          </div>
          {/* <FilterResult slug={slug} data={data} /> */}
          <div className='relative flex py-4 items-center my-6'>
            <div className='flex-grow border-t border-gray-200'></div>
            <span className='flex-shrink mx-4 text-t-600'>End of Results</span>
            <div className='flex-grow border-t border-gray-200'></div>
          </div>
        </Container>
      </main>
    </Collapsible>
  );
};

export default SearchPage;
