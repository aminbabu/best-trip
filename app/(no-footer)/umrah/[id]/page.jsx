import ContextProvider from "@/hooks/ContextProvider";
import { permanentRedirect } from "next/navigation";

const Page = ({ params }) => {
  return <ContextProvider>{permanentRedirect(`/umrah/${params.id}/package-details`)}</ContextProvider>
};

export default Page;
