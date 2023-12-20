import { cn } from "@/lib/utils";

const ScrollArea = ({ className, children }) => {
  return (
    <div
      className={cn("overflow-y-auto overflow-x-hidden max-h-72", className)}
    >
      {children}
    </div>
  );
};

export default ScrollArea;
