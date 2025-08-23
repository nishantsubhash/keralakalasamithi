import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">{children}</h2>
      <div className="w-20 h-1 bg-brand mx-auto mt-2 rounded-full" />
    </div>
  );
}
