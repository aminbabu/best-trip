import Container from "@/components/layouts/Container";

const AuthLayout = ({ children }) => {
  return (
    <section className="bg-[#fbfbfb] min-h-[calc(100vh-94px)]">
      <Container>{children}</Container>
    </section>
  );
};

export default AuthLayout;
