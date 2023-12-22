import Container from "@/components/layouts/Container";
import Sidebar from "@/components/profile/Sidebar";

const ProfileLayout = ({ children }) => {
  return (
    <section className="py-12 lg:py-16 bg-primary-foreground">
      <Container className="flex flex-col lg:flex-row lg:items-start gap-8">
        <div className="lg:sticky lg:top-20 lg:w-80">
          <Sidebar />
        </div>
        <div className="flex-1">{children}</div>
      </Container>
    </section>
  );
};

export default ProfileLayout;
