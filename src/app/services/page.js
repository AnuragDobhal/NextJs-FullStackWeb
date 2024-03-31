"use client";
import AboutUs from "../components/About";
import React from "react";
import ServiceHero from "../components/ServicesHero";
import OurClients from "../components/OurClients";


function Services() {
  return (
    <div>
      <ServiceHero />
      <AboutUs />
      <OurClients />
    </div>
  );
}

export default Services;
