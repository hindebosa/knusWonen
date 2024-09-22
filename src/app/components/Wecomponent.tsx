import ClusterHoues from "../assets/images/cluster.png";
import Blob from "../assets/images/blob.svg";
import Image from "next/image";
import Button from "./Button";

const WeComponent = () => {
  const customGradient =
    "bg-gradient-to-r from-[#BFE27D] to-[#35BCE7] hover:from-[#aed06f] hover:to-[#2faad3]";

  return (
    <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto mt-10 px-4 md:px-0">
      <div className=" md:w-1/2 relative p-1">
        <div className="flex justify-center items-center p-2">
          <div className="relative w-full w-full min-w-[270px] max-w-[500px] aspect-square">
            <div
              className="absolute inset-0  transform 
                     translate-x-[-12%] translate-y-[-8%] 
                     sm:translate-x-[-11%] sm:translate-y-[-8%] 
                     md:translate-x-[-10%] md:translate-y-[-8%] 
                     z-0"
            >
              <Image src={Blob} alt="blob" objectFit="cover" />
            </div>
            <div className="relative z-10 w-full h-[89%]">
              <Image
                src={ClusterHoues}
                alt="Sample image"
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "20px" }}
                className="rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" md:w-1/2">
        <p className="font-overlock text-text-textBlue text-[32px] font-bold text-center md:text-left mb-7">
          We verbeteren onze woningen
        </p>
        <p className="text-[16px] font-normal leading-[24px] text-center md:text-left">
          Bij KnusWonen zetten we ons in om onze woningen <br />
          energiezuiniger en duurzamer te maken. We verbeteren <br />
          de isolatie met dubbelglas en plaatsen moderne cv-ketels en <br />
          zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de
          <br />
          energiekosten, en verminderen we de CO2-uitstoot. Ons doel <br />
          is dat al onze huurders kunnen genieten van een warme, veilige en
          toekomstbestendige woning.
        </p>
        <p className="text-[16px] font-normal leading-[24px] md:w-[70%] w-[100% ] mt-5 text-center md:text-left">
          Wilt u meer weten over onze energiebesparende maatregelen?
        </p>
        <div className="flex justify-center md:justify-start mx-auto md:mx-0">
          <Button
            href="/get-started"
            gradient={customGradient}
            className=" md:mx-0 my-5 mt-5"
          >
            <p className="text-[16px] font-normal text-white w-[131px] text-center ">
              Lees meer
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WeComponent;
