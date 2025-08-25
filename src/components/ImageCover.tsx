import Image from "next/image";
import React from "react";

interface ImageCoverProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageCover({ src, alt, className = "" }: ImageCoverProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="100vw"
      className={`object-cover ${className}`}
      priority
    />
  );
}
