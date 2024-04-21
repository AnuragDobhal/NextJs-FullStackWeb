"use client";

import styles from "@/app/styles/navbar.module.css";
import { CgMenu } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // close navbar when clicking outside of it

    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav ref={navRef} className={styles.navbar}>
        <div className={openMenu ? `${styles.active}` : ""}>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                href="/"
                onClick={() => setOpenMenu(false)}
              >
                Home
              </Link>
            </li>

            {/* <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                onClick={() => setOpenMenu(false)}
                href="/news"
              >
                News
              </Link>
            </li> */}
            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                onClick={() => setOpenMenu(false)}
                href="/movie"
              >
                Movie
              </Link>
            </li>

            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                onClick={() => setOpenMenu(false)}
                href="/services"
              >
                Services
              </Link>
            </li>

            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                onClick={() => setOpenMenu(false)}
                href="/shop"
              >
                TrendTribes
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                onClick={() => setOpenMenu(false)}
                href="/covid-19"
              >
                Covid Cases
              </Link>
            </li>

            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                onClick={() => setOpenMenu(false)}
                href="/login"
              >
                Login
              </Link>
            </li>

            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                onClick={() => setOpenMenu(false)}
                href="/register"
              >
                register
              </Link>
            </li>
          </ul>

          {/* //nav icon */}
          <div className={styles["mobile-navbar-btn"]}>
            <CgMenu
              name="menu-outline"
              className={styles["mobile-nav-icon"]}
              onClick={() => setOpenMenu(true)}
            />
            <IoCloseOutline
              name="close-outline"
              className={`${styles["mobile-nav-icon"]} ${styles["close-outline"]}`}
              onClick={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
