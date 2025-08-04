import React, { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string[];
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Healthy Bowl",
    category: ["branding", "web"],
    image: "/healthyBowl/HealthyBowl.png",
    description:
      "Complete brand identity for luxury skincare line including logo, packaging, and digital presence.",
    technologies: ["Adobe Illustrator", "Figma", "After Effects"],
    link: "https://healthybowls.vercel.app/",
  },
  {
    id: 2,
    title: "Cargo Service Berlin",
    category: ["Branding"],
    image: "/images/CargoService.png",
    description:
      "Cargo Service Berlin specializes in providing high-quality services in the field of air and land freight transport to the CIS countries. The company places great importance on fast and secure delivery of goods and offers reliable as well as efficient logistics solutions for its customers",
    technologies: ["Adobe Illustrator", "Photoshop", "After Effects"],
    link: "https://sotovaola21.myportfolio.com/cargo-service",
  },
  {
    id: 3,
    title: "Gitakan",
    category: ["branding", "web"],
    image: "/images/Gitakan.png",
    description:
      "Brand identity and packaging design for local coffee roastery with sustainable focus.",
    technologies: ["Adobe Creative Suite", "Procreate"],
    link: "https://gitakan.com/en",
  },
  {
    id: 4,
    title: "FZ Media",
    category: ["web", "branding"],
    image: "/images/fzmedia.png",
    description:
      "Interactive portfolio website with custom animations and scroll-triggered effects.",
    technologies: ["React", "Framer Motion", "GSAP"],
    link: "https://fz-media.vercel.app/",
  },
  {
    id: 5,
    title: "Mainwest",
    category: ["branding"],
    description:
      "A unique transformer bag, which is allowed for most airlines, it is forbidden to take it into the cabin. It solves the problem of those who do not have a car, but have a bicycle. It unfolds so that there is maximum comfort",
    image: "/images/Mainwest.png",
    technologies: [
      "Adobe Illustrator",
      "InDesign",
      "Photoshop",
      "After Effects",
    ],
    link: "https://sotovaola21.myportfolio.com/mainwest",
  },
  {
    id: 6,
    title: "E-commerce Dashboard",
    category: ["web"],
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    description:
      "Clean and intuitive dashboard design for e-commerce analytics platform.",
    technologies: ["Figma", "Vue.js", "D3.js"],
    link: "#",
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["all", "branding", "web", "print"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-purple-50"
      id="portfolio"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Selected{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated selection of projects that showcase my passion for
            creating meaningful digital experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`hoverable px-6 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${
                filter === category
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-purple-600 border-2 border-purple-200 hover:border-purple-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="hoverable relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ height: `${200 + (index % 3) * 100}px` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <Eye className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5 text-purple-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full capitalize"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 font-medium rounded-full mb-4 capitalize">
                  {selectedProject.category}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-purple-100 text-purple-600 font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hoverable bg-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-700 hover:shadow-lg"
                >
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
