"use client"

import styles from '@/app/styles/ourClients.module.css';

const OurClients = () => {
  return (
    <div>
      <h2 className={styles.heading}>Our Clients</h2>
      <div className={styles.grid}>
        <div className={styles.item}>
          <img src="/img07.jpg" alt="Image 1" />
        </div>
        <div className={styles.item}>
          <img src="/img02.jpg" alt="Image 2" />
        </div>
        <div className={styles.item}>
          <img src="/img03.jpg" alt="Image 3" />
        </div>
        <div className={styles.item}>
          <img src="/img04.jpg" alt="Image 4" />
        </div>
        <div className={styles.item}>
          <img src="/img05.jpg" alt="Image 5" />
        </div>
        <div className={styles.item}>
          <img src="/img06.jpg" alt="Image 6" />
        </div>
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default OurClients;
