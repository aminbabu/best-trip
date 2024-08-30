"use client";

import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import SectionHeader from "@/components/global/SectionHeader";
import Slider from "@/components/global/splide/Slider";
import PlacesInBDSlideItem from "@/components/home/PlacesInBDSlideItem";
import Section from "@/components/global/Section";
import { options } from "@/components/home/splideOptions";

const PlacesInBD = ({ section, blogPosts }) => {
  return (
    <Section>
      <SectionHeader
        title={section?.title}
        description={section?.description}
      />
      <Slider hasTrack={false} options={options}>
        <SplideTrack>
          {blogPosts.map((blogPost, index) => (
            <SplideSlide key={blogPost?._id}>
              <PlacesInBDSlideItem blogPost={blogPost} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Slider>
    </Section>
  );
};

export default PlacesInBD;
