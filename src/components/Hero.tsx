"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ScanningPhoto from "./ScanningPhoto";
import TypewriterText from "./typeWriterText";

const Hero: React.FC = () => {


  return (
    <section className="relative min-h-screen overflow-hidden  text-white">
      {/* Background Blobs */}


      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
            >
              <span className="text-sm text-[#00ffc3] font-mono tracking-wider">
                AVAILABLE FOR PROJECTS
              </span>
            </motion.div>

            <div className="space-y-4">
             <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight font-mono">
  <TypewriterText text="Web Designer" delay={100} />
  <br />
  <TypewriterText
    text="& Developer"
    delay={1200}
    className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffc3] to-[#ff005d]"
  />
</h1>


              <p className="text-lg text-gray-300 max-w-xl">
                I merge creativity and code to craft cutting-edge digital
                experiences that make brands unforgettable.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="hoverable bg-[#00ffc3] text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00ffc3]">
               <a
  href="#portfolio"
  className="hoverable bg-[#00ffc3] text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00ffc3] scroll-smooth"
>
  View My Work
</a>

              </button>
              <button className="hoverable border-2 border-[#00ffc3] text-[#00ffc3] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#00ffc3] hover:text-black hover:scale-105">
                Get In Touch
              </button>
            </div>
          </motion.div>

          {/* Scanning Photo Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <ScanningPhoto />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-[#00ffc3]" />
      </motion.div>
    </section>
  );
};

export default Hero;
