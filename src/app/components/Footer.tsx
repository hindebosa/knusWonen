import Image from "next/image";
import FacebookIcon from "../app/assets/icons/facebook.svg";
import LinkedinIcon from "../app/assets/icons/linkedin.svg";
const Footer = () => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <p>Bel of mail ons</p>
        <p>012 - 345 67 89</p>
        <p>klantenservice@knuswonen.nu</p>
      </div>
      <div>
        <p>Openingstijden</p>
        <p>Maandag t/m donderdag van 8:30 tot 16:30 uur.</p>
        <p> Vrijdag van 8:30 tot 12:00 uur</p>
      </div>
      <div>
        <p>Kom langs op afspraak</p>

        <p>1234 AB Dorpstad</p>
      </div>
      <div>
        <p>Volg ons op onze sociale kanalen</p>
        <Image src={FacebookIcon} alt="location" width={20} height={20} />
        <Image src={LinkedinIcon} alt="location" width={20} height={20} />
      </div>
    </div>
  );
};

export default Footer;
