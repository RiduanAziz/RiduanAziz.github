import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHubSection } from './components/GitHubSection';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { ResearchInterests } from './components/ResearchInterests';
import { Leadership } from './components/Leadership';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark bg-slate-950 text-slate-100 font-sans' : 'bg-slate-50 text-slate-900 font-sans'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubSection />
        <Education />
        <Certifications />
        <ResearchInterests />
        <Leadership />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
