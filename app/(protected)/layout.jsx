import { auth } from "@/auth";
import { redirect } from "next/navigation";

const ProtectedLayout = async ({ children }) => {
  const { user } = (await auth()) || {};

  if (!user?._id) {
    return redirect("/sign-in");
  }

  return children;
};

export default ProtectedLayout;
