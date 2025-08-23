import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
}

export default function Button({ variant = "primary", href, children, className = "", ...props }: ButtonProps) {
  const base =
    "px-6 py-3 rounded-xl font-medium shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 transition duration-200 ease-out";
  let styles = "";
  if (variant === "primary") {
    styles = "bg-brand text-white hover:opacity-90 border border-brand";
  } else if (variant === "secondary") {
    styles = "border border-brand text-brand bg-white hover:bg-brand hover:text-white";
  } else if (variant === "ghost") {
    styles = "text-brand hover:underline bg-transparent border-none";
  }
  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className} inline-block`}>
        {children}
      </Link>
    );
  }
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
