import React from "react";
import Image, { StaticImageData } from "next/image";
import ForwardArrow from "../assets/icons/forwardArrow.svg";
import Link from "next/link";

interface CardProps {
  image: StaticImageData;
  alt: string;
  heading: string;
  paragraph: string;
  date: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  alt,
  heading,
  paragraph,
  date,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-48 sm:h-56 md:h-64">
        <Image src={image} alt={alt} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h2 className="text-text-dateGrey text-[11px] font-semiBold">
          {date.toUpperCase()}
        </h2>
        <h2 className="text-[20px] font-bold mb-2 text-text-textPurple font-overlock">
          {heading}
        </h2>
        <p className="text-text-textPurple text-[14px] font-overlock font-normal w-[280px]">
          {paragraph}
        </p>
        <div className="flex justify-end">
          <div className="flex items-center gap-1">
            <Link href="#" className="">
              <h1 className="text-text-textPurple text-[14px]  font-normal">
                Less meer
              </h1>
            </Link>
            <Image src={ForwardArrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
