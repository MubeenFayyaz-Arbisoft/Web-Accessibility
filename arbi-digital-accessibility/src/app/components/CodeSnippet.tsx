"use client";
import { useState } from "react";
import styles from "../styles/components/Common.module.scss";

interface CodeSnippetProps {
  code: string;
  language?: string;
  label?: string; // optional aria-label
}

const CodeSnippet = ({ code, language = "text", label }: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className={styles.codeSnippet}>
      <div className={styles.labelWrapper}>
        {label && <label>{label}</label>}
        <button
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute top-2 right-2 back-link"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      </div>
      <pre
        className={styles.preCodeSinppet}
        aria-label={label || "Code snippet"}
        tabIndex={0}
      >
        <code className={`language-${language}`}>{code}</code>
      </pre>
     
    </div>
  );
};

export default CodeSnippet;
