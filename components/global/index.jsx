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
    loading: () => <p>Hotels Loading...</p>,
  }
);

const Components = {
  banners: Banners,
  hotels: Hotels,
  popular_destinations: PopularDestinations,
};

export default Components;
