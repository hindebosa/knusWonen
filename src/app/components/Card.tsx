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
    <div className="bg-white shadow-lg rounded-[14px] overflow-hidden flex flex-col h-full">
      <div className="relative">
        <Image src={image} alt={alt} objectFit="cover" className="w-full" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div>
          <h2 className="text-text-dateGrey text-[11px] font-semiBold">
            {date.toUpperCase()}
          </h2>
          <h2 className="text-[20px] font-bold mb-2 text-text-textPurple font-overlock">
            {heading}
          </h2>
          <p className="text-text-textPurple text-[14px] font-overlock font-normal">
            {paragraph}
          </p>
        </div>
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-end gap-1">
            <Link href="#" className="">
              <h1 className="text-text-textPurple text-[14px] font-normal">
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
