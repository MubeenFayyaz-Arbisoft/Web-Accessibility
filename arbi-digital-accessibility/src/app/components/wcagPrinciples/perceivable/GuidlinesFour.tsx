import Link from "next/link";
import React from "react";

const guidlinesFour = () => {
  return (
    <div className="plainText">
    <strong>Guideline 1.4 - Distinguishable</strong>
    ensures users can easily perceive and differentiate
    content, emphasizing color contrast, text spacing, and
    visibility to enhance accessibility.
    <ul className="innerList">
      <li>
        <strong>1.4.1 Use of Color</strong> requires that
        color is not the only visual means used to convey
        information, indicate an action, prompt a
        response, or distinguish a visual element.
      </li>
      <li>
        <strong>1.4.2 Audio Control</strong> requires a
        method for pausing and stopping audio or
        controlling the volume of auto-playing content
        within the first three elements a user encounters
        on a web page.
      </li>
      <li>
        <strong>1.4.3 Contrast (Minimum)</strong> ensures
        that text and interactive elements have sufficient
        contrast against their background to enhance
        readability for users with visual impairments.
      </li>
      <li>
        <strong>1.4.4 Resize Text</strong> requires that
        there is a mechanism to resize, scale, or zoom in
        on the text to at least 200% of its original size
        without loss of content or functionality.
      </li>
      <li>
        <strong>1.4.5 Images of Text</strong> requires
        that images of text are either essential, such as
        logotypes, or presented along with user controls
        to customize font, size, color and background.
      </li>
      <li>
        <strong>1.4.10 Reflow</strong> ensures that
        content can adapt to various screen sizes, with a
        minimum width of 320 pixels and a height of 256
        pixels.
      </li>
      <li>
        <strong>1.4.11 Non-text Contrast</strong> requires
        that visual elements, such as user interface
        components and graphical objects, have a contrast
        ratio of at least 3:1 against adjacent colors
      </li>
      <li>
        <strong>1.4.12 Text Spacing</strong> ensures that
        users can adjust the spacing between characters,
        words, lines, and paragraphs without loss of
        content or functionality.
      </li>
      <li>
        <strong>1.4.13 Content on Hover or Focus</strong>
        requires that any content displayed on hover or
        focus (like tooltips or menus) must be accessible
        and not obscure other content.
      </li>
    </ul>
  </div>
  );
};

export default guidlinesFour;
