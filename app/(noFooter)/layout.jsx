import "@/styles/globals.css";
import Navbar from "@/components/layouts/Navbar";

import { Poppins as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Footer from "@/components/layouts/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Best Trip",
  description:
    "Your all-in-one travel companion on GitHub! Seamlessly book flights, hotels, and Umrah packages.",
};

const NoFooterLayout = ({ children }) => {
  return (
    <div className="pb-[350px]">
      <Navbar />
      {children}
    </div>
  );
};

export default NoFooterLayout;
