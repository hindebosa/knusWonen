import Image from "next/image";
import HeroBackground from "../assets/images/HeroBackground.png";
import Button from "./Button";
import RepairIcon from "../assets/icons/HammerIcon.svg";
import FileIcon from "../assets/icons/file.svg";
import ChatCircleIcon from "../assets/icons/ChatsCircle.svg";

const HeroComponent = () => {
  return (
    <div className="relative h-[80vh] flex items-end">
      <Image
        src={HeroBackground}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="mx-auto ">
        <div className="px-6 mx-auto z-10 relative flex-grow">
          <div className="text-white  text-center sm:text-center lg:text-start xs:text-center">
            <p className="text-white text-2xl text-[24px] mb-4 ">
              Waarmee kunnen we je helpen?
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 z-10 relative pb-8">
          <div className="flex flex-wrap gap-4 justify-center ">
            <Button
              className="text-text-tertiary text-[18px] w-[288px] py-4"
              href="/#"
              icon={RepairIcon}
            >
              Reparatie melden
            </Button>

            <Button
              className=" text-text-tertiary w-[288px] py-4"
              href="/#"
              icon={FileIcon}
            >
              Huur betalen
            </Button>
            <Button
              className=" text-text-tertiary w-[288px] text-[18px] font-bold py-4"
              href="/#"
              icon={ChatCircleIcon}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
