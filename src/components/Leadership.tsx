import React from 'react';
import { LEADERSHIP } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
          <span className="font-mono text-emerald-400 text-xl">08.</span> Leadership & Community Engagement
        </h2>

        <div className="space-y-6">
          {LEADERSHIP.map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 className="text-lg font-bold text-white">
                  {item.title} <span className="text-emerald-400">@ {item.organization}</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">{item.period}</span>
              </div>

              <p className="text-sm text-slate-300 mb-4">{item.description}</p>

              <ul className="space-y-1.5">
                {item.bullets.map((b, i) => (
                  <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-emerald-400">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
