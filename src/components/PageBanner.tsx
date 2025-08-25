import React from "react";
import Image from "next/image";

type Breadcrumb = { label: string; href?: string };

type PageBannerProps = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  tint?: "light" | "dark";
  height?: "sm" | "md" | "lg";
  breadcrumb?: Breadcrumb[];
};

function getHeights(height: "sm" | "md" | "lg" = "md") {
  switch (height) {
    case "sm":
      return "min-h-[140px] md:min-h-[160px]";
    case "lg":
      return "min-h-[220px] md:min-h-[260px]";
    default:
      return "min-h-[180px] md:min-h-[200px]";
  }
}

export default function PageBanner({
  title,
  subtitle,
  imageSrc,
  tint = "dark",
  height = "md",
  breadcrumb,
}: PageBannerProps) {
  const heights = getHeights(height);
  const hasImage = !!imageSrc;
  const overlayClass =
    tint === "dark"
      ? "bg-black/35"
      : "bg-white/20 backdrop-blur";
  const titleClass = hasImage && tint === "dark"
    ? "text-white"
    : "text-[#185b34]";
  const subtitleClass = hasImage && tint === "dark"
    ? "text-white/90"
    : "text-gray-600";

  return (
    <section
      className={`relative isolate w-full ${heights} bg-gradient-to-b from-white to-[#fffaf0]`}
      role="region"
      aria-label={`Page banner: ${title}`}
    >
      {hasImage && (
        <>
          <Image
            src={imageSrc!}
            alt={title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className={`absolute inset-0 ${overlayClass}`} />
        </>
      )}
      <div className="absolute inset-x-0 bottom-0 border-b-2 border-[#d4af37]" />
      <div className="container mx-auto px-4 flex flex-col justify-center min-h-inherit text-center md:text-left relative z-10">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="mb-2 flex items-center justify-center md:justify-start text-xs text-[#185b34]/80 gap-1" aria-label="Breadcrumb">
            {breadcrumb.map((item, idx) => (
              <React.Fragment key={item.label + idx}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:underline focus-visible:ring-2 focus-visible:ring-[#d4af37]/40 outline-none px-1"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="px-1">{item.label}</span>
                )}
                {idx < breadcrumb.length - 1 && <span className="mx-1">/</span>}
              </React.Fragment>
            ))}
          </nav>
        )}
        <h1 className={`text-3xl md:text-4xl font-bold ${titleClass}`}>{title}</h1>
        {subtitle && (
          <p className={`mt-2 max-w-2xl mx-auto md:mx-0 ${subtitleClass}`}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}

export { getHeights };
