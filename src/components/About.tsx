import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Adobe Creative Suite', level: 95 },
    { name: 'Figma & Sketch', level: 90 },
    { name: 'React & Next.js', level: 85 },
    { name: 'UI/UX Design', level: 92 },
    { name: 'Brand Identity', level: 88 },
    { name: 'Motion Graphics', level: 80 }
  ];

  const tools = [
    'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma',
    'Sketch', 'After Effects', 'Principle', 'React', 'Next.js', 'Framer Motion'
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-8">
              About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Hi! I'm Sarah, a passionate creative designer with over 5 years of experience 
                crafting beautiful digital experiences. I believe great design should tell a story, 
                evoke emotion, and create meaningful connections between brands and their audiences.
              </p>
              
              <p className="text-lg">
                My journey began with traditional graphic design, but I quickly fell in love with 
                the intersection of design and technology. Today, I specialize in creating cohesive 
                brand identities and translating them into engaging digital experiences.
              </p>
              
              <p className="text-lg">
                When I'm not designing, you'll find me exploring local art galleries, experimenting 
                with new creative techniques, or enjoying a perfectly brewed lavender latte.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Palette className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">30+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">5+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Code className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">15+</div>
                <div className="text-sm text-gray-600">Awards</div>
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-purple-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Tools I Use</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200 hover:bg-purple-100 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">My Design Philosophy</h3>
              <p className="text-gray-600 leading-relaxed">
                "Great design is invisible. It's not about making something look pretty—it's about 
                creating an experience that feels natural, intuitive, and meaningful. Every pixel 
                has a purpose, every interaction tells a story."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;