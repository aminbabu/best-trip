import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Image from "next/image";
import profileAvatar from "@/public/images/profile/avatar.png";
import { ArrowIcon } from "../icons/svgr";
import Link from "next/link";
import { navLinks } from "@/data/navbar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Popover open={isOpen} onOpenChange={handleOpen}>
      <PopoverTrigger className="flex items-center gap-3">
        <Image
          src={profileAvatar}
          alt="user-profile"
          height={"40px"}
          width={"40px"}
          className="aspect-square w-10"
        ></Image>
        <ArrowIcon
          className={`${isOpen && "rotate-180"} trasition duration-300`}
        />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="px-0 py-2 border-transparent min-w-[308px]"
      >
        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-x-3 px-5 py-3 text-base text-t-700 duration-300 ",
                  pathname === item.href
                    ? "bg-primary text-white"
                    : "hover:bg-p-300 hover:text-primary"
                )}
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
