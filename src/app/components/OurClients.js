"use client"

import Image from "next/image";
import styles from '@/app/styles/ourClients.module.css';

const OurClients = () => {
  return (
    <div>
      <h2 className={styles.heading}>Our Clients</h2>
      <div className={styles.grid}>
        <div className={styles.item}>
          <Image src="/img01rb.png" alt="Image 1" width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img02.jpg" alt="Image 2"width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img03rb.png" alt="Image 3"width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img04rb.png" alt="Image 4"width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img05rb.png" alt="Image 5"width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img06rb.png" alt="Image 5"width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img09rb.png" alt="Image 1" width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img11rb.png" alt="Image 2"width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img08rb.jpg" alt="Image 3"width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img12rb.png" alt="Image 4"width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img20.jpg" alt="Image 5"width={500} height={500}/>
        </div>
        <div className={styles.item}>
          <Image src="/img21.jpg" alt="Image 5"width={500} height={500}/>
        </div>
       
      </div>
    </div>
  );
};

export default OurClients;
