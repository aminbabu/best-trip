import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Image from "next/image";
import { ArrowIcon, LogoutIcon } from "@/components/icons/svgr";
import Link from "next/link";
import { navLinks } from "@/data/navbar";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import signOutUser from "@/actions/auth/sign-out";

const Profile = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isLogout, setIsLogout] = useState(false);

  const handleLogout = async () => {
    try {
      setIsOpen(!isOpen);

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

  useEffect(() => {
    if (isLogout) {
      location.reload();
    }
  }, [isLogout]);

  return (
    <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <PopoverTrigger className="flex items-center gap-3">
        {user?.avatar ? (
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/" + user?.avatar}
            alt="user-profile"
            height={40}
            width={40}
            className="aspect-square w-10"
          />
        ) : (
          <span className="w-10 aspect-square rounded-full bg-primary/10 text-primary inline-flex items-center justify-center font-semibold">
            {user.name.charAt(0)}
          </span>
        )}
        <ArrowIcon
          className={`${isOpen && "rotate-180"} trasition duration-300`}
        />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="px-0 py-2 border-transparent min-w-[308px]"
      >
        <ul>
          {navLinks?.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-x-3 px-5 py-3 text-base text-t-700 duration-300 ",
                  pathname === item.href
                    ? "bg-primary text-white"
                    : "hover:bg-p-300 hover:text-primary"
                )}
                onClick={() => setIsOpen(!isOpen)}
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              className={
                "flex items-center gap-x-3 px-5 py-3 text-base text-t-700 duration-300 w-full hover:bg-p-300 hover:text-primary"
              }
              onClick={handleLogout}
            >
              <LogoutIcon viewBox="0 0 24 25" className="h-4 w-4" />
              Logout
            </button>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
