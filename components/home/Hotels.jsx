"use client";

import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import SectionHeader from "@/components/global/SectionHeader";
import Slider from "@/components/global/splide/Slider";
import HotelSlideItem from "@/components/home/HotelSlideItem";
import Section from "@/components/global/Section";
import { options } from "@/components/home/splideOptions";

const Hotels = ({ section, hotelOffers }) => {
  return (
    <Section id="hotels" className="bg-secondary">
      <SectionHeader
        title={section?.title}
        description={section?.description}
      />
      <Slider hasTrack={false} options={options}>
        <SplideTrack>
          {hotelOffers?.map((hotelOffer) => (
            <SplideSlide key={hotelOffer?._id}>
              <HotelSlideItem hotelOffer={hotelOffer} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Slider>
    </Section>
  );
};

export default Hotels;
