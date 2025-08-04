import React from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="cursor-none">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Olha Sotova
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hoverable text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Home
              </a>
              <a href="#portfolio" className="hoverable text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Portfolio
              </a>
              <a href="#about" className="hoverable text-gray-700 hover:text-purple-600 transition-colors font-medium">
                About
              </a>
              <a href="#testimonials" className="hoverable text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Testimonials
              </a>
              <a href="#contact" className="hoverable text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Contact
              </a>
            </div>
            <button className="hoverable bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors">
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <div id="home">
          <Hero />
        </div>
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Sarah
            </div>
            <p className="text-gray-400 mb-6">
              Creating beautiful digital experiences that make a difference.
            </p>
            <div className="text-gray-500 text-sm">
              © 2025 Sarah Chen. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;