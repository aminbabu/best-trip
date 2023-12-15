import Link from "next/link";
import Brand from "../ui/Brand";
import Container from "./Container";
import Copyright from "./Copyright";
import Newsletter from "./Newsletter";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../icons/svgr";

const menu = {
  title: "About Us",
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

const Footer = () => {
  return (
    <footer className="bg-secondary mt-auto">
      <Container className="grid gap-10">
        <Newsletter />
        <div className="grid grid-cols-4 gap-12 text-t-600">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs lg:max-w-[264px] mx-auto lg:mx-0 col-span-4 lg:col-span-1 lg:-mr-11">
            <Brand
              logo="/images/brand-logo.png"
              width="132"
              height="56"
              alt="Best Trip"
            />
            <p className="text-base lg:text-lg mt-6">
              <span className="text-p-900">Best Trip</span> Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem{" "}
              <Link
                href="#"
                className="text-t-800 inline-flex duration-300 hover:text-p-900"
              >
                Read more...
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs mx-auto lg:mx-0 col-span-4 lg:col-span-1 lg:ml-11">
            <h2 className="text-base lg:text-lg text-inherit font-medium mb-5">
              {menu.title}
            </h2>
            <ul className="grid gap-2">
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
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs mx-auto lg:mx-0 col-span-4 lg:col-span-1">
            <h2 className="text-base lg:text-lg text-inherit font-medium mb-5">
              Accpeted Payment
            </h2>
            <Image
              src="/images/footer/payment-methods.png"
              width="212"
              height="70"
              alt="Payment Methods"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs mx-auto lg:mx-0 col-span-4 lg:col-span-1">
            <h2 className="text-base lg:text-lg text-inherit font-medium mb-5">
              {socialMedia.title}
            </h2>
            <ul className="grid gap-3 mb-3">
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
                    className="text-t-800 duration-300 hover:text-p-900 inline-flex items-center justify-center w-8 h-8 p-1.5"
                    title={item.name}
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="border-[#d7d7d7]/50" />
        <div className="grid grid-cols-4 gap-12 text-t-600">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs lg:max-w-[264px] mx-auto lg:mx-0 col-span-4 lg:col-span-1 lg:-mr-11">
            <h2 className="text-base lg:text-lg text-inherit font-medium mb-5">
              Office Address
            </h2>
            <p className="text-base lg:text-lg">
              Rajlazmi Complex, Lift 6 <br />
              Rajlaxmi, Uttara Sector 03 <br />
              Dhaka, Bangladesh.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs mx-auto lg:mx-0 col-span-4 lg:col-span-1 lg:ml-11">
            <h2 className="text-base lg:text-lg text-inherit font-medium mb-5">
              Authorised by
            </h2>
            <ul className="flex items-center gap-4">
              <li className="inline-flex">
                <Link
                  href="#"
                  className="duration-300 hover:opacity-75 inline-flex py-0.5"
                >
                  <Image
                    src="/images/footer/iata.svg"
                    width="51"
                    height="40"
                    alt="IATA"
                    className="object-contain h-8 w-auto"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs mx-auto lg:mx-0 col-span-4 lg:col-span-1">
            <h2 className="text-base lg:text-lg text-inherit font-medium mb-5">
              Member of
            </h2>
            <ul className="flex items-center gap-4">
              <li className="inline-flex">
                <Link
                  href="#"
                  className="duration-300 hover:opacity-75 inline-flex py-0.5"
                >
                  <Image
                    src="/images/footer/atab.svg"
                    width="175"
                    height="26"
                    alt="ATAB"
                    className="object-contain h-8 w-auto"
                  />
                </Link>
              </li>
              <li className="inline-flex">
                <Link
                  href="#"
                  className="duration-300 hover:opacity-75 inline-flex py-0.5"
                >
                  <Image
                    src="/images/footer/toab.svg"
                    width="61"
                    height="26"
                    alt="ToaB"
                    className="object-contain h-8 w-auto"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs mx-auto lg:mx-0 col-span-4 lg:col-span-1">
            <h2 className="text-base lg:text-lg text-inherit font-medium mb-5">
              Accredited Member
            </h2>
            <ul className="flex items-center gap-4">
              <li className="inline-flex">
                <Link
                  href="#"
                  className="duration-300 hover:opacity-75 inline-flex py-0.5"
                >
                  <Image
                    src="/images/footer/basis.svg"
                    width="104"
                    height="43"
                    alt="BASIS"
                    className="object-contain h-8 w-auto"
                  />
                </Link>
              </li>
              <li className="inline-flex">
                <Link
                  href="#"
                  className="duration-300 hover:opacity-75 inline-flex py-0.5"
                >
                  <Image
                    src="/images/footer/ecab.svg"
                    width="52"
                    height="43"
                    alt="eCAB"
                    className="object-contain h-8 w-auto"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-[#d7d7d7]/50" />
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
