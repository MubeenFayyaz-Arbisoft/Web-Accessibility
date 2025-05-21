"use client";
import Image from "next/image";
import React from "react";
import type { StaticImageData } from 'next/image';
import styles from "../styles/components/Common.module.scss";

interface ImageWithCaptionProps {
  src: string | StaticImageData;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  icon?: string;
}

const ImageWithCaption = ({
  src,
  alt,
  caption,
  width = 400,
  height = 300,
  icon = "photo_camera",
}: ImageWithCaptionProps) => {
  return (
    <figure className={styles.demoFigure}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.demoImage}
      />
      <figcaption className={styles.figCaption}>
        <span className="material-symbols-outlined">{icon}</span>
        Fig: {caption}
      </figcaption>
    </figure>
  );
};

export default ImageWithCaption;
