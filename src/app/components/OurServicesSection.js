"use client"

import styles from "@/app/styles/OurServices.module.css";
import { FaMobileAlt, FaDesktop, FaPalette } from 'react-icons/fa';
import { IoCloudDoneOutline } from "react-icons/io5";

const ServicesSection = () => {
    return (
        <div className={styles.container}>
          <h2 className={styles.heading}>Our Services</h2>
          <div className={styles.services}>
            <div className={styles.card}>
              <FaMobileAlt className={styles.icon} />
              <h3>Software Development</h3>
              <p>We are one of the best mobile  and web development company that provides customers with the best Android, iOS, Hybrid, and Flutter mobile development solutions.</p>
              <button className={styles.learnMoreButton}>Learn More</button>
            </div>
            <div className={styles.card}>
              <FaDesktop className={styles.icon} />
              <h3>Finiance Solutions</h3>
              <p>We offers a wide array of Finiancial solution services to augment, develop, manage, and better maintain your business at reasonable cost.</p>
              <button className={styles.learnMoreButton}>Learn More</button>
            </div>
            <div className={styles.card}>
              <IoCloudDoneOutline className={styles.icon} />
              <h3>Salseforce/Consultancy</h3>
              <p>Teaming with an experienced Salesforce development agency like ours can help you unlock the full potential of Salesforce.</p>
              <button className={styles.learnMoreButton}>Learn More</button>
            </div>
          </div>
        </div>
      );
    };
    
    export default ServicesSection;