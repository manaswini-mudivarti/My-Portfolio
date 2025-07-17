// src/components/Navbar.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
	return (
		<nav className="bg-white dark:bg-gray-900 shadow p-4 fixed w-full z-10">
			<div className="container mx-auto flex justify-between items-center">
				{/* Branding */}
				<a
					href="#home"
					className="text-2xl font-heading text-gray-900 dark:text-white"
				>
					MyPortfolio
				</a>

				{/* Navigation Links */}
				<ul className="flex space-x-6">
					{[
						'home',
						'about',
						'skills',
						'certifications',
						'projects',
						'resume',
						'contact',
					].map((sec) => (
						<li key={sec}>
							<a
								href={`#${sec}`}
								className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
							>
								{sec.charAt(0).toUpperCase() + sec.slice(1)}
							</a>
						</li>
					))}
				</ul>

				{/* Theme Toggle */}
				<ThemeToggle />
			</div>
		</nav>
	);
}
