"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DetailsTab = ({ id }) => {
  const pathname = usePathname();

  const navItems = [
    {
      id: 1,
      name: "Package Details",
      href: `/umrah/${id}/package-details`,
    },
    {
      id: 2,
      name: "Day Wise Itineary",
      href: `/umrah/${id}/itinerary`,
    },
    {
      id: 3,
      name: "About Umrah",
      href: `/umrah/${id}/about`,
    },
    {
      id: 4,
      name: "Terms & Conditions",
      href: `/umrah/${id}/terms-conditions`,
    },
  ];

  return (
    <nav>
      <ul className="bg-p-300 px-4 sm:px-6 lg:px-8 overflow-auto flex items-center justify-between gap-x-10">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <Link
              href={`${item.href}`}
              className={cn("text-base text-t-800 py-3", {
                "text-primary": item.href === pathname,
              })}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DetailsTab;
