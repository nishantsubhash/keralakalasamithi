import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    slug: "onam-celebration",
    title: "Onam Celebration",
    img: "https://placehold.co/600x350?text=Onam",
    content: `Onam is Kerala’s grand harvest festival, celebrated with vibrant floral designs, traditional feasts, and cultural performances. It marks the homecoming of the legendary King Mahabali and is a time for unity and joy.`,
  },
  {
    slug: "kathakali-art",
    title: "Kathakali: The Art of Storytelling",
    img: "https://placehold.co/600x350?text=Kathakali",
    content: `Kathakali is a classical dance drama from Kerala, known for its elaborate costumes, expressive gestures, and captivating stories from Indian epics. It is a visual treat and a cultural treasure.`,
  },
  {
    slug: "mohiniyattam-dance",
    title: "Mohiniyattam: Grace in Motion",
    img: "https://placehold.co/600x350?text=Mohiniyattam",
    content: `Mohiniyattam is a graceful dance form that originated in Kerala. It is characterized by gentle swaying movements and emotive storytelling, reflecting the beauty and spirit of Kerala’s culture.`,
  },
];

export default function ArticleDetail({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <Image
        src={article.img}
        alt={article.title}
        width={600}
        height={350}
        className="w-full h-60 md:h-80 object-cover rounded-xl mb-6 bg-gray-200"
        unoptimized
      />
      <h1 className="text-4xl font-bold text-gray-900">{article.title}</h1>
      <div className="mt-2 text-sm text-gray-500">Aug 2025 • Malayalam</div>
      <div className="prose prose-neutral max-w-none mt-6">
        {article.content}
      </div>
      <Link href="/culture" className="mt-8 inline-block text-brand hover:underline">← Back to Culture</Link>
    </div>
  );
}
