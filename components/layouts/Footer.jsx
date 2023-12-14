import Container from "./Container";
import Copyright from "./Copyright";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-auto">
      <Container className="grid gap-10">
        <Newsletter />
        <hr className="border-[#d7d7d7]/50" />
        <hr className="border-[#d7d7d7]/50" />
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
