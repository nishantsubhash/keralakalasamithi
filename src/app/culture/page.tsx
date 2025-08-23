
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import KksCard from "../../components/KksCard";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    slug: "onam-celebration",
    title: "Onam Celebration",
    summary: "Discover the traditions and festivities of Kerala’s grand harvest festival, Onam.",
    img: "https://placehold.co/400x250?text=Onam",
  },
  {
    slug: "kathakali-art",
    title: "Kathakali: The Art of Storytelling",
    summary: "Explore the vibrant world of Kathakali, Kerala’s iconic dance drama.",
    img: "https://placehold.co/400x250?text=Kathakali",
  },
  {
    slug: "mohiniyattam-dance",
    title: "Mohiniyattam: Grace in Motion",
    summary: "Learn about Mohiniyattam, the classical dance form known for its elegance and beauty.",
    img: "https://placehold.co/400x250?text=Mohiniyattam",
  },
];

export default function Culture() {
  return (
    <Section>
      <SectionTitle>Kerala Culture</SectionTitle>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {articles.map((article) => (
          <KksCard
            key={article.slug}
            imageSlot={
              <Image
                src={article.img}
                alt={article.title}
                width={400}
                height={250}
                className="object-cover w-full h-full"
                unoptimized
              />
            }
            title={article.title}
            summary={article.summary}
            actionSlot={
              <Link href={`/culture/${article.slug}`} className="inline-block float-right bg-gray-100 text-brand px-4 py-2 rounded-xl hover:bg-gray-200 transition text-sm font-medium">Read</Link>
            }
          />
        ))}
      </div>
    </Section>
  );
}
