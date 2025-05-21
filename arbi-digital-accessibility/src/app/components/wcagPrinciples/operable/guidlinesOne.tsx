import React from "react";
import TrackedLink from "../../TrackedLink";

const guidlinesOne = () => {
  return (
    <div className="plainText">
      <strong> Guideline 2.1 – Keyboard Accessible </strong>
      mandates that all interface functions are operable via keyboard, ensuring
      accessibility for users with disabilities.
      <ul className="innerList">
        <li>
          <strong>2.1.1-keyboard-access</strong> requires that all functionality
          of a webpage is accessible through a keyboard, ensuring users can
          navigate and interact without a mouse.
          <TrackedLink
            href="/wcagprincipals/perceivable/guidlines-one/meaning-ful-image-name"
            id="meaningful-image-link"
            accordionIndex={1}
            className="font-bold link-color-blue underline"
          >
            Audio Only Media Demo
          </TrackedLink>
        </li>
        <li>
          <strong>2.1.2 No Keyboard Trap</strong> requires that there are no
          keyboard traps on the page and users can easily navigate away from any
          component using only the keyboard.
        </li>
        <li>
          <strong>2.1.4 Character Key Shortcuts</strong>
          requires that character key shortcuts do not interfere with standard
          keyboard operations, allowing users to navigate without unintended
          conflicts.
        </li>
      </ul>
    </div>
  );
};

export default guidlinesOne;
