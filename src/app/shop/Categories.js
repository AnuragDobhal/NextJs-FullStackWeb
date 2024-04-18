import React from "react";
import styles from "@/app/styles/shope.module.css";

const Categories = () => {
  return (
    <div>
      <h2 className={styles.categoryHeading}>
        <span>Categories</span>
      </h2>
      <div className={styles.categoryButtons}>
        <button className={styles.categoryButton}>Men</button>
        <button className={styles.categoryButton}>Women</button>
        <button className={styles.categoryButton}>Kids</button>
        <button className={styles.categoryButton}>Grocery</button>
        <button className={styles.categoryButton}>Gadgets</button>
      </div>
    </div>
  );
};

export default Categories;
