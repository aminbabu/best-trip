import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NavbarCta = () => {
  return (
    <ul className="flex gap-x-3 lg:gap-x-6 items-center mt-auto lg:mt-0">
      <li className="hidden lg:block">
        <Link
          href="/sign-up"
          className="text-sm lg:text-base text-t-800 inline-flex py-2 lg:py-2 duration-300 hover:text-p-900"
        >
          Sign Up
        </Link>
      </li>
      <li className="flex-1 lg:flex-auto grid lg:block">
        <Link
          href="/sign-in"
          className={cn(
            buttonVariants({ variant: "default" }),
            "py-2 px-6 lg:px-9 text-sm rounded-lg"
          )}
        >
          Sign In
        </Link>
      </li>
    </ul>
  );
};

export default NavbarCta;
