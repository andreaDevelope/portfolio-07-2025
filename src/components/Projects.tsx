import { motion } from "motion/react";
import { Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Archivia",
    description: "University marketplace and study platform connecting students, libraries, and universities.",
    image: "/images/projects/project1.png",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Material UI", "Chart.js"],
    color: "#00ff41",
    private: true,
  },
  {
    title: "The Lost Bug Hunt",
    description: "Interactive pirate-themed Angular game mixing quizzes, logic, and treasure hunting.",
    image: "/images/projects/c.b.p.img.png",
    tech: ["Angular", "SCSS", "Bootstrap", "JSON Server"],
    color: "#00ffff",
    repoUrl: "https://github.com/andreaDevelope/Capstom-Epicode-FullStack.git",
  },
  {
    title: "Java & LeetCode Exercises",
    description: "Collection of Java-based algorithm and data structure solutions",
    image: "/images/projects/let-code.png",
    tech: ["Java", "JUnit", "Data Structures", "Algorithms", "OOP"],
    color: "#b026ff",
    repoUrl: "https://github.com/andreaDevelope/leetcode-problems-10-2025.git",
  },
];

export function Projects({ onViewProjects }: { onViewProjects?: () => void }) {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="mb-4"
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              color: "#e0e0e0",
              textShadow: "0 0 20px rgba(176,38,255,0.3)",
            }}
          >
            Featured Projects
          </h2>
          <p className="text-[#b0b0b0]" style={{ fontSize: "1.125rem" }}>
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div
                className="rounded-xl overflow-hidden border backdrop-blur-sm"
                style={{
                  background: "rgba(26, 31, 58, 0.5)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} className="w-full h-full">
                    <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </motion.div>

                  {/* Overlay on hover */}
                  {project.private ? (
                    // 👇 Mostra etichetta "Private Repository"
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        background: "rgba(10, 14, 39, 0.85)",
                      }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span
                        style={{
                          color: project.color,
                          fontWeight: 600,
                          fontSize: "1rem",
                          background: `${project.color}15`,
                          border: `1px solid ${project.color}40`,
                          padding: "0.5rem 1rem",
                          borderRadius: "8px",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        Private Repository
                      </span>
                    </motion.div>
                  ) : (
                    // 👇 Mostra il bottone GitHub solo se pubblica
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        background: "rgba(10, 14, 39, 0.9)",
                      }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full flex items-center justify-center border"
                        style={{
                          background: "transparent",
                          borderColor: project.color,
                        }}
                        onClick={() => window.open(project.repoUrl, "_blank")}
                      >
                        <Github size={20} style={{ color: project.color }} />
                      </motion.button>
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "#e0e0e0",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p className="mb-4 text-[#b0b0b0]" style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md"
                        style={{
                          background: `${project.color}15`,
                          color: project.color,
                          fontSize: "0.8125rem",
                          border: `1px solid ${project.color}30`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="h-1"
                  style={{
                    background: `linear-gradient(90deg, ${project.color} 0%, transparent 100%)`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Corner glow effect */}
              <motion.div
                className="absolute -inset-1 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${project.color}30 0%, transparent 70%)`,
                  filter: "blur(20px)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="relative overflow-hidden group"
            style={{
              background: "#00ff41",
              color: "#0a0e27",
              border: "none",
              fontSize: "1rem",
              fontWeight: 600,
              padding: "1.25rem 2.5rem",
              boxShadow: "0 0 20px rgba(0,255,65,0.4)",
            }}
            onClick={onViewProjects}
          >
            <span className="relative z-10">View All Projects</span>
            <motion.div className="absolute inset-0 bg-[#00ffff]" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
