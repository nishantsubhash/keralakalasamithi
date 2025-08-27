import React from "react";
import PageBanner from "../../components/PageBanner";

export default function CulturePage() {
  return (
    <>
      <PageBanner
        title="Culture"
        subtitle="Experience Kerala’s vibrant traditions, arts, and festivals."
        imageSrc="/kks/culture-bg.jpg"
        tint="dark"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Culture" }]}
      />
      <main className="max-w-4xl mx-auto py-16 px-4">
        <p className="text-lg text-gray-700 mb-4">
          Experience the vibrant culture of Kerala through our events, performances, and workshops. Kerala Kala Samithi celebrates traditional arts, music, dance, and festivals.
        </p>
        <p className="text-md text-gray-600">
          Join us to immerse yourself in Kerala&#39;s rich heritage and connect with fellow enthusiasts.
        </p>
      </main>
    </>
  );
}
