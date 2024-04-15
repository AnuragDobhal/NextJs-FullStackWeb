import React from "react";
import Herosection from "@/app/components/Herosection";
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";


const Movie = async ({ searchParams }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const totalData = 177;
  const dataPerPage = 8;
  const totalpages = Math.ceil(totalData / dataPerPage);

  let currentPage = 1;

  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page);
  }

  let offset = (currentPage - 1) * dataPerPage;

  // Fetching data
  const res = await fetch(
    `https://netflix54.p.rapidapi.com/search/?query=stranger&offset=${offset}&limit_titles=${dataPerPage}&limit_suggestions=20&lang=en`,
    options
  );
  const data = await res.json();
  const main_data = data.titles;
  console.log(main_data.jawSummary);
  console.log(main_data);

  // Generating page numbers
  let pageNumbers = [];
  for (let i = currentPage - 3; i <= currentPage + 3; i++) {
    if (i > 0 && i <= totalpages) {
      pageNumbers.push(i);
    }
  }

  return (
    <>
      <Herosection title={"LET'S GET UPDATED"} imageUrl={"/about1.svg"} 
      para={"From breaking news updates to in-depth investigative reports, we've got you covered. Explore our curated selection of the most recent and impactful stories."}
      btnTag={"Explore News"}
      />
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>
            Series <span> & </span> Movie
          </h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
        
        <div
          className={styles.pageNum}
          style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
        >
          {currentPage - 1 >= 1 && (
            <>
              <Link href={`/movie?page=${currentPage - 1}`}>{"<<"}</Link>
            </>
          )}

          {pageNumbers.map((page) => (
            <Link
              key={page}
              href={`/movie?page=${page}`}
              className={page === currentPage ? styles.activeLink : ""}
            >
              {page}
            </Link>
          ))}

          {currentPage + 1 <= totalpages && (
            <>
              <Link href={`/movie?page=${currentPage + 1}`}>{">>"}</Link>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Movie;
