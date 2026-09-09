import React from 'react';
import { RESEARCH_INTERESTS } from '../data/portfolioData';

export const ResearchInterests: React.FC = () => {
  return (
    <section id="research" className="py-20 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="font-mono text-emerald-400 text-xl">07.</span> Research Interests
        </h2>
        <p className="text-slate-400 mb-8 max-w-2xl">
          My primary academic focus centers around building robust AI models tailored for low-resource languages, disaster management, and speech synthesis.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {RESEARCH_INTERESTS.map((interest) => (
            <div
              key={interest}
              className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-xl flex items-center gap-3 transition"
            >
              <span className="text-emerald-400 text-lg">◈</span>
              <span className="text-sm font-medium text-slate-200">{interest}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
