import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NavbarCta = ({ onClose }) => {
  return (
    <ul className="flex flex-col lg:flex-row gap-3 lg:gap-x-6 lg:items-center">
      <li className="grid">
        <Link
          href="/sign-up"
          className="text-sm lg:text-base text-t-800 inline-flex justify-center py-2 lg:py-2 duration-300 hover:text-p-900"
          onClick={onClose}
        >
          Sign Up
        </Link>
      </li>
      <li className="flex-1 lg:flex-auto grid">
        <Link
          href="/sign-in"
          className={cn(
            buttonVariants({ variant: "default" }),
            "py-2 px-6 lg:px-9 text-sm rounded-lg"
          )}
          onClick={onClose}
        >
          Sign In
        </Link>
      </li>
    </ul>
  );
};

export default NavbarCta;
