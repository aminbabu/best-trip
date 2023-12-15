import { cn } from "@/lib/utils";
import Container from "../layouts/Container";

const SectionComponent = ({ className, children }) => {
  return (
    <section className={cn("py-12 sm:py-16 lg:py-20 xl:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
};

export default SectionComponent;
