import { cn } from "@/lib/utils";

const Container = ({ className, children }) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-5 lg:px-12 xl:px-16", className)}>
      {children}
    </div>
  );
};

export default Container;
