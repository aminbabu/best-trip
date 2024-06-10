import {
  CalendarCheckIcon,
  CalenderTickIcon,
  CreditCardIcon,
  LockCircleIcon,
  LogoutIcon,
  SecurityLockIcon,
  SignOutIcon,
  UserIcon,
  UserProfileIcon,
} from "@/components/icons/svgr";

export const navLinks = [
  {
    id: 1,
    name: "Profile",
    href: "/profile",
    icon: <UserIcon viewBox="0 0 24 24" className="h-5 w-5" />,
  },
  {
    id: 2,
    name: "My Booking",
    href: "/profile/booking",
    icon: <CalendarCheckIcon viewBox="0 0 24 24" className="h-5 w-5" />,
  },
  {
    id: 3,
    name: "BestTrip wallet",
    href: "/profile/wallet",
    icon: <CreditCardIcon viewBox="0 0 24 24" className="h-5 w-5" />,
  },
  {
    id: 4,
    name: "Change Password",
    href: "/profile/password",
    icon: <SecurityLockIcon viewBox="0 0 24 24" className="h-5 w-5" />,
  },
  {
    id: 5,
    name: "Logout",
    href: "/logout",
    icon: <LogoutIcon viewBox="0 0 24 25" className="h-5 w-5" />,
  },
];

// menu
export const menu = [
  { id: 1, name: "Flight", path: "/flight" },
  { id: 2, name: "Umrah", path: "/umrah" },
  { id: 3, name: "Hotel", path: "/hotel" },
  { id: 4, name: "Visa", path: "/visa" },
];
