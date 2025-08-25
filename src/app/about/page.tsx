import React from "react";
import AboutBanner from "../../components/AboutBanner";
import MemberCarousel from "../../components/MemberCarousel";

export default function AboutPage() {
  return (
    <>
  <AboutBanner />
      <main className="max-w-4xl mx-auto py-16 px-4">
        <p className="text-lg text-gray-700 mb-4">
          Kerala Kala Samithi is a socio-cultural and charitable organization based in Goregaon West, Mumbai. Since its inception, the Samithi has been a platform for music lovers, artists, and community members who believe in the power of culture and compassion.
        </p>
        <p className="text-md text-gray-600 mb-4">
          Our mission goes beyond cultural preservation. We are committed to giving back to society through charitable initiatives, supporting senior citizens, and extending a helping hand to those in need.
        </p>
        <p className="text-md text-gray-600 mb-4">
          At the heart of our efforts is the promotion of Malayalam language and Kerala’s rich heritage. Through events, performances, and community programs, we strive to keep traditions alive while fostering unity among generations.
        </p>
        <p className="text-md text-gray-600 mb-8">
          Kerala Kala Samithi continues to be a place where culture, music, and kindness come together to make a difference.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#185b34] mb-6 text-center">Our Key Members</h2>
          <MemberCarousel />
          <p className="text-md text-gray-600 mt-8 text-center">
            We are also grateful to the many other valuable members who make Kerala Kala Samithi what it is today.
          </p>
        </div>
      </main>
    </>
  );
}
