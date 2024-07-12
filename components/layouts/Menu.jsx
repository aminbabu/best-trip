'use client';


import { cn } from "@/lib/utils";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { menu, navLinks, profileDropDownItems } from "@/data/navbar";
import { useState } from "react";

const Menu = ({ isNavbarSticky }) => {
  const [activeUrl, setActionUrl] = useState('');

  const handleClick = (url) => {
    setActionUrl(url);
  }

  console.log(activeUrl);

  return (
    <div>
      <ul className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-8 xl:gap-x-10">
        {menu.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className={cn(
                "text-sm lg:text-base text-t-700 inline-flex py-1 lg:px-2 duration-300 hover:text-p-900",
                {
                  "text-t-900": isNavbarSticky,
                  'text-primary': activeUrl === item.path
                }
              )}
              onClick={() => handleClick(item.path)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Separator className="lg:hidden my-3" />
      <ul className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-8 xl:gap-x-10">
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="text-sm lg:text-base text-t-700 inline-flex py-1 lg:px-2 duration-300 hover:text-p-900 lg:hidden"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
