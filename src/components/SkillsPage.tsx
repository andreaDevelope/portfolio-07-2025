import { motion } from "motion/react";
import { ArrowLeft, Code2, Database, Server, Cloud, GitBranch, Wrench, Layers, Terminal } from "lucide-react";
import { Progress } from "./ui/progress";

interface Skill {
  name: string;
  level: number;
  years: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "#00ff41",
    skills: [
      { name: "Angular", level: 95, years: 5, color: "#00ff41" },
      { name: "TypeScript", level: 90, years: 5, color: "#00ff41" },
      { name: "HTML/CSS", level: 95, years: 6, color: "#00ff41" },
      { name: "SCSS", level: 90, years: 4, color: "#00ff41" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "#00ffff",
    skills: [
      { name: "Spring Boot", level: 95, years: 5, color: "#00ffff" },
      { name: "Java", level: 90, years: 6, color: "#00ffff" },
      { name: "REST APIs", level: 95, years: 5, color: "#00ffff" },
      { name: "Spring Security", level: 85, years: 4, color: "#00ffff" },
      { name: "JPA / Hibernate", level: 85, years: 5, color: "#00ffff" },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    color: "#b026ff",
    skills: [
      { name: "PostgreSQL", level: 90, years: 4, color: "#b026ff" },
      { name: "Oracle DB", level: 85, years: 5, color: "#b026ff" },
      { name: "MySQL", level: 75, years: 2, color: "#b026ff" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "#00ff41",
    skills: [
      { name: "Docker", level: 90, years: 3, color: "#00ff41" },
      { name: "Kubernetes", level: 70, years: 1, color: "#00ff41" },
      { name: "Jenkins", level: 85, years: 2, color: "#00ff41" },
      { name: "GitLab CI/CD", level: 80, years: 2, color: "#00ff41" },
    ],
  },
  {
    title: "Version Control & Tools",
    icon: GitBranch,
    color: "#00ffff",
    skills: [
      { name: "Git", level: 95, years: 6, color: "#00ffff" },
      { name: "GitLab", level: 90, years: 5, color: "#00ffff" },
      { name: "GitHub", level: 85, years: 4, color: "#00ffff" },
      { name: "Postman", level: 90, years: 5, color: "#00ffff" },
      { name: "Jira", level: 85, years: 4, color: "#00ffff" },
      { name: "Confluence", level: 80, years: 3, color: "#00ffff" },
      { name: "IntelliJ IDEA", level: 90, years: 5, color: "#00ffff" },
      { name: "Eclipse", level: 80, years: 5, color: "#00ffff" },
    ],
  },
  {
    title: "Testing & Quality",
    icon: Wrench,
    color: "#b026ff",
    skills: [
      { name: "JUnit", level: 90, years: 5, color: "#b026ff" },
      { name: "Mockito", level: 80, years: 4, color: "#b026ff" },
    ],
  },
];

const softSkills = [
  { name: "Problem Solving", icon: Terminal, color: "#00ff41" },
  { name: "Team Collaboration", icon: Layers, color: "#00ffff" },
  { name: "Agile / Scrum Methodologies", icon: GitBranch, color: "#b026ff" },
  { name: "Code Quality & Review", icon: Code2, color: "#00ff41" },
  { name: "Mentoring & Knowledge Sharing", icon: Server, color: "#00ffff" },
  { name: "Architecture Design", icon: Layers, color: "#b026ff" },
  { name: "Documentation & Process Clarity", icon: Code2, color: "#00ff41" },
  { name: "Adaptability & Continuous Learning", icon: Wrench, color: "#b026ff" },
];

export function SkillsPage({ onBackToHome }: { onBackToHome: () => void }) {
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
              Technical Skills
            </h1>
            <p className="text-[#b0b0b0] max-w-3xl mx-auto" style={{ fontSize: "1.25rem", lineHeight: 1.7 }}>
              A comprehensive overview of my technical expertise, tools, and frameworks acquired through years of professional development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="rounded-2xl border p-8"
                  style={{
                    background: "rgba(26, 31, 58, 0.5)",
                    borderColor: `${category.color}30`,
                  }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${category.color}20`,
                        boxShadow: `0 0 20px ${category.color}30`,
                      }}
                    >
                      <Icon size={28} style={{ color: category.color }} />
                    </div>
                    <h2
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        color: "#e0e0e0",
                        textShadow: `0 0 15px ${category.color}50`,
                      }}
                    >
                      {category.title}
                    </h2>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <h3
                              style={{
                                fontSize: "1.125rem",
                                fontWeight: 600,
                                color: "#e0e0e0",
                              }}
                            >
                              {skill.name}
                            </h3>
                            <span
                              className="px-2 py-1 rounded"
                              style={{
                                background: `${skill.color}20`,
                                color: skill.color,
                                fontSize: "0.75rem",
                                border: `1px solid ${skill.color}40`,
                              }}
                            >
                              {skill.years}y
                            </span>
                          </div>
                          <span
                            className="px-3 py-1 rounded-lg"
                            style={{
                              background: `${skill.color}20`,
                              color: skill.color,
                              fontWeight: 600,
                            }}
                          >
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2 rounded-full overflow-hidden" style={{ background: "rgba(255, 255, 255, 0.05)" }}>
                          <motion.div
                            className="absolute inset-y-0 left-0 rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}80 100%)`,
                              boxShadow: `0 0 10px ${skill.color}60`,
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.05 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-16 px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#e0e0e0",
              textShadow: "0 0 20px rgba(0,255,255,0.3)",
            }}
          >
            Soft Skills & Methodologies
          </motion.h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-xl border p-6 text-center group cursor-pointer"
                  style={{
                    background: "rgba(26, 31, 58, 0.5)",
                    borderColor: `${skill.color}30`,
                  }}
                  whileHover={{ scale: 1.05, borderColor: skill.color }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${skill.color}20` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={28} style={{ color: skill.color }} />
                  </motion.div>

                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: "#e0e0e0",
                    }}
                  >
                    {skill.name}
                  </h3>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)`,
                      filter: "blur(20px)",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 grid md:grid-cols-4 sm:grid-cols-2 gap-6"
          >
            {[
              { label: "Years of Experience", value: "5+", color: "#00ff41" },
              { label: "Technologies Mastered", value: "36+", color: "#00ffff" },
              { label: "Projects Completed", value: "50+", color: "#b026ff" },
              { label: "Certifications", value: "4+", color: "#00ff41" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl border p-6 text-center"
                style={{
                  background: "rgba(26, 31, 58, 0.5)",
                  borderColor: `${stat.color}30`,
                }}
              >
                <div
                  className="mb-2"
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: stat.color,
                    textShadow: `0 0 20px ${stat.color}60`,
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-[#b0b0b0]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
