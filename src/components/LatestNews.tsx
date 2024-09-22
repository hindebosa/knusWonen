import Card from "./Card";
import { cardDetails } from "@/app/constants";

const LatestNews = () => {
  return (
    <div className="bg-section-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className=" mt-[10px]">
          <p className="text-text-textPurple text-[32px] font-overlock font-bold text-left pt-10 pb-5">
            Laatste nieuws
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {cardDetails.map((card) => (
            <Card
              key={card.id}
              className="flex flex-col h-[388px] w-[288px]"
              image={card.image}
              alt={card.alt}
              heading={card.heading}
              paragraph={card.paragraph}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
