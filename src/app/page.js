// import Herosection from "@/app/components/Herosection";
// import Contact from "./contact/page";
// import ServicesSection from "./components/OurServicesSection";
// import OurClients from "./components/OurClients";
// import "./globals.css";
// import ImageSlider from "./components/ImageSlider";

import LoginForm from "./components/LoginForm";

// const images = ["slide1.jpg", "banner.jpg", "techbg.jpg"];

const Page = () => {
  return (
    <>
      {/* <Herosection
        title={"LET'S WATCH MOVIES"}
        imageUrl={"/home.svg"}
        para={
          " From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse ourselection of the latest and greatest movies."
        }
        btnTag={"Explore Movies"}
      />
      <ServicesSection />
      <ImageSlider images={images} />
      <OurClients />
      <Contact /> */}

      <LoginForm/>
    </>
  );
};
export default Page;
