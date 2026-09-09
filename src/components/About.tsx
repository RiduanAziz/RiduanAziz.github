import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/60 border-t border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="font-mono text-emerald-400 text-xl">01.</span> About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4 text-slate-300 leading-relaxed text-base">
            <p>
              I am an undergraduate student pursuing a <strong className="text-white">BSc in Computer Science and Engineering</strong>. 
              My academic journey is driven by a deep interest in software engineering and applied artificial intelligence.
            </p>
            <p>
              My primary research and technical focus centers on <strong className="text-emerald-400">AI, Machine Learning, Deep Learning, Natural Language Processing (NLP), and Computer Vision</strong>. 
              I am particularly invested in regional language technology, working on Bengali speech recognition and dialectal speech corpora.
            </p>
            <p>
              Across software development, I have practical experience spanning web development, Android applications, desktop utilities, and IoT/embedded prototypes. Complementing my technical work, I actively participate in community service and leadership through Bangladesh Scouts and technology student groups.
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/60 p-6 rounded-xl space-y-4 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white border-b border-slate-700 pb-2">Quick Highlights</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">▹</span> Degree: BSc in CSE
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">▹</span> Focus: AI / ML / NLP / Speech
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">▹</span> Domain: Dialectal Language Tech
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">▹</span> Practical Dev: Web, Android, IoT
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">▹</span> Leadership: Bangladesh Scouts
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
