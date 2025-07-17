// src/components/AboutSection.jsx
import React from 'react';

export default function AboutSection() {
	return (
		<section id="about" className="bg-gray-100 dark:bg-gray-900 py-20">
			<div className="container mx-auto px-6 lg:px-0">
				{/* Section Title */}
				<h2 className="text-4xl font-heading font-bold mb-8 text-gray-900 dark:text-white">
					About Me
				</h2>

				{/* Two‑column layout on lg+ */}
				<div className="lg:flex lg:space-x-12">
					{/* Education */}
					<div className="lg:w-1/2 mb-12 lg:mb-0">
						<h3 className="text-2xl font-heading font-semibold mb-4 text-gray-800 dark:text-gray-200">
							Education
						</h3>
						<div className="space-y-8 prose dark:prose-invert">
							<div>
								<h4 className="text-xl font-heading font-semibold">
									Master of Science in Computer Science & Software Engineering
								</h4>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Auburn University, 2023 - Present
								</p>
								<p>
									Focused on Artificial Intelligence, Machine Learning,
									Computer Vision, Database Systems and Data Mining.
								</p>
							</div>
							<div>
								<h4 className="text-xl font-heading font-semibold">
									Bachelor of Technology in Information Technology
								</h4>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Jawaharlal Nehru Technological University, 2019 - 2023
								</p>
								<p> 
									Focused on Data Strcutures, Database Management Systems, Data Analytics,
									 and Data Mining.
								</p>
							</div>
						</div>
					</div>

					{/* Qualifications */}
					<div className="lg:w-1/2">
						<h3 className="text-2xl font-heading font-semibold mb-4 text-gray-800 dark:text-gray-200">
							Qualifications
						</h3>
						<ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
							<li>Strong Data Analytical skills.</li>
							<li>Proficient in Spreadsheets, SQL, Tableau and R studio tool.</li>
							<li>Hands‑on experience with AI & ML projects.</li>
							<li>Expertise in Unity Game Design and C#.</li>
							<li>Comfortable with Linux environments.</li>
							<li>Excellent analytical & problem-solving abilities.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
