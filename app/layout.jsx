import "@/styles/globals.css";
import Navbar from "@/components/layouts/Navbar";

import { Poppins as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Best Trip",
  description:
    "Your all-in-one travel companion on GitHub! Seamlessly book flights, hotels, and Umrah packages.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen flex flex-col overflow-hidden bg-white antialiased",
          fontSans.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
