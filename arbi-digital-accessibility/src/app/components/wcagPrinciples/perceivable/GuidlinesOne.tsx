import Link from "next/link";
import React from "react";
import TrackedLink from "../../TrackedLink";

const guidlinesOne = () => {
  return (
    <div className="plainText">
      <strong> Guideline 1.1 – Text Alternatives </strong>Provide text
      alternatives for any non-text content so that it can be changed into other
      forms people need, such as large print, braille, speech, symbols or
      simpler language.
      <ul className="innerList">
        <li>
          <strong> 1.1.1 Non-text Content - Level A</strong>
          &nbsp; All non-text content that is presented to the user has a text
          alternative that serves the equivalent purpose.
          <ul className="innerList">
            <li>
              <strong> Meaningful-image-name</strong> All meaningful images that
              are presented to the user have equivalent, accessible
              descriptions.
              <TrackedLink
                href="/wcagprincipals/perceivable/guidlines-one/meaning-ful-image-name"
                id="meaningful-image-link3"
                accordionIndex={0}
                className="font-bold link-color-blue underline"
              >
                Meaningful Image Name Demo
              </TrackedLink>
           
            </li>
            <li>
              <strong> Decorative-image</strong> All decorative images that are
              presented to the user do not have alternate text.
              <Link
                href="wcagprincipals/perceivable/guidlines-one/meaning-ful-image-name"
                className="font-bold link-color-blue underline"
                scroll={false}
                id="meaningful-image-link2"
              >
                Decorative Images Demo
              </Link>
              {/* <Link
                id="decorative-image"
                className="font-bold link-color-blue underline"
                href="./Perceivable/1.1-guideline-text-alternatives/decorative-image.html"
              >
                Decorative Images Demo
              </Link> */}
            </li>
            <li>
              <strong> Decorative-background-image</strong>
              requires that important information provided by background images
              is also included by other methods.
              <Link
                id="decorative-background-image"
                className="font-bold link-color-blue underline"
                href="./Perceivable/1.1-guideline-text-alternatives/decorative-background-image.html"
              >
                Decorative Background Images Demo
              </Link>
            </li>
            <li>
              <strong> Captcha-alternative</strong> requires that CAPTCHA
              provides formats for users without vision and users without
              hearing.
              <Link
                id="captcha-alternative"
                className="font-bold link-color-blue underline"
                href="./Perceivable/1.1-guideline-text-alternatives/captcha-alternative.html"
              >
                Captcha Alternatives Demo
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default guidlinesOne;
