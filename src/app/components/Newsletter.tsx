import NewsletterImage from "../assets/images/newsletter.png";
import Blob from "../assets/images/orangeBlob.svg";
import Image from "next/image";
import Button from "./Button";

const Newsletter = () => {
  const customGradient =
    "bg-gradient-to-r from-[#FF6B38] to-[#FFD201] hover:from-[#aed06f] hover:to-[#2faad3]";

  return (
    <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto mt-10 px-4 md:pr-10  mb-7 md:mb-10 ">
      <div className="md:w-1/2">
        <h1 className="font-overlock text-[34px] text-text-textOrange font-bold">
          Schrijf je in voor onze nieuwsbrief
        </h1>
        <p className="text-[16px] leading-[24px] font-normal font-normalmd:w-[70%] w-[100% ] text-center md:text-left">
          Wil je als eerste op de hoogte zijn van het laatste nieuws over jouw
          woning en buurt? Schrijf je dan in voor de nieuwsbrief van KnusWonen!
          Iedere maand sturen we je een update met belangrijk nieuws, praktische
          tips, en informatie over onderhoudsprojecten en buurtactiviteiten. Of
          je nu wilt weten wanneer er werkzaamheden gepland zijn, of je
          geïnteresseerd bent in nieuwe initiatieven in de wijk, onze
          nieuwsbrief zorgt ervoor dat je niets mist.
        </p>
        <p className="text-[16px] leading-[24px] font-normal mt-10">
          Schrijf je vandaag nog in en blijf verbonden met KnusWonen!
        </p>
        <div className="flex justify-center md:justify-start mx-auto md:mx-0">
          <Button
            href="/get-started"
            gradient={customGradient}
            className=" md:mx-0 my-4 "
          >
            <p className="text-[16px] font-normal text-white w-[131px] text-center ">
              Inschrijven
            </p>
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 relative p-1">
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-4">
          <div className="relative ">
            <div className="absolute -bottom-5 -right-6 sm:-bottom-6 sm:-right-6 md:-bottom-[68px] md:-right-[68px] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
              <Image src={Blob} alt="blob" objectFit="cover" />
            </div>
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg overflow-hidden ">
              <Image src={NewsletterImage} alt="Main image" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
