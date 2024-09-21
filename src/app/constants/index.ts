import { StaticImageData } from "next/image";
import Phone from "../assets/images/phone.png";
import Thermometer from "../assets/images/themostat.svg";
import PowerStation from "../assets/images/powerstation.png";

type CardDetails = {
  image: StaticImageData;
  alt: string;
  heading: string;
  paragraph: string;
  date: string;
};

const cardDetails: CardDetails[] = [
  {
    image: Phone,
    alt: "Phone",
    date: "5 MAART 2024",
    heading: "Telefoonstoring",
    paragraph: "Update: Telefoonstoring verholpen",
  },
  {
    image: Thermometer,
    alt: "thermometer",
    date: "17 februari 2024",
    heading: "Energiebesparing - Wat doet KnusWonen?",
    paragraph: "KnusWonen werkt hard aan het energiezuiniger maken van ...",
  },
  {
    image: PowerStation,
    alt: "powerstation",
    date: "5 MAART 2024",
    heading: "Energietoeslag: Heeft u er recht op?",
    paragraph: "Steeds meer mensen hebben moeite om hun energierekening te ...",
  },
];

export { cardDetails };
