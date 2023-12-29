import Container from "@/components/layouts/Container";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { BookingIcon, CheckSheildIcon } from "../icons/svgr";

const HeroAlt = () => {
  return (
    <header className="bg-p-900/20 pt-20 pb-32 md:pb-48 lg:pb-60 -mb-16 md:-mb-32 lg:-mb-44 relative">
      <Image
        src="/images/home/hero/banner.png"
        alt="hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="absolute inset-0 w-full h-full z-[-1]"
      />
      <Container>
        <div className="max-w-md lg:max-w-2xl mx-auto text-center text-white">
          <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold mb-4 lg:mb-6">
            Start Planning Your Trip
          </h1>
          <p className="text-lg lg:text-xl font-medium lg:px-6 mb-6">
            Would you explore nature paradise in the world, lets find the best
            destination in the world with us.
          </p>
          <div className="flex flex-col xs:flex-row xs:h-6 items-center justify-center gap-4 lg:gap-x-5 font-semibold text-lg lg:text-xl">
            <div className="flex items-center gap-x-2.5">
              <BookingIcon />
              Easy Booking
            </div>
            <Separator
              orientation="vertical"
              className="bg-white hidden xs:block"
            />
            <div className="flex items-center gap-x-2.5">
              <CheckSheildIcon />
              Secure Payment
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeroAlt;
