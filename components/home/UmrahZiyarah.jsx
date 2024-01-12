"use client";

import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import SectionHeader from "@/components/global/SectionHeader";
import Slider from "@/components/global/splide/Slider";
import UmrahZiyarahSlideItem from "@/components/home/UmrahZiyarahSlideItem";
import Section from "@/components/global/Section";
import data from "@/data/umrah-ziyarah.json";
import { options } from "@/components/home/splideOptions";

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
