"use client";

import { cn } from "@/lib/utils";
import Brand from "@/components/global/Brand";
import Container from "@/components/layouts/Container";
import Menu from "@/components/layouts/Menu";
import NavbarCta from "@/components/layouts/NavbarCta";
import NavSheet from "@/components/layouts/NavSheet";
import { useEffect, useState } from "react";
import Profile from "./Profile";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { data, status } = useSession();
  const { user } = data || {};

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
      <Container className="flex items-center gap-4 justify-between py-3 lg:py-6 duration-300">
        <Brand
          logo="/images/brand-logo.svg"
          width="108"
          height="46"
          alt="Best Trip"
        />
        <div className="hidden lg:block">
          <Menu isNavbarSticky={isSticky} />
        </div>
        <div className="hidden lg:block">
          {!user?._id ? <NavbarCta /> : <Profile user={user} />}
        </div>
        <NavSheet />
      </Container>
    </nav>
  );
};

export default Navbar;
