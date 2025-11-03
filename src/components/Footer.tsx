import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/andreaDevelope?tab=repositories",
    color: "#00ff41",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https:linkedin.com/in/andrea-ceccarelli92",
    color: "#00ffff",
  },
];

export function Footer({ onNavigate }: { onNavigate?: (page: "home" | "projects" | "about" | "skills" | "contact") => void }) {
  return (
    <footer className="relative py-12 px-6 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.1)", background: "#000000" }}>
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col items-center mb-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#e0e0e0",
                textShadow: "0 0 20px rgba(0,255,65,0.3)",
              }}
            >
              {"<"} Ceck {"/>"}
            </h3>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 mb-8"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg flex items-center justify-center border relative group"
                  style={{
                    background: "rgba(26, 31, 58, 0.5)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} style={{ color: social.color }} />

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `${social.color}30`,
                      filter: "blur(8px)",
                    }}
                  />

                  {/* Tooltip */}
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                    style={{
                      background: "rgba(10, 14, 39, 0.95)",
                      border: `1px solid ${social.color}`,
                      color: social.color,
                      fontSize: "0.75rem",
                    }}
                  >
                    {social.name}
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Navigation links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {[
              { label: "Home", page: "home" as const },
              { label: "Skills", page: "skills" as const },
              { label: "Projects", page: "projects" as const },
              { label: "About", page: "about" as const },
              { label: "Contact", page: "contact" as const },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate?.(item.page)}
                className="text-[#b0b0b0] hover:text-[#00ff41] transition-colors duration-300"
                style={{ fontSize: "0.9375rem" }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t text-center"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <p className="text-[#808080] flex items-center justify-center gap-2 flex-wrap" style={{ fontSize: "0.875rem" }}>
            <span>© 2025 Developed by</span>
            <span
              style={{
                color: "#00ff41",
                fontWeight: 600,
                textShadow: "0 0 10px rgba(0,255,65,0.5)",
              }}
            >
              Ceck
            </span>
            <span className="inline-flex items-center gap-1">
              with <Heart size={14} className="text-red-500" fill="currentColor" /> and
            </span>
            <span style={{ color: "#00ffff" }}>lots of coffee</span>
          </p>

          {/* Decorative line */}
          <motion.div
            className="mt-6 h-1 max-w-md mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #00ff41 50%, transparent 100%)",
              opacity: 0.3,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,255,65,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(176,38,255,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </footer>
  );
}
