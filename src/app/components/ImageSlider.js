"use client"
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "@/app/styles/ImageSlider.module.css";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex]); // Restart interval

  const renderIndicators = () => {
    return images.map((_, index) => (
      <span
        key={index}
        className={`${styles.indicator} ${
          index === currentIndex ? styles.active : ""
        }`}
        onClick={() => setCurrentIndex(index)}
      />
    ));
  };

  return (
    <div className={styles.slider}>
      <button onClick={prevSlide} className={styles.prevBtn}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className={styles.slidesContainer}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={`/${image}`}
            alt="slide"
            className={`${styles.slideimg} ${
              index === currentIndex ? styles.active : ""
            }`}
            width={500}
            height={500}
          />
        ))}
        <div className={styles.indicators}>{renderIndicators()}</div>
      </div>
      <button onClick={nextSlide} className={styles.nextBtn}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      
    </div>
  );
};

export default ImageSlider;
