"use client";

import React, { useState } from "react";
import styles from "../styles/components/Formfields.module.scss";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="relative">
        <div className="absolute left-3 top-2">
          <span className="material-symbols-outlined icon-color ">search</span>
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchField}
          placeholder="Search or type anything"
        />
      </div>
    </form>
  );
};

export default SearchInput;