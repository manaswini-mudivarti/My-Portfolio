// src/components/ContactSection.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function ContactSection() {
	return (
		<section id="contact" className="bg-white dark:bg-gray-800 py-20">
			<div className="container mx-auto px-6 lg:px-0 text-center">
				{/* Section Title */}
				<h2 className="text-4xl font-heading font-bold mb-8 text-gray-900 dark:text-white">
					Contact Me
				</h2>

				{/* Social Icons */}
				<div className="flex justify-center space-x-8">
					<a
						href="https://github.com/manaswini-mudivarti"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
					>
						<FaGithub className="text-4xl" />
					</a>
					<a
						href="https://linkedin.com/in/manaswinimudivarti"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
					>
						<FaLinkedin className="text-4xl" />
					</a>
					<a
						href="mudivartislmanaswini@gmail.com"
						className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
					>
						<FiMail className="text-4xl" />
					</a>
				</div>
			</div>
		</section>
	);
}
