import Container from "@/components/layouts/Container";
import Image from "next/image";
import BgCurve from "@/public/images/search/curve.svg?url";
import Filters from "@/components/serach/Filters";
import FilterResult from "@/components/serach/FilterResult";
import data from "@/data/umrah-result.json";

const SearchPage = async ({ params }) => {
  const { slug } = params;

  // api call

  return (
    <div className="relative pt-12 sm:pt-16 lg:pt-20">
      <Image
        src={BgCurve}
        alt="Bg curve"
        className="absolute top-0 left-0 w-full -z-10 object-cover object-center"
      />
      <Container>
        <Filters slug={slug} />
        <FilterResult slug={slug} data={data} />
      </Container>
    </div>
  );
};

export default SearchPage;
