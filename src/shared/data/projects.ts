export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  link: string;
  category: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "healthy-bowl",
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
    slug: "cargo-service-berlin",
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
    slug: "gitakan",
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
    slug: "fz-media",
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
    slug: "mainwest",
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
    slug: "ecommerce-dashboard",
    title: "E-commerce Dashboard",
    category: ["web"],
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    description:
      "Clean and intuitive dashboard design for e-commerce analytics platform.",
    technologies: ["Figma", "Vue.js", "D3.js"],
    link: "#",
  },
];
