"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { menu, navLinks } from "@/data/navbar";
import { usePathname } from "next/navigation";

const Menu = ({ className, isNavbarSticky, user }) => {
  const pathname = usePathname();

  return (
    <div className={className}>
      <ul className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-8 xl:gap-x-10">
        {menu.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className={cn(
                "text-sm lg:text-base text-t-700 inline-flex py-1 lg:px-2 duration-300 hover:text-p-900",
                {
                  "text-t-900": isNavbarSticky,
                  "text-primary": pathname === item.path,
                }
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {user?._id ? (
        <>
          <Separator className="lg:hidden my-3" />
          <ul className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-8 xl:gap-x-10">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm lg:text-base text-t-700 inline-flex py-1 lg:px-2 duration-300 hover:text-p-900",
                    {
                      "text-t-900": isNavbarSticky,
                      "text-primary": pathname === item.path,
                    }
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default Menu;
