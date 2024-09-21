import Footer from "@/components/Footer";
import HeroComponent from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import Newsletter from "@/components/Newsletter";
import Privacy from "@/components/Privacy";
import WeComponent from "@/components/Wecomponent";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <WeComponent />
      <LatestNews />
      {/* <Newsletter />
      <Footer />
      <Privacy /> */}
    </>
  );
}
