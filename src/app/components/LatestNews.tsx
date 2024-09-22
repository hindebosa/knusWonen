import Link from "next/link";
import Card from "./Card";
import Image from "next/image";

import ForwardArrow from "../assets/icons/forwardArrow.svg";
import { cardDetails } from "@/app/constants";

const LatestNews = () => {
  return (
    <div className="bg-section-primary">
      <div className="max-w-5xl mx-auto px-4">
        <div>
          <p className="text-text-textPurple text-[32px] font-overlock font-bold text-left pt-5 ">
            Laatste nieuws
          </p>
        </div>
        <div className="container mx-auto px-1 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {cardDetails.map((card) => (
              <Card
                date={card.date}
                key={card.id}
                className="flex flex-col"
                image={card.image}
                alt={card.alt}
                heading={card.heading}
                paragraph={card.paragraph}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-end pb-10">
          <div className="flex gap-1">
            <Link href="#" className="">
              <h1 className="text-text-textPurple text-[14px]  font-medium">
                Bekijk alle nieuwsberichten
              </h1>
            </Link>
            <Image src={ForwardArrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
