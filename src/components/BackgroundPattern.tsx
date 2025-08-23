import React from "react";

interface BackgroundPatternProps {
  variant?: "mural" | "palm" | "waves";
  className?: string;
}

export default function BackgroundPattern({ variant = "mural", className = "" }: BackgroundPatternProps) {
  let svg: React.ReactNode;
  switch (variant) {
    case "palm":
      svg = (
        <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
          <pattern id="palm-leaf" patternUnits="userSpaceOnUse" width="60" height="60">
            <path d="M10 50 Q30 10 50 50" stroke="#1e7f4f" strokeWidth="2" fill="none" />
            <path d="M30 50 Q40 30 50 50" stroke="#1e7f4f" strokeWidth="1" fill="none" />
          </pattern>
          <rect width="400" height="200" fill="url(#palm-leaf)" />
        </svg>
      );
      break;
    case "waves":
      svg = (
        <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
          <pattern id="waves" patternUnits="userSpaceOnUse" width="80" height="40">
            <path d="M0 20 Q20 0 40 20 T80 20" stroke="#1565c0" strokeWidth="2" fill="none" />
          </pattern>
          <rect width="400" height="200" fill="url(#waves)" />
        </svg>
      );
      break;
    case "mural":
    default:
      svg = (
        <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
          <pattern id="kathakali-eye" patternUnits="userSpaceOnUse" width="24" height="24">
            <circle cx="12" cy="12" r="4" fill="#b3262e" />
            <circle cx="12" cy="12" r="2" fill="#fff" />
            <circle cx="12" cy="12" r="1" fill="#1e7f4f" />
          </pattern>
          <rect width="400" height="200" fill="url(#kathakali-eye)" />
        </svg>
      );
      break;
  }
  return (
    <div className={`absolute inset-0 w-full h-full z-0 ${className}`} aria-hidden="true">
      {svg}
    </div>
  );
}
