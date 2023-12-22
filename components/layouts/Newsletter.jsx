"use client";

import { usePathname } from "next/navigation";
import NewsletterForm from "./NewsletterForm";

const routes = ["/profile", "/sign", "/forgot", "/reset"];

const Newsletter = () => {
  const pathname = usePathname();

  const isPresent = routes.some((route) => pathname.startsWith(route));

  if (isPresent) {
    return null;
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:pt-[120px] xl:pb-[100px]">
      <h2 className="text-3xl lg:text-4xl text-t-800 font-semibold text-center mb-6 lg:mb-8">
        Subscribe to Get Special Price
      </h2>
      <p className="text-t-600 text-center mb-12">
        Do not wanna miss something? Subscribe right now and get special{" "}
        <br className="hidden sm:block" />
        promotion and monthly newalwtter
      </p>
      <NewsletterForm />
    </section>
  );
};

export default Newsletter;
