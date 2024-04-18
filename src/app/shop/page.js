import Image from "next/image";
import styles from "@/app/styles/shope.module.css";
import CartButtons from "./CartButtons";
import ImageSlider from "../components/ImageSlider";
import Categories from "./Categories";

const images = ["ban4.png", "ban5.png", "ban7.png", "slide07.jpg"];

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
      <ImageSlider images={images} />  
      <Categories />
      <div className={styles.container}>
        {product.map((item, index) => (
          <div key={index} className={styles.item}>
            <h2 className={styles.productName}>
              {item.productName.substring(0, 20)}
            </h2>
            <h2 className={styles.rating}>{item.ratings}</h2>
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
            <CartButtons />
          </div>
        ))}
      </div>
    </div>
  );
}
