import { permanentRedirect } from "next/navigation";

const Page = ({ params }) => {
  return permanentRedirect(`/umrah/${params.id}/package-details`);
};

export default Page;
