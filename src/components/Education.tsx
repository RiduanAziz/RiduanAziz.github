import React from 'react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
          <span className="font-mono text-emerald-400 text-xl">05.</span> Education
        </h2>

        <div className="space-y-8">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-emerald-400 font-medium text-sm">{edu.institution}</p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-full w-fit">
                  {edu.period}
                </span>
              </div>

              {edu.cgpa && (
                <p className="text-sm text-slate-300 mb-4">
                  <strong className="text-white">CGPA:</strong> {edu.cgpa}
                </p>
              )}

              <div className="mb-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span key={course} className="text-xs bg-slate-800 text-slate-300 border border-slate-700/60 px-2.5 py-1 rounded">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {edu.achievements && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Key Activities</h4>
                  <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                    {edu.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
