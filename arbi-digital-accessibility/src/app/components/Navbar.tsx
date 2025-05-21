'use client';
import React, { useEffect, useState } from "react";
import "@/app/styles/globals.scss";
import Link from "next/link";
import styles from "@/app/styles/components/Navbar.module.scss";
import SearchInput from "../components/SearchInput";
const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <header className={styles.internalMainNav}>
      <Link href="#main-content" className={styles.skipContent}>
        Skip to main content
      </Link>
      <div className="flex items-center gap-2 justify-between">

      <div className={styles.searchWrapper}>
      <SearchInput onSearch={handleSearch} />
      </div>
      <div className={styles.navContainer}>
        <nav>
          <ul>
            <li>
              <Link href="our-goals.html">Our Goals</Link>
            </li>

            <li>
              <Link href="https://arbisoft.com/about" target="_blank">
                About Us
              </Link>
            </li>
            <li>
              <Link href="all-tools.html">All Tools</Link>
            </li>
            <li>
              <Link href="our-certfications.html">Our Certifications</Link>
            </li>
          </ul>
        </nav>
      </div>
      </div>

    </header>
  );
};

export default Navbar;
