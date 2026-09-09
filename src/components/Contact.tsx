import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Get In Touch</h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Have a project, research idea, or opportunity? Let's connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Direct Contact Info */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
            <h3 className="text-lg font-bold text-white">Contact Information</h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <span className="p-2 rounded bg-slate-800 text-emerald-400">✉</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-emerald-400 transition">
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <span className="p-2 rounded bg-slate-800 text-emerald-400">💻</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  github.com/riduanaziz
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <span className="p-2 rounded bg-slate-800 text-emerald-400">👔</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
                  linkedin.com/in/riduanaziz
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            {submitted ? (
              <div className="text-center py-8 space-y-2">
                <span className="text-emerald-400 text-3xl">✓</span>
                <h4 className="text-white font-bold text-lg">Thank You!</h4>
                <p className="text-xs text-slate-400">Your message mock submission was successful.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-500"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
