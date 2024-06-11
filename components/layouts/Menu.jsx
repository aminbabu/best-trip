import { cn } from "@/lib/utils";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { menu, navLinks, profileDropDownItems } from "@/data/navbar";

const Menu = ({ isNavbarSticky }) => {
  return (
    <>
      <ul className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-8 xl:gap-x-10">
        {menu.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className={cn(
                "text-sm lg:text-base text-t-700 inline-flex py-1 lg:px-2 duration-300 hover:text-p-900",
                {
                  "text-t-900": isNavbarSticky,
                }
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Separator className="lg:hidden" />
      <ul>
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
    </>
  );
};

export default Menu;
