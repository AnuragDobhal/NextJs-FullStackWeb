import styles from "@/app/styles/news.module.css";


async function productlistserver() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  let data = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2024-02-29&sortBy=publishedAt&apiKey=6339e4a4e79e469498666f9fba226734"
  );
  data = await data.json();
  return data.articles;
}
export default async function ProductServer() {
  let articles = await productlistserver();
  //   console.log(articles);
  return (
    <div className={styles.container}>
         <h2 className={styles.head}>
            News <span> Headlines </span> 
          </h2>
      <hr />
      <div className={styles.cardContainer}>
        {articles.map((item, index) => (
          <div className={styles.card} key={index}>
            <h2 className={styles.author}>Author: {item.author}</h2>
            <h3 className={styles.title}>Title: {item.title}</h3>
            <h4 className={styles.title}>Published at: {item.publishedAt}</h4>
            <p className={styles.para}>Description: {item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}