import Hero from "@/components/home/Hero";
import Filters from "@/components/home/Filters";
import Banners from "@/components/home/Banners";
import Hotels from "@/components/home/Hotels";
import UmrahZiyarah from "@/components/home/UmrahZiyarah";
import PopularDestinations from "@/components/home/PopularDestinations";
import PlacesInBD from "@/components/home/PlacesInBD";
import { getExclusiveOffers } from "@/actions/exclusive-offers/get-exclusive-offers";
import { getHotelOffers } from "@/actions/hotel-offers/get-hotel-offers";
import { getSectionsData } from "@/actions/sections/get-section-data";
import { getFlightOffers } from "@/actions/flight-offers/getFlightOffers";
import { getUmrahOffers } from "@/actions/umrah-offers/get-umrah-offers";
import { getBlogPosts } from "@/actions/blog-posts/get-blog-posts";

const Home = async () => {
  const sections = await getSectionsData();
  const exclusiveOffers = await getExclusiveOffers();
  const hotelOffers = await getHotelOffers();
  const flightOffers = await getFlightOffers();
  const umrahOffers = await getUmrahOffers();
  const blogPosts = await getBlogPosts();

  const getSection = (key) => sections?.find((section) => section?.key === key);

  return (
    <main>
      <Hero />
      <Filters />
      <Banners exclusiveOffers={exclusiveOffers} />
      <Hotels section={getSection("hotels")} hotelOffers={hotelOffers} />
      <PopularDestinations
        section={getSection("destinations")}
        flightOffers={flightOffers}
      />
      <UmrahZiyarah
        section={getSection("umrah-ziyarah")}
        umrahOffers={umrahOffers}
      />
      <PlacesInBD
        section={getSection("beautiful-places")}
        blogPosts={blogPosts}
      />
    </main>
  );
};

export default Home;
