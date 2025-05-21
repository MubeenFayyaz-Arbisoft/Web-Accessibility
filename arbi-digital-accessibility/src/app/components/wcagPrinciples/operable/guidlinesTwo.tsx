import Link from "next/link";
import React from "react";

const guidlinesTwo = () => {
  return (
    <div className="plainText">
      <strong>Guideline 2.2 - Enough Time</strong> ensures that users have
      sufficient time to read and interact with content.
      <ul className="innerList">
        <li>
          <strong>2.2.1 Timing Adjustable</strong> requires that any time limits
          can be adjusted or extended, allowing users to have adequate time to
          complete tasks based on their individual needs.
        </li>
        <li>
          <strong>2.2.2 Pause, Stop, Hide</strong> requires users to be able to
          pause, stop, or hide moving content, allowing them to control their
          viewing experience.
          <ul className="innerList">
            <li>
              <strong>2.2.2-blinking-moving-scrolling</strong>
              requires that users can pause, stop, or hide content that blinks,
              moves, or scrolls, ensuring they can manage distractions and
              focus.
            </li>
            <li>
              <strong>2.2.2-auto-updating</strong> mandates that users can
              pause, stop, or hide content that updates automatically, allowing
              them to focus on the information.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default guidlinesTwo;
