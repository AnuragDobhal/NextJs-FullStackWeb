import Herosection from "@/app/components/Herosection";
// import BasicSpeedDial from "@/app/components/SpeedDial";
import Contact from "./contact/page";
import ServicesSection from "./components/OurServicesSection";
import OurClients from "./components/OurClients";
import './globals.css'
import ImageSlider from "./components/ImageSlider";

// import Slider from "./components/GalleryFiles";
// import { SliderData } from './components/SliderData';

const images = [
  'slide1.jpg',
  'banner.jpg',
  'techbg.jpg'
];

const Page = () => {
  return (
    <>
      <Herosection
        title={"LET'S WATCH MOVIES"}
        imageUrl={"/home.svg"}
        />
      <ServicesSection/>
      <ImageSlider images={images}/>
      <OurClients/>
      <Contact/>
      {/* <BasicSpeedDial/> */}
    </>
  );
};
export default Page;