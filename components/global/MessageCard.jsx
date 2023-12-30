import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MessageCard = ({
  icon,
  title,
  description,
  children,
  buttonText,
  href,
  className,
}) => {
  return (
    <Card
      className={cn(
        "max-w-3xl mx-auto border-transparent text-t-700 leading-relaxed",
        className
      )}
    >
      <CardContent className="text-center p-4 sm:p-6 md:p-8 lg:p-10">
        {icon && <div className="mb-8">{icon}</div>}
        {title && (
          <h4 className="text-t-800 text-2xl lg:text-[2rem] font-semibold mb-4">
            {title}
          </h4>
        )}
        {description && (
          <p className="text-base lg:text-lg mb-4">{description}</p>
        )}
        <div className="mb-6">{children}</div>
        <Button className="w-72 sm:w-80" asChild>
          <Link href={href || "/"}>{buttonText || "Home"}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default MessageCard;
