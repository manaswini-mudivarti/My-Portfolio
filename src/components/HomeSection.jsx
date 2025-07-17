// src/components/HomeSection.jsx
import React from 'react';
import profileImage from '../assets/profileimage.jpeg'; // <-- add your photo here

export default function HomeSection() {
	return (
		<section
			id="home"
			className="min-h-screen flex flex-col items-center justify-center pt-20 bg-gray-50 dark:bg-gray-800"
		>
			{/* Profile image */}
			<img
				src={profileImage}
				alt="Your Name"
				className="w-32 h-32 rounded-full mb-6 shadow-lg"
			/>

			{/* Name */}
			<h1 className="text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
				Manaswini Mudivarti
			</h1>

			{/* Tagline */}
			<p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center max-w-xl">
				I'm passionate about building intelligent systems that merge human-centered design
            	with cutting-edge technology. I enjoy working on projects involving AI, data engineering, and UI/UX.
			</p>

			{/* Call to Action */}
			<a
				href="#projects"
				className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-shadow shadow-md hover:shadow-lg"
			>
				View My Work
			</a>
		</section>
	);
}
