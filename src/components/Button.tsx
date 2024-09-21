import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: StaticImageData;
  className?: string;
  gradient?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  icon,
  className,
  gradient,
}) => {
  const baseClasses =
    "inline-flex  xs:items-center xs:justify-center p-3  text-xl font-medium rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  const gradientClass = gradient || "";
  const combinedClasses = `${baseClasses} ${gradientClass} ${className || ""}`;

  return (
    <Link href={href} className={combinedClasses}>
      {icon && (
        <span className="mr-2 w-5 h-5 mt-[2px]">
          <Image src={icon} alt="" width={20} height={20} />
        </span>
      )}
      {children}
    </Link>
  );
};

export default Button;
