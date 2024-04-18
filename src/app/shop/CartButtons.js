import React from "react";
import Link from "next/link";
import styles from "@/app/styles/shope.module.css";

const CartButtons = () => {
  return (
    <div>
      <div className={styles.ProductbuttonContainer}>
        <Link href="/">
          <button className={styles.Productbutton}>Add to cart</button>
        </Link>
        <Link href="/checkout">
          <button className={styles.Productbutton}>Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default CartButtons;
