"use client";

import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import SectionHeader from "@/components/global/SectionHeader";
import Slider from "@/components/global/splide/Slider";
import HotelSlideItem from "@/components/home/HotelSlideItem";
import Section from "@/components/global/Section";
import data from "@/data/hotels.json";
import { options } from "@/components/home/splideOptions";

const Hotels = () => {
  const { title, description, items } = data;

  return (
    <Section className="bg-secondary">
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
    </Section>
  );
};

export default Hotels;
