import Image from "next/image";
import Link from "next/link";
import HeroBackground from "../app/assets/images/HeroBackground.svg";

export default function Home() {
  return (
    <div className="relative h-[50vh] flex items-center">
      {/* Background SVG */}
      <Image
        src={HeroBackground}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-white mb-8">
            Discover amazing features and services tailored just for you.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/get-started"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Get Started
            </Link>
            <Link
              href="/learn-more"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
