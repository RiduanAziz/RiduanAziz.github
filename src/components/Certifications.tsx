import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
          <span className="font-mono text-emerald-400 text-xl">06.</span> Certifications & Achievements
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-slate-700 transition"
            >
              <div>
                <span className="text-xs font-mono text-emerald-400 block mb-2">{cert.year}</span>
                <h3 className="text-base font-bold text-white mb-1">{cert.name}</h3>
                <p className="text-xs text-slate-400 mb-4">{cert.issuer}</p>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-400 hover:underline inline-flex items-center gap-1 mt-auto"
                >
                  Verify Credential ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
