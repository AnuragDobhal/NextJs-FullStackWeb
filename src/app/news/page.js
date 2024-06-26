import React from "react";
// import Link from "next/link";
import styles from "@/app/styles/news.module.css";



const News = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = 'https://google-news13.p.rapidapi.com/latest?lr=en-US';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9b3ffc9b1cmsh4e625db5ffa37a5p13deabjsn93a57cb61267',
      'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  console.log("responseData", data);
  const main_data = data.items;
  // console.log(main_data);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.head}>
          News <span> Headlines </span>
        </h2>
        <hr />
        <div className={styles.cardContainer}>
          {data?.items.map((item, index) => (
            <div className={styles.card} key={index}>
              <h2 className={styles.publishedby}>Published by: {item.publisher}</h2>
              <h3 className={styles.title}>Title: {item.title}</h3>
              <a href={item.newsUrl}>
                <h4 className={styles.ref}>
                <span>&#10149;</span> 
                   For reference please click here. . .</h4>
              </a>
              <p className={styles.para}>Description: {item.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News; 