import Banners from "@/components/home/Banners";
import Filters from "@/components/home/Filters";
import Hotels from "@/components/home/Hotels";
import PlacesInBD from "@/components/home/PlacesInBD";
import PopularDestinations from "@/components/home/PopularDestinations";
import UmrahZiyarah from "@/components/home/UmrahZiyarah";

const Home = () => {
  return (
    <main>
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
