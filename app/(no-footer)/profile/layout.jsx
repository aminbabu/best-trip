import { auth } from "@/auth";
import Container from "@/components/layouts/Container";
import Sidebar from "@/components/profile/Sidebar";
import { redirect } from "next/navigation";

const ProfileLayout = async ({ children }) => {
  const { user } = (await auth()) || {};

  if (!user?._id) {
    redirect("/sign-in");
  }

  return (
    <section className="py-12 lg:py-16 bg-primary-foreground min-h-[calc(100vh-94px)]">
      <Container className="flex flex-col lg:flex-row lg:items-start gap-8">
        <div className="lg:sticky lg:top-36 lg:w-80 bg-white">
          <Sidebar />
        </div>
        <div className="flex-1 min-w-0">{children}</div>
      </Container>
    </section>
  );
};

export default ProfileLayout;
