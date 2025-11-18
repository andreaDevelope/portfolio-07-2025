import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ExternalLink, Github, Code2, Layers, Server, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type ProjectCategory = "All" | "Frontend" | "Backend" | "Full-Stack";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: ProjectCategory;
  tech: string[];
  github?: string;
  demo?: string;
  year: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Archivia",
    description: "University marketplace and study platform connecting students, libraries, and universities.",
    longDescription:
      "Archivia is an innovative full-stack platform designed to simplify academic life. It connects students, libraries, and universities through a digital ecosystem where users can buy and sell books, share study materials, and access collaborative tools. Built with Angular, Spring Boot, and PostgreSQL, it integrates secure authentication, file management via AWS S3, and modular microservices for scalability.",
    image: "/images/projects/project1.png",
    category: "Full-Stack",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "AWS S3", "Elasticsearch"],
    github: "Private Repo",
    year: "2024",
    highlights: ["Book & Notes Marketplace", "University Partnerships", "Collaborative Study Tools", "Secure File Storage (S3)"],
  },
  {
    id: 2,
    title: "Portfolio v2",
    description: "Next-generation personal portfolio built with modern animations and responsive UI.",
    longDescription:
      "A redesigned personal portfolio built with React, TypeScript, and Framer Motion. Features smooth animations, interactive sections, responsive layout, and dynamic project filtering with clean modern aesthetics.",
    image: "/images/projects/portfolio-v2.png",
    category: "Frontend",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/andreaDevelope/portfolio-v2.git",
    year: "2025",
    highlights: ["Framer Animations", "Responsive Design", "Dynamic Filtering", "Modern UI"],
  },
  {
    id: 3,
    title: "LeetCode Problems",
    description: "Collection of Java-based algorithm and data structure solutions.",
    longDescription:
      "A personal repository of algorithm implementations and problem-solving exercises inspired by LeetCode challenges. Written in Java with JUnit testing and performance optimizations.",
    image: "/images/projects/let-code.png",
    category: "Backend",
    tech: ["Java", "JUnit", "Data Structures", "Algorithms", "OOP"],
    github: "https://github.com/andreaDevelope/leetcode-problems-10-2025.git",
    year: "2025",
    highlights: ["100+ Exercises", "Algorithm Optimization", "Clean OOP Design", "Unit Tested"],
  },
  {
    id: 4,
    title: "The Lost Bug Hunt",
    description: "Interactive pirate-themed Angular game mixing quizzes, logic, and treasure hunting.",
    longDescription:
      "A gamified web app built entirely in Angular featuring avatar customization, interactive quizzes, and a treasure hunt system. Players earn scores based on click sequences and compete on a live leaderboard managed with JSON Server.",
    image: "/images/projects/c.b.p.img.png",
    category: "Frontend",
    tech: ["Angular", "SCSS", "Bootstrap", "JSON Server"],
    github: "https://github.com/andreaDevelope/caccia-al-bug-perduto.git",
    year: "2024",
    highlights: ["Gamification", "Avatar Customization", "Quiz Engine", "Leaderboard System"],
  },
  {
    id: 5,
    title: "SapientPlus",
    description: "Task management platform with collaboration and analytics features.",
    longDescription:
      "A full-stack enterprise application built with Angular and Spring Boot. Includes real-time task updates, team collaboration tools, JWT-based authentication, and data visualization dashboards.",
    image: "/images/projects/spaient+.png",
    category: "Full-Stack",
    tech: ["Angular", "Spring Boot", "WebSocket", "Redis", "JWT"],
    github: "https://github.com/andreaDevelope/Capstom-Epicode-FullStack",
    year: "2024",
    highlights: ["Real-time Updates", "Team Collaboration", "Secure Auth", "Analytics Dashboard"],
  },
  {
    id: 6,
    title: "RinoTalks – Digital Age Quiz",
    description: "Full-stack quiz experience powered by React, Supabase, and a custom analytics dashboard.",
    longDescription:
      "RinoTalks is a full-stack project combining an interactive generational quiz with a real backend powered by Supabase. The application stores quiz results securely, computes generational scoring serverless-side, and provides an authenticated admin dashboard with real-time analytics using Recharts. Built for a client talk-show, this project integrates modern animations, full mobile responsiveness, and an end-to-end data flow from quiz submission to admin statistics.",
    image: "/images/projects/rino_dashboard.png",
    category: "Full-Stack",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "Recharts", "Netlify"],
    github: "",
    demo: "https://snazzy-squirrel-ccc5c7.netlify.app/",
    year: "2025",
    highlights: [
      "Full-stack architecture with Supabase",
      "Admin dashboard with analytics",
      "Real-time data visualization",
      "RLS-secured writes",
      "Modern UI/UX with animations",
      "Produced for a real talk-show client",
    ],
  },
];

