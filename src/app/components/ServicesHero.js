"use client";
// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/servicehero.module.css";
import CenteredTabs from "./tabs";
const ServiceHero = () => {
  return (
    <main className={styles.wrapper}>
      <h2 className={styles.heading}>Unlock Trailblazing Solutions</h2>
      <section className={styles.hero}>
        <h1>Unlock Tailored Solutions</h1>
        <article>
          <p>
          "Unlock unparalleled solutions for your business challenges. Reach out to us today and elevate your business to new heights."
          </p>
          <Link className={styles.visits} href="/news">
            Explore News
          </Link>
        </article>
      </section>
      <section className={styles.breweries} id="breweries">
        <ul>
          <li>
            <figure>
              <Image
                src="/undraw1.png"
                alt="Several hands holding beer glasses"
                width={500}
                height={500}
                className={styles.img}
              />
              <figcaption>
                <h3>Draw & Download</h3>
              </figcaption>
            </figure>
            <p>
            you can effortlessly create and download your personalized signature.
            With our intuitive interface, you can craft a signature that reflects your
            style and personality with ease. Whether you're signing documents, emails, 
            or digital artwork, our platform empowers you to make your mark with confidence.
            </p>
            <Link className={styles.visit} href="/signature">
              Signature
            </Link>
          </li>
          <li>
            <figure>
              <Image
                src="/undraw3.png"
                alt="Several friends doing a toast"
                width={500}
                height={500}
                className={styles.img}
              />
              <figcaption>
                <h3>Salseforce/Consultancy</h3>
              </figcaption>
            </figure>
            <p>
            you can effortlessly create and download your personalized signature.
            With our intuitive interface, you can craft a signature that reflects your
            style and personality with ease. Whether you're signing documents, emails, 
            or digital artwork, our platform empowers you to make your mark with confidence.
            </p>
            <Link className={styles.visit} href="https://cynoteck.com/salesforce-professional-services/" passHref>
              View Article
            </Link>
          </li>
          <li>
            <figure>
              <Image
                src="/undraw4.png"
                alt="Three different glasses of beer"
                width={500}
                height={500}
                className={styles.img}
              />
              <figcaption>
                <h3>Finiance Sloutions</h3>
              </figcaption>
            </figure>
            <p>
            you can effortlessly create and download your personalized signature.
            With our intuitive interface, you can craft a signature that reflects your
            style and personality with ease. Whether you're signing documents, emails, 
            or digital artwork, our platform empowers you to make your mark with confidence.
            </p>
            <Link className={styles.visit} href="https://cynoteck.com/power-platform/" passHref>
              View Article
            </Link>
          </li>
        </ul>
      </section>
      {/* <CenteredTabs/> */}
    </main>
  );
};

export default ServiceHero;
