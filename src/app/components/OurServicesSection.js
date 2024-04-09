"use client";

import styles from "@/app/styles/OurServices.module.css";
import Link from "next/link";
import { FaMobileAlt, FaDesktop } from "react-icons/fa";
import { IoCloudDoneOutline } from "react-icons/io5";

const ServicesSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.services}>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaMobileAlt className={styles.icon} />
          </div>
          <h3>App Development</h3>
          <p>
            We are one of the best mobile development company that provides
            customers with the best Android, iOS, Hybrid, and Flutter mobile
            development solutions.
          </p>
          <Link href="https://cynoteck.com/mobile-application-development/" passHref>
          <button className={styles.learnMoreButton}>Learn More</button>
          </Link>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaDesktop className={styles.icon} />
          </div>
          <h3>Web Development</h3>
          <p>
            We offers a wide array of web development services to augment,
            develop, manage, and better maintain your web material at a
            reasonable cost.
          </p>
          <Link href="https://cynoteck.com/web-application-development/" passHref>
              <button className={styles.learnMoreButton}>Learn More</button>
          </Link>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <IoCloudDoneOutline className={styles.icon} />
          </div>
          <h3>Salseforce</h3>
          <p>
            Teaming with an experienced Salesforce development agency like ours
            can help you unlock the full potential of Salesforce.
          </p>
          <Link href="https://chat.openai.com/c/4ac90cde-43f9-47b4-91b1-7be98f2e455b" passHref>
          <button className={styles.learnMoreButton}>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
