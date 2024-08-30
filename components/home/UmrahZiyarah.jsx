"use client";

import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import SectionHeader from "@/components/global/SectionHeader";
import Slider from "@/components/global/splide/Slider";
import UmrahZiyarahSlideItem from "@/components/home/UmrahZiyarahSlideItem";
import Section from "@/components/global/Section";
import { options } from "@/components/home/splideOptions";

const UmrahZiyarah = ({ section, umrahOffers }) => {
  return (
    <Section id="umrah" className="bg-secondary">
      <SectionHeader
        title={section?.title}
        description={section?.description}
      />
      <Slider hasTrack={false} options={options}>
        <SplideTrack>
          {umrahOffers?.map((umrahOffer) => (
            <SplideSlide key={umrahOffer?._id}>
              <UmrahZiyarahSlideItem umrahOffer={umrahOffer} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Slider>
    </Section>
  );
};

export default UmrahZiyarah;
