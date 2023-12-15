import dynamic from "next/dynamic";

const Banners = dynamic(() => import("../home/banners"), {
  loading: () => <p>Banners Loading...</p>,
});

const Components = {
  banners: Banners,
};

export default Components;
