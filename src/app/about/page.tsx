import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";

export default function About() {
  const committee = [
    { name: "A. Kumar", role: "President" },
    { name: "B. Nair", role: "Secretary" },
    { name: "C. Menon", role: "Treasurer" },
    { name: "D. Pillai", role: "Cultural Head" },
    { name: "E. Varma", role: "Social Head" },
    { name: "F. George", role: "Charity Head" },
  ];

  return (
    <Section>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">About Kerala Kala Samithi</h1>
      <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4 text-center">
        Kerala Kala Samithi is dedicated to preserving Kerala’s vibrant culture, celebrating its traditions, and supporting social causes that uplift our community.
      </p>

      {/* Mission Block */}
      <div className="mt-10 bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto text-center">
        <div className="text-2xl font-semibold text-brand">Our Mission</div>
        <div className="text-gray-600 mt-3 leading-relaxed">
          To foster a vibrant community that celebrates Kerala’s heritage, promotes cultural exchange, and supports charitable initiatives for the betterment of all.
        </div>
      </div>

      {/* Committee Grid */}
      <SectionTitle className="mt-16">Our Committee</SectionTitle>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {committee.map((member, idx) => (
          <div key={member.name} className="bg-white rounded-2xl shadow p-6 text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-2xl">
              {/* Avatar Placeholder */}
              <span>{String.fromCharCode(65 + idx)}</span>
            </div>
            <div className="mt-4 text-lg font-semibold text-gray-900">{member.name}</div>
            <div className="text-sm text-gray-600">{member.role}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
