import React from "react";
import Image from "next/image";

interface MemberCardProps {
  name: string;
  post: string;
  imageSrc: string;
}

export default function MemberCard({ name, post, imageSrc }: MemberCardProps) {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 w-48 mx-auto">
      <div className="w-32 h-32 mb-2 relative overflow-hidden rounded-full border-2 border-[#d4af37] bg-[#fffaf0]">
        <Image
          src={imageSrc}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="text-center">
        <div className="font-bold text-lg text-[#185b34]">{name}</div>
        <div className="text-sm text-[#d97706] font-medium mt-1">{post}</div>
      </div>
    </div>
  );
}
