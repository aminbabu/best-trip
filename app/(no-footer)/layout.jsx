import { auth } from "@/auth";

const NoFooterLayout = async ({ children }) => {
  const { user } = (await auth()) || {};

  if (!user?._id) {
    return redirect("/sign-in");
  }

  return <div>{children}</div>;
};

export default NoFooterLayout;
