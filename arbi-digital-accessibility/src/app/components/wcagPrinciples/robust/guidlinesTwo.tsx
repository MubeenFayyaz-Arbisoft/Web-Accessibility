import Link from "next/link";
import React from "react";

const guidlinesTwo = () => {
  return (
    
    <div className="plainText">
    <strong> Guideline 3.2 - Predictable </strong> ensures
    that user interfaces behave in a consistent and
    expected manner, allowing users to anticipate how
    elements will function.
    <ul className="innerList">
      <li>
        <strong>3.2.1 On Focus</strong> requires that no
        unexpected changes of context occur when an
        element receives focus.
      </li>
      <li>
        <strong>3.2.2 On Input</strong> requires that
        unexpected changes of context do not occur upon
        changing of form field values or selections.
      </li>
      <li>
        <strong>3.2.3 Consistent Navigation</strong>
        requires that navigation mechanisms remain
        consistent throughout a website or application.
      </li>
      <li>
        <strong>3.2.4 Consistent Identification</strong>
        mandates that user interface components are
        consistently labeled and identified across a
        system, helping users recognize their functions
        more easily.
      </li>
      <li>
        <strong>3.2.6 Consistent Help</strong> requires
        that help information and support mechanisms are
        consistently provided across a system, ensuring
        users can easily find assistance.
      </li>
    </ul>

    <strong>Guideline 2.2 - Enough Time</strong> ensures
    that users have sufficient time to read and interact
    with content.
    <ul className="innerList">
      <li>
        <strong>2.2.1 Timing Adjustable</strong> requires
        that any time limits can be adjusted or extended,
        allowing users to have adequate time to complete
        tasks based on their individual needs.
      </li>
      <li>
        <strong>2.2.2 Pause, Stop, Hide</strong> requires
        users to be able to pause, stop, or hide moving
        content, allowing them to control their viewing
        experience.
        <ul className="innerList">
          <li>
            <strong>2.2.2-blinking-moving-scrolling</strong>
            requires that users can pause, stop, or hide
            content that blinks, moves, or scrolls,
            ensuring they can manage distractions and
            focus.
          </li>
          <li>
            <strong>2.2.2-auto-updating</strong> mandates
            that users can pause, stop, or hide content
            that updates automatically, allowing them to
            focus on the information.
          </li>
        </ul>
      </li>
    </ul>
  </div>
  );
};

export default guidlinesTwo;
