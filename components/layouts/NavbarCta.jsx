import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const NavbarCta = () => {
  return (
    <ul className="flex gap-x-6 items-center">
      <li>
        <Link
          href="/sign-up"
          className="text-sm lg:text-base text-t-800 inline-flex py-2 lg:py-2 duration-300 hover:text-p-900"
        >
          Sign Up
        </Link>
      </li>
      <li>
        <Link
          href="/sign-in"
          className={cn(buttonVariants({ variant: "default" }), "py-2.5 px-9")}
        >
          Sign In
        </Link>
      </li>
    </ul>
  );
};

export default NavbarCta;
