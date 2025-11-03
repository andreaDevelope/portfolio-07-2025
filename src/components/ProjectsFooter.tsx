import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/andreaceccarelli',
    color: '#00ff41',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/andreaceccarelli',
    color: '#00ffff',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:andrea.ceccarelli@example.com',
    color: '#b026ff',
  },
];

export function ProjectsFooter() {
  return (
    <footer
      className="relative py-12 px-6 border-t"
      style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#808080]" style={{ fontSize: '0.9375rem' }}>
              © 2025 Developed by{' '}
              <span
                style={{
                  color: '#00ff41',
                  fontWeight: 600,
                  textShadow: '0 0 10px rgba(0,255,65,0.5)',
                }}
              >
                Andrea Ceccarelli
              </span>
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center border relative group"
                  style={{
                    background: 'rgba(26, 31, 58, 0.5)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} style={{ color: social.color }} />

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `${social.color}30`,
                      filter: 'blur(8px)',
                    }}
                  />

                  {/* Tooltip */}
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
                    style={{
                      background: 'rgba(10, 14, 39, 0.95)',
                      border: `1px solid ${social.color}`,
                      color: social.color,
                      fontSize: '0.75rem',
                    }}
                  >
                    {social.name}
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          className="mt-8 h-px max-w-4xl mx-auto rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #00ff41 20%, #00ffff 50%, #b026ff 80%, transparent 100%)',
            opacity: 0.3,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </footer>
  );
}
