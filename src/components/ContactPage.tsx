import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "cecca.develop@outlook.it",
    href: null,
    color: "#00ff41",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+39 3518714382",
    href: "https://wa.me/393518714382",
    color: "#00ffff",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Rome, Italy",
    href: "https://maps.google.com/?q=Rome,Italy",
    color: "#b026ff",
  },
];

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

export function ContactPage({ onBackToHome }: { onBackToHome: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_r6rdjih",
        "template_zexgadr",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      console.log("Email sent:", result.text);
      toast.success("Message sent successfully!");
      setIsSubmitted(true);

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Get In Touch
            </h1>
            <p className="text-[#b0b0b0] max-w-2xl mx-auto" style={{ fontSize: "1.25rem", lineHeight: 1.7 }}>
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <h2
                className="mb-8"
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#e0e0e0",
                }}
              >
                Contact Information
              </h2>

              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const hasLink = !!info.href; // true se href è valorizzato

                  // Se ha un link, renderizza motion.a — altrimenti motion.div
                  const MotionTag: any = hasLink ? motion.a : motion.div;

                  return (
                    <MotionTag
                      key={index}
                      href={hasLink ? info.href : undefined}
                      target={hasLink ? "_blank" : undefined}
                      rel={hasLink ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className={`flex items-center gap-4 p-4 rounded-xl border group ${hasLink ? "cursor-pointer hover:scale-[1.02]" : "cursor-default"}`}
                      style={{
                        background: "rgba(26, 31, 58, 0.5)",
                        borderColor: `${info.color}30`,
                      }}
                      whileHover={hasLink ? { borderColor: info.color } : {}}
                    >
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${info.color}20` }}>
                        <Icon size={24} style={{ color: info.color }} />
                      </div>

                      <div>
                        <div className="text-[#808080]" style={{ fontSize: "0.875rem" }}>
                          {info.label}
                        </div>
                        <div className="text-[#e0e0e0]" style={{ fontSize: "1.125rem", fontWeight: 500 }}>
                          {info.value}
                        </div>
                      </div>
                    </MotionTag>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3
                  className="mb-6"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#e0e0e0",
                  }}
                >
                  Connect With Me
                </h3>

                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                        className="w-14 h-14 rounded-lg flex items-center justify-center border relative group"
                        style={{
                          background: "rgba(26, 31, 58, 0.5)",
                          borderColor: `${social.color}30`,
                        }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={24} style={{ color: social.color }} />

                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `${social.color}30`,
                            filter: "blur(10px)",
                          }}
                        />

                        {/* Tooltip */}
                        <div
                          className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
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
                </div>
              </div>

              {/* Decorative element */}
              <motion.div
                className="mt-12 p-6 rounded-xl border"
                style={{
                  background: "rgba(0, 255, 65, 0.05)",
                  borderColor: "rgba(0, 255, 65, 0.2)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: "#00ff41" }} />
                  <p className="text-[#b0b0b0]" style={{ lineHeight: 1.7 }}>
                    I typically respond within 24 hours. For urgent matters, please reach out via phone or LinkedIn.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl border p-8"
              style={{
                background: "rgba(26, 31, 58, 0.5)",
                borderColor: "rgba(0, 255, 65, 0.3)",
              }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-[#e0e0e0]" style={{ fontSize: "0.9375rem", fontWeight: 500 }}>
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                      style={{
                        background: "rgba(10, 14, 39, 0.5)",
                        borderColor: "rgba(255, 255, 255, 0.1)",
                        color: "#e0e0e0",
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-[#e0e0e0]" style={{ fontSize: "0.9375rem", fontWeight: 500 }}>
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                      style={{
                        background: "rgba(10, 14, 39, 0.5)",
                        borderColor: "rgba(255, 255, 255, 0.1)",
                        color: "#e0e0e0",
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-[#e0e0e0]" style={{ fontSize: "0.9375rem", fontWeight: 500 }}>
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full"
                      style={{
                        background: "rgba(10, 14, 39, 0.5)",
                        borderColor: "rgba(255, 255, 255, 0.1)",
                        color: "#e0e0e0",
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-[#e0e0e0]" style={{ fontSize: "0.9375rem", fontWeight: 500 }}>
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={6}
                      required
                      className="w-full resize-none"
                      style={{
                        background: "rgba(10, 14, 39, 0.5)",
                        borderColor: "rgba(255, 255, 255, 0.1)",
                        color: "#e0e0e0",
                      }}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden group"
                    style={{
                      background: "#00ff41",
                      color: "#0a0e27",
                      border: "none",
                      fontWeight: 600,
                      boxShadow: "0 0 20px rgba(0,255,65,0.4)",
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </span>
                    <motion.div className="absolute inset-0 bg-[#00ffff]" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} />
                  </Button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(0, 255, 65, 0.2)",
                      boxShadow: "0 0 30px rgba(0,255,65,0.4)",
                    }}
                  >
                    <CheckCircle2 size={48} style={{ color: "#00ff41" }} />
                  </motion.div>

                  <h3
                    className="mb-4"
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      color: "#e0e0e0",
                    }}
                  >
                    Message Sent!
                  </h3>

                  <p className="text-[#b0b0b0] text-center" style={{ lineHeight: 1.7 }}>
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional Decorative) */}
      <section className="py-16 px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border overflow-hidden"
            style={{
              background: "rgba(26, 31, 58, 0.5)",
              borderColor: "rgba(0, 255, 255, 0.3)",
              height: "400px",
            }}
          >
            <div className="w-full h-full flex items-center justify-center relative">
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(circle at center, rgba(0,255,255,0.1) 0%, transparent 70%)",
                }}
              />
              <div className="text-center z-10">
                <MapPin size={48} style={{ color: "#00ffff", margin: "0 auto" }} className="mb-4" />
                <p className="text-[#b0b0b0]" style={{ fontSize: "1.125rem" }}>
                  Based in Rome, Italy
                </p>
                <p className="text-[#808080]">Available for remote work worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
