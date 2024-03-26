
import Herosection from "@/app/components/Herosection";
import ServicesSection from "@/app/components/OurServicesSection";
import OurClients from "@/app/components/OurClients";
//import AboutUs from "@app/components/About"
import AboutUs from "../components/About";

const About = () => {
    return (
        <div>
        <Herosection title={"OUR STORY"} imageUrl ={"/about1.svg"} />
        <ServicesSection/>
        <AboutUs/>
        <OurClients/>
</div>
    );
};

export default About;