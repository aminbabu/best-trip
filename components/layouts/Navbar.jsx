import Brand from "../ui/Brand";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav>
      <Container className="flex items-center gap-4 justify-between">
        <Brand
          logo="/images/brand-logo.png"
          width="108"
          height="46"
          alt="Best Trip"
        />
        
      </Container>
    </nav>
  );
};

export default Navbar;
