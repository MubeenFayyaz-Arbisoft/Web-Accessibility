import Link from "next/link";
import React from "react";

const guidlinesFive = () => {
  return (
    <div className="plainText">
      <li>
        <strong>Guideline 2.5 - Input Modalities</strong>
        &nbsp; ensures users can interact with content through multiple input
        methods, such as keyboard, mouse, touch, and voice, enhancing
        accessibility.
        <ul className="innerList">
          <li>
            <strong>2.5.1 Pointer Gestures</strong> mandates that all functions
            accessible via pointer gestures can also be performed with a single
            pointer activation, enhancing accessibility.
          </li>
          <li>
            <strong>2.5.2 Pointer Cancellation</strong>
            requires that users can cancel or abort actions initiated by pointer
            input, preventing accidental activations and enhancing usability.
          </li>
          <li>
            <strong>2.5.3 Label in Name</strong> mandates that the name of user
            interface components includes their visible label, ensuring that
            assistive technologies can accurately convey their purpose.
          </li>
          <li>
            <strong>2.5.4 Motion Actuation</strong> requires that functionality
            triggered by device motion can also be operated through other means,
            ensuring accessibility for users.
          </li>
          <li>
            <strong>2.5.7 Dragging Movements</strong>
            mandates that functionality available through dragging gestures can
            also be accomplished through alternative methods, ensuring
            accessibility for users.
          </li>
          <li>
            <strong>2.5.8 Target Size (Minimum)</strong>
            mandates that interactive elements have a minimum target size of
            24x24 pixels to ensure they are easily clickable or tappable,
            enhancing accessibility.
          </li>
        </ul>
      </li>
    </div>
  );
};

export default guidlinesFive;
