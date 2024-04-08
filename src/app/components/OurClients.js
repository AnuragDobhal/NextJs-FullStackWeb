"use client"

import Image from "next/image";
import styles from '@/app/styles/ourClients.module.css';

const OurClients = () => {
  return (
    <div>
      <h2 className={styles.heading}>Our Clients</h2>
      <div className={styles.grid}>
        <div className={styles.item}>
          <Image src="/img07.jpg" alt="Image 1" width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img02.jpg" alt="Image 2"width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img03.jpg" alt="Image 3"width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img04.jpg" alt="Image 4"width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img05.jpg" alt="Image 5"width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img06.jpg" alt="Image 6"width={500} height={500}/>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
