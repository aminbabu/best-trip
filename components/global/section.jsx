import { cn } from "@/lib/utils";
import Container from "../layouts/Container";

const Section = ({ title, description, className, children }) => {
  return (
    <section className={cn("py-12 sm:py-16 lg:py-20 xl:py-24", className)}>
      <Container>
        {(title || description) && (
          <div className="max-w-[800px] mx-auto mb-10 sm:mb-14 lg:mb-20">
            {title && (
              <h2 className="text-t-800 text-3xl lg:text-[2.5rem] font-semibold mb-2.5">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-t-700 text-base">{description}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;
