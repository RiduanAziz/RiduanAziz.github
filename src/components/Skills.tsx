import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
          <span className="font-mono text-emerald-400 text-xl">02.</span> Technical Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/40 transition duration-300 shadow-md flex flex-col"
            >
              <h3 className="text-lg font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-800 font-mono">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-slate-800 hover:bg-slate-700/80 text-slate-200 border border-slate-700/70 px-3 py-1.5 rounded-md transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
