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
import { cn } from "@/lib/utils";

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

const socialMedia = {
  title: "Contact Us",
  email: "besttrip@gmail.com",
  phone: "+08870856 8965",
  links: [
    {
      name: "Facebook",
      path: "/",
      icon: <FacebookIcon />,
    },
    {
      name: "Twitter",
      path: "/",
      icon: <TwitterIcon />,
    },
    {
      name: "Instagram",
      path: "/",
      icon: <InstagramIcon />,
    },
    {
      name: "YouTube",
      path: "/",
      icon: <YoutubeIcon />,
    },
  ],
};

const noNewsletterLinks = ["/search/visa", "/search/umrah"];

const Footer = ({ className }) => {
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
                logo="/images/brand-logo.svg"
                width="132"
                height="56"
                alt="Best Trip"
              />
              <p className="xl:text-base leading-relaxed xl:leading-relaxed mt-6">
                <span className="text-p-900">Best Trip</span> Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem{" "}
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
                {menu.links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="text-inherit duration-300 hover:text-p-900 inline-flex py-0.5"
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
                {socialMedia.title}
              </h2>
              <ul className="grid gap-y-1.5 lg:gap-y-2 mb-1.5 lg:mb-2">
                <li className="inline-flex">
                  <Link
                    href={`mailto:${socialMedia.email}`}
                    className="text-inherit duration-300 hover:text-p-900 inline-flex py-0.5"
                    title={socialMedia.email}
                  >
                    {socialMedia.email}
                  </Link>
                </li>
                <li className="inline-flex">
                  <Link
                    href={`tel:${socialMedia.phone}`}
                    className="text-inherit duration-300 hover:text-p-900 inline-flex py-0.5"
                    title={socialMedia.phone}
                  >
                    {socialMedia.phone}
                  </Link>
                </li>
              </ul>
              <ul className="flex items-center gap-1.5">
                {socialMedia.links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="text-t-700 duration-300 hover:text-p-900 inline-flex items-center justify-center w-6 xs:w-7 lg:w-8 h-6 xs:h-7 lg:h-8 p-0.5"
                      title={item.name}
                    >
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex lg:hidden flex-col col-span-2 lg:col-span-1">
              <h2 className="text-xs xs:text-sm sm:text-base lg:text-lg text-inherit font-medium mb-3 lg:mb-5">
                Office Address
              </h2>
              <p className="xl:text-base leading-relaxed xl:leading-relaxed">
                Rajlazmi Complex, Lift 6 Rajlaxmi, Uttara Sector 03 Dhaka,
                Bangladesh.
              </p>
            </div>
          </div>
          <hr className="border-[#d7d7d7]/50" />
          <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 lg:gap-12  text-t-600">
            <div className="hidden lg:flex flex-col max-w-xs lg:max-w-[264px] col-span-4 lg:col-span-1 lg:-mr-11">
              <h2 className="text-xs xs:text-sm sm:text-base lg:text-lg text-inherit font-medium mb-3 lg:mb-5">
                Office Address
              </h2>
              <p className="xl:text-base leading-relaxed xl:leading-relaxed">
                Rajlazmi Complex, Lift 6 Rajlaxmi, Uttara Sector 03 Dhaka,
                Bangladesh.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left col-span-2 sm:col-span-1 lg:ml-11">
              <h2 className="text-xs xs:text-sm sm:text-base lg:text-lg text-inherit font-medium mb-3 lg:mb-5">
                Authorised by
              </h2>
              <ul className="flex items-center sm:ml-8">
                <li className="inline-flex">
                  <Link
                    href="#"
                    className="duration-300 hover:opacity-75 inline-flex py-0.5"
                  >
                    <IataLogo
                      viewBox="0 0 52 40"
                      className="w-10 h-auto lg:w-14"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left col-span-2 sm:col-span-1">
              <h2 className="text-xs xs:text-sm sm:text-base lg:text-lg text-inherit font-medium mb-3 lg:mb-5">
                Member of
              </h2>
              <ul className="flex items-center gap-x-2.5 lg:gap-x-4">
                <li className="inline-flex">
                  <Link
                    href="#"
                    className="duration-300 hover:opacity-75 inline-flex py-0.5"
                  >
                    <AtabLogo
                      viewBox="0 0 97 26"
                      className="w-auto h-[1.125rem] lg:h-[1.625rem]"
                    />
                  </Link>
                </li>
                <li className="inline-flex">
                  <Link
                    href="#"
                    className="duration-300 hover:opacity-75 inline-flex py-0.5"
                  >
                    <ToabLogo
                      viewBox="0 0 62 26"
                      className="w-auto h-[1.125rem] lg:h-[1.625rem]"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left col-span-4 sm:col-span-1">
              <h2 className="text-xs xs:text-sm sm:text-base lg:text-lg text-inherit font-medium mb-3 lg:mb-5">
                Accredited Member
              </h2>
              <ul className="flex items-center gap-x-2.5 lg:gap-x-4">
                <li className="inline-flex">
                  <Link
                    href="#"
                    className="duration-300 hover:opacity-75 inline-flex py-0.5"
                  >
                    <BasisLogo
                      viewBox="0 0 105 43"
                      className="w-auto h-10 lg:h-12"
                    />
                  </Link>
                </li>
                <li className="inline-flex">
                  <Link
                    href="#"
                    className="duration-300 hover:opacity-75 inline-flex py-0.5"
                  >
                    <EcabLogo
                      viewBox="0 0 53 31"
                      className="w-auto h-6 lg:h-10"
                    />
                  </Link>
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
