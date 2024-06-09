import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Image from "next/image";
import profileAvatar from "@/public/images/profile/avatar.png";
import { ArrowIcon, CalenderTickIcon, UserProfileIcon } from "../icons/svgr";
import Link from "next/link";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        className="px-0.5 py-2 border-transparent min-w-[308px]"
      >
        <ul>
          <Link href="#">
            <li className="px-5 py-3 text-sm lg:text-base text-t-700 hover:bg-p-900 focus:bg-p-900 hover:text-white focus:text-white rounded-none cursor-pointer capitalize flex items-center gap-3">
              <UserProfileIcon viewBox="0 0 16 18" className="size-5" /> My
              Profile
            </li>
          </Link>{" "}
          <Link href="#">
            <li className="px-5 py-3 text-sm lg:text-base text-t-700 hover:bg-p-900 focus:bg-p-900 hover:text-white focus:text-white rounded-none cursor-pointer capitalize  flex items-center gap-3">
              <CalenderTickIcon viewBox="0 0 22 22" className="size-5" /> My
              Bookings
            </li>
          </Link>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
