import { auth } from "@/auth";
import Container from "@/components/layouts/Container";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }) => {
  const { user } = (await auth()) || {};

  console.log(user);

  if (user?._id) {
    return redirect("/profile");
  }

  return (
    <section className="bg-[#fbfbfb] min-h-[calc(100vh-94px)]">
      <Container>{children}</Container>
    </section>
  );
};

export default AuthLayout;
