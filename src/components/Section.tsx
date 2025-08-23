import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 section-y ${className}`}>
      {children}
    </section>
  );
}
