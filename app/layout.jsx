import "@/styles/globals.css";
import "react-phone-input-2/lib/style.css";
import Navbar from "@/components/layouts/Navbar";
import { Poppins as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";

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
          "min-h-screen flex flex-col overflow-x-hidden bg-white antialiased",
          fontSans.className
        )}
      >
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
