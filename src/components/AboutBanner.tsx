import React from "react";

interface AboutBannerProps {
  imageSrc: string;
  alt?: string;
}

export default function AboutBanner({ imageSrc, alt = "Banner" }: AboutBannerProps) {
  return (
    <section
      className="relative w-full flex justify-center items-center"
      style={{ minHeight: "280px" }}
    >
      <div className="w-full max-w-[1200px] aspect-[3.75/1] min-h-[280px] md:min-h-[360px] mx-auto relative rounded-b-2xl overflow-hidden shadow-lg">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 55%" }}
          draggable={false}
        />
        {/* Top overlay gradient */}
        <div className="absolute inset-0" style={{background: "linear-gradient(to bottom, rgba(24,91,52,0.65) 0%, transparent 100%)"}} />
        {/* Bottom border */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#d4af37]" />
      </div>
    </section>
  );
}
