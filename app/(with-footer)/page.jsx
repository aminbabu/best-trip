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
import HeroAlt from "@/components/home/HeroAlt";
import { getTheme } from "@/actions/theme/get-theme";

const Home = async () => {
  let sections = [];
  let exclusiveOffers = [];
  let hotelOffers = [];
  let flightOffers = [];
  let umrahOffers = [];
  let blogPosts = [];
  let activeTheme = {};

  try {
    sections = await getSectionsData();
    exclusiveOffers = await getExclusiveOffers();
    hotelOffers = await getHotelOffers();
    flightOffers = await getFlightOffers();
    umrahOffers = await getUmrahOffers();
    blogPosts = await getBlogPosts();
    activeTheme = await getTheme();
  } catch (error) {
    console.error("Error fetching data:", error); // Log the error for debugging
  }

  // Ensure sections is an array
  const getSection = (key) =>
    Array.isArray(sections)
      ? sections.find((section) => section?.key === key)
      : null;

  return (
    <main>
      {activeTheme?.theme === "default" ? (
        <Hero data={activeTheme} />
      ) : (
        <HeroAlt data={activeTheme} />
      )}
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
