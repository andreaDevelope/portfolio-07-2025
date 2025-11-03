import { motion } from "motion/react";
import { Code2, Database, Server, GitBranch, Container, Cloud, Blocks, Zap } from "lucide-react";

const skills = [
  { name: "Angular", icon: Code2, level: 95, color: "#00ff41" },
  { name: "Spring Boot", icon: Server, level: 90, color: "#00ffff" },
  { name: "Java", icon: Zap, level: 90, color: "#b026ff" },
  { name: "TypeScript", icon: Code2, level: 92, color: "#00ff41" },
  { name: "PostgreSQL", icon: Database, level: 85, color: "#00ffff" },
  { name: "Docker", icon: Container, level: 88, color: "#b026ff" },
  { name: "Kubernetes", icon: Cloud, level: 80, color: "#00ff41" },
  { name: "Git", icon: GitBranch, level: 93, color: "#00ffff" },
  { name: "Microservices", icon: Blocks, level: 87, color: "#b026ff" },
];

export function Skills({ onViewMore }: { onViewMore?: () => void }) {
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
              textShadow: "0 0 20px rgba(0,255,255,0.3)",
            }}
          >
            Technical Skills
          </h2>
          <p className="text-[#b0b0b0]" style={{ fontSize: "1.125rem" }}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div
                  className="p-6 rounded-xl border backdrop-blur-sm relative overflow-hidden"
                  style={{
                    background: "rgba(26, 31, 58, 0.5)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        background: `${skill.color}15`,
                        border: `1px solid ${skill.color}30`,
                      }}
                    >
                      <Icon size={28} style={{ color: skill.color }} />
                    </div>

                    {/* Skill name */}
                    <h3
                      className="mb-3"
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        color: "#e0e0e0",
                      }}
                    >
                      {skill.name}
                    </h3>

                    {/* Progress bar */}
                    <div className="relative">
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255, 255, 255, 0.05)" }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}80 100%)`,
                            boxShadow: `0 0 10px ${skill.color}50`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        />
                      </div>
                      <span
                        className="absolute -top-6 right-0"
                        style={{
                          fontSize: "0.875rem",
                          color: skill.color,
                          fontWeight: 600,
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${skill.color}20 50%)`,
                    clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Additional tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="mb-4 main-title">Main Skills</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Angular", "Spring Boot", "Java", "PostgreSQL", "Docker", "Kubernetes"].map((tech) => (
              <span key={tech} className="main-skill">
                {tech}
              </span>
            ))}
          </div>

          <h2 className="mb-4 next-title">Next Goals</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["GraphQL", "Redis", "MongoDB", "RabbitMQ", "Jenkins", "AWS", "Azure"].map((tech) => (
              <span key={tech} className="next-goal">
                {tech}
              </span>
            ))}
          </div>

          {onViewMore && (
            <motion.button
              onClick={onViewMore}
              className="px-6 py-3 rounded-lg border"
              style={{
                background: "rgba(0, 255, 65, 0.1)",
                borderColor: "#00ff41",
                color: "#00ff41",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Skills →
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
