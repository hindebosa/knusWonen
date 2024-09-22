// import Footer from "@/components/Footer";
import HeroComponent from "@/app/components/Hero";
import LatestNews from "@/app/components/LatestNews";
// import Newsletter from "@/components/Newsletter";
// import Privacy from "@/components/Privacy";
import WeComponent from "@/app/components/Wecomponent";

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
