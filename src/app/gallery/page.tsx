"use client";
import { useState } from "react";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import Image from "next/image";

const images = [
  { src: "https://placehold.co/600x400?text=Event+1", caption: "Onam Festival 2025" },
  { src: "https://placehold.co/600x400?text=Event+2", caption: "Kathakali Night" },
  { src: "https://placehold.co/600x400?text=Event+3", caption: "Charity Drive" },
  { src: "https://placehold.co/600x400?text=Event+4", caption: "Music Concert" },
  { src: "https://placehold.co/600x400?text=Event+5", caption: "Community Meetup" },
  { src: "https://placehold.co/600x400?text=Event+6", caption: "Health Camp" },
];

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImg, setActiveImg] = useState<{ src: string; caption: string } | null>(null);

  const openModal = (img: { src: string; caption: string }) => {
    setActiveImg(img);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setActiveImg(null);
  };

  return (
    <Section>
      <SectionTitle>Gallery</SectionTitle>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((img) => (
          <div
            key={img.src}
            className="relative rounded-xl overflow-hidden bg-gray-200 h-56 md:h-64 cursor-pointer"
            onClick={() => openModal(img)}
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform"
              style={{ objectFit: "cover" }}
              unoptimized
            />
            <div className="absolute bottom-0 inset-x-0 bg-black/40 text-white text-sm p-3">
              {img.caption}
            </div>
          </div>
        ))}
      </div>
      {/* Lightbox Modal */}
      {modalOpen && activeImg && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative bg-white/10 rounded-xl shadow-lg p-0 max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            {activeImg && (
              <Image
                src={activeImg.src}
                alt={activeImg.caption}
                width={900}
                height={600}
                className="rounded-xl object-cover max-h-[80vh] w-auto mx-auto"
                unoptimized
              />
            )}
            {activeImg && (
              <div className="absolute bottom-0 inset-x-0 bg-black/40 text-white text-base p-4 text-center rounded-b-xl">{activeImg.caption}</div>
            )}
            <button onClick={closeModal} className="absolute top-4 right-4 px-4 py-2 bg-brand text-white rounded-full font-semibold shadow">Close</button>
          </div>
        </div>
      )}
    </Section>
  );
}
