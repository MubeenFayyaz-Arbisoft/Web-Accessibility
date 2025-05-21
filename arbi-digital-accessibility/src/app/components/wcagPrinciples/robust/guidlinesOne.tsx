import Link from "next/link";
import React from "react";

const guidlinesOne = () => {
  return (
    <div className="plainText">
    <strong> Guideline 4.1 - Compatible </strong> ensures
    that user interface components and content are
    compatible with assistive technologies, enabling
    reliable interpretation and interaction.
    <ul className="innerList">
      <li>
        <strong>4.1.2 Name, Role, Value</strong> mandates
        that all user interface components have
        programmatically determined names, roles, and
        values.
        <ul className="innerList">
          <li>
            <strong> Frame-title</strong> requires that
            all frame elements have a title attribute,
            ensuring users and assistive technologies can
            understand the purpose of the content within
            the frame.
          </li>
          <li>
            <strong> Iframe-name</strong> mandates that
            all iframe elements have a title attribute,
            providing context to users and assistive
            technologies about the content within the
            iframe.
          </li>
          <li>
            <strong> Change-notify-auto</strong> requires
            that users are automatically informed of
            changes in content or context, ensuring that
            assistive technologies can alert them.
          </li>
        </ul>
      </li>
      <li>
        <strong>4.1.3 Status Messages</strong> requires
        that status changes are programmatically
        communicated to users, ensuring assistive
        technologies can announce important updates.
      </li>
    </ul>
  </div>
  );
};

export default guidlinesOne;
