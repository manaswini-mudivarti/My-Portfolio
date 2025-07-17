// src/components/ResumeSection.jsx
import React from 'react';

export default function ResumeSection() {
	return (
		<section id="resume" className="bg-gray-100 dark:bg-gray-900 py-20">
			<div className="container mx-auto px-6 lg:px-0">
				{/* Section Title */}
				<h2 className="text-4xl font-heading font-bold mb-8 text-gray-900 dark:text-white">
					Resume
				</h2>

				{/* Resume Content with Typography */}
				<article className="prose dark:prose-invert max-w-none mb-8">
					<h3>Professional Experience</h3>
					<ul>
						<li>
							<strong>Software Developer Intern</strong> — 1 Stop (Fall
							2021):
							<ul>
								<li>
									Implemented the concepts of AI-like Keras and TensorFlow.
								</li>
								<li>
									Developed considerable models in Python to recognize objects and digits using AI.
								</li>
							</ul>
						</li>
						<li>
							<strong>Junior Designer</strong> — 79 degree Longitude
							(Spring 2023):
							<ul>
								<li>
									Worked for the organization to design aesthetic brochures, posters, and banners to improve the publicity of the organization.
								</li>
								<li>
									Provided significant technical support to design and develop the website for the organization.
								</li>
							</ul>
						</li>
					</ul>

					<h3>Education</h3>
					<ul>
						<li>
							<strong>
								Master of Science in Computer Science & Software Engineering
							</strong>
							— Auburn University (2023–Present)
						</li>
						<li>
							<strong>Bachelor of Technology in Information Technology</strong>—
							Jawaharlal Nehru Technological University (2019–2023)
						</li>
					</ul>

					<h3>Key Skills</h3>
					<ul>
						<li>Data Analysis (Spreadsheets, SQL, R studio, Tableau)</li>
						<li>Machine Learning & AI (PyTorch, TensorFlow)</li>
						<li>Designing (Figma, Adobe Photoshop, HTML/CSS, JavaScript, Unity 3D)</li>
						<li>Python, Java, C, C#, C++</li>
					</ul>
				</article>

				{/* Download Button */}
				<a
  href="https://raw.githubusercontent.com/manaswini-mudivarti/My-Portfolio/main/public/resume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-shadow shadow-md hover:shadow-lg"
>
  Download Resume
</a>


			</div>
		</section>
	);
}
