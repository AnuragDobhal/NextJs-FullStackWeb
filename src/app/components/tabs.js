"use client"

import React, { useState, useEffect } from 'react';
import styles from "@/app/styles/tabs.module.css";


const TabSystem = () => {
  const [activeTab, setActiveTab] = useState('News');

  const openPage = (pageName) => {
    setActiveTab(pageName);
  };

  return (
    <div>
      <div className={styles.tablinkContainer}> {/* Add container */}
        <button className={styles.tablink} onClick={() => openPage('Home')}>Home</button>
        <button className={styles.tablink} onClick={() => openPage('News')}>News</button>
        <button className={styles.tablink} onClick={() => openPage('Contact')}>Contact</button>
        <button className={styles.tablink} onClick={() => openPage('About')}>About</button>
      </div> {/* Close container */}

      <div id="Home" className={activeTab === 'Home' ? styles.tabcontent + ' ' + styles.active : styles.tabcontent}>
        <h3>Home</h3>
        <p>Home is where the heart is..</p>
      </div>

      <div id="News" className={activeTab === 'News' ? styles.tabcontent + ' ' + styles.active : styles.tabcontent}>
        <h3>News</h3>
        <p>Some news this fine day!</p> 
      </div>

      <div id="Contact" className={activeTab === 'Contact' ? styles.tabcontent + ' ' + styles.active : styles.tabcontent}>
        <h3>Contact</h3>
        <p>Get in touch, or swing by for a cup of coffee.</p>
      </div>

      <div id="About" className={activeTab === 'About' ? styles.tabcontent + ' ' + styles.active : styles.tabcontent}>
        <h3>About</h3>
        <p>Who we are and what we do.</p>
      </div>
    </div>
  );
};

export default TabSystem;