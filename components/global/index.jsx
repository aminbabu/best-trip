import dynamic from "next/dynamic";

const Banners = dynamic(() => import("../home/Banners"), {
  loading: () => <p>Banners Loading...</p>,
});

const Hotels = dynamic(() => import("../home/Hotels"), {
  loading: () => <p>Hotels Loading...</p>,
});

const PopularDestinations = dynamic(
  () => import("../home/PopularDestinations"),
  {
    loading: () => <p>Popular Destinations Loading...</p>,
  }
);

const UmrahZiyarah = dynamic(() => import("../home/UmrahZiyarah"), {
  loading: () => <p>Umrah Ziyarah Loading...</p>,
});

const Components = {
  banners: Banners,
  hotels: Hotels,
  popular_destinations: PopularDestinations,
  umrah_ziyarah: UmrahZiyarah,
};

export default Components;
