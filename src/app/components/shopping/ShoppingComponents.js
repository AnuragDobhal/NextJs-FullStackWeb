import React from 'react'
// import ImageSlider from '../ImageSlider'
// import styles from "@/app/styles/shope.module.css";
import ImageSlider from '../ImageSlider';


const images = [
  'ban4.png',
  'ban5.png',
  'ban7.png',
  'slide07.jpg'
 
];

const ShoppingComponent = () => {
  return (
    <div>
       <ImageSlider images={images}/>
   {/* <main className={styles.wrapper}>
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
    </main> */}
  </div>
  )
}

export default ShoppingComponent