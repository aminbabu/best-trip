import Container from "@/components/layouts/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <header className="bg-p-300/60 py-16">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-x-6 gap-y-12 text-center lg:text-left">
          <div className="max-w-[29rem] lg:max-w-lg mx-auto">
            <h1 className="text-3xl leading-tight sm:text-4xl sm:leading-tight lg:text-[2.75rem] lg:leading-tight text-t-800 font-medium mb-6">
              Discover A Beautiful Place With Us
            </h1>
            <p>
              Would you explore nature paradise in the world, lets find the best
              destination in the world with us.
            </p>
          </div>
          <div className="flex-shrink-0">
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
