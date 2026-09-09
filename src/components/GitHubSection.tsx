import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="font-mono text-emerald-400 text-xl">04.</span> Open Source & GitHub
        </h2>
        <p className="text-slate-400 mb-10 max-w-2xl">
          I actively build, share, and maintain code on GitHub, focusing on open datasets, AI applications, and software tools.
        </p>

        {/* GitHub Stats Card Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
            <span className="block text-3xl font-bold text-emerald-400 font-mono mb-1">8+</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Public Projects</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
            <span className="block text-3xl font-bold text-emerald-400 font-mono mb-1">Python / Java</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Primary Stack</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
            <span className="block text-3xl font-bold text-emerald-400 font-mono mb-1">Active</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Development Status</span>
          </div>
        </div>

        {/* GitHub Visual Identity Box */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              Explore My Repositories
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Check out my complete code repositories, star my projects, or collaborate on Bengali speech recognition & AI projects.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold transition flex items-center gap-2 whitespace-nowrap"
          >
            Visit @riduanaziz on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};
