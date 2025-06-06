import Navbar from "@/components/layouts/Navbar";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Poppins as FontSans } from "next/font/google";
import "react-phone-input-2/lib/style.css";
import { getGeneralSiteSettings } from "@/actions/site-settings/get-site-settings";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Best Trip",
  description:
    "Your all-in-one travel companion on GitHub! Seamlessly book flights, hotels, and Umrah packages.",
};

const RootLayout = async ({ children }) => {
  let generalSiteSettings = [];

  try {
    generalSiteSettings = await getGeneralSiteSettings();
  } catch (error) {
  }
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen flex flex-col overflow-x-hidden bg-white antialiased",
          fontSans.className
        )}
      >
        <SessionProvider>
          <Navbar generalSiteSettings={generalSiteSettings} />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
