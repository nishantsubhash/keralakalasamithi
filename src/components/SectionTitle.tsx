import React from "react";

interface SectionTitleProps {
	children: React.ReactNode;
	className?: string;
}

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
	return (
		<h2 className={`section-title ${className}`} tabIndex={-1} aria-label="Section Title">
			{children}
		</h2>
	);
}
