import React from "react";
import PageContainer from "./PageContainer";

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  containerWidth?: "sm" | "md" | "lg" | "xl" | "full";
  spacing?: "sm" | "md" | "lg";
  background?: "white" | "gray" | "paper";
}

export default function ContentSection({ 
  children, 
  className = "",
  containerWidth = "xl",
  spacing = "md",
  background = "white"
}: ContentSectionProps) {
  const spacingClasses = {
    sm: "py-8 md:py-10",
    md: "py-10 md:py-16", 
    lg: "py-16 md:py-24"
  };

  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    paper: "bg-paper"
  };

  return (
    <section className={`${backgroundClasses[background]} ${spacingClasses[spacing]} ${className}`}>
      <PageContainer maxWidth={containerWidth}>
        {children}
      </PageContainer>
    </section>
  );
}
