import React from "react";
import PageBanner from "../../components/PageBanner";

export default function ActivitiesPage() {
	return (
		<>
			<PageBanner
				title="Our Activities"
				subtitle="Discover our cultural, social, and charitable events."
				imageSrc="/kks/activities-bg.jpg"
				tint="dark"
				height="md"
				breadcrumb={[{ label: "Home", href: "/" }, { label: "Activities" }]}
			/>
			<main className="max-w-4xl mx-auto py-16 px-4">
				<p className="text-lg text-gray-700 mb-4">
					Discover the cultural, social, and charitable activities organized by Kerala Kala Samithi. We bring people together through events, workshops, and outreach programs.
				</p>
				<p className="text-md text-gray-600">
					Explore our upcoming events and get involved in the vibrant KKS community.
				</p>
			</main>
		</>
	);
}
