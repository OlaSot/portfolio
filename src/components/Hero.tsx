import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-2000"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-700">Available for Projects</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-800">Creative</span>
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Designer
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                I craft beautiful digital experiences that blend creativity with functionality. 
                Specializing in brand identity, web design, and interactive storytelling.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="hoverable bg-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-lg">
                View My Work
              </button>
              <button className="hoverable border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-600 hover:text-white hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="relative">
            <div className="relative z-10 max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 transform -rotate-2 transition-transform duration-300 hover:rotate-0">
                  <div className="w-full h-80 bg-gradient-to-br from-purple-300 to-pink-300 rounded-2xl flex items-center justify-center">
                      <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
        <img
          src="/images/photo_2025-08-01_22-09-06.jpg"
          alt="Portrait"
          className="w-full h-full object-cover"
        />
      </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 w-6 h-6 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-10 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-purple-600" />
      </div>
    </section>
  );
};

export default Hero;