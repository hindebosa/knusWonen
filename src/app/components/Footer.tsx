import Image from "next/image";
import FacebookIcon from "@/app//assets/icons/facebook.svg";
import LinkedinIcon from "@/app/assets/icons/linkedIn.svg";
const Footer = () => {
  return (
    <div className="bg-section-sectionGrey">
      <div className="max-w-7xl mx-auto px-4">
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl py-20">
          <div>
            <p className=" text-[20px] text-text-textGrey font-overlock font-bold">
              Bel of mail ons
            </p>
            <p className="font-normal text-[16px] text-text-textGrey mt-2">
              012 - 345 67 89
            </p>
            <p>klantenservice@knuswonen.nu</p>
          </div>
          <div>
            <p className="text-[20px] text-text-textGrey font-overlock font-bold">
              Openingstijden
            </p>
            <p className="font-normal text-[16px] text-text-textGrey mt-2">
              Maandag t/m donderdag van 8:30 tot <br></br>16:30 uur.
            </p>
            <p> Vrijdag van 8:30 tot 12:00 uur</p>
          </div>
          <div>
            <p className=" text-[20px] text-text-textGrey font-overlock font-bold">
              Kom langs op afspraak
            </p>

            <p className="font-normal text-[16px] text-text-textGrey mt-2">
              1234 AB Dorpstad
            </p>
          </div>
          <div>
            <p className=" text-[20px] text-text-textGrey font-overlock font-bold">
              Volg ons op onze sociale kanalen
            </p>
            <div className=" flex mt-3">
              <Image src={FacebookIcon} alt="location" width={26} height={30} />
              <Image src={LinkedinIcon} alt="location" width={26} height={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
