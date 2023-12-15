"use client";

import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import Section from "@/components/global/Section";
import SectionHeader from "@/components/global/SectionHeader";
import Slider from "@/components/global/splide/Slider";
import PopularDestinationSlideItem from "@/components/home/PopularDestinationSlideItem";

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

const PopularDestinations = ({ title, description, items }) => {
  return (
    <>
      {/* <Section> */}
      <SectionHeader title={title} description={description} />
      <Slider hasTrack={false} options={options}>
        <SplideTrack>
          {items.map((item, index) => (
            <SplideSlide key={index}>
              <PopularDestinationSlideItem item={item} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Slider>
      {/* </Section> */}
    </>
  );
};

export default PopularDestinations;
