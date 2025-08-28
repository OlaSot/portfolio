import React, { useState, useEffect, useRef } from "react";
import Portfolio from "./Portfolio";
import { projects } from "../shared/data/projects";

const PortfolioTerminal: React.FC = () => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");
  const [showGallery, setShowGallery] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          inputRef.current?.focus();
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrolledBelow = rect.bottom < window.innerHeight - 50;
        if (scrolledBelow && !showGallery) {
          setShowHint(true);
        } else {
          setShowHint(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showGallery]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = command.trim().toLowerCase();

    if (trimmed === "list") {
      setIsLoading(true);
      setOutput("Loading projects...");
      setShowHint(false);
      setCommand("");

      setTimeout(() => {
        setOutput("Projects loaded...");
        setShowGallery(true);
        setIsLoading(false);
      }, 1500);
    } else {
      setOutput(`Unknown command: ${command}`);
      setCommand("");
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen text-[#00ffcc] px-6 py-12 font-mono flex items-center justify-center"
    >
      {showHint && (
        <div className="fixed top-[100px] left-1/2 transform -translate-x-1/2 bg-[#000000ee] px-4 py-2 rounded-lg border border-[#00ffcc44] shadow-[0_0_15px_#00ffcc33] text-[#00ffcc] text-sm font-mono z-[999] animate-pulse transition-opacity duration-500">
          ↓ Type <span className="text-[#00ffaa] font-bold">list</span> to load
          projects
        </div>
      )}

      <div
        className={`container mx-auto max-w-[1400px] border border-[#00ffcc44] rounded-xl shadow-[0_0_30px_#00ffcc22] p-6 transition-all duration-700 ease-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex items-center justify-between border-b border-[#00ffcc22] pb-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <p className="text-sm text-[#00ffcc99]">Portfolio Terminal</p>
        </div>

        <div>
          <p>
            Type <span className="text-[#00ffaa] font-bold">list</span> to see
            all projects
          </p>

          <form
            onSubmit={handleCommand}
            className="mt-4 flex items-center gap-2"
          >
            <span className="text-[#00ffcc] whitespace-nowrap">
              visitor@ola.dev:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              disabled={isLoading}
              className="bg-transparent border-b border-[#00ffcc88] text-[#00ffcc] placeholder-[#00ffcc55] focus:outline-none w-full disabled:opacity-50"
              placeholder="Enter command..."
            />
          </form>

          {output && <p className="mt-4">{output}</p>}
        </div>

        {showGallery && !isLoading && (
          <div className="mt-10">
            <Portfolio projects={projects} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioTerminal;
