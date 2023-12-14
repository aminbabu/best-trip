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
import Menu from "./Menu";
import NavbarCta from "./NavbarCta";
import { useEffect, useState } from "react";

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
      <SheetTrigger className="border border-border p-1 rounded-sm lg:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-6 text-left">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Explore our website</SheetDescription>
        </SheetHeader>
        <div className="grid gap-y-1.5">
          <Menu />
          <NavbarCta />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
