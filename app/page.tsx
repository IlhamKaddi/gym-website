
import ScrollingBanner from "./compenents/Banner";
import HeroSection from "./compenents/Hero";

export default function Home() {
  return (
    <div className=" dark:bg-black">
    <HeroSection/>
    <ScrollingBanner/>
    </div>
  );
}
