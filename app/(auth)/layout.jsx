import Container from "@/components/layouts/Container";
import { Card } from "@/components/ui/card";

const AuthLayout = ({ children }) => {
  return (
    <section className="py-10 bg-[#fbfbfb] h-[calc(100vh-94px)]">
      <Container>{children}</Container>
    </section>
  );
};

export default AuthLayout;
