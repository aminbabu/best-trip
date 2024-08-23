import { SessionProvider } from "next-auth/react";

const NoFooterLayout = async ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NoFooterLayout;
