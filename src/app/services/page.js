"use client";
import AboutUs from "../components/About";
import React from "react";
import ServiceHero from "../components/ServicesHero";
import OurClients from "../components/OurClients";
import ImageSlider from "../components/ImageSlider";
// import TypingComponent from "../signature/page";


const images = [
  'about.jpg',
  'banner.jpg',
  'slide1.jpg'
];

function Services() {
  return (
    <div>
      <ImageSlider images={images}/>
      <ServiceHero />
      <AboutUs />
      {/* <TypingComponent/> */}
      <OurClients />
    </div>
  );
}

export default Services;
