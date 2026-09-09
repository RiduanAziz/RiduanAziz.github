import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-500">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 Riduan Aziz. Built with passion for technology.</p>

        <div className="flex gap-4 text-slate-400">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
            GitHub
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
            LinkedIn
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-emerald-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
