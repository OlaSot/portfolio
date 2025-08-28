import { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import PortfolioTerminal from "./components/PortfolioTerminal";

function App() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0f0c29] text-white cursor-none font-sans">
      <CustomCursor />
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] bg-[#ff005d] rounded-full blur-[150px] opacity-30 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00ffc3] rounded-full blur-[120px] opacity-30 animate-pulse delay-500"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#111111]/80 backdrop-blur-lg border-b border-[#1f1f1f] shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-extrabold tracking-widest bg-gradient-to-r from-[#00ffc3] to-[#ff005d] bg-clip-text text-transparent">
              OLHA SOTOVA
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {["home", "portfolio", "about", "testimonials", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="hoverable text-gray-300 hover:text-[#00ffc3] transition-colors font-medium uppercase text-sm tracking-wide"
                >
                  {section}
                </a>
              ))}
            </div>

            {/* Call-to-action */}
            <button className="hoverable bg-[#ff005d] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e60048] transition-all hover:shadow-[0_0_12px_#ff005d]">
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
        <section id="portfolio"><PortfolioTerminal /></section>
        
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-[#111] text-white py-12 border-t border-[#222]">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#00ffc3] to-[#ff005d] bg-clip-text text-transparent mb-4">
              OLHA
            </div>
            <p className="text-gray-400 mb-6">
              Designing futuristic digital experiences that captivate and inspire.
            </p>
            <div className="text-gray-600 text-sm">
              © 2025 Olha Sotova. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
