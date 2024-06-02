import Container from "@/components/layouts/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <header className="bg-[#FCE6E6] lg:bg-p-300/60 py-12 sm:py-10 2xl:py-16">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center gap-x-6 gap-y-12">
          <div className="lg:max-w-lg">
            <h1 className="text-2xl xs:text-3xl leading-tight sm:text-4xl sm:leading-tight xl:text-[2.75rem] xl:leading-tight text-t-800 font-medium mb-2.5 sm:mb-6">
              Discover A Beautiful <br className="md:hidden lg:block" /> Place
              With Us
            </h1>
            <p className="xl:text-lg text-t-600 max-w-xl">
              Would you explore nature paradise in the world, lets find the best
              destination in the world with us.
            </p>
          </div>
          <div className="flex-shrink-0 hidden lg:block ml-auto">
            <Image
              src="/images/home/hero/illustration.png"
              alt="Luggage"
              width={465}
              height={274}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
