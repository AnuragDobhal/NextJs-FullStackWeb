import Image from "next/image";
import ShoppingComponent from "../components/shopping/ShoppingComponents";
import styles from "@/app/styles/shope.module.css";
import Link from "next/link";

async function productList() {
  let data = await fetch("http://localhost:3000/api/products");
  data = await data.json();
  return data;
}

export default async function productData() {
  let product = await productList();
  console.log(product);

  return (
    <div>
      <ShoppingComponent />
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
      <div className={styles.container}>
        {product.map((item, index) => (
          <div key={index} className={styles.item}>
            <h2 className={styles.productName}>
              {item.productName.substring(0, 20)}
            </h2>
            <h3 className={styles.price}>{item.productPrice}</h3>
            <p className={styles.proDesc}>
              Description: {item.productDesc.substring(0, 100)}
            </p>
            <div className={styles.imgContainer}>
              <Image
                src={item.productImage}
                alt="Product"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.ProductbuttonContainer}>
              <Link href="/">
                <button className={styles.Productbutton}>Add to cart</button>
              </Link>
              <Link href="/checkout">
                <button className={styles.Productbutton}>Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
