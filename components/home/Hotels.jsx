"use client";

import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import SectionHeader from "@/components/global/SectionHeader";
import Slider from "@/components/global/splide/Slider";
import HotelSlideItem from "@/components/home/HotelSlideItem";
import Container from "../layouts/Container";

const options = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  gap: 16,
  arrows: false,
  pagination: false,
  mediaQuery: "min",
  breakpoints: {
    640: {
      perPage: 2,
    },
    768: {
      perPage: 3,
    },
    1024: {
      perPage: 4,
      arrows: true,
    },
    1280: {
      gap: 32,
    },
  },
};

const Hotels = ({ title, description, items }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-secondary">
      <Container>
        <SectionHeader title={title} description={description} />
        <Slider hasTrack={false} options={options}>
          <SplideTrack>
            {items.map((item, index) => (
              <SplideSlide key={index}>
                <HotelSlideItem item={item} />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Slider>
      </Container>
    </section>
  );
};

export default Hotels;
