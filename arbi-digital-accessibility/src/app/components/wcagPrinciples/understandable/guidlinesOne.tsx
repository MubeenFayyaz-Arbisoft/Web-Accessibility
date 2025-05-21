import Link from "next/link";
import React from "react";

const guidlinesOne = () => {
  return (
    <div className="plainText">
    <strong> Guideline 3.1 - Readable </strong> focuses on
    ensuring that content is presented in a way that is
    easy to read and understand.
    <ul className="innerList">
      <li>
        <strong>3.1.1 Language of Page</strong> equires
        that web pages programmatically identify the
        page’s default human language.
      </li>
      <li>
        <strong>3.1.2 Language of Parts</strong> requires
        any part of a page that uses a language other than
        the page’s default human language be
        programmatically identified.
      </li>
    </ul>
  </div>
  );
};

export default guidlinesOne;
