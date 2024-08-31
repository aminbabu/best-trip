"use client";

import Link from "next/link";
import Brand from "@/components/global/Brand";
import Container from "@/components/layouts/Container";
import Copyright from "@/components/layouts/Copyright";
import Newsletter from "@/components/layouts/Newsletter";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons/svgr";
import { cn, generateImage } from "@/lib/utils";

import IataLogo from "@/public/images/footer/iata.svg";
import AtabLogo from "@/public/images/footer/atab.svg";
import ToabLogo from "@/public/images/footer/toab.svg";
import BasisLogo from "@/public/images/footer/basis.svg";
import EcabLogo from "@/public/images/footer/ecab.svg";
import PaymentMethodIcons from "@/public/images/footer/payment-methods.svg";
import { usePathname } from "next/navigation";

const menu = {
  title: "Discover",
  links: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Terms & Conditions",
      path: "/terms-and-conditions",
    },
    {
      name: "Refund Policy",
      path: "/refund-policy",
    },
    {
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
  ],
};

const noNewsletterLinks = [
  "/search/visa",
  "/search/umrah",
  "/terms-and-conditions",
  "/privacy-policy",
  "/refund-policy",
];

const Footer = ({ className, generalSiteSettings, contactSiteSettings }) => {
  const pathname = usePathname();

  const hideNewsletter = noNewsletterLinks.includes(pathname);

  return (
    <footer className={cn("bg-secondary mt-auto pt-10 lg:pt-0", className)}>
      <Container>
        {hideNewsletter || <Newsletter />}
        <div className={`space-y-10 ${hideNewsletter ? "pt-[60px]" : ""}`}>
          <div className="grid grid-cols-4 gap-x-5 gap-y-10 lg:gap-12 text-t-600">
            <div className="flex flex-col max-w-sm lg:max-w-[264px] col-span-4 lg:col-span-1 lg:-mr-11">
              <Brand
                logo={generateImage(generalSiteSettings?.logo)}
                width="132"
                height="56"
                alt={generalSiteSettings?.title}
              />
              <p className="text-xs xl:text-base leading-relaxed xl:leading-relaxed mt-6">
                <span className="line-clamp-4">
                  {generalSiteSettings?.description}
                </span>{" "}
                <Link
                  href="/about-us"
                  className="text-t-800 inline-flex duration-300 hover:text-p-900"
                >
                  Read more...
                </Link>
              </p>
            </div>
            <div className="flex flex-col col-span-2 lg:col-span-1 lg:ml-11">
              <h2 className="text-xs xs:text-sm sm:text-base lg:text-lg text-inherit font-medium mb-3 lg:mb-5">
                {menu.title}
              </h2>
              <ul className="grid gap-y-1.5 lg:gap-y-2">
                {menu.links?.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="text-inherit text-xs xl:text-base duration-300 hover:text-p-900 inline-flex py-0.5"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col col-span-2 lg:col-span-1">
              <h2 className="text-xs xs:text-sm sm:text-base lg:text-lg text-inherit font-medium mb-3 lg:mb-5">
                Accpeted Payment
              </h2>
              <PaymentMethodIcons
                viewBox="0 0 213 71"
                className="max-w-full h-auto"
              />
            </div>
            <div className="flex flex-col col-span-2 lg:col-span-1">
              <h2 className="text-xs xs:text-sm sm:text-base lg:text-lg text-inherit font-medium mb-3 lg:mb-5">
                Contact Us
              </h2>
              <ul className="grid gap-y-1.5 lg:gap-y-2 mb-1.5 lg:mb-2">
                <li className="inline-flex">
                  <Link
                    href={`mailto:${contactSiteSettings?.email}`}
                    className="text-inherit text-xs xl:text-base duration-300 hover:text-p-900 inline-flex py-0.5"
                    title={contactSiteSettings?.email}
                  >
                    {contactSiteSettings?.email}
                  </Link>
                </li>
                <li className="inline-flex">
                  <Link
                    href={`tel:+${contactSiteSettings?.phone}`}
                    className="text-inherit text-xs xl:text-base duration-300 hover:text-p-900 inline-flex py-0.5"
                    title={contactSiteSettings?.phone}
                  >
                    +{contactSiteSettings?.phone}
                  </Link>
                </li>
              </ul>
              <ul className="flex items-center gap-1.5">
                {contactSiteSettings?.facebook && (
                  <li>
                    <Link
                      href={contactSiteSettings?.facebook}
                      className="text-t-700 duration-300 hover:text-p-900 inline-flex items-center justify-center w-6 xs:w-7 lg:w-8 h-6 xs:h-7 lg:h-8 p-0.5"
                    >
                      <FacebookIcon />
                    </Link>
                  </li>
                )}
                {contactSiteSettings?.twitter && (
                  <li>
                    <Link
                      href={contactSiteSettings?.twitter}
                      className="text-t-700 duration-300 hover:text-p-900 inline-flex items-center justify-center w-6 xs:w-7 lg:w-8 h-6 xs:h-7 lg:h-8 p-0.5"
                    >
                      <TwitterIcon />
                    </Link>
                  </li>
                )}
                {contactSiteSettings?.instagram && (
                  <li>
                    <Link
                      href={contactSiteSettings?.instagram}
                      className="text-t-700 duration-300 hover:text-p-900 inline-flex items-center justify-center w-6 xs:w-7 lg:w-8 h-6 xs:h-7 lg:h-8 p-0.5"
                    >
                      <InstagramIcon />
                    </Link>
                  </li>
                )}
                {contactSiteSettings?.youtube && (
                  <li>
                    <Link
                      href={contactSiteSettings?.youtube}
                      className="text-t-700 duration-300 hover:text-p-900 inline-flex items-center justify-center w-6 xs:w-7 lg:w-8 h-6 xs:h-7 lg:h-8 p-0.5"
                    >
                      <YoutubeIcon />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="flex lg:hidden flex-col col-span-2 lg:col-span-1">
              <h2 className="text-xs xs:text-sm sm:text-base lg:text-lg text-inherit font-medium mb-3 lg:mb-5">
                Office Address
              </h2>
              <p className="text-xs xl:text-base leading-relaxed xl:leading-relaxed">
                {contactSiteSettings?.address}
              </p>
            </div>
          </div>
          <hr className="border-[#d7d7d7]/50" />
          <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 lg:gap-12  text-t-600">
            <div className="hidden lg:flex flex-col max-w-xs lg:max-w-[264px] col-span-4 lg:col-span-1 lg:-mr-11">
              <h2 className="text-xs xs:text-sm sm:text-base lg:text-lg text-inherit font-medium mb-3 lg:mb-5">
                Office Address
              </h2>
              <p className="text-xs xl:text-base leading-relaxed xl:leading-relaxed">
                {contactSiteSettings?.address}
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left col-span-2 sm:col-span-1 lg:ml-11">
              <h2 className="text-xs xs:text-sm sm:text-base lg:text-lg text-inherit font-medium mb-3 lg:mb-5">
                Authorised by
              </h2>
              <ul className="flex items-center sm:ml-8">
                <li className="inline-flex">
                  <span className="duration-300 hover:opacity-75 inline-flex py-0.5">
                    <IataLogo
                      viewBox="0 0 52 40"
                      className="w-10 h-auto lg:w-14"
                    />
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left col-span-2 sm:col-span-1">
              <h2 className="text-xs xs:text-sm sm:text-base lg:text-lg text-inherit font-medium mb-3 lg:mb-5">
                Member of
              </h2>
              <ul className="flex items-center gap-x-2.5 lg:gap-x-4">
                <li className="inline-flex">
                  <span className="duration-300 hover:opacity-75 inline-flex py-0.5">
                    <AtabLogo
                      viewBox="0 0 97 26"
                      className="w-auto h-[1.125rem] lg:h-[1.625rem]"
                    />
                  </span>
                </li>
                <li className="inline-flex">
                  <span className="duration-300 hover:opacity-75 inline-flex py-0.5">
                    <ToabLogo
                      viewBox="0 0 62 26"
                      className="w-auto h-[1.125rem] lg:h-[1.625rem]"
                    />
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left col-span-4 sm:col-span-1">
              <h2 className="text-xs xs:text-sm sm:text-base lg:text-lg text-inherit font-medium mb-3 lg:mb-5">
                Accredited Member
              </h2>
              <ul className="flex items-center gap-x-2.5 lg:gap-x-4">
                <li className="inline-flex">
                  <span className="duration-300 hover:opacity-75 inline-flex py-0.5">
                    <BasisLogo
                      viewBox="0 0 105 43"
                      className="w-auto h-10 lg:h-12"
                    />
                  </span>
                </li>
                <li className="inline-flex">
                  <span className="duration-300 hover:opacity-75 inline-flex py-0.5">
                    <EcabLogo
                      viewBox="0 0 53 31"
                      className="w-auto h-6 lg:h-10"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-[#d7d7d7]/50" />
          <Copyright />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
