import HeroComponent from "@/app/components/Hero";
import LatestNews from "@/app/components/LatestNews";

import WeComponent from "@/app/components/Wecomponent";
import Newsletter from "@/app/components/Newsletter";
import Footer from "@/app/components/Footer";
import Privacy from "@/app/components/Privacy";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <WeComponent />
      <LatestNews />
      <Newsletter />
      <Footer />
      <Privacy />
    </>
  );
}
