"use client";
// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/servicehero.module.css";
import CenteredTabs from "./tabs";
const ServiceHero = () => {
  return (
    <main className={styles.wrapper}>
      <h2 className={styles.heading}>Unlock Solutions</h2>
      <section className={styles.hero}>
        <h1>Unlock Tailored Solutions</h1>
        <article>
          <p>
          "Unlock unparalleled solutions for your business challenges. Reach out to us today and elevate your business to new heights."
          </p>
          <Link className={styles.visits} href="/movie">
            Explore Movies
          </Link>
        </article>
      </section>
      <section className={styles.breweries} id="breweries">
        <ul>
          <li>
            <figure>
              <Image
                src="/about.jpg"
                alt="Several hands holding beer glasses"
                width={500}
                height={500}
              />
              <figcaption>
                <h3>Software Development</h3>
              </figcaption>
            </figure>
            <p>
              Made in the interiors of collapsing stars star stuff harvesting
              star light venture billions upon billions Drake Equation brain is
              the seed of intelligence?
            </p>
            <Link className={styles.visit} href="#">
              View Article
            </Link>
          </li>
          <li>
            <figure>
              <Image
                src="/banner.jpg"
                alt="Several friends doing a toast"
                width={500}
                height={500}
              />
              <figcaption>
                <h3>Salseforce/Consultancy</h3>
              </figcaption>
            </figure>
            <p>
              Another world citizens of distant epochs from which we spring
              descended from astronomers Orion's sword shores of the cosmic
              ocean.
            </p>
            <Link className={styles.visit} href="#">
              View Article
            </Link>
          </li>
          <li>
            <figure>
              <Image
                src="/about.jpg"
                alt="Three different glasses of beer"
                width={500}
                height={500}
              />
              <figcaption>
                <h3>Finiance Sloutions</h3>
              </figcaption>
            </figure>
            <p>
              Galaxies the ash of stellar alchemy prime number science
              inconspicuous motes of rock and gas brain is the seed of
              intelligence.
            </p>
            <Link className={styles.visit} href="#">
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
