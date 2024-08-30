import { cn } from "@/lib/utils";
import Container from "../layouts/Container";

const Section = ({ className, children, id }) => {
  return (
    <section id={id}
      className={cn("py-12 sm:py-16 lg:py-20 xl:py-[5.625rem]", className)}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
