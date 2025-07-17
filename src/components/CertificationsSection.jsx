// src/components/CertificationsSection.jsx
import React from 'react';

const certifications = [
	{
		title: 'Graduate Certificate in Artificial Intelligence Engineering',
		issuer: 'Auburn University',
		date: '2024',
	},
	{
		title: 'Graduate Certificate in Data Engineering',
		issuer: 'Auburn University',
		date: '2024',
	},
	{
		title: 'Google Data Analytics Professional Certificate',
		issuer: 'Google',
		date: '2024',
	},
	{
		title: 'Google Advanced Data Analytics Professional Certificate',
		issuer: 'Google',
		date: '2025',
	},
	{
		title: 'Google Business Intelligence Professional Certificate',
		issuer: 'Google',
		date: '2025',
	},
];

export default function CertificationsSection() {
	return (
		<section id="certifications" className="bg-gray-100 dark:bg-gray-900 py-20">
			<div className="container mx-auto px-6 lg:px-0">
				{/* Section Title */}
				<h2 className="text-4xl font-heading font-bold mb-12 text-gray-900 dark:text-white">
					Certifications
				</h2>

				{/* Certifications Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{certifications.map(({ title, issuer, date }) => (
						<div
							key={title}
							className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 transition hover:scale-105"
						>
							<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
								{title}
							</h3>
							<p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
								{issuer}
							</p>
							<p className="text-sm font-medium text-gray-700 dark:text-gray-400">
								{date}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
