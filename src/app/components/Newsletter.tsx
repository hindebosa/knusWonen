import NewsletterImage from "../assets/images/newsletter.png";
import Blob from "../assets/images/orangeBlob.svg";
import Image from "next/image";
import Button from "./Button";

const Newsletter = () => {
  const customGradient =
    "bg-gradient-to-r from-[#FF6B38] to-[#FFD201] hover:from-[#aed06f] hover:to-[#2faad3]";

  return (
    <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto mt-10 px-4 md:px-0">
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
        <div className="flex justify-center items-center p-2">
          <div className="relative w-full w-full min-w-[270px] max-w-[500px] aspect-square">
            <div
              className="absolute inset-0  transform 
                     translate-x-[70%] translate-y-[40%] 
                     sm:translate-x-[80%] sm:translate-y-[61%] 
                     md:translate-x-[80%] md:translate-y-[61%] 
                     z-0"
            >
              <Image
                src={Blob}
                alt="blob"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative z-10 w-full h-full">
              <Image
                src={NewsletterImage}
                alt="Sample image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
