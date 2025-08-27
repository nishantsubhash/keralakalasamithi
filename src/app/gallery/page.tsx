import React from "react";
import PageBanner from "../../components/PageBanner";

export default function GalleryPage() {
	return (
		<>
			<PageBanner
				title="Gallery"
				subtitle="Photos and memories from our events and festivals."
				imageSrc="/kks/gallery-bg.jpg"
				tint="dark"
				breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
			/>
			<main className="max-w-4xl mx-auto py-16 px-4">
				<p className="text-lg text-gray-700 mb-4">
					Explore photos and memories from Kerala Kala Samithi events, festivals, and community gatherings. Our gallery showcases the vibrant spirit of KKS.
				</p>
				<p className="text-md text-gray-600">
					Check back often for new additions and highlights from our latest activities.
				</p>
			</main>
		</>
	);
}
