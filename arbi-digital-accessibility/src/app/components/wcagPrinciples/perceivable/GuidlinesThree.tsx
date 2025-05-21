import Link from "next/link";
import React from "react";

const guidlinesThree = () => {
  return (
    <div className="plainText">
    <strong>Guideline 1.3 - Adaptable</strong> ensures
    that the content can be presented in different ways
    without losing meaning.

    <ul className="innerList">
      <li>
        <strong> 1.3.1 Info and Relationships</strong>
        ensures that information and its connections are
        programmatically identifiable, allowing assistive
        technologies to convey structure accurately.

        <ul className="innerList">
          <li>
            <strong>
              Heading-determinable and levels</strong>
            ensures that headings are used correctly and
            in a hierarchical manner, allowing users to
            easily understand the content.
            <Link className="font-bold link-color-blue underline" href="./Perceivable/1.3-Adaptable/heading-determinable-and-levels.html" id="heading-determinable-and-levels">
              Heading Determinable and Levels Demo
            </Link>
          </li>
          <li>
            <strong> List-type</strong> requires that all
            visually apparent lists are programmatically
            identified as the correct list type: ordered,
            unordered, or description list.
            <Link className="font-bold link-color-blue underline" href="./Perceivable/1.3-Adaptable/list-type.html" id="list-type">
              List Type Demo
            </Link>
          </li>
          <li>
            <strong> Programmatic-label</strong> requires
            that all form elements have programmatic
            associations which accurately describe the
            form element and include all relevant
            instructions.
            <Link className="font-bold link-color-blue underline" href="./Perceivable/1.3-Adaptable/programmatic-label.html" id="programmatic-label">
              Programmatic Label Demo
            </Link>
          </li>
          <li>
            <strong> Table-identification</strong>
            requires that data tables have the correct
            programmatic table markup to identify them as
            data tables.
            <Link className="font-bold link-color-blue underline" href="./Perceivable/1.3-Adaptable/table-identification.html" id="table-identification">
              Table Identification Demo
            </Link>
          </li>
          <li>
            <strong> Cell-header-association</strong>
            requires that data table cells are correctly
            associated with the relevant headers.
            <Link className="font-bold link-color-blue underline" href="./Perceivable/1.3-Adaptable/cell-header-association.html" id="Cell-header-association">
              Cell Header Association Demo
            </Link>
          </li>
          <li>
            <strong> Layout-table-structure</strong>
            requires that layout tables are not coded as
            data tables. No data table semantics should be
            detected.
            <Link className="font-bold link-color-blue underline" href="./Perceivable/1.3-Adaptable/layout-table.html" id="layout-table-structure">
              Layout Table Structure Demo
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <strong>1.3.2 Meaningful Sequence</strong>
        requires that content is presented in a logical
        order, ensuring that users can understand and
        navigate the information effectively.
        <ul className="innerList">
          <li>
            <strong>
              Content-order-meaning-CSS- position</strong>
            ensures that the visual layout does not change
            the meaning of content, allowing assistive
            technologies to interpret it correctly.

            <a className="font-bold link-color-blue underline" href="./Perceivable/1.3-Adaptable/content-order-meaning-CSS-position.html" id="content-order-meaning-css-position">
              Content order meaning CSS position Demo
            </a>
          </li>
        </ul>
      </li>
      <li>
        <strong>1.3.3 Sensory Characteristics</strong>
        requires that instructions for user interactions
        do not rely solely on sensory characteristics,
        such as shape, color, visual location or sound.

        <a className="font-bold link-color-blue underline" href="./Perceivable/1.3-Adaptable/sensory-characteristics.html" id="sensory-characteristics">
          Sensory Characteristics Demo
        </a>
      </li>
      <li>
        <strong>1.3.4 Orientation</strong> mandates that
        content must be presented in a way that supports
        both portrait and landscape orientations.

        <a className="font-bold link-color-blue underline" href="./Perceivable/1.3-Adaptable/orientation.html" id="orientation">
          Orientation Demo
        </a>
      </li>
      <li>
        <strong>1.3.5 Identify Input Purpose</strong>
        requires that users are informed about the
        expected purpose of input fields through clear
        labels or instructions.

        <a className="font-bold link-color-blue underline" href="./Perceivable/1.3-Adaptable/identify-input-purpose.html" id="identify-input-purpose">
          Identify Input Purpose Demo
        </a>
      </li>
    </ul>
  </div>
  
  );
};

export default guidlinesThree;
