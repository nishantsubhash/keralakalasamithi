import Link from "next/link";
import React from "react";

interface KksButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  download?: boolean;
}

export default function KksButton({ variant = "primary", href, children, className = "", ...props }: KksButtonProps) {
  const base = "px-6 py-3 rounded-xl font-medium shadow transition duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 outline-none";
  let styles = "";
  if (variant === "primary") {
    styles = "bg-brand text-white hover:opacity-90";
  } else {
    styles = "border border-brand text-brand bg-white hover:bg-brand hover:text-white";
  }
  if (href) {
    // Only pass anchor-specific props to Link
    const { target, download } = props as { target?: string; download?: boolean };
    return (
      <Link
        href={href}
        className={`${base} ${styles} ${className} inline-block focus-visible:ring-2 focus-visible:ring-brand/50 outline-none`}
        {...(target ? { target } : {})}
        {...(download ? { download } : {})}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${base} ${styles} ${className} focus-visible:ring-2 focus-visible:ring-brand/50 outline-none`}
      {...props}
    >
      {children}
    </button>
  );
}
