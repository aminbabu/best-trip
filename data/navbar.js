import {
  CalenderTickIcon,
  CreditCardIcon,
  LockCircleIcon,
  SignOutIcon,
  UserProfileIcon,
} from "@/components/icons/svgr";

export let profileDropDownItems = [
  {
    id: 1,
    icon: <UserProfileIcon viewBox="0 0 16 18" className="size-5" />,
    name: "My Profile",
    path: "/profile",
  },
  {
    id: 2,
    icon: <CalenderTickIcon viewBox="0 0 22 22" className="size-5" />,
    name: "My Bookings",
    path: "/bookings",
  },
  {
    id: 3,
    icon: <CreditCardIcon viewBox="0 0 24 24" className="size-5" />,
    name: "Payment History",
    path: "/payment-history",
  },
  {
    id: 4,
    icon: <LockCircleIcon viewBox="0 0 24 24" className="size-5" />,
    name: "Change Password",
    path: "/change-password",
  },
  {
    id: 5,
    icon: <SignOutIcon viewBox="0 0 20 21" className="size-5" />,
    name: "Sign Out",
    path: "/signout",
  },
];

// menu
export const menu = [
  { id: 1, name: "Flight", path: "/flight" },
  { id: 2, name: "Umrah", path: "/umrah" },
  { id: 3, name: "Hotel", path: "/hotel" },
  { id: 4, name: "Visa", path: "/visa" },
];
