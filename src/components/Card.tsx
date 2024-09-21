import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  alt: string;
  heading: string;
  paragraph: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  alt,
  heading,
  paragraph,
  className,
}) => {
  const baseClasses =
    "bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full max-w-[288px] sm:max-w-[calc(50%-0.5rem)] lg:max-w-[calc(33.333%-0.667rem)]";
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return (
    <div className={combinedClasses}>
      <div className="relative h-48 w-full">
        <Image src={image} alt={alt} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{heading}</h2>
        <p className="text-gray-600">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
