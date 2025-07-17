// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(
		() =>
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
	);

	// Sync <html> class and localStorage whenever `isDark` changes
	useEffect(() => {
		const root = document.documentElement;
		if (isDark) {
			root.classList.add('dark');
			localStorage.theme = 'dark';
		} else {
			root.classList.remove('dark');
			localStorage.theme = 'light';
		}
	}, [isDark]); // Run effect on mount and whenever isDark changes :contentReference[oaicite:4]{index=4}

	return (
		<button
			onClick={() => setIsDark((prev) => !prev)}
			aria-label="Toggle Theme"
			className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
		>
			{isDark ? '🌙' : '☀️'}
		</button>
	);
}
