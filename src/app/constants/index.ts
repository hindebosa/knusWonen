import { StaticImageData } from "next/image";
import Phone from "../assets/images/phone.png";
import Thermometer from "../assets/images/themostat.png";
import PowerStation from "../assets/images/powerStation.png";

type CardDetails = {
  id: number;
  image: StaticImageData;
  alt: string;
  heading: string;
  paragraph: string;
  date: string;
};

const cardDetails: CardDetails[] = [
  {
    id: 1,
    image: Phone,
    alt: "Phone",
    date: "5 MAART 2024",
    heading: "Telefoonstoring",
    paragraph: "Update: Telefoonstoring verholpen",
  },
  {
    id: 2,
    image: Thermometer,
    alt: "thermometer",
    date: "17 februari 2024",
    heading: "Energiebesparing - Wat doet KnusWonen?",
    paragraph: "KnusWonen werkt hard aan het energiezuiniger maken van ...",
  },
  {
    id: 3,
    image: PowerStation,
    alt: "powerstation",
    date: "5 MAART 2024",
    heading: "Energietoeslag: Heeft u er recht op?",
    paragraph: "Steeds meer mensen hebben moeite om hun energierekening te ...",
  },
];

const navLinks = [
  {
    id: 1,
    name: "Ik Huur",
    href: "/#",
  },
  {
    id: 2,
    name: "Ik zoek",
    href: "/#",
  },
  {
    id: 3,
    name: "Over ons",
    href: "/#",
  },
  {
    id: 4,
    name: "Projecten",
    href: "/#",
  },
];

export { cardDetails, navLinks };
