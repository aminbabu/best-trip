"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Menu from "@/components/layouts/Menu";
import NavbarCta from "@/components/layouts/NavbarCta";
import { useEffect, useState } from "react";
import Brand from "@/components/global/Brand";

const NavSheet = () => {
  const [open, setOpen] = useState(false);

  // Close the sheet when the user presses the Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  // Close the sheet when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="border border-border p-1 rounded-sm z-50 lg:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="flex lg:block flex-col">
        <SheetHeader className="text-left">
          <Brand
            logo="/images/brand-logo.png"
            width="108"
            height="46"
            alt="Best Trip"
          />
        </SheetHeader>
        <div className="grid gap-y-1.5 flex-1">
          <Menu />
          <NavbarCta />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
