import { motion } from "motion/react";
import { ArrowLeft, Briefcase, GraduationCap, Award, Code2, Coffee, Music, Gamepad2, MapPin, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: typeof Briefcase;
  color: string;
}

interface Education {
  year: string;
  degree: string;
  institution: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  color: string;
}

const timeline: TimelineItem[] = [
  {
    year: "Feb 2025 - Jun 2025",
    title: "Full-Stack Developer & Team Lead",
    company: "Start-up Tech",
    description:
      "Led the frontend and backend development of a new digital platform using Angular, Java, and Spring Boot. Coordinated a small dev team, managed Git repositories, and optimized API communication between Angular and Spring microservices.",
    icon: Briefcase,
    color: "#00ff41",
  },
  {
    year: "Mar 2025",
    title: "Python Developer (Web Scraping Project)",
    company: "Assicura Point Trade Srl",
    description:
      "Developed automated web scraping tools with Python, Jsoup, and Selenium for insurance data extraction. Implemented data cleaning, logging, and automatic report generation.",
    icon: Briefcase,
    color: "#00ffff",
  },
  {
    year: "Apr 2015 - May 2018",
    title: "Back-End Developer",
    company: "Enova Srl",
    description:
      "Designed and maintained custom management software with Java and Spring. Developed robust backend logic, REST APIs, and database models with Hibernate/JPA and Oracle. Ensured data integrity and security compliance.",
    icon: Briefcase,
    color: "#b026ff",
  },
];

const education: Education[] = [
  {
    year: "Feb 2025",
    degree: "Full Stack Developer Course",
    institution: "Epicode Education Srl",
    description:
      "Comprehensive training in frontend and backend technologies. Deep dive into Angular, Java, and Spring Boot with hands-on projects and CI/CD practices.",
  },
  {
    year: "Oct 2024",
    degree: "AI & Prompt Design",
    institution: "Epicode Education Srl – Roma",
    description: "Specialized course in artificial intelligence tools, prompt engineering, and AI integration in modern workflows.",
  },
  {
    year: "Aug 2024",
    degree: "Java Advanced Training",
    institution: "IIS Carlo Urbani",
    description: "Intensive technical program focused on Java 8, OOP design, and enterprise application development.",
  },
  {
    year: "2012",
    degree: "Diploma Odontotecnico",
    institution: "Istituto Tecnico IIS Carlo Urbani",
    description: "Technical high school diploma with scientific and practical foundations, discipline, and attention to detail.",
  },
];

const certifications: Certification[] = [
  {
    name: "Full Stack Developer Certification",
    issuer: "Epicode Education Srl",
    year: "2025",
    color: "#00ff41",
  },
  {
    name: "AI & Prompt Design",
    issuer: "Epicode Education Srl",
    year: "2024",
    color: "#00ffff",
  },
  {
    name: "Java Advanced Training",
    issuer: "IIS Carlo Urbani",
    year: "2024",
    color: "#b026ff",
  },
];

const hobbies = [
  {
    icon: Code2,
    name: "Open Source",
    description: "Contributing to open-source projects",
    color: "#00ff41",
  },
  {
    icon: Coffee,
    name: "Coffee Brewing",
    description: "Exploring specialty coffee",
    color: "#00ffff",
  },
  {
    icon: Music,
    name: "Music Production",
    description: "Electronic music and sound design",
    color: "#b026ff",
  },
  {
    icon: Gamepad2,
    name: "Gaming",
    description: "Strategy and indie games",
    color: "#00ff41",
  },
];

