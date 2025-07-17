// src/components/SkillsSection.jsx
import React from 'react';

const skills = [
	{ name: 'Python', level: 'Expert' },
	{ name: 'Java', level: 'Intermediate' },
	{ name: 'R studio', level: 'Expert' },
	{ name: 'C', level: 'Intermediate' },
	{ name: 'C++', level: 'Intermediate' },
	{ name: 'C#', level: 'Advanced' },
	{ name: 'HTML/CSS', level: 'Expert' },
	{ name: 'JavaScript', level: 'Intermediate' },
	{ name: 'SQL', level: 'Advanced' },
	{ name: 'Spreadsheets', level: 'Expert' },
	{ name: 'Tableau', level: 'Advanced' },
	{ name: 'Figma', level: 'Advanced' },
	{ name: 'Unity 3D', level: 'Advanced'},
	{ name: 'Adobe Photoshop', level: 'Expert'},
];

export default function SkillsSection() {
	return (
		<section id="skills" className="bg-white dark:bg-gray-800 py-20">
			<div className="container mx-auto px-6 lg:px-0">
				{/* Section Title */}
				<h2 className="text-4xl font-heading font-bold mb-12 text-gray-900 dark:text-white">
					Skills
				</h2>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{skills.map(({ name, level }) => (
						<div
							key={name}
							className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center text-center transition hover:scale-105"
						>
							<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
								{name}
							</h3>
							<p className="text-sm text-gray-600 dark:text-gray-300">
								{level}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
