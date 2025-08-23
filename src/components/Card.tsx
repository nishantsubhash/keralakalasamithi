import Link from "next/link";
import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
  summary: string;
  link?: string;
  titleClassName?: string;
  summaryClassName?: string;
}

export default function Card({ img, title, summary, link, titleClassName = "text-xl font-bold text-brand mb-2", summaryClassName = "text-gray-700 mb-4" }: CardProps) {
  const cardContent = (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition border border-transparent hover:border-brand/30 overflow-hidden flex flex-col group relative" style={{ minHeight: '100%' }}>
      <div className="absolute top-0 left-0 w-full h-1 bg-brand rounded-t-2xl" style={{ opacity: 0.7 }} />
      {img && (
        <div className="w-full h-40 md:h-48 overflow-hidden rounded-xl">
          <Image src={img} alt={title} width={400} height={250} className="object-cover w-full h-full" unoptimized />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className={`text-xl font-semibold text-gray-900 mb-2 font-display ${titleClassName}`}>{title}</h3>
        <p className={`text-sm text-gray-600 mt-2 ${summaryClassName}`}>{summary}</p>
        {link && (
          <div className="mt-4">
            <Link href={link} className="text-brand hover:underline text-xs uppercase tracking-wide">Read</Link>
          </div>
        )}
      </div>
    </div>
  );
  if (link) {
    return <Link href={link} className="block h-full">{cardContent}</Link>;
  }
  return cardContent;
}
