"use client";

import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import SectionHeader from "@/components/global/SectionHeader";
import Slider from "@/components/global/splide/Slider";
import PlacesInBDSlideItem from "@/components/home/PlacesInBDSlideItem";
import Section from "@/components/global/Section";
import data from "@/data/places-in-bd.json";
import { options } from "@/components/home/splideOptions";

const PlacesInBD = () => {
  const { title, description, items } = data;

  return (
    <Section>
      <SectionHeader title={title} description={description} />
      <Slider hasTrack={false} options={options}>
        <SplideTrack>
          {items.map((item, index) => (
            <SplideSlide key={index}>
              <PlacesInBDSlideItem item={item} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Slider>
    </Section>
  );
};

export default PlacesInBD;
