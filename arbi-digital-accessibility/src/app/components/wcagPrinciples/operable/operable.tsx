import React, { useState, useEffect } from "react";
import Accordion from "../../Accordion";
import GuidlinesOne from "./guidlinesOne";
import GuidlinesTwo from "./guidlinesTwo";
import GuidlinesThree from "./guidlinesThree";
import GuidlinesFour from "./guidlinesFour";
import GuidlinesFive from "./guidlinesFive";


const operable = () => {
  // this code is for back button trigger login line 10 to 50
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedAccordionIndex = localStorage.getItem("accordionIndex");
    const lastFocusedId = localStorage.getItem("lastFocusedId");
    const savedTabIndex = localStorage.getItem("activeTabIndex");
    const backToPath = localStorage.getItem("backToPath");

    // Restore state only if we're on the right page and correct tab (0 = Perceivable)
    if (backToPath !== window.location.pathname || savedTabIndex !== "0") {
      localStorage.removeItem("accordionIndex");
      localStorage.removeItem("lastFocusedId");
      localStorage.removeItem("backToPath");
      localStorage.removeItem("activeTabIndex");
      return;
    }

    if (savedAccordionIndex !== null) {
      setOpenIndex(Number(savedAccordionIndex));
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
      localStorage.removeItem("activeTabIndex");
    };
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <p className="plainText">
        In web accessibility,
        <strong> *Operable*</strong> means that users must be able to navigate
        and interact with a website or application, regardless of their physical
        or cognitive abilities. This includes ensuring that all functionality is
        accessible via keyboard (not just a mouse), providing enough time for
        users to interact with content, and designing navigation that avoids
        causing seizures or physical reactions.
      </p>
      <div className="filledAccordion">
        <Accordion
          title={
            <>
              <span className="material-symbols-outlined">task_alt</span>
              Guideline 2.1 – Keyboard Accessible
            </>
          }
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        >
          <GuidlinesOne />
        </Accordion>
        <Accordion
          title={
            <>
              <span className="material-symbols-outlined">task_alt</span>
              Guideline 2.2 - Enough Time
            </>
          }
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
        >
          <GuidlinesTwo />
        </Accordion>
        <Accordion
          title={
            <>
              <span className="material-symbols-outlined">task_alt</span>
              Guideline 2.3 - Seizures and Physical Reactions
            </>
          }
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
        >
          <GuidlinesThree />
        </Accordion>
        <Accordion
          title={
            <>
              <span className="material-symbols-outlined">task_alt</span>
              Guideline 2.4 - Navigable
            </>
          }
          isOpen={openIndex === 3}
          onToggle={() => handleToggle(3)}
        >
          <GuidlinesFour />
        </Accordion>

        <Accordion
          title={
            <>
              <span className="material-symbols-outlined">task_alt</span>
              Guideline 2.5 - Input Modalities
            </>
          }
          isOpen={openIndex === 4}
          onToggle={() => handleToggle(4)}
        >
          <GuidlinesFive />
        </Accordion>
      </div>
    </div>
  );
};

export default operable;
