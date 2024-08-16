import { StarIcon } from "@/components/icons/svgr";
import Container from "@/components/layouts/Container";
import Image from "next/image";
import Link from "next/link";

const DetailsPage = ({ params }) => {
  const { id } = params;
  return (
    <main className="py-12 lg:py-16">
      <section className="text-t-700">
        <Container>
          <div className="aspect-[1140/513] rounded-md overflow-hidden mb-6 lg:mb-10">
            <Image
              src="/images/places-in-bd/banner.png"
              width="1140"
              height="513"
              alt="Patenga Sea Beach"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h1 className="text-t-800 text-3xl sm:text-4xl lg:text-5xl font-medium mb-5 lg:mb-8">
            Patenga Sea Beach
          </h1>
          <div className="space-y-6 mb-10">
            <p className=" text-xl lg:text-2xl font-medium">
              Beach in Bangladesh
            </p>
            <div className="font-medium flex flex-wrap items-center gap-x-1">
              4.8
              <ul className="flex items-center gap-x-1 mb-1">
                <li className="flex-shrink-0 text-[#FFD600]">
                  <StarIcon />
                </li>
                <li className="flex-shrink-0 text-[#FFD600]">
                  <StarIcon />
                </li>
                <li className="flex-shrink-0 text-[#FFD600]">
                  <StarIcon />
                </li>
                <li className="flex-shrink-0 text-[#FFD600]">
                  <StarIcon />
                </li>
                <li className="flex-shrink-0 text-[#FFD600]">
                  <StarIcon />
                </li>
              </ul>
              6,755 Google Reviews
            </div>
            <p>
              Patenga is a sea beach of the Bay of Bengal, located 14 kilometres
              south from the port city of Chattogram, Bangladesh. It is near to
              the mouth of the Karnaphuli River. The beach is very close to the
              Bangladesh Naval Academy of the Bangladesh Navy and Shah Amanat
              International Airport.Patenga is a sea beach of the Bay of Bengal,
              located 14 kilometres south from the port city of Chattogram,
              Bangladesh. It is near to the mouth of the Karnaphuli River. The
              beach is very close to the Bangladesh Naval Academy of the
              Bangladesh Navy and Shah Amanat International Airport.
            </p>
            <p>
              <span className="font-medium">Location:</span> Chattogram,
              Bangladesh
            </p>
          </div>
          <div className="grid grid-cols-2 xl:gap-x-40 lg:gap-x-20 gap-y-6">
            <div className="col-span-2 lg:col-span-1 space-y-6">
              <p className="text-lg font-semibold">Nearest Airport</p>
              <Link
                href="#"
                className="group flex flex-col xs:flex-row xs:items-center gap-3"
              >
                <div className="rounded-sm overflow-hidden aspect-[88/80] w-24">
                  <Image
                    src="/images/places-in-bd/airport.png"
                    width="88"
                    height="80"
                    alt="Shah Amanat International Airport"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-medium group-hover:text-primary duration-300">
                    Shah Amanat International Airport
                  </p>
                  <div className="flex flex-wrap items-center gap-x-1">
                    4.8
                    <ul className="flex items-center gap-x-1 mb-1">
                      <li className="flex-shrink-0 text-[#FFD600]">
                        <StarIcon />
                      </li>
                      <li className="flex-shrink-0 text-[#FFD600]">
                        <StarIcon />
                      </li>
                      <li className="flex-shrink-0 text-[#FFD600]">
                        <StarIcon />
                      </li>
                      <li className="flex-shrink-0 text-[#FFD600]">
                        <StarIcon />
                      </li>
                      <li className="flex-shrink-0 text-[#FFD600]">
                        <StarIcon />
                      </li>
                    </ul>
                    International Airport
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-span-2 lg:col-span-1 space-y-4">
              <p className="text-lg font-semibold">
                Popular Domestic Airlines{" "}
              </p>
              <ul className="list-inside list-disc space-y-1.5">
                <li>
                  <Link href="#" className="hover:text-primary duration-300">
                    Biman Bangladesh Airlines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary duration-300">
                    Novoair
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary duration-300">
                    US-Bangla Airlines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary duration-300">
                    Air Astra
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default DetailsPage;
