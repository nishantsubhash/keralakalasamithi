import React from "react";
import PageBanner from "../../components/PageBanner";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Kerala Kala Samithi"
        subtitle="Learn more about our mission, values, and community."
        imageSrc="/kks/about-bg.jpg"
        tint="dark"
        height="md"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <main className="max-w-4xl mx-auto py-16 px-4">
        <p className="text-lg text-gray-700 mb-4">
          Kerala Kala Samithi (KKS) is dedicated to promoting Kerala&#39;s rich
          culture, arts, and community spirit. We organize events, workshops,
          and charitable activities to connect people and celebrate traditions.
        </p>
        <p className="text-md text-gray-600">
          Join us to experience the vibrant heritage of Kerala and be part of a
          welcoming community.
        </p>
      </main>
    </>
  );
}
