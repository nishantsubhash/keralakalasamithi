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
              123, Example Road,<br />
              Kochi, Kerala, 682001<br />
            </div>
            <div className="mb-2">
              <strong>Email:</strong> <a href="mailto:info@keralakalasamithi.org" className="text-brand hover:underline">info@keralakalasamithi.org</a>
            </div>
            <div className="mb-4">
              <strong>Phone:</strong> <a href="tel:+919876543210" className="text-brand hover:underline">+91 98765 43210</a>
            </div>
            <div className="text-xs text-gray-500">
              <strong>Hours:</strong> Mon–Sat 10am–6pm
            </div>
          </div>
          {/* Right Card: Contact Form */}
          <div className="bg-white rounded-2xl shadow p-6">
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-brand focus:ring-brand/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-brand focus:ring-brand/30"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-brand focus:ring-brand/30 min-h-[120px]"
                />
              </div>
              <div>
                <KksButton type="submit" variant="primary">Send</KksButton>
              </div>
            </form>
          </div>
        </div>
        {/* Map Strip */}
        <div className="mt-8 rounded-2xl overflow-hidden h-64 md:h-80 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9999999999995!2d76.29999999999998!3d9.970000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTgnMTIuMCJOIDc2wrAxOCcwMC4wIkU!5e0!3m2!1sen!2sin!4v0000000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kerala Kala Samithi Location"
          ></iframe>
        </div>
      </ContentSection>
    </PageContainer>
  );
}
