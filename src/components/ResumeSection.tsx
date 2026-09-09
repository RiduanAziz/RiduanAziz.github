import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Looking for a detailed summary?</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
          You can download my full resume or preview it directly in your browser for academic, internship, or development roles.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href={PERSONAL_INFO.resumePath}
            download
            className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-sm transition"
          >
            Download Resume (PDF)
          </a>
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-semibold text-sm transition"
          >
            View Resume Online
          </a>
        </div>
      </div>
    </section>
  );
};
