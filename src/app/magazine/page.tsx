import PageContainer from "../../components/PageContainer";
import PageBanner from "../../components/PageBanner";
import ContentSection from "../../components/ContentSection";
import SectionBanner from "../../components/SectionBanner";
import KksCard from "../../components/KksCard";
import KksButton from "../../components/KksButton";
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


export default function Magazine() {
  return (
    <>
      <PageBanner
        title="Kerala Vibes – Digital Magazine"
        subtitle="Read our quarterly magazine celebrating Kerala’s culture, events, and stories."
        imageSrc="/kks/magazine-hero.jpg"
        tint="dark"
        height="md"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Magazine" }]}
      />
      <PageContainer>
        <SectionBanner variant="vilakku" className="mb-8" />
        <ContentSection background="gray">
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {issues.map((issue) => (
              <KksCard
                key={issue.id}
                imageSlot={
                  <Image
                    src={issue.cover}
                    alt={issue.title}
                    width={400}
                    height={550}
                    className="h-56 md:h-64 bg-gray-200 rounded-xl object-cover w-full"
                    unoptimized
                  />
                }
                title={issue.title}
                summary={issue.period}
                actionSlot={
                  <KksButton href={`/magazine/${issue.id}`} variant="primary">Read Now</KksButton>
                }
              />
            ))}
          </div>
        </ContentSection>
      </PageContainer>
    </>
  );
}
