import { cn } from "@/lib/utils";

const SectionHeader = ({ title, description, className }) => {
  return (
    (title || description) && (
      <div
        className={cn(
          "max-w-[800px] mx-auto mb-10 sm:mb-14 lg:mb-20 text-center",
          className
        )}
      >
        {title && (
          <h2 className="text-t-800 text-2xl leading-[1.3] sm:text-[2rem] sm:leading-[1.3] lg:text-[2.5rem] lg:leading-[1.3] font-semibold mb-2.5">
            {title}
          </h2>
        )}
        {description && <p className="text-t-700 text-base">{description}</p>}
      </div>
    )
  );
};

export default SectionHeader;
