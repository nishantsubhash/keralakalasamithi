"use client";
"use client";
import { useState } from "react";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import KksButton from "../../components/KksButton";

const areas = ["Cultural", "Social", "Charity"];

export default function Join() {
  const [form, setForm] = useState({ name: "", email: "", area: areas[0] });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thank you for joining/supporting! (Form data logged to console)");
  };

  return (
    <Section>
      <SectionTitle>Join Kerala Kala Samithi</SectionTitle>
      <div className="mt-4 bg-white rounded-2xl shadow p-6 text-center max-w-3xl mx-auto">
        Become a member or volunteer with Kerala Kala Samithi and help us celebrate culture, connect communities, and support social causes.
      </div>
      <form className="mt-8 max-w-3xl mx-auto grid gap-6" onSubmit={handleSubmit}>
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
          <label htmlFor="area" className="text-sm font-medium text-gray-700">Area of Interest</label>
          <select
            name="area"
            id="area"
            value={form.area}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border-gray-300 focus:border-brand focus:ring-brand/30"
          >
            {areas.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>
        <div>
          <KksButton type="submit" variant="primary">Join Now</KksButton>
        </div>
      </form>
      <div className="mt-10 text-center">
        <KksButton variant="secondary">Support Us</KksButton>
      </div>
    </Section>
  );
}
