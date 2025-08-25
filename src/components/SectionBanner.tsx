import ImageCover from "./ImageCover";
import React from "react";

const variantImages = {
  theyyam: {
    src: "/kks/theyyam.jpg",
    alt: "Theyyam performance"
  },
  boat: {
    src: "/kks/boat.jpg",
    alt: "Kerala boat race"
  },
  vilakku: {
    src: "/kks/vilakku.jpg",
    alt: "Kerala lamp festival"
  },
  contact: {
    src: "/images/contact.png",
    alt: "Contact Kerala Kala Samithi"
  }
};

interface SectionBannerProps {
  variant?: "theyyam" | "boat" | "vilakku" | "contact";
  title?: string;
  height?: string; // e.g. "h-[180px] md:h-[220px]"
  className?: string;
}

export default function SectionBanner({
  variant = "theyyam",
  title,
  height = "h-[180px] md:h-[220px]",
  className = ""
}: SectionBannerProps) {
  const img = variantImages[variant];
  return (
    <div className={`relative w-full ${height} overflow-hidden ${className}`}>
      <div className="relative h-[180px] md:h-[220px] w-full">
        <ImageCover src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand/20" /> {/* kasavu overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-paper/60 to-transparent" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-black/10 mix-blend-multiply"></div>
      {title && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl md:text-2xl font-bold drop-shadow-lg px-4 text-center">
          {title}
        </div>
      )}
    </div>
  );
}
