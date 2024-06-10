"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navbar";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <ul>
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className={cn(
              "flex items-center gap-x-3 p-4 lg:px-6 lg:py-4 text-base text-t-700 duration-300 ",
              pathname === link.href
                ? "bg-primary text-white"
                : "hover:bg-p-300 hover:text-primary"
            )}
          >
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
