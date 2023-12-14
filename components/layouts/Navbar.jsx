import Brand from "../ui/Brand";
import Container from "./Container";
import Menu from "./Menu";
import NavbarCta from "./NavbarCta";
import NavSheet from "./NavSheet";

const Navbar = () => {
  return (
    <nav>
      <Container className="flex items-center gap-4 justify-between py-6">
        <Brand
          logo="/images/brand-logo.png"
          width="108"
          height="46"
          alt="Best Trip"
        />
        <div className="hidden lg:block">
          <Menu />
        </div>
        <div className="hidden lg:block">
          <NavbarCta />
        </div>
        <NavSheet />
      </Container>
    </nav>
  );
};

export default Navbar;
