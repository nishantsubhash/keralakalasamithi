import React from "react";

export default function AboutBanner() {
  return (
    <section
      className="relative w-full flex justify-center items-center"
      style={{ minHeight: "280px" }}
    >
      <div className="w-full max-w-[1200px] aspect-[3.75/1] min-h-[280px] md:min-h-[360px] mx-auto relative rounded-b-2xl overflow-hidden shadow-lg">
        <picture>
          <source
            srcSet="/images/Home_About.png"
            media="(max-width: 639px)"
          />
          <img
            src="/images/Home_About.png"
            alt="Kerala Kala Samithi Banner"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 55%" }}
            draggable={false}
          />
        </picture>
        {/* Top overlay gradient */}
        <div className="absolute inset-0" style={{background: "linear-gradient(to bottom, rgba(24,91,52,0.65) 0%, transparent 100%)"}} />
        {/* Bottom border */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#d4af37]" />
      </div>
    </section>
  );
}
