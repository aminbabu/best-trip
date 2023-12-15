"use client";

// import Section from "@/components/global/Section";
import Image from "next/image";
import Slider from "@/components/global/splide/Slider";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Link from "next/link";

const options = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  gap: 16,
  arrows: false,
  pagination: false,
  autoplay: true,
  mediaQuery: "min",
  breakpoints: {
    640: {
      perPage: 2,
    },
    1024: {
      perPage: 3,
      arrows: true,
    },
    1280: {
      gap: 32,
    },
  },
};

const Banners = ({ items }) => {
  return (
    // <Section>
    <Slider hasTrack={false} options={options}>
      <SplideTrack>
        {items.map((item, index) => (
          <SplideSlide key={index}>
            <Link href="#" className="flex overflow-hidden rounded">
              <Image
                src={item.image}
                alt={item.title}
                width={360}
                height={202}
                className="rounded object-cover w-full h-auto"
              />
            </Link>
          </SplideSlide>
        ))}
      </SplideTrack>
    </Slider>
    // </Section>
  );
};

export default Banners;
