
import About from "./compenents/About";
import About2 from "./compenents/About2";
import ScrollingBanner from "./compenents/Banner";
import Blog from "./compenents/Blog";
import ChooseUs from "./compenents/ChooseUs";
import Coach from "./compenents/Coatch";
import { Footer } from "./compenents/Footer";
import GymPass from "./compenents/GymPass";
import HeroSection from "./compenents/Hero";



export default function Home() {
  return (
    <div className=" bg-black ">
    <HeroSection/>
    <ScrollingBanner/>
    <ChooseUs/>
    <About/>
    <About2/>
    <Coach/>
    <GymPass/>
    <Blog/>
    <Footer/>
    </div>
  );
}
