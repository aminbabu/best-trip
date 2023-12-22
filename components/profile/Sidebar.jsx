"use client";

import Link from "next/link";
import {
  CalenderCheckIcon,
  CreditCardIcon,
  LogoutIcon,
  SecurityLockIcon,
  UserIcon,
} from "@/components/icons/svgr";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Profile", href: "/profile", icon: <UserIcon /> },
  { name: "My Booking", href: "/profile/booking", icon: <CalenderCheckIcon /> },
  {
    name: "Payment History",
    href: "/profile/payment",
    icon: <CreditCardIcon />,
  },
  {
    name: "Change Password",
    href: "/profile/password",
    icon: <SecurityLockIcon />,
  },
  { name: "Logout", href: "/logout", icon: <LogoutIcon /> },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <ul>
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className={cn(
              "flex items-center gap-x-3 p-4 lg:p-6 text-base lg:text-lg text-t-700 leading-relaxed duration-300 ",
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
