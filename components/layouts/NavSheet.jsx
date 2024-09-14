"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Menu from "@/components/layouts/Menu";
import NavbarCta from "@/components/layouts/NavbarCta";
import { useEffect, useState } from "react";
import Brand from "@/components/global/Brand";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Image from "next/image";
import profileAvatar from "@/public/images/profile/avatar.png";
import signOutUser from "@/actions/auth/sign-out";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { generateImage } from "@/lib/utils";

const NavSheet = ({ generalSiteSettings, user }) => {
  const [open, setOpen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await signOutUser();

      if (response?.error) {
        throw new Error(response.error);
      }

      setIsLogout(true);
    } catch (error) {
      await withReactContent(Swal).fire({
        title: "Error",
        text: error?.message || "An error occurred. Please try again",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#ff0f2f",
        allowOutsideClick: false,
      });
    }
  };

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

  useEffect(() => {
    if (isLogout) {
      location.reload();
    }
  }, [isLogout]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="border border-border p-1 rounded-sm z-50 lg:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="flex flex-col p-0">
        <SheetHeader className="text-left p-4">
          <Brand
            logo={generateImage(generalSiteSettings?.logo)}
            width="108"
            height="46"
            alt={generalSiteSettings?.title}
          />
        </SheetHeader>
        <Menu className="flex-1 overflow-y-auto p-4" user={user} />
        <SheetFooter className="mt-auto bg-p-300/50 p-4 grid sm:justify-stretch">
          {user?._id ? (
            <div className="flex items-center justify-between gap-3">
              {user?.avatar ? (
                <Image
                  src={user.avatar}
                  alt="user-profile"
                  height={"40px"}
                  width={"40px"}
                  className="aspect-square w-10 rounded-full"
                />
              ) : (
                <span className="w-10 aspect-square rounded-full bg-primary/10 text-primary inline-flex items-center justify-center font-semibold">
                  {user.name.charAt(0)}
                </span>
              )}
              <p className="text-sm mr-auto line-clamp-1">{user?.name}</p>
              <Button
                className="py-1.5 px-3 text-sm font-medium"
                onClick={handleLogout}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <NavbarCta onClose={() => setOpen(false)} />
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
