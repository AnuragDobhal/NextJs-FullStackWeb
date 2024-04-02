"use client";
import AboutUs from "../components/About";
import React from "react";
import ServiceHero from "../components/ServicesHero";
import OurClients from "../components/OurClients";
import ImageSlider from "../components/ImageSlider";


const images = [
  'about.jpg',
  'banner.jpg',
  'techbg.jpg'
];

function Services() {
  return (
    <div>
      <ImageSlider images={images}/>
      <ServiceHero />
      <AboutUs />
      <OurClients />
    </div>
  );
}

export default Services;
