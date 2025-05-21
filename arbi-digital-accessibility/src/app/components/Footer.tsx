import Link from "next/link";
import React from "react";
import styles from "../styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.bottomList}>
      <Link href="mailto:contact@arbisoft.com"> <span className="material-symbols-outlined">mail</span>Our Support</Link>
      <Link href="#main-content">
        <span className="material-symbols-outlined">arrow_circle_up</span>Scroll
        Up
      </Link>
    </div>
  );
};

export default Footer;
