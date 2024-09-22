import ClusterHoues from "../assets/images/cluster.png";
import Blob from "../assets/images/blob.svg";
import Image from "next/image";
import { StyledText } from "./StyledText";

const Newsletter = () => {
  return (
    <div className="flex flex-row justify-between max-w-7xl mx-auto mt-10 h-[45vh]">
      <div className=" w-1/2">
        <StyledText>Schrijf je in voor onze nieuwsbrief</StyledText>
        <StyledText>
          Wil je als eerste op de hoogte zijn van het laatste nieuws over jouw
          woning en buurt? Schrijf je dan in voor de nieuwsbrief van KnusWonen!
          Iedere maand sturen we je een update met belangrijk nieuws, praktische
          tips, en informatie over onderhoudsprojecten en buurtactiviteiten. Of
          je nu wilt weten wanneer er werkzaamheden gepland zijn, of je
          geïnteresseerd bent in nieuwe initiatieven in de wijk, onze
          nieuwsbrief zorgt ervoor dat je niets mist. Schrijf je vandaag nog in
          en blijf verbonden met KnusWonen!
        </StyledText>
      </div>
      <div className=" w-1/2 relative">
        <Image
          src={Blob}
          alt="blob"
          style={{ width: "15%", position: "relative", zIndex: 5 }}
        />
        <Image
          src={ClusterHoues}
          alt="We Image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,

            opacity: 0.9,
            zIndex: 4,
          }}
        />
      </div>
    </div>
  );
};

export default Newsletter;
