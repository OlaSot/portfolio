'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "CEO",
    company: "TechStart Inc.",
    content: "Olha's creative vision transformed our brand completely. Her attention to detail and ability to translate our ideas into stunning visuals exceeded all expectations.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    rating: 5
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    role: "Marketing Director",
    company: "Bloom Studios",
    content: "Working with Olha was an absolute pleasure. She not only delivered exceptional design work but also provided valuable insights that helped shape our digital strategy.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 5
  },
  {
    id: 3,
    name: "David Thompson",
    role: "Founder",
    company: "Artisan Coffee Co.",
    content: "Olha's brand identity work for our coffee roastery was phenomenal. She captured the essence of our artisanal approach perfectly.",
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
<section id="testimonials" className="bg-black py-20 text-[#00ffcc] font-mono">
  <div className="container mx-auto px-4 max-w-4xl">
    <h2 className="text-5xl font-bold mb-10 text-white">// CLIENT_FEEDBACK_MODULE</h2>

    <div className="bg-[#111] border border-[#00ffcc33] rounded-xl p-6 shadow-[0_0_30px_#00ffcc44]">
      <div className="text-sm mb-2 text-[#00ffaa]"> cat testimonial_{currentIndex + 1}.log</div>
      <pre className="text-base text-[#ffffffcc] leading-relaxed animate-terminal">
        "{testimonial.content}"
      </pre>
      <div className="mt-6 border-t border-[#00ffcc33] pt-4 flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full border-2 border-[#00ffcc77]"
        />
        <div>
          <div className="text-[#ffffff] font-semibold">{testimonial.name}</div>
          <div className="text-[#00ffaa] text-sm">{testimonial.role} @ {testimonial.company}</div>
        </div>
      </div>
    </div>

    <div className="mt-8 flex justify-center gap-4">
      <button onClick={prev} className="terminal-btn">prev</button>
      <button onClick={next} className="terminal-btn">next</button>
    </div>
  </div>
</section>

  );
};

export default Testimonials;
