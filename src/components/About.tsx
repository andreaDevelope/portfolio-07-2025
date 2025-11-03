import { motion } from "motion/react";
import { Code, Rocket, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const highlights = [
  {
    icon: Code,
    title: "4+ Years",
    description: "Java & Spring Development",
    color: "#00ff41",
  },
  {
    icon: Rocket,
    title: "30+ Projects",
    description: "Personal & Collaborative Work",
    color: "#00ffff",
  },
  {
    icon: Users,
    title: "Team Mindset",
    description: "Agile Practices & Pair Programming",
    color: "#b026ff",
  },
  {
    icon: Award,
    title: "Certified",
    description: "Epicode, Formatemp",
    color: "#00ff41",
  },
];

export function About({ onViewMore }: { onViewMore?: () => void }) {
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
              textShadow: "0 0 20px rgba(0,255,65,0.3)",
            }}
          >
            About Me
          </h2>
          <p className="text-[#b0b0b0]" style={{ fontSize: "1.125rem" }}>
            Passionate developer with a focus on excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image and decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image container */}
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{
                  borderColor: "#00ff41",
                  boxShadow: "0 0 40px rgba(0,255,65,0.3)",
                }}
              >
                <ImageWithFallback
                  src="../../public/images/projects/foto-portfolio.png"
                  alt="Andrea Ceccarelli"
                  className="w-full h-auto aspect-square object-cover"
                />

                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, rgba(10,14,39,0.8) 100%)",
                  }}
                />
              </div>

              {/* Decorative corner elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 rounded-tl-2xl" style={{ borderColor: "#00ffff" }} />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 rounded-br-2xl" style={{ borderColor: "#b026ff" }} />

              {/* Floating code symbol */}
              <motion.div
                className="absolute -right-8 top-1/4 w-16 h-16 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(0,255,65,0.1)",
                  border: "2px solid #00ff41",
                  backdropFilter: "blur(10px)",
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span style={{ fontSize: "1.5rem", color: "#00ff41" }}>{"</>"}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="space-y-6">
              <div>
                <h3
                  className="mb-4"
                  style={{
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "#e0e0e0",
                  }}
                >
                  Hi, I'm Andrea 👋
                </h3>
                <div className="space-y-4 text-[#b0b0b0]" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                  <p>
                    I'm a Full-Stack Developer with a strong foundation in Java, Spring Boot and Angular. Over the past few years I've worked on enterprise
                    projects and several self-initiated applications that helped me refine both backend and frontend skills.
                  </p>
                  <p>
                    I value clean architecture, readable code and pragmatic design patterns — aiming to build software that’s both reliable and enjoyable to
                    use.
                  </p>
                  <p>
                    Outside of coding, I enjoy exploring emerging technologies, learning DevOps practices, and experimenting with new ideas through my personal
                    projects.
                  </p>
                </div>
              </div>

              {/* Highlights grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-4 rounded-lg border"
                      style={{
                        background: "rgba(26, 31, 58, 0.5)",
                        borderColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <Icon size={24} style={{ color: item.color, marginBottom: "0.5rem" }} />
                      <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#e0e0e0" }}>{item.title}</div>
                      <div style={{ fontSize: "0.875rem", color: "#808080" }}>{item.description}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center relative"
        >
          <div
            className="max-w-3xl mx-auto p-8 rounded-xl border backdrop-blur-sm relative overflow-hidden"
            style={{
              background: "rgba(26, 31, 58, 0.3)",
              borderColor: "rgba(0,255,65,0.3)",
            }}
          >
            <div className="absolute top-6 left-6 opacity-20" style={{ fontSize: "4rem", color: "#00ff41" }}>
              "
            </div>
            <p
              className="relative z-10"
              style={{
                fontSize: "1.25rem",
                fontStyle: "italic",
                color: "#d0d0d0",
                lineHeight: 1.8,
              }}
            >
              Code is like humor. When you have to explain it, it's bad. I strive to write self-documenting, elegant code that speaks for itself.
            </p>
            <div className="absolute bottom-6 right-6 opacity-20" style={{ fontSize: "4rem", color: "#00ff41", transform: "rotate(180deg)" }}>
              "
            </div>
          </div>
        </motion.div>

        {/* View More Button */}
        {onViewMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
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
              Learn More About Me →
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
