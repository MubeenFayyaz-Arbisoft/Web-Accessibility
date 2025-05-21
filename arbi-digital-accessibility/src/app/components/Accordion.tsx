"use client";
import React from "react";
import styles from "../styles/components/Accordion.module.scss";

interface AccordionProps {
  title: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const Accordion = ({ title, isOpen, onToggle, children }: AccordionProps) => {
  return (
    <div
      className={`mb-3 overflow-hidden transition-all accordionInner duration-300 ${styles.accordionWrap}`}
    >
      <button
        className="flex items-center justify-between w-full p-4 font-semibold"
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        aria-expanded={isOpen}
      >
        <span className={styles.accordionTitle}>{title}</span>
        <svg
          className={`w-6 h-6 icon-color transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          } ${styles.accordionArrow}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-full" : "max-h-0 opacity-0"
        }`}
      >
        {isOpen && <div className={styles.accordionContent}>{children}</div>}
      </div>
    </div>
  );
};

export default Accordion;
