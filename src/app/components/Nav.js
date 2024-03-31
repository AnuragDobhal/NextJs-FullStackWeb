'use client'

import styles from "@/app/styles/navbar.module.css"
import { CgMenu } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        // Function to close the navbar when clicking outside of it
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenMenu(false);
            }
        }

        // Add event listener when the component mounts
        document.addEventListener('mousedown', handleClickOutside);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav ref={navRef} className={styles.navbar}>
                <div className={openMenu ? `${styles.active}` : ""}>
                    <ul className={styles.navbarList}>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/"
                                  onClick={() => setOpenMenu(false)}
                            >Home</Link>
                        </li>
                      
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink}
                                  onClick={() => setOpenMenu(false)}
                                  href="/news">News</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink}
                                  onClick={() => setOpenMenu(false)}
                                  href="/movie">Movie</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/about"
                                  onClick={() => setOpenMenu(false)}
                            >About</Link>
                        </li>
                     
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink}
                                  onClick={() => setOpenMenu(false)}
                                  href="/services">Services</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink}
                                  onClick={() => setOpenMenu(false)}
                                  href="/covid-19">Covid Cases</Link>
                        </li>
                    </ul>

                    {/* //nav icon */}
                    <div className={styles['mobile-navbar-btn']}>
                        <CgMenu
                            name="menu-outline"
                            className={styles['mobile-nav-icon']}
                            onClick={() => setOpenMenu(true)}
                        />
                        <IoCloseOutline
                            name="close-outline"
                            className={`${styles['mobile-nav-icon']} ${styles['close-outline']}`}
                            onClick={() => setOpenMenu(false)}
                        />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
