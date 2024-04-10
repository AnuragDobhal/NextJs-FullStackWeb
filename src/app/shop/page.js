import Image from 'next/image';
// import ShoppingNav from '../components/shopping/ShoppingNav'
import styles from "@/app/styles/shope.module.css";


async function productList() {
    let data = await fetch("http://localhost:3000/api/products");
    data = await data.json();
    return data;
  }
  
  export default async function productData() {
      let product= await productList();
      console.log(product);

    return(
<div className={styles.container}>
  {product.map((item, index) => (
    <div key={index} className={styles.item}>
      <h2 className={styles.productName}>{item.productName.substring(0, 20)}</h2>
      <h3 className={styles.price}>{item.productPrice}</h3>
      <p className={styles.proDesc}>Description: {item.productDesc.substring(0, 100)}</p>
      <div className={styles.imgContainer}>
        <Image src={item.productImage} alt="Product" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.ProductbuttonContainer}>
        <button className={styles.Productbutton}>Add to Cart</button>
        <button className={styles.Productbutton}>Buy Now</button>
      </div>
    </div>
  ))}
</div>

      
  
    )
  }
  