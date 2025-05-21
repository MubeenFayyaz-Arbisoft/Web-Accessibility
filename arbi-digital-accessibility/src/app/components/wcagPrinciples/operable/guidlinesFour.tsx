import Link from "next/link";
import React from "react";

const guidlinesFour = () => {
  return (
    <div className="plainText">
    <strong>Guideline 2.4 - Navigable</strong> ensures
    users can easily navigate content through clear
    options, consistent layouts, and meaningful headings,
    enhancing the overall browsing experience.
    <ul className="innerList">
      <li>
        <strong>2.4.1 Bypass Blocks</strong> requires that
        users can bypass repetitive content, such as
        navigation menus, to easily access the main
        content of a page.
      </li>
      <li>
        <strong>2.4.2 Page Titled</strong> mandates that
        each page has a descriptive title, helping users
        understand the content and context when navigating
        through a site.
        <ul className="innerList">
          <li>
            <strong>2.4.2-page-title-defined and
              purpose</strong>
            requires that each page has a clear and
            descriptive title that conveys its purpose,
            aiding users in understanding the content.
          </li>
        </ul>
      </li>
      <li>
        <strong>2.4.3 Focus Order</strong> mandates that
        the focus sequence of interactive elements follows
        a logical and intuitive order, ensuring users can
        easily navigate through content.
      </li>
      <li>
        <strong>2.4.4 Link Purpose (In Context)</strong>
        requires that the purpose of each link is clear
        from its context, allowing users to understand
        where the link will take them.
      </li>
      <li>
        <strong>2.4.5 Multiple Ways</strong> requires that
        there are two or more ways (site maps, search,
        navigation menus, etc) to locate a web page within
        a set of web pages.
      </li>
      <li>
        <strong>2.4.6 Headings and Labels</strong>
        requires that headings and labels are used
        effectively to organize content, helping users
        understand the structure and navigate the
        information easily.
        <ul className="innerList">
          <li>
            <strong>2.4.6-heading-purpose and level</strong>
            mandates that headings accurately convey the
            content they represent, helping users
            understand the structure and context of the
            information on a page.
          </li>
          <li>
            <strong>2.4.6-label-descriptive</strong>
            requires that all labels are clear and
            descriptive, ensuring users can easily
            understand the purpose of each input element
            within a form.
          </li>
        </ul>
      </li>
      <li>
        <strong>2.4.7 Focus Visible</strong> mandates that
        the current focus state of interactive elements is
        clearly visible, allowing users to easily identify
        where they are within the interface.
      </li>
      <li>
        <strong>2.4.11 Focus Not Obscured (Minimum)</strong>
        requires that focused elements are not hidden or
        obscured by other content, ensuring users can
        easily interact with them.
      </li>
      <li>
        <strong>2.4.13 Focus Appearance (AAA)</strong>
        requires focus indicators with a minimum outline
        thickness of 2px and a contrast ratio of at least
        3:1 against the background for better visibility.
      </li>
    </ul>
  </div>
  );
};

export default guidlinesFour;
