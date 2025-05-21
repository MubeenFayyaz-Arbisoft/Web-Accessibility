import Link from "next/link";
import React from "react";
import TrackedLink from "../../TrackedLink";

const guidlinesTwo = () => {
  return (
    <div className="plainText">
      <strong>Guideline 1.2 - Time-based Media</strong>
      requires that alternatives are provided for all time-based media
      (audio-only, video-only, audio-video, audio and/or video).
      <ul className="innerList">
        <li>
          <strong>Audio-only and Video-only (Prerecorded)</strong>
          requires text or audio alternatives for audio-only and video-only
          content, ensuring the same information is accessible.
          <ul className="innerList">
            <li>
              <strong> Audio-transcript-text</strong>
              requires transcripts are provided for pre-recorded audio-only
              content. Transcripts must be accurate and complete.
              {/* <Link
                className="font-bold link-color-blue underline"
                href="./Perceivable/1.2-time-based-media/audio-only-content.html"
              ></Link> */}
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
              <strong>Video- alternative-equivalent</strong>
              requires text or audio alternatives for prerecorded video-only
              content, conveying the same information as the video.
              {/* <Link
                className="font-bold link-color-blue underline"
                href="./Perceivable/1.2-time-based-media/video-only-content.html"
              >
                Video Only Media Demo
              </Link> */}
              <TrackedLink
                href="/wcagprincipals/perceivable/guidlines-one/meaning-ful-image-name"
                id="meaningful-image-link2"
                accordionIndex={1}
                className="font-bold link-color-blue underline"
              >
                {/* Audio Only Media Demo */}
                Video Only Media Demo
              </TrackedLink>
            </li>
          </ul>
        </li>

        <li>
          <strong>1.2.2 Captions (Prerecorded)</strong>
          requires synchronized and accurate captions for all prerecorded audio
          content, ensuring accessibility for users. Captions must be
          time-synchronized and equivalent.
          <Link
            className="font-bold link-color-blue underline"
            href="./Perceivable/1.2-time-based-media/captions-prerecorded.html"
          >
            Captions Prerecorded Demo
          </Link>
        </li>

        <li>
          <strong>
            1.2.3 Audio Description or Media Alternative (Prerecorded)
          </strong>
          requires that prerecorded media content includes audio descriptions or
          alternative text tracks.
          <Link
            className="font-bold link-color-blue underline"
            href="./Perceivable/1.2-time-based-media/audio-description-or-media-alternative.html"
          >
            Audio Description or Media Alternative Demo
          </Link>
        </li>

        <li>
          <strong>1.2.4 Captions (Live)</strong> requires accurate captions for
          live synchronized media. The captions must be time-synchronized and
          equivalent.
          <a
            className="font-bold link-color-blue underline"
            href="./Perceivable/1.2-time-based-media/captions-live.html"
          >
            Captions Live Demo
          </a>
        </li>
      </ul>
    </div>
  );
};

export default guidlinesTwo;
