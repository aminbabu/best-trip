"use client";

import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import Illustration from "@/public/images/no-result-found/illustration.svg?url";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NoResultFound = () => {
  const router = useRouter();

  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Image src={Illustration} alt="Not Found" width={865} height={471} />
          <h1 className="text-t-900 text-2xl lg:text-3xl font-semibold my-4">
            No results found
          </h1>
          <p className="text-t-700 text-base lg:text-lg mb-6">
            We couldn&apos;t find what you&apos;re looking for
          </p>
          <Button className="w-80" onClick={() => router.back()}>
            Go Back
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default NoResultFound;
