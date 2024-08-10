"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="#home" className={styles.logo}>
          nj
        </Link>
        <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <Link href="#home">Home</Link>
          <Link href="#about">About me</Link>
          <Link href="#project">Projects</Link>
          <Link href="#resume">Resume</Link>
        </div>
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
