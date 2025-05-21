import React, { useState, useEffect } from "react";
import Accordion from "../../Accordion";
import Guidlinesone from "./GuidlinesOne";
import Guidlinestwo from "./GuidlinesTwo";
import Guidlinesthree from "./GuidlinesThree";
import Guidlinesfour from "./GuidlinesFour";
import TrackedLink from "../../TrackedLink";

const perceivable = () => {
  // this code is for back button trigger login line 10 to 50
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedAccordionIndex = localStorage.getItem("accordionIndex");
    const lastFocusedId = localStorage.getItem("lastFocusedId");
    const backToPath = localStorage.getItem("backToPath");

    if (backToPath !== window.location.pathname) {
      localStorage.removeItem("accordionIndex");
      localStorage.removeItem("lastFocusedId");
      localStorage.removeItem("backToPath");
      return;
    }

    if (savedAccordionIndex !== null) {
      setOpenIndex(Number(savedAccordionIndex));
    } else {
      // No accordion index — close all accordions
      setOpenIndex(null);
    }

    if (lastFocusedId) {
      setTimeout(() => {
        const el = document.getElementById(lastFocusedId);
        if (el) {
          el.focus();
        }
      }, 200);
    }

    return () => {
      localStorage.removeItem("accordionIndex");
      localStorage.removeItem("lastFocusedId");
      localStorage.removeItem("backToPath");
    };
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <p className="plainText">
        In web accessibility,
        <strong> *Perceivable*</strong> means that information and user
        interface components must be presented to users in ways they can sense
        whether through sight, hearing, or touch—ensuring that content is
        accessible to individuals with sensory disabilities.
        <TrackedLink
          href="/wcagprincipals/perceivable/guidlines-one/meaning-ful-image-name"
          id="meaningful-image-link4"
          className="font-bold link-color-blue underline"
        >
       just for testing outside
        </TrackedLink>
      </p>
      <div className="filledAccordion">
        <Accordion
          title={
            <>
              <span className="material-symbols-outlined">task_alt</span>
              Guideline 1.1 – Text Alternatives
            </>
          }
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        >
          <Guidlinesone />
        </Accordion>
        <Accordion
          title={
            <>
              <span className="material-symbols-outlined">task_alt</span>
              Guideline 1.2 - Time-based Media
            </>
          }
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
        >
          <Guidlinestwo />
        </Accordion>
        <Accordion
          title={
            <>
              <span className="material-symbols-outlined">task_alt</span>
              Guideline 1.3 - Adaptable
            </>
          }
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
        >
          <Guidlinesthree />
        </Accordion>
        <Accordion
          title={
            <>
              <span className="material-symbols-outlined">task_alt</span>
              Guideline 1.4 - Distinguishable
            </>
          }
          isOpen={openIndex === 3}
          onToggle={() => handleToggle(3)}
        >
          <Guidlinesfour />
        </Accordion>
      </div>
    </div>
  );
};

export default perceivable;
