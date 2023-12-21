import Container from "@/components/layouts/Container";
import Image from "next/image";
import BgCurve from "@/public/images/search/curve.svg?url";
import Filters from "@/components/serach/Filters";

const SearchPage = async ({ params }) => {
  const { slug } = params;

  // api call

  return (
    <div className="relative">
      <Image
        src={BgCurve}
        alt="Bg curve"
        className="absolute top-0 left-0 w-full -z-10 object-cover object-center"
      />
      <Container>
        <Filters slug={slug} />
      </Container>
    </div>
  );
};

export default SearchPage;
