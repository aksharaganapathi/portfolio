import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Bot, BrainCircuit, Activity, Sun, Moon, ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);

  const getEmail = () => {
    const user = "aksharaganapathi1";
    const domain = "gmail.com";
    return `${user}@${domain}`;
  };

  const handleContact = () => {
    window.location.href = `mailto:${getEmail()}`;
  };

  const experiences = [
    {
      company: "Amazon Web Services",
      role: "Software Development Engineer Intern",
      year: "2025",
      desc: "Architected an automated safety system for RDS PostgreSQL to detect and prune unused replication slots. Eliminated critical log buildup across thousands of customer instances. Integrated custom CloudWatch metrics for real-time fleet observability.",
      tech: ["Java", "AWS RDS", "CloudWatch", "PostgreSQL"],
      accent: "#FF9900"
    },
    {
      company: "Samsung Research America",
      role: "Network Testing Engineer",
      year: "2024",
      desc: "Developed a native Android application to harvest WiFi and sensor telemetry. Engineered a Java-based simulation framework that reduced model testing latency by 25% for ML-driven location prediction.",
      tech: ["Kotlin", "Android SDK", "Python", "Simulink"],
      accent: "#6E8CF7"
    }
  ];

  const projects = [
    { 
      title: "Autonomous Robotic Arm", 
      tag: "Robotics", 
      tech: "ROS 2 • OpenCV • C++",
      desc: "Implemented a full pick-and-place control pipeline for an SO-101 robotic arm. Used AprilTags and OpenCV for pose estimation with millimeter precision.",
      icon: <Bot size={18} />,
    },
    { 
      title: "ClarityAI", 
      tag: "GenAI", 
      tech: "React • TypeScript • LLMs",
      desc: "A full-stack study platform using RAG (Retrieval-Augmented Generation) to generate customized flashcards and context-aware feedback.",
      icon: <BrainCircuit size={18} />,
    },
    { 
      title: "DrugRadar", 
      tag: "Cloud Architecture", 
      tech: "AWS Textract • Node.js",
      desc: "Healthcare tool utilizing AWS OCR to parse prescription labels and cross-reference interaction databases to flag high-risk drug combinations.",
      icon: <Activity size={18} />,
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
    })
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-neutral-50 dark:bg-[#0a0a0f] text-neutral-800 dark:text-neutral-200 transition-colors duration-500">
        <div className="mesh-bg" />
        
        {/* ── NAV ── */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 pt-5 flex justify-center pointer-events-none">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/70 dark:bg-neutral-900/70 backdrop-blur-2xl px-7 py-3 rounded-full flex items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.15em] border border-neutral-200/60 dark:border-neutral-800/60 shadow-lg shadow-black/[0.03] dark:shadow-black/30 pointer-events-auto"
          >
            <a href="#about" className="text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
            <a href="#work" className="text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">Work</a>
            <a href="#projects" className="text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</a>
            <div className="w-px h-3.5 bg-neutral-200 dark:bg-neutral-800" />
            <button onClick={() => setIsDark(!isDark)} className="text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </motion.div>
        </nav>

        {/* ── HERO ── */}
        <section id="about" className="relative min-h-[78vh] flex flex-col justify-center px-8 md:px-20 max-w-5xl mx-auto pt-24 pb-8">
          {/* Glow */}
          <div className="hero-glow absolute -top-20 -left-32" />

          <motion.div
            variants={fadeIn} custom={0} initial="hidden" animate="show"
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase border border-teal-500/20 dark:border-teal-500/15 text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/[0.07]">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Software Engineer
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeIn} custom={1} initial="hidden" animate="show"
            className="text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-neutral-900 dark:text-white mb-7"
          >
            Hi, I'm Akshara. <br />
            I build things that{' '}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              think.
            </span>
          </motion.h1>

          <motion.div 
            variants={fadeIn} custom={2} initial="hidden" animate="show"
            className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl"
          >
            <p className="mb-3">
              Currently a{' '}
              <span className="text-neutral-900 dark:text-white font-semibold">Software Development Engineer</span> at{' '}
              <span className="text-neutral-900 dark:text-white font-bold">AWS</span>
              , building data infrastructure for{' '}
              <span className="text-neutral-900 dark:text-white font-medium">Athena, Glue, and EMR</span>.
            </p>
          </motion.div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="work" className="px-8 md:px-20 max-w-5xl mx-auto py-14">
          <motion.div 
            variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">Experience</h2>
            <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
          </motion.div>

          <div className="space-y-4">
            {experiences.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeIn} custom={i} initial="hidden" whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="group p-6 md:p-7 rounded-xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200/70 dark:border-neutral-800/70 backdrop-blur-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: job.accent }}
                    />
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">{job.company}</h3>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-600 pt-1 shrink-0 ml-4">{job.year}</span>
                </div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 ml-5">{job.role}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 leading-[1.7] mb-4 ml-5">{job.desc}</p>
                <div className="flex flex-wrap gap-1.5 ml-5">
                  {job.tech.map(t => (
                    <span 
                      key={t} 
                      className="px-2 py-0.5 text-[10px] font-semibold uppercase font-mono rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="px-8 md:px-20 max-w-5xl mx-auto py-14">
          <motion.div 
            variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">Projects</h2>
            <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <motion.div 
                key={i}
                variants={fadeIn} custom={i} initial="hidden" whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group relative p-5 rounded-xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200/70 dark:border-neutral-800/70 backdrop-blur-sm hover:border-teal-300/60 dark:hover:border-teal-500/25 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-teal-600 dark:text-teal-400">{p.icon}</span>
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-600">{p.tag}</span>
                </div>
                <h4 className="text-base font-bold tracking-tight text-neutral-900 dark:text-white mb-1.5">{p.title}</h4>
                <p className="text-[13px] text-neutral-500 dark:text-neutral-500 leading-relaxed mb-3">{p.desc}</p>
                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800">
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-600">{p.tech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="px-8 md:px-20 max-w-5xl mx-auto py-10">
          <motion.div 
            variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60"
          >
            <div>
              <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-1">
                Get in touch
              </h2>
              <p className="text-sm text-neutral-400 dark:text-neutral-600">Open to opportunities and collaborations.</p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleContact}
                className="group px-4 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-semibold flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform text-sm"
              >
                <Mail size={15} /> 
                <span className="font-mono text-xs">{getEmail()}</span>
                <ArrowUpRight size={13} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>
              <a 
                href="https://github.com/aksharaganapathi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
              >
                <Github size={16} />
              </a>
            </div>
          </motion.div>
          <p className="text-[11px] text-neutral-300 dark:text-neutral-800 mt-6">© {new Date().getFullYear()} Akshara Ganapathi</p>
        </footer>

      </div>
    </div>
  );
};

export default Portfolio;