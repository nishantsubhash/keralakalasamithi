import React from "react";

interface KksCardProps {
  imageSlot?: React.ReactNode;
  title: string;
  summary: string;
  actionSlot?: React.ReactNode;
  meta?: React.ReactNode;
  className?: string;
}

export default function KksCard({ imageSlot, title, summary, actionSlot, meta, className = "" }: KksCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition border border-transparent hover:border-brand/30 text-center p-6 ${className}`}>
      {imageSlot && <div className="h-40 md:h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden">{imageSlot}</div>}
      <div className="text-xl font-semibold text-brand">{title}</div>
      <div className="text-sm text-gray-600 mt-2">{summary}</div>
      {meta && <div className="text-xs text-gray-500 mt-3">{meta}</div>}
      {actionSlot && <div className="mt-4">{actionSlot}</div>}
    </div>
  );
}
