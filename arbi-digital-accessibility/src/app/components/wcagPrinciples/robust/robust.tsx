import React, { useState } from "react";
import Accordion from "../../Accordion";
import GuidlinesOne from "./guidlinesOne";
import GuidlinesTwo from "./guidlinesTwo";
import GuidlinesThree from "./guidlinesThree";
import GuidlinesFour from "./guidlinesFour";

const perceivable = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      <p className="plainText">
        In web accessibility,
        <strong> *Robust*</strong> means that content must be compatible with a
        wide range of current and future technologies, including various
        assistive devices. This principle emphasizes creating content that can
        be reliably interpreted by different browsers, screen readers, and other
        tools so that all users can access it, regardless of the technology they
        use.
      </p>
      <div className="filledAccordion">
        <Accordion
          title={
            <>
              <span className="material-symbols-outlined">task_alt</span>
              Guideline 4.1 - Compatible
            </>
          }
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        >
          <GuidlinesOne />
        </Accordion>
      </div>
    </div>
  );
};

export default perceivable;