export function AboutPage({ onBackToHome }: { onBackToHome: () => void }) {
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-16">
            <h1
              className="mb-4"
              style={{
                fontSize: "4rem",
                fontWeight: 700,
                color: "#e0e0e0",
                textShadow: "0 0 30px rgba(0,255,65,0.5)",
              }}
            >
              About Me
            </h1>
            <p className="text-[#b0b0b0] max-w-3xl mx-auto" style={{ fontSize: "1.25rem", lineHeight: 1.7 }}>
              Full-Stack Developer passionate about clean architecture and digital innovation. Skilled in Angular, Spring Boot, and modern backend technologies,
              I build robust, maintainable applications that bridge design and functionality. Focused on performance, teamwork, and continuous learning.
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto rounded-2xl border overflow-hidden mb-20"
            style={{
              background: "rgba(26, 31, 58, 0.5)",
              borderColor: "rgba(0, 255, 65, 0.3)",
              boxShadow: "0 0 30px rgba(0, 255, 65, 0.2)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxOTcwNjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Andrea Ceccarelli"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 50%, rgba(26, 31, 58, 0.9) 100%)",
                  }}
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <h2
                  className="mb-6"
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#e0e0e0",
                  }}
                >
                  Andrea Ceccarelli
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(0, 255, 65, 0.1)" }}>
                      <Briefcase size={20} style={{ color: "#00ff41" }} />
                    </div>
                    <div>
                      <div className="text-[#808080]" style={{ fontSize: "0.875rem" }}>
                        Position
                      </div>
                      <div className="text-[#e0e0e0]">Full-Stack Developer</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(0, 255, 255, 0.1)" }}>
                      <MapPin size={20} style={{ color: "#00ffff" }} />
                    </div>
                    <div>
                      <div className="text-[#808080]" style={{ fontSize: "0.875rem" }}>
                        Location
                      </div>
                      <div className="text-[#e0e0e0]">Rome, Italy — Remote friendly</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(176, 38, 255, 0.1)" }}>
                      <Calendar size={20} style={{ color: "#b026ff" }} />
                    </div>
                    <div>
                      <div className="text-[#808080]" style={{ fontSize: "0.875rem" }}>
                        Experience
                      </div>
                      <div className="text-[#e0e0e0]">4+ Years including training and projects</div>
                    </div>
                  </div>
                </div>

                <p className="text-[#b0b0b0]" style={{ lineHeight: 1.7 }}>
                  Experienced in building enterprise-level applications with focus on performance, scalability, and user experience. Passionate about clean
                  architecture and modern development practices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 px-6">
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
              textShadow: "0 0 20px rgba(0,255,65,0.3)",
            }}
          >
            Professional Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{
                background: "linear-gradient(180deg, #00ff41 0%, #00ffff 50%, #b026ff 100%)",
                opacity: 0.3,
              }}
            />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-left mb-4 md:mb-0`}>
                      <div
                        className="inline-block px-3 py-1 rounded-full mb-3"
                        style={{
                          background: `${item.color}20`,
                          color: item.color,
                          border: `1px solid ${item.color}50`,
                        }}
                      >
                        {item.year}
                      </div>
                      <h3
                        className="mb-2"
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: 600,
                          color: "#e0e0e0",
                        }}
                      >
                        {item.title}
                      </h3>
                      <div className="mb-3" style={{ color: item.color }}>
                        {item.company}
                      </div>
                      <p className="text-[#b0b0b0]" style={{ lineHeight: 1.6 }}>
                        {item.description}
                      </p>
                    </div>

                    {/* Icon */}
                    <div
                      className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4 shrink-0"
                      style={{
                        background: "#0a0e27",
                        borderColor: item.color,
                        boxShadow: `0 0 20px ${item.color}60`,
                      }}
                    >
                      <Icon size={24} style={{ color: item.color }} />
                    </div>

                    {/* Spacer for alignment */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-6">
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
            Education
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="rounded-xl border p-6"
                style={{
                  background: "rgba(26, 31, 58, 0.5)",
                  borderColor: "rgba(0, 255, 255, 0.3)",
                }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(0, 255, 255, 0.1)" }}>
                  <GraduationCap size={24} style={{ color: "#00ffff" }} />
                </div>

                <div
                  className="inline-block px-3 py-1 rounded-full mb-3"
                  style={{
                    background: "rgba(0, 255, 255, 0.1)",
                    color: "#00ffff",
                    fontSize: "0.875rem",
                    border: "1px solid rgba(0, 255, 255, 0.3)",
                  }}
                >
                  {edu.year}
                </div>

                <h3
                  className="mb-2"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#e0e0e0",
                  }}
                >
                  {edu.degree}
                </h3>

                <div className="mb-3 text-[#00ffff]">{edu.institution}</div>

                <p className="text-[#b0b0b0]" style={{ lineHeight: 1.6 }}>
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-6">
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
              textShadow: "0 0 20px rgba(176,38,255,0.3)",
            }}
          >
            Certifications
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl border p-6 group cursor-pointer"
                style={{
                  background: "rgba(26, 31, 58, 0.5)",
                  borderColor: `${cert.color}30`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${cert.color}20` }}>
                    <Award size={20} style={{ color: cert.color }} />
                  </div>
                  <div
                    className="px-3 py-1 rounded-full"
                    style={{
                      background: `${cert.color}20`,
                      color: cert.color,
                      fontSize: "0.875rem",
                      border: `1px solid ${cert.color}50`,
                    }}
                  >
                    {cert.year}
                  </div>
                </div>

                <h3
                  className="mb-2"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "#e0e0e0",
                  }}
                >
                  {cert.name}
                </h3>

                <div style={{ color: cert.color }}>{cert.issuer}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies & Interests */}
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
              textShadow: "0 0 20px rgba(0,255,65,0.3)",
            }}
          >
            Hobbies & Interests
          </motion.h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-xl border p-6 text-center group cursor-pointer"
                  style={{
                    background: "rgba(26, 31, 58, 0.5)",
                    borderColor: `${hobby.color}30`,
                  }}
                  whileHover={{ scale: 1.05, borderColor: hobby.color }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${hobby.color}20` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={28} style={{ color: hobby.color }} />
                  </motion.div>

                  <h3
                    className="mb-2"
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: "#e0e0e0",
                    }}
                  >
                    {hobby.name}
                  </h3>

                  <p className="text-[#b0b0b0]" style={{ fontSize: "0.875rem" }}>
                    {hobby.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
