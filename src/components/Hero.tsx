import Image from "next/image";
import Link from "next/link";
import HeroBackground from "../app/assets/images/HeroBackground.png";
import Button from "./Button";
import RepairIcon from "../app/assets/icons/HammerIcon.svg";
import FileIcon from "../app/assets/icons/file.svg";
import ChatCircleIcon from "../app/assets/icons/ChatsCircle.svg";

const HeroComponent = () => {
  return (
    <div className="relative h-[65vh] flex items-end">
      <Image
        src={HeroBackground}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="mx-auto ">
        <div className="px-6 mx-auto z-10 relative flex-grow">
          <div className="text-white text-start">
            <p className="text-white text-2xl text-[24px] mb-4">
              Waarmee kunnen we je helpen?
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 z-10 relative pb-8">
          <div className="flex flex-wrap gap-4 justify-center ">
            <Button
              className="text-text-tertiary text-[18px] w-[288px]"
              href="/get-started"
              icon={RepairIcon}
            >
              Reparatie melden
            </Button>

            <Button
              className=" text-text-tertiary w-[288px]"
              href="/get-started"
              icon={FileIcon}
            >
              Huur betalen
            </Button>
            <Button
              className=" text-text-tertiary w-[288px] text-[18px] font-bold"
              href="/contact"
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
