import Link from "next/link";
import React from "react";

const guidlinesThree = () => {
  return (
    <div className="plainText">
      <strong>Guideline 2.3 - Seizures and Physical Reactions</strong>
      seeks to prevent triggering seizures by avoiding content that flashes more
      than three times per second and providing warnings.
      <ul className="innerList">
        <li>
          <strong>2.3.1 Three Flashes or Below Threshold</strong>
          requires that content does not flash more than three times in any one
          second period, reducing the risk of seizures.
        </li>
      </ul>
    </div>
  );
};

export default guidlinesThree;
