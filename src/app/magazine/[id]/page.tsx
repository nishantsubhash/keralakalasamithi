import { notFound } from "next/navigation";
import KksButton from "@/components/KksButton";
import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";
import Image from "next/image";

const issues = [
  {
    id: "2025-q3",
    title: "July–Sept 2025",
    cover: "https://placehold.co/400x550?text=Magazine+Cover",
    pdf: "/magazine/2025-q3.pdf",
    period: "July–Sept 2025"
  },
  {
    id: "2025-q2",
    title: "April–June 2025",
    cover: "https://placehold.co/400x550?text=Magazine+Cover",
    pdf: "/magazine/2025-q2.pdf",
    period: "April–June 2025"
  },
  {
    id: "2025-q1",
    title: "Jan–March 2025",
    cover: "https://placehold.co/400x550?text=Magazine+Cover",
    pdf: "/magazine/2025-q1.pdf",
    period: "Jan–March 2025"
  },
];

export default function MagazineIssue({ params }: { params: { id: string } }) {
  const issue = issues.find((i) => i.id === params.id);
  if (!issue) return notFound();
  return (
    <Section>
      <Image
        src={issue.cover}
        alt={issue.title}
        width={800}
        height={1100}
        className="w-full h-72 md:h-96 rounded-xl object-cover bg-gray-200"
        unoptimized
      />
      <SectionTitle className="mt-6">{issue.title}</SectionTitle>
      <div className="text-sm text-gray-500 mt-1">{issue.period}</div>
      <div className="mt-8 bg-white rounded-2xl shadow p-4">
        <embed src={issue.pdf} type="application/pdf" className="w-full h-[70vh] rounded-lg overflow-hidden" />
      </div>
      <div className="mt-4 flex gap-3">
  <KksButton href={issue.pdf} variant="primary" target="_blank" className="focus-visible:ring-2 focus-visible:ring-brand ring-opacity-50">Open PDF</KksButton>
  <KksButton href={issue.pdf} variant="secondary" target="_blank" download className="focus-visible:ring-2 focus-visible:ring-brand ring-opacity-50">Download</KksButton>
      </div>
    </Section>
  );
}
