"use client"
import { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'react-feather';
import styles from '@/app/styles/ScrollToTop.module.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`${styles.scrollToTopButton} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
    >
      <ArrowUpCircle size={32} />
    </button>
  );
};

export default ScrollToTopButton;
