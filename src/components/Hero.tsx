import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Hero({ onViewProjects }: { onViewProjects?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Neon glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,255,65,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        {/* Greeting */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full border border-[#00ff41]/30 bg-[#00ff41]/5 text-[#00ff41] backdrop-blur-sm">
            {"</>"} Welcome in my Word
          </span>
        </motion.div>

        {/* Name with neon effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 relative"
          style={{
            fontSize: "4.5rem",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          <span
            className="inline-block"
            style={{
              color: "#e0e0e0",
              textShadow: "0 0 20px rgba(0,255,65,0.5), 0 0 40px rgba(0,255,65,0.3)",
            }}
          >
            Andrea Ceccarelli
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
          style={{
            fontSize: "1.75rem",
            color: "#00ffff",
            fontWeight: 500,
          }}
        >
          Full-Stack Developer
          <span className="text-[#b0b0b0] mx-3">|</span>
          <span className="text-[#b026ff]">Angular</span>
          <span className="text-[#b0b0b0] mx-2">+</span>
          <span className="text-[#00ff41]">Spring Boot</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10 text-[#b0b0b0] max-w-2xl mx-auto"
          style={{ fontSize: "1.125rem" }}
        >
          Building scalable web applications with modern technologies. Passionate about clean code, innovative solutions, and continuous learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
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
            <span className="relative z-10">View Projects</span>
            <motion.div className="absolute inset-0 bg-[#00ffff]" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} />
          </Button>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="relative"
                style={{
                  background: "transparent",
                  borderColor: "#00ffff",
                  color: "#00ffff",
                  fontSize: "1rem",
                  fontWeight: 600,
                  padding: "1.25rem 2.5rem",
                  boxShadow: "0 0 20px rgba(0,255,255,0.2)",
                }}
              >
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="text-[#00ff41]" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
