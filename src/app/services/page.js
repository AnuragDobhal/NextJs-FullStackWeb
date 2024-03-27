import Herosection from "@/app/components/Herosection";
// import OurClients from "@/app/components/OurClients";
// //import AboutUs from "@app/components/About"
// // import AboutUs from "../components/About";

import React from 'react'
import ServiceHero from "../components/ServicesHero";

function Services() {
  return (
    <div>
  {/* <Herosection title={"OUR Services"} imageUrl ={"/about.svg"} /> */}

<ServiceHero/>
        {/* <AboutUs/>
        <OurClients/> */}
    </div>
  )
}

export default Services