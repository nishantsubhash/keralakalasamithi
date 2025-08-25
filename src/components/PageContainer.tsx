import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

export default function PageContainer({ 
  children, 
  className = "", 
  maxWidth = "xl" 
}: PageContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl", 
    lg: "max-w-5xl",
    xl: "max-w-6xl",
    full: "max-w-full"
  };

  return (
    <div className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
