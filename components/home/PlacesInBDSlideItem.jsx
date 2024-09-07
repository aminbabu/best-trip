import Image from "next/image";
import { StarIcon } from "@/components/icons/svgr";
import numeral from "numeral";
import Link from "next/link";
import { generateImage } from "@/lib/utils";

const PlacesInBDSlideblogPost = ({ blogPost }) => {
  return (
    <div className="group flex flex-col gap-y-4 relative">
      <Link
        href={`/places-in-bd/${blogPost?._id}`}
        className="rounded-md flex aspect-[262/320] overflow-hidden relative before:block before:absolute before:pointer-events-none before:-inset-0 before:bg-gradient-to-b before:from-black/0 before:to-black before:z-10"
      >
        <Image
          src={generateImage(blogPost?.thumbnail)}
          alt={blogPost?.title}
          width={262}
          height={320}
          className="rounded-t-md object-cover w-full h-full duration-300 group-hover:scale-110 z-0"
        />
      </Link>
      <div className="flex flex-col justify-end gap-y-1 absolute inset-0 px-5 py-4 pointer-events-none z-20">
        <h3 className="text-base lg:text-lg font-medium leading-tight pointer-events-auto">
          <Link
            href={`/places-in-bd/${blogPost?._id}`}
            className="text-white duration-300 hover:text-p-900 flex blogPosts-center gap-x-2.5 line-clamp-1"
          >
            {blogPost?.title}
          </Link>
        </h3>
        <div className="flex gap-x-4 font-medium text-white pointer-events-auto text-xs lg:text-sm">
          <div className="flex-shrink-0 flex blogPosts-center gap-x-1.5">
          {
              Array.from({ length: blogPost?.rating }).map((_, index) => (
                <span key={index} className="flex-shrink-0 text-[#FFD600]">
              <StarIcon
                viewBox="0 0 18 17"
                className="w-3.5 lg:w-[1.125rem] h-3.5 lg:h-[1.125rem]"
              />
            </span>
              ))
            }
            <span>{blogPost?.rating}</span>
          </div>
          <span>({numeral(blogPost?.numberOfReviews).format("0a.0")})</span>
        </div>
        <p className="text-xs lg:text-sm text-white line-clamp-1 pointer-events-auto">
          {blogPost?.location}
        </p>
      </div>
    </div>
  );
};

export default PlacesInBDSlideblogPost;
