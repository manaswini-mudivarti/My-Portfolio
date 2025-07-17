// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
	return (
		<footer className="bg-gray-100 dark:bg-gray-900 py-6">
			<div className="container mx-auto px-6 lg:px-0 text-center">
				<p className="text-gray-600 dark:text-gray-300 mb-2">
					&copy; {new Date().getFullYear()} Manaswini Mudivarti. All rights reserved.
				</p>
				<p className="text-gray-600 dark:text-gray-300">
					Designed & built by Manaswini Mudivarti.
				</p>
			</div>
		</footer>
	);
}
