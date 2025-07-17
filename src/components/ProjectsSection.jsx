// src/components/ProjectsSection.jsx
import React from 'react';

const projects = [
	{
		title: 'Wordle Solver',
		description:
			'A puzzle game with guessing strategy of 5 letter words in finite number of tries.',
		techStack: ['Python', 'NLP', 'Pytest', 'DSA'],
		repoLink: 'https://github.com/manaswini-mudivarti/Wordle-solver',
	},
	{
		title: 'Real-time Emotion Detection System',
		description:
			'A multimodal approach for real-time facial emotion detection system integrating gender, age, place and context detection.',
		techStack: ['Python', 'HTML+CSS', 'Sentiment-analysis', 'Deep Learning', 'Feedback Mechanism'],
		repoLink: 'https://github.com/manaswini-mudivarti/Real-time-facial-emotion-detection-system',
	},
	{
		title: 'Capstone Engineering Project',
		description:
			'Implmentation of AI-driven techniques for biomarker discovery and drug repositioning in complex diseases.',
		techStack: ['Scanpy', 'Genomap', 'Machine Learning Algorithms'],
		repoLink: 'https://github.com/manaswini-mudivarti/capstone-engineering-project',
	},
	{
		title: "Pikachu's Quest",
		description:
			'Developed a small fun game using HTML/CSS and JavaScript',
		techStack: ['HTML', 'CSS', 'JavaScript'],
		repoLink: 'https://github.com/manaswini-mudivarti/Game1',
	},
	{
		title: "My Portfolio",
		description:
			'Designed my Portfolio',
		techStack: ['TailwindCSS', 'NodeJS', 'HTML'],
		repoLink: 'https://github.com/manaswini-mudivarti/My-Portfolio',
	}
	// add more projects as needed
];

export default function ProjectsSection() {
	return (
		<section id="projects" className="bg-white dark:bg-gray-800 py-20">
			<div className="container mx-auto px-6 lg:px-0">
				{/* Section Title */}
				<h2 className="text-4xl font-heading font-bold mb-12 text-gray-900 dark:text-white">
					Projects
				</h2>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map(({ title, description, techStack, repoLink }) => (
						<div
							key={title}
							className="group bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg"
						>
							{/* Project Title */}
							<h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
								{title}
							</h3>

							{/* Description */}
							<p className="text-gray-700 dark:text-gray-300 mb-4">
								{description}
							</p>

							{/* Tech Stack */}
							<ul className="flex flex-wrap gap-2 mb-4">
								{techStack.map((tech) => (
									<li
										key={tech}
										className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full px-2 py-1"
									>
										{tech}
									</li>
								))}
							</ul>

							{/* Repository Link */}
							<a
								href={repoLink}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
							>
								View Code
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
