import Container from "@/components/layouts/Container";
import Sidebar from "@/components/profile/Sidebar";

const ProfileLayout = ({ children }) => {
  return (
    <section className="py-12 lg:py-16 bg-primary-foreground">
      <Container className="flex items-start">
        <div className="sticky top-16">
          <Sidebar />
        </div>
        <div className="flex-1">{children}</div>
      </Container>
    </section>
  );
};

export default ProfileLayout;
