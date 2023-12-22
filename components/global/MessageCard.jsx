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
    <Card className={cn("", className)}>
      <CardContent className="text-center px-6 py-8 lg:px-12 lg:py-14">
        {icon && <div className="mb-8">{icon}</div>}
        {title && (
          <h4 className="text-t-800 text-2xl lg:text-[2rem] mb-4">{title}</h4>
        )}
        {description && (
          <p className="text-base lg:text-lg mb-4">{description}</p>
        )}
        <div className="mb-6">{children}</div>
        <Button className="w-80" asChild>
          <Link href={href || "/"}>{buttonText || "Home"}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default MessageCard;
