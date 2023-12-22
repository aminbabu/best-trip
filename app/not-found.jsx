import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import Illustration from "@/public/images/not-found/illustration.svg?url";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Image src={Illustration} alt="Not Found" width={865} height={471} />
          <h1 className="text-t-900 text-2xl lg:text-3xl font-semibold my-4">
            404 Not Found
          </h1>
          <p className="text-t-700 text-base lg:text-lg mb-6">
            Oops! The page you are looking for does not exist.
          </p>
          <Button asChild className="w-80">
            <Link href="/">Go Back</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
