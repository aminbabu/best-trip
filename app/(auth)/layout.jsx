import Container from "@/components/layouts/Container";
import { Card } from "@/components/ui/card";

const AuthLayout = ({ children }) => {
  return (
    <section className="py-10 bg-[#fbfbfb]">
      <Container>{children}</Container>
    </section>
  );
};

export default AuthLayout;
