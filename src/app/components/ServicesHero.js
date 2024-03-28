"use client";
// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/servicehero.module.css";
const ServiceHero = () => {
  return (
    <main className={styles.wrapper}>
      <h2 className={styles.heading}>Explore</h2>
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
                <h3>Current News</h3>
              </figcaption>
            </figure>
            <p>
            Breaking: Global leaders convene for emergency summit amidst rising tensions.Global markets surge as investors embrace optimism amid economic recovery hopes,Stay informed with our real-time updates on the latest developments worldwide.
            </p>
            <Link className={styles.visit} href="/news">
              View News
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
                <h3>Movie Reviews</h3>
              </figcaption>
            </figure>
            <p>
            From award-winning dramas to blockbuster action movies, we've got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today.
            </p>
            <Link className={styles.visit} href="/movie">
              View Movies
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
            We offers a wide array of Finiancial solution services to augment, develop, manage, and better maintain your business at reasonable cost.
            </p>
            <Link className={styles.visit} href="#">
              View Article
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ServiceHero;
