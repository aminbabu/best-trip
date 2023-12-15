import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Brand = ({
  href = "/",
  logo,
  width,
  height,
  alt,
  className,
  ...props
}) => {
  return (
    <Link
      href={href}
      {...props}
      className={cn("inline-flex items-center", className)}
    >
      {logo ? (
        <Image src={logo} width={width} height={height} alt={alt} />
      ) : (
        alt || "Brand"
      )}
    </Link>
  );
};

export default Brand;
