"use client";

import Image from "next/image";
import Slider from "@/components/global/splide/Slider";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Link from "next/link";
import Section from "@/components/global/Section";
import { generateImage } from "@/lib/utils";

const options = {
  type: "loop",
  perPage: 1.5,
  perMove: 1,
  gap: 16,
  arrows: false,
  pagination: false,
  mediaQuery: "min",
  breakpoints: {
    640: {
      perPage: 2.5,
    },
    1024: {
      perPage: 3,
      arrows: true,
      autoplay: true,
      interval: 3000,
      speed: 1000,
    },
    1280: {
      gap: 32,
    },
  },
};

const Banners = ({ exclusiveOffers }) => {
  return (
    <Section>
      <Slider hasTrack={false} options={options}>
        <SplideTrack>
          {exclusiveOffers?.map((exclusiveOffer) => (
            <SplideSlide key={exclusiveOffer?._id}>
              <Link
                href={exclusiveOffer?.link}
                className="flex overflow-hidden rounded"
              >
                <Image
                  src={generateImage(exclusiveOffer?.thumbnail)}
                  alt={exclusiveOffer?.link}
                  width={360}
                  height={202}
                  className="rounded object-cover w-full h-auto"
                />
              </Link>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Slider>
    </Section>
  );
};

export default Banners;
