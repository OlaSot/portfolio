'use client';

import React from 'react';


const About: React.FC = () => {
  return (
<section className="py-20 text-[#00ffcc] font-mono" id="about">
  <div className="container mx-auto px-6">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffcc] via-white to-[#ff005d] tracking-tight mb-8">
          SYSTEM // ABOUT_ME
        </h2>
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      
      {/* LEFT: Intro + Info */}
      <div>
        <div className="space-y-6 text-[#00ffccaa] leading-relaxed">
          <p className="animate-terminal overflow-hidden whitespace-nowrap w-full">
            I'm a self-taught frontend developer and designer with a solid background in UI/UX.
          </p>
          <p className="animate-terminal overflow-hidden whitespace-nowrap w-full" style={{ animationDelay: '1s' }}>
            I combine aesthetic design with clean, maintainable code — from wireframes to deployment.
          </p>
          <p className="animate-terminal overflow-hidden whitespace-nowrap w-full" style={{ animationDelay: '2s' }}>
            Currently focused on React, TypeScript, Next.js and modern design systems.
          </p>
        </div>

        {/* Experience & Stack */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-[#0b0a1f] border border-[#00ffcc44] rounded-xl p-4 text-left shadow-[0_0_15px_#00ffcc22]">
            <p className="text-sm text-[#00ffccaa] mb-1">Experience</p>
            <p className="text-xl font-bold text-[#00ffcc]">3 years (design)</p>
            <p className="text-xl font-bold text-[#00ffcc]">1+ year (frontend)</p>
          </div>

          <div className="bg-[#0b0a1f]  border border-[#00ffcc44] rounded-xl p-4 text-left shadow-[0_0_15px_#00ffcc22]">
            <p className="text-sm text-[#00ffccaa] mb-1">Stack</p>
            <p className="text-[#00ffcc] text-base">React, TypeScript, Next.js</p>
            <p className="text-[#00ffcc] text-base">SCSS, Tailwind, Figma</p>
          </div>
        </div>

        {/* VALUES */}
        <div className="bg-[#0b0a1f]  border border-[#ff005d55] text-[#ff005d] rounded-xl p-6 mt-8 shadow-[0_0_20px_#ff005d22]">
          <h3 className="text-xl font-bold mb-4">// VALUES</h3>
          <pre className="text-sm whitespace-pre-wrap leading-loose text-[#ff88aa]">
{`• Clean & scalable code
• Respect for deadlines
• Attention to detail
• Ownership mindset
• Constant learning`}
          </pre>
        </div>
      </div>

      {/* RIGHT: Skills */}
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold text-[#00ffaa] mb-6">SKILL_MODULES</h3>
          <div className="space-y-6">
            {[
              { name: 'Adobe Creative Suite', level: 95 },
              { name: 'Figma & Sketch', level: 90 },
              { name: 'React & Next.js', level: 85 },
              { name: 'UI/UX Design', level: 92 },
              { name: 'Brand Identity', level: 88 },
              { name: 'Motion Graphics', level: 80 }
            ].map((skill) => (
              <div key={skill.name} className="bg-[#0b0a1f]  border border-[#00ffaa33] rounded-lg px-4 py-3">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-[#0b0a1f]  h-2 rounded-full">
                  <div className="h-full bg-gradient-to-r from-[#00ffaa] to-[#00ffcc] rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  </div>
</section>

  );
};

export default About;
