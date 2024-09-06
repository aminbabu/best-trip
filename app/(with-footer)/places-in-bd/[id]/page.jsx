import { getBlogPost } from "@/actions/blog-posts/get-blog-posts";
import { StarIcon } from "@/components/icons/svgr";
import Container from "@/components/layouts/Container";
import { airlines } from "@/data/airline";
import Image from "next/image";
import Link from "next/link";

const DetailsPage = async ({ params }) => {
  const { id } = params;
  let blogPost;
  try {
    blogPost = await getBlogPost(id);
  } catch (error) {
    console.log(error);
  }
  const airLine = airlines?.find((airline) => airline.code === blogPost?.nearestAirport)
  return (
    <main className="py-12 lg:py-16">
      <section className="text-t-700">
        <Container>
          <div className="aspect-[1140/513] rounded-md overflow-hidden mb-6 lg:mb-10">
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + blogPost?.thumbnail}
              width="1140"
              height="513"
              alt="Patenga Sea Beach"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h1 className="text-t-800 text-3xl sm:text-4xl lg:text-5xl font-medium mb-5 lg:mb-8">
            {blogPost?.title}
          </h1>
          <div className="space-y-6 mb-10">
            <p className=" text-xl lg:text-2xl font-medium">
              {blogPost?.subtitle}
            </p>
            <div className="font-medium flex flex-wrap items-center gap-x-1">
              {blogPost?.rating}
              <ul className="flex items-center gap-x-1 mb-1">
                {
                  Array.from({ length: parseInt(blogPost?.rating) }).map((_, index) => (
                    <li key={index} className="flex-shrink-0 text-[#FFD600]">
                      <StarIcon />
                    </li>
                  ))
                }
              </ul>
              6,755 Google Reviews
            </div>
            <p>
              {blogPost?.description}
            </p>
            <p>
              <span className="font-medium">Location:</span> {blogPost?.location}
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
                    {airLine?.name}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-1">
                    {blogPost?.rating}
                    <ul className="flex items-center gap-x-1 mb-1">
                      {
                        Array.from({ length: parseInt(blogPost?.rating) }).map((_, index) => (
                          <li key={index} className="flex-shrink-0 text-[#FFD600]">
                            <StarIcon />
                          </li>
                        ))
                      }
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
                {
                  blogPost?.domesticAirlines?.map((airline, index) => (
                    <li key={airLine}>
                      <Link href="#" className="hover:text-primary duration-300">
                        {airline}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default DetailsPage;
