"use client";
import { useState } from "react";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import KksCard from "../../components/KksCard";
import Image from "next/image";

type Activity = { title: string; summary: string; img: string; date?: string };
type ActivityType = "Cultural" | "Social" | "Charity";
const activitiesData: Record<ActivityType, Activity[]> = {
  Cultural: [
    { title: "Onam Festival", summary: "Annual celebration of Kerala’s harvest festival.", img: "https://placehold.co/300x180?text=Onam", date: "Aug 30, 2025" },
    { title: "Kathakali Night", summary: "Traditional dance drama performance.", img: "https://placehold.co/300x180?text=Kathakali", date: "Sep 12, 2025" },
    { title: "Music Concert", summary: "Carnatic and folk music evenings.", img: "https://placehold.co/300x180?text=Music", date: "Oct 5, 2025" },
  ],
  Social: [
    { title: "Community Meetup", summary: "Monthly gathering for all members.", img: "https://placehold.co/300x180?text=Meetup", date: "Sep 20, 2025" },
    { title: "Health Camp", summary: "Free medical checkups for the community.", img: "https://placehold.co/300x180?text=Health", date: "Oct 10, 2025" },
    { title: "Youth Forum", summary: "Engagement and leadership for youth.", img: "https://placehold.co/300x180?text=Youth", date: "Oct 25, 2025" },
  ],
  Charity: [
    { title: "Food Drive", summary: "Distribution of food to those in need.", img: "https://placehold.co/300x180?text=Food", date: "Sep 5, 2025" },
    { title: "Education Support", summary: "Scholarships and school supplies.", img: "https://placehold.co/300x180?text=Education", date: "Sep 18, 2025" },
    { title: "Medical Aid", summary: "Financial help for medical emergencies.", img: "https://placehold.co/300x180?text=Medical", date: "Oct 2, 2025" },
  ],
};

const tabs: ActivityType[] = ["Cultural", "Social", "Charity"];

export default function Activities() {
  const [activeTab, setActiveTab] = useState<ActivityType>("Cultural");

  return (
    <>
      <Section>
        <SectionTitle>Activities</SectionTitle>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto text-center mt-2">Explore our cultural, social, and charity events throughout the year.</p>
        {/* Tabs */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab
                ? "bg-brand text-white px-4 py-2 rounded-xl"
                : "bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition"
              }
            >
              {tab}
            </button>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {activitiesData[activeTab].map((activity) => (
            <KksCard
              key={activity.title}
              imageSlot={
                <Image
                  src={activity.img}
                  alt={activity.title}
                  width={300}
                  height={180}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              }
              title={activity.title}
              summary={activity.summary}
              meta={activity.date}
            />
          ))}
        </div>
        {/* Meta row for event date inside each card */}
        <style>{`.kks-meta-row { position: absolute; left: 0; right: 0; bottom: 12px; text-align: center; }`}</style>
      </Section>
    </>
  );
}
