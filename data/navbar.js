import {
  CalendarCheckIcon,
  CalenderTickIcon,
  CreditCardIcon,
  FlightTokenIcon,
  LockCircleIcon,
  LockSolidIcon,
  LogoutIcon,
  MoneyCheckIcon,
  SecurityLockIcon,
  SignOutIcon,
  TicketSolidIcon,
  UserIcon,
  UserProfileIcon,
} from "@/components/icons/svgr";

export const navLinks = [
  {
    id: 1,
    name: "Profile",
    href: "/profile",
    icon: <UserIcon viewBox="0 0 24 24" className="h-4 w-4" />,
  },
  {
    id: 2,
    name: "My Booking",
    href: "/profile/booking",
    icon: <CalendarCheckIcon viewBox="0 0 24 24" className="h-4 w-4" />,
  },
  {
    id: 3,
    name: "Best Pay",
    href: "/profile/wallet",
    icon: <CreditCardIcon viewBox="0 0 24 24" className="h-4 w-4" />,
  },
  {
    id: 4,
    name: "Part. Payment Bookings",
    href: "/profile/partial-payment-bookings",
    icon: (
      <MoneyCheckIcon
        viewBox="0 0 576 512"
        fill="currentColor"
        className="h-4 w-4"
      />
    ),
  },
  {
    id: 5,
    name: "General Ledger",
    href: "/profile/general-ledger",
    icon: (
      <TicketSolidIcon
        viewBox="0 0 576 512"
        fill="currentColor"
        className="h-4 w-4"
      />
    ),
  },
  {
    id: 6,
    name: "Change Password",
    href: "/profile/password",
    icon: (
      <LockSolidIcon
        viewBox="0 0 448 512"
        fill="currentColor"
        className="h-4 w-4"
      />
    ),
  },
  {
    id: 7,
    name: "Logout",
    href: "/logout",
    icon: <LogoutIcon viewBox="0 0 24 25" className="h-4 w-4" />,
  },
];

// menu
export const menu = [
  { id: 1, name: "Flight", path: "/flight" },
  { id: 2, name: "Umrah", path: "/umrah" },
  { id: 3, name: "Hotel", path: "/hotel" },
  { id: 4, name: "Visa", path: "/visa" },
];
