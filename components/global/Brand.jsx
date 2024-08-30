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
      className={cn(
        "inline-flex items-center text-2xl text-black font-semibold italic",
        className
      )}
    >
      {logo ? (
        <Image src={logo} width={width} height={height} alt={alt} />
      ) : (
        alt || "Best Trip"
      )}
    </Link>
  );
};

export default Brand;
