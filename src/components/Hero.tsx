import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-emerald-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for Research, Internships & Software Projects
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
          {PERSONAL_INFO.name}
        </h1>

        <p className="text-lg sm:text-xl font-medium text-emerald-400 mb-6 font-mono">
          {PERSONAL_INFO.title}
        </p>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 mb-8 leading-relaxed">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Prominent Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold transition shadow-lg shadow-emerald-500/20"
          >
            View Projects
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold border border-slate-700 transition"
          >
            GitHub Profile
          </a>
          <a
            href={PERSONAL_INFO.resumePath}
            download
            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold border border-slate-700 transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 font-semibold transition"
          >
            Contact Me
          </a>
        </div>

        {/* Social Quick Links */}
        <div className="flex justify-center items-center gap-6 text-slate-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-emerald-400 transition"
            aria-label="Email"
          >
            <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
