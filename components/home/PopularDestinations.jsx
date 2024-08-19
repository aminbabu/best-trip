"use client";

import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import SectionHeader from "@/components/global/SectionHeader";
import Slider from "@/components/global/splide/Slider";
import PopularDestinationSlideItem from "@/components/home/PopularDestinationSlideItem";
import Section from "@/components/global/Section";
import { options } from "@/components/home/splideOptions";

const PopularDestinations = ({ section, flightOffers }) => {
  return (
    <Section id="flights">
      <SectionHeader
        title={section?.title}
        description={section?.description}
      />
      <Slider hasTrack={false} options={options}>
        <SplideTrack>
          {flightOffers?.map((flightOffer, index) => (
            <SplideSlide key={flightOffer?._id}>
              <PopularDestinationSlideItem flightOffer={flightOffer} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Slider>
    </Section>
  );
};

export default PopularDestinations;
