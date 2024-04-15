"use client";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const MovieCard = (curElem) => {
  const { id, type, title, synopsis, episodeCount } = curElem.jawSummary;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={curElem.jawSummary.backgroundImage.url}
            alt={title}
            width={260}
            height={200}
          />
        </div>
        <div className={styles.card_data}>
          <h2>{title.substring(0, 18)}</h2>
          <h3>Episodes: {episodeCount}</h3>
          <p>{`${synopsis.substring(0, 66)} ...`}</p>

          <Link href={`/movie/${id}`}>
            <FaPlayCircle className={styles.icon} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
