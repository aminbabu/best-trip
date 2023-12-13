import { cn } from "@/lib/utils";

const Container = ({ className, children }) => {
  return (
    <div className={cn("max-w-[1180px] mx-auto px-5", className)}>
      {children}
    </div>
  );
};

export default Container;
