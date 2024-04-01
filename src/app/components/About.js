"use client"

import Image from "next/image";
// import AboutImage from "../../../public/about";
import styles from '@/app/styles/about.module.css'
import AboutImg from '../../../public/about.jpg';
const AboutUs = () => {
  return (
  <div>
    <div className={styles.aboutSection}>
      <div className={styles.content}>
        <h2>About Us</h2>
        <p>
          Welcome to Wikitech.io, your premier destination for all things
          technical! Whether you're a seasoned developer or a newcomer to the
          world of coding, our Instagram page is your one-stop shop for
          invaluable insights, practical tips, and engaging tutorials. From
          mastering programming languages to staying updated on the latest tech
          trends, we're here to empower you on your journey towards
          technological proficiency. At Wikitech.io, we believe in the power of
          community and collaboration. Join our vibrant online community as we
          explore the fascinating realms of software development, delve into the
          intricacies of coding, and inspire each other to reach new heights of
          innovation. Together, let's unlock the endless possibilities of
          technology and embark on a journey of continuous learning and growth.we believe in the power of
          community and collaboration.
          Welcome to Wikitech.io – where curiosity meets expertise!
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={AboutImg} alt="About Image" width={500} height={500} />
      </div>
    </div>
    {/* <Footer/> */}
    </div>
  
  );
};
export default AboutUs;
