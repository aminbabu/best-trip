import Footer from "@/components/layouts/Footer";

const WithFooterLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default WithFooterLayout;
