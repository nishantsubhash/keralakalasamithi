
import Section from "../components/Section";
import KksButton from "../components/KksButton";
import KksCard from "../components/KksCard";
import SectionTitle from "../components/SectionTitle";



export default function Home() {
  const activities = [
    {
      title: "Cultural Activities",
      summary: "Celebrating Kerala's rich traditions, arts, and festivals.",
    },
    {
      title: "Social Activities",
      summary: "Connecting communities through events and outreach.",
    },
    {
      title: "Charity Activities",
      summary: "Supporting those in need with compassion and care.",
    },
  ];

  return (
    <div className="font-sans min-h-screen bg-white text-base md:text-lg text-gray-600 leading-relaxed">

      {/* 2. Hero (full-width) */}
      <div className="w-full bg-gray-50 text-center py-10 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand mb-6">Kerala Kala Samithi</h1>
        <p className="mt-3">Culture <span className="text-brand">•</span> Social <span className="text-brand">•</span> Charity</p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6">
          <KksButton href="/activities" variant="primary">Explore Activities</KksButton>
          <KksButton href="/magazine" variant="secondary">Read Magazine</KksButton>
        </div>
      </div>

      {/* 3. Activities Section */}
      <Section className="py-10 md:py-16">
        <SectionTitle className="mb-10">Our Activities</SectionTitle>
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {activities.map((card) => (
            <KksCard
              key={card.title}
              title={card.title}
              summary={card.summary}
            />
          ))}
        </div>
      </Section>

      {/* 4. Magazine Feature Block */}
      <section className="bg-gray-50 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">Kerala Vibes – Digital Magazine</h2>
        <div className="mt-8 max-w-md mx-auto bg-white rounded-2xl shadow p-6 hover:ring-2 hover:ring-brand/40 transition">
          <div className="h-64 md:h-72 bg-gray-200 rounded-xl mb-4" />
          <div className="text-gray-700 mb-4">Latest Issue: July–Sept 2025</div>
          <KksButton href="/magazine" variant="primary" className="px-6 py-3 rounded-xl font-medium shadow hover:opacity-90 w-full">Read Now</KksButton>
        </div>
      </section>

      {/* 5. Gallery Section */}
      <Section className="py-10 md:py-16">
        <SectionTitle className="mb-10">Gallery</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-200 h-48 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform" />
          ))}
        </div>
      </Section>

    </div>
  );
}
