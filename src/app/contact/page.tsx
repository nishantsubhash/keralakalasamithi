"use client";
import { useState } from "react";
import PageContainer from "../../components/PageContainer";
import ContentSection from "../../components/ContentSection";
import SectionBanner from "../../components/SectionBanner";
import KksButton from "../../components/KksButton";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    alert("Thank you for contacting us! (Form data logged to console)");
  };

  return (
    <PageContainer>
      <SectionBanner variant="boat" className="mb-8" />
      <ContentSection>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Left Card: Address & Info */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="mb-4 text-gray-700">
              <strong>Kerala Kala Samithi Office</strong><br />
              21, BHANUMATI COMPLEX, BANGUR NAGAR,<br />
              GOREGAON WEST, MUMBAI 400104<br />
            </div>
              <div className="mb-2">
                <strong>Email:</strong> <a href="mailto:keralakalasamithi2001@gmail.com" className="text-brand hover:underline">keralakalasamithi2001@gmail.com</a>
              </div>
            <div className="mb-4">
                <strong>Phone:</strong> <a href="tel:+919833721527" className="text-brand hover:underline">+91 9833721527</a> / <a href="tel:+919820117560" className="text-brand hover:underline">+91 9820117560</a>
            </div>
          </div>
          {/* Right Card: Contact Form */}
            {/* Contact Form removed as requested */}
        </div>
        {/* Map Strip */}
        <div className="mt-8 rounded-2xl overflow-hidden h-64 md:h-80 bg-gray-200">
          <iframe
            src="https://www.google.com/maps?q=21,+BHANUMATI+COMPLEX,+BANGUR+NAGAR,+GOREGAON+WEST,+MUMBAI+400104&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kerala Kala Samithi Mumbai Location"
          ></iframe>
        </div>
      </ContentSection>
    </PageContainer>
  );
}
