import dynamic from "next/dynamic";

const Banners = dynamic(() => import("@/components/home/Banners"), {
  loading: () => <p>Banners Loading...</p>,
});

const Hotels = dynamic(() => import("@/components/home/Hotels"), {
  loading: () => <p>Hotels Loading...</p>,
});

const PopularDestinations = dynamic(
  () => import("@/components/home/PopularDestinations"),
  {
    loading: () => <p>Popular Destinations Loading...</p>,
  }
);

const UmrahZiyarah = dynamic(() => import("@/components/home/UmrahZiyarah"), {
  loading: () => <p>Umrah Ziyarah Loading...</p>,
});

const PlacesInBD = dynamic(() => import("@/components/home/PlacesInBd"), {
  loading: () => <p>Places In BD Loading...</p>,
});

const Components = {
  banners: Banners,
  hotels: Hotels,
  popular_destinations: PopularDestinations,
  umrah_ziyarah: UmrahZiyarah,
  places_in_bd: PlacesInBD,
};

export default Components;
