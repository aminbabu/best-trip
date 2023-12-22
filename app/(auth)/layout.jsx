import Container from "@/components/layouts/Container";
import { Card } from "@/components/ui/card";

const AuthLayout = ({ children }) => {
  return (
    <section className="py-12 lg:py-16 bg-primary-foreground">
      <Container>
        <Card className="max-w-[648px] mx-auto">{children}</Card>
      </Container>
    </section>
  );
};

export default AuthLayout;