const categories: ProjectCategory[] = ["All", "Frontend", "Backend", "Full-Stack"];

const categoryIcons = {
  All: Layers,
  Frontend: Code2,
  Backend: Server,
  "Full-Stack": Layers,
};

export function ProjectsPage({ onBackToHome }: { onBackToHome: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen relative" style={{ background: "#0a0e27" }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={onBackToHome}
            className="mb-8 flex items-center gap-2 px-4 py-2 rounded-lg border group"
            style={{
              background: "rgba(26, 31, 58, 0.5)",
              borderColor: "rgba(0, 255, 65, 0.3)",
              color: "#00ff41",
            }}
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </motion.button>

          {/* Title */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center">
            <h1
              className="mb-4"
              style={{
                fontSize: "4rem",
                fontWeight: 700,
                color: "#e0e0e0",
                textShadow: "0 0 30px rgba(0,255,65,0.5)",
              }}
            >
              My Projects
            </h1>
            <p className="text-[#b0b0b0] max-w-2xl mx-auto" style={{ fontSize: "1.25rem" }}>
              A collection of applications, experiments and full-stack works
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section
        className="sticky top-0 z-40 backdrop-blur-xl border-b py-6 px-6"
        style={{ borderColor: "rgba(255, 255, 255, 0.1)", background: "rgba(10, 14, 39, 0.8)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => {
              const Icon = categoryIcons[category];
              const isActive = selectedCategory === category;
              return (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300"
                  style={{
                    background: isActive ? "linear-gradient(135deg, rgba(0,255,65,0.2) 0%, rgba(0,255,255,0.1) 100%)" : "rgba(26, 31, 58, 0.5)",
                    borderColor: isActive ? "#00ff41" : "rgba(255, 255, 255, 0.1)",
                    color: isActive ? "#00ff41" : "#b0b0b0",
                    boxShadow: isActive ? "0 0 20px rgba(0,255,65,0.3)" : "none",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                  <span style={{ fontWeight: isActive ? 600 : 400 }}>{category}</span>
                  {category === "All" && (
                    <Badge
                      variant="secondary"
                      style={{
                        background: isActive ? "#00ff41" : "rgba(255, 255, 255, 0.1)",
                        color: isActive ? "#0a0e27" : "#808080",
                        border: "none",
                      }}
                    >
                      {projects.length}
                    </Badge>
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div
                    className="rounded-xl overflow-hidden border backdrop-blur-sm h-full flex flex-col"
                    style={{
                      background: "rgba(26, 31, 58, 0.5)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} className="w-full h-full">
                        <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-contain bg-[#0a0e27]" />
                      </motion.div>

                      {/* Year badge */}
                      <div
                        className="absolute top-4 right-4 px-3 py-1 rounded-full backdrop-blur-md"
                        style={{
                          background: "rgba(0, 0, 0, 0.6)",
                          color: "#00ff41",
                          border: "1px solid rgba(0, 255, 65, 0.3)",
                        }}
                      >
                        {project.year}
                      </div>

                      {/* Overlay gradient */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: "linear-gradient(180deg, transparent 0%, rgba(10,14,39,0.95) 100%)",
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Category badge */}
                      <div className="mb-3">
                        <span
                          className="inline-block px-3 py-1 rounded-md"
                          style={{
                            background: "rgba(0, 255, 255, 0.1)",
                            color: "#00ffff",
                            fontSize: "0.75rem",
                            border: "1px solid rgba(0, 255, 255, 0.3)",
                          }}
                        >
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="mb-2"
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: 600,
                          color: "#e0e0e0",
                        }}
                      >
                        {project.title}
                      </h3>

                      <p className="mb-4 text-[#b0b0b0] flex-1" style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded"
                            style={{
                              background: "rgba(176, 38, 255, 0.1)",
                              color: "#b026ff",
                              fontSize: "0.75rem",
                              border: "1px solid rgba(176, 38, 255, 0.2)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span
                            className="px-2 py-1 rounded"
                            style={{
                              background: "rgba(255, 255, 255, 0.05)",
                              color: "#808080",
                              fontSize: "0.75rem",
                            }}
                          >
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        {project.github && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1"
                            style={{
                              borderColor: "#00ff41",
                              color: "#00ff41",
                              background: "transparent",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, "_blank");
                            }}
                          >
                            <Github size={16} className="mr-2" />
                            Code
                          </Button>
                        )}
                        {project.demo && (
                          <Button
                            size="sm"
                            className="flex-1"
                            style={{
                              background: "#00ff41",
                              color: "#0a0e27",
                              border: "none",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.demo, "_blank");
                            }}
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <motion.div
                      className="h-1"
                      style={{
                        background: "linear-gradient(90deg, #00ff41 0%, #00ffff 50%, #b026ff 100%)",
                      }}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-1 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle at center, rgba(0,255,65,0.2) 0%, transparent 70%)",
                      filter: "blur(20px)",
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-[#808080]" style={{ fontSize: "1.125rem" }}>
                No projects found in this category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(10px)" }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border"
              style={{
                background: "rgba(26, 31, 58, 0.95)",
                borderColor: "rgba(0, 255, 65, 0.3)",
                boxShadow: "0 0 50px rgba(0, 255, 65, 0.3)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center border z-10"
                style={{
                  background: "rgba(10, 14, 39, 0.9)",
                  borderColor: "#00ff41",
                  color: "#00ff41",
                }}
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div
                className="relative overflow-hidden rounded-t-2xl flex items-center justify-center bg-[#0a0e27]"
                style={{
                  minHeight: "300px",
                  maxHeight: "500px",
                  aspectRatio: "16/9",
                }}
              >
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-auto h-auto max-w-full max-h-full object-contain transition-transform duration-500"
                />

                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 60%, rgba(26, 31, 58, 0.95) 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-3 py-1 rounded-md"
                      style={{
                        background: "rgba(0, 255, 255, 0.1)",
                        color: "#00ffff",
                        fontSize: "0.875rem",
                        border: "1px solid rgba(0, 255, 255, 0.3)",
                      }}
                    >
                      {selectedProject.category}
                    </span>
                    <span className="text-[#808080]">{selectedProject.year}</span>
                  </div>

                  <h2
                    className="mb-4"
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      color: "#e0e0e0",
                      textShadow: "0 0 20px rgba(0,255,65,0.3)",
                    }}
                  >
                    {selectedProject.title}
                  </h2>

                  <p className="text-[#b0b0b0]" style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "#e0e0e0",
                    }}
                  >
                    Key Features
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg"
                        style={{
                          background: "rgba(0, 255, 65, 0.05)",
                          border: "1px solid rgba(0, 255, 65, 0.2)",
                        }}
                      >
                        <div className="w-2 h-2 rounded-full" style={{ background: "#00ff41" }} />
                        <span className="text-[#d0d0d0]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "#e0e0e0",
                    }}
                  >
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-lg"
                        style={{
                          background: "rgba(176, 38, 255, 0.1)",
                          color: "#b026ff",
                          border: "1px solid rgba(176, 38, 255, 0.3)",
                          fontSize: "0.9375rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1"
                      style={{
                        borderColor: "#00ff41",
                        color: "#00ff41",
                        background: "transparent",
                      }}
                      onClick={() => window.open(selectedProject.github, "_blank")}
                    >
                      <Github size={20} className="mr-2" />
                      View Code
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button
                      size="lg"
                      className="flex-1"
                      style={{
                        background: "#00ff41",
                        color: "#0a0e27",
                        border: "none",
                        boxShadow: "0 0 20px rgba(0, 255, 65, 0.4)",
                      }}
                      onClick={() => window.open(selectedProject.demo, "_blank")}
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
