import React from "react";

export type PageBannerProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  tint: string;
  breadcrumb: Array<{ label: string; href?: string }>;
  alt?: string;
};

export default function PageBanner({
  title,
  subtitle,
  imageSrc,
  tint,
  breadcrumb,
  alt = "Banner",
}: PageBannerProps) {
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
        <div
          className="absolute inset-0"
          style={{
            background:
              tint === "dark"
                ? "linear-gradient(to bottom, rgba(24,91,52,0.65) 0%, transparent 100%)"
                : "linear-gradient(to bottom, rgba(212,175,55,0.45) 0%, transparent 100%)",
          }}
        />
        {/* Banner content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <nav className="mb-2 flex flex-wrap gap-2 text-xs text-white/80">
            {breadcrumb.map((item, idx) => (
              item.href ? (
                <a key={idx} href={item.href} className="hover:underline">
                  {item.label}
                </a>
              ) : (
                <span key={idx}>{item.label}</span>
              )
            ))}
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow mb-2">{title}</h1>
          <h2 className="text-lg md:text-xl font-medium text-[#d4af37] drop-shadow mb-1">{subtitle}</h2>
        </div>
        {/* Bottom border */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#d4af37]" />
      </div>
    </section>
  );
}
