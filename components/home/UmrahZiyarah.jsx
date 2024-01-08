"use client";

import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import SectionHeader from "@/components/global/SectionHeader";
import Slider from "@/components/global/splide/Slider";
import UmrahZiyarahSlideItem from "@/components/home/UmrahZiyarahSlideItem";
import Section from "@/components/global/Section";
import data from "@/data/umrah-ziyarah.json";

const options = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  gap: 16,
  arrows: false,
  pagination: false,
  autoplay: true,
  interval: 3000,
  speed: 1000,
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

const UmrahZiyarah = () => {
  const { title, description, items } = data;

  return (
    <Section className="bg-secondary">
      <SectionHeader title={title} description={description} />
      <Slider hasTrack={false} options={options}>
        <SplideTrack>
          {items.map((item, index) => (
            <SplideSlide key={index}>
              <UmrahZiyarahSlideItem item={item} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Slider>
    </Section>
  );
};

export default UmrahZiyarah;
