import Hero from "@/components/home/Hero";
import Filters from "@/components/home/Filters";
import Banners from "@/components/home/Banners";
import Hotels from "@/components/home/Hotels";
import UmrahZiyarah from "@/components/home/UmrahZiyarah";
import PopularDestinations from "@/components/home/PopularDestinations";
import PlacesInBD from "@/components/home/PlacesInBD";

const Home = () => {
  return (
    <main>
      <Hero />
      <Filters />
      <Banners />
      <Hotels />
      <PopularDestinations />
      <UmrahZiyarah />
      <PlacesInBD />
    </main>
  );
};

export default Home;
