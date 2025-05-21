import Link from "next/link";
import React from "react";

const guidlinesThree = () => {
  return (
    <div className="plainText">
      <strong> Guideline 3.3 - Input Assistance </strong>
      ensures users receive support in entering information accurately through
      clear labels, instructions, and error identification.
      <ul className="innerList">
        <li>
          <strong>3.3.1 Error Identification</strong>
          mandates that errors are clearly identified and described when they
          occur, ensuring users are aware of issues and can take corrective
          action.
        </li>
        <li>
          <strong>3.3.2 Labels or Instructions</strong>
          requires that all form elements include clear labels or instructions,
          helping users understand how to interact with them and improving
          accessibility.
          <ul className="innerList">
            <li>
              <strong>3.3.2-label-provided</strong> mandates that all form
              elements have clear and descriptive labels, ensuring users can
              easily understand the purpose of each field for better
              accessibility.
            </li>
          </ul>
        </li>
        <li>
          <strong>3.3.3 Error Suggestion</strong> requires that when users make
          errors, the system provides suggestions for corrections, helping them
          easily rectify mistakes and enhancing overall usability.
        </li>
        <li>
          <strong>3.3.4 Error Prevention (Legal, Financial, Data)</strong>
          requires that users are prompted to confirm actions that could have
          consequences, such as legal, financial, or data-related transactions.
        </li>
        <li>
          <strong>3.3.6 Error Prevention (All, AAA)</strong>
          mandates that users are provided with options to review and confirm
          inputs before final submission, helping prevent errors in critical
          tasks.
        </li>
        <li>
          <strong>3.3.8 Accessible Authentication (Minimum)</strong>
          requires accessible authentication methods, including CAPTCHA
          alternatives and clear labeling of required information.
        </li>
      </ul>
    </div>
  );
};

export default guidlinesThree;
