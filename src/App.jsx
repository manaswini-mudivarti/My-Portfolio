// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<main>
				<HomeSection />
				<AboutSection />
				<SkillsSection />
				<CertificationsSection />
				<ProjectsSection />
				<ResumeSection />
				<ContactSection />
				<Footer />
				{/* …other sections… */}
			</main>
		</>
	);
}

export default App;
