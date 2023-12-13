import Image from "next/image";
import Link from "next/link";

const Brand = ({ href = "/", logo, width, height, alt, ...props }) => {
  return (
    <Link href={href} {...props}>
      {logo ? (
        <Image src={logo} width={width} height={height} alt={alt} />
      ) : (
        alt || "Brand"
      )}
    </Link>
  );
};

export default Brand;
