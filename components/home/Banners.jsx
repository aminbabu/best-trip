"use client";

import Image from "next/image";
import Slider from "@/components/global/splide/Slider";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Link from "next/link";
import Container from "../layouts/Container";

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
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <Container>
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
      </Container>
    </section>
  );
};

export default Banners;
