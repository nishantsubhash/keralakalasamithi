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
      return "min-h-[240px] md:min-h-[320px]";
    case "lg":
      return "min-h-[400px] md:min-h-[500px]";
    default:
      return "min-h-[240px] md:min-h-[320px]";
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
  const overlayClass = "bg-gradient-to-b from-[#185b34]/60 to-transparent";
  const titleClass = "text-white text-center font-bold text-3xl md:text-4xl";
  const subtitleClass = "text-[#d4af37] text-center text-lg md:text-xl font-medium mt-2";

  return (
    <section
      className={`relative isolate w-full ${heights} bg-gradient-to-b from-white to-[#fffaf0] shadow-lg flex justify-center`}
      role="region"
      aria-label={`Page banner: ${title}`}
      style={{ borderRadius: "0 0 24px 24px" }}
    >
      {hasImage && (
        <>
          <Image
            src={imageSrc!}
            alt={title}
            fill
            className="object-cover bg-white"
            style={{ objectPosition: "center 60%" }}
            priority
          />
          <div className={`absolute inset-0 ${overlayClass}`} />
        </>
      )}
  <div className="absolute inset-x-0 bottom-0 border-b border-[#d4af37] rounded-b-2xl shadow-lg" />
  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] px-4 flex flex-col justify-center items-center min-h-inherit text-center relative z-10">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="mb-4 flex items-center justify-center md:justify-start text-sm text-[#185b34]/80 gap-2 font-medium" aria-label="Breadcrumb">
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
  {title && <h1 className={titleClass}>{title}</h1>}
  {subtitle && <p className={subtitleClass}>{subtitle}</p>}
      </div>
    </section>
  );
}

export { getHeights };
