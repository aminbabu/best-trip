"use client";

import { cn } from "@/lib/utils";
import Brand from "../global/Brand";
import Container from "./Container";
import Menu from "./Menu";
import NavbarCta from "./NavbarCta";
import NavSheet from "./NavSheet";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Handle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-40 bg-white/50 backdrop-blur-sm duration-300",
        {
          "border-b border-b-[#eaeaea]": isSticky,
        }
      )}
    >
      <Container className="flex items-center gap-4 justify-between py-6 duration-300">
        <Brand
          logo="/images/brand-logo.png"
          width="108"
          height="46"
          alt="Best Trip"
        />
        <div className="hidden lg:block">
          <Menu isNavbarSticky={isSticky} />
        </div>
        <div className="hidden lg:block">
          <NavbarCta />
        </div>
        <NavSheet />
      </Container>
    </nav>
  );
};

export default Navbar;
