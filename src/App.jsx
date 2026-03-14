import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Bot, BrainCircuit, Activity, Sun, Moon, ArrowUpRight, Languages } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' }
  })
};

const SectionLabel = ({ label, number }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="text-xs font-mono font-bold text-indigo-500 dark:text-indigo-400 tracking-wider">{number}</span>
    <div className="h-[1px] w-6 bg-indigo-400/40 dark:bg-indigo-500/30" />
    <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">{label}</span>
  </div>
);

const Portfolio = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

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
      role: "SDE Intern",
      year: "2025",
      desc: "Architected an automated safety system for RDS PostgreSQL to detect and prune unused replication slots. Eliminated critical log buildup across thousands of customer instances.",
      tech: ["Java", "AWS RDS", "CloudWatch", "PostgreSQL"],
      color: "#FF9900"
    },
    {
      company: "Samsung Research America",
      role: "Network Testing Engineer",
      year: "2024",
      desc: "Developed a native Android application to harvest WiFi and sensor telemetry. Engineered a Java-based simulation framework that reduced model testing latency by 25%.",
      tech: ["Kotlin", "Android SDK", "Python", "Simulink"],
      color: "#1428A0"
    }
  ];

  const projects = [
    { 
      title: "Kali (ಕಲಿ)", 
      tag: "EdTech", 
      desc: "A web app for learning the Kannada script through scaffolded decoding — mapping visual glyphs to sounds via interactive recognition, audio, and transcription exercises.",
      icon: <Languages size={16} />,
      theme: "bg-violet-50 text-violet-600 border-violet-200 dark:bg-violet-500/10 dark:text-violet-300 dark:border-violet-500/20"
    },
    { 
      title: "Autonomous Robotic Arm", 
      tag: "Robotics", 
      desc: "Implemented a full pick-and-place control pipeline for an SO-101 robotic arm. Used AprilTags and OpenCV for pose estimation with millimeter precision.",
      icon: <Bot size={16} />,
      theme: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20"
    },
    { 
      title: "ClarityAI", 
      tag: "GenAI", 
      desc: "A full-stack study platform using RAG to generate customized flashcards and context-aware feedback.",
      icon: <BrainCircuit size={16} />,
      theme: "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20"
    },
    { 
      title: "DrugRadar", 
      tag: "Cloud Architecture", 
      desc: "Healthcare tool utilizing AWS OCR to parse prescription labels and cross-reference interaction databases to flag high-risk drug combinations.",
      icon: <Activity size={16} />,
      theme: "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20"
    }
  ];

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen text-slate-900 dark:text-slate-200 transition-colors duration-300">
        <div className="mesh-bg" />
        <div className="dot-grid" />
        
        {/* THEME TOGGLE — fixed top-right */}
        <button 
          onClick={() => setIsDark(!isDark)} 
          className="fixed top-5 right-5 z-50 p-2.5 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-lg border border-slate-200 dark:border-zinc-700 shadow-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* MAIN TWO-COLUMN LAYOUT */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            
            {/* LEFT COLUMN — sticky bio */}
            <motion.aside 
              variants={fadeUp} initial="hidden" animate="visible"
              className="md:w-[340px] md:shrink-0 md:sticky md:top-16 md:self-start"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1] text-slate-900 dark:text-white mb-4">
                Hi, I'm <br />Akshara.
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                I develop <span className="bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent font-semibold">intelligent systems.</span>
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
                Currently a <span className="text-slate-900 dark:text-white font-semibold">SDE</span> at <span className="text-slate-900 dark:text-white font-bold">AWS</span>, building infrastructure for <span className="font-medium italic underline decoration-amber-400/60 underline-offset-4 text-slate-700 dark:text-slate-300">Athena, Glue, and EMR</span>.
              </p>

              <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-4 border-l-2 border-indigo-400/30 dark:border-indigo-500/30 mb-8">
                <p>
                  I'm a software engineer from Texas. I enjoy building software to solve problems for people and improve their daily lives. I'm currently exploring the intersection of LLMs, OS, and distributed systems.
                </p>
              </div>

              {/* Quick links */}
              <div className="flex items-center gap-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/70 dark:bg-zinc-800/50 border border-slate-200/70 dark:border-zinc-700/50 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Github size={18} />
                </a>
                <button onClick={handleContact} className="p-2.5 rounded-xl bg-white/70 dark:bg-zinc-800/50 border border-slate-200/70 dark:border-zinc-700/50 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                  <Mail size={18} />
                </button>
              </div>
            </motion.aside>

            {/* RIGHT COLUMN — scrollable content */}
            <main className="flex-1 min-w-0">
              
              {/* EXPERIENCE */}
              <section className="mb-14">
                <SectionLabel label="Experience" number="01" />
                <div className="space-y-4">
                  {experiences.map((job, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      custom={i}
                      className="group p-5 rounded-xl bg-white/60 dark:bg-zinc-800/50 border border-slate-200/70 dark:border-zinc-700/50 hover:border-slate-300 dark:hover:border-zinc-600 transition-all hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <motion.h3 
                          initial={{ color: isDark ? "#52525b" : "#cbd5e1" }}
                          whileInView={{ color: job.color }}
                          viewport={{ amount: 0.5 }}
                          transition={{ duration: 0.6 }}
                          className="text-2xl font-bold tracking-tight leading-none"
                        >
                          {job.company}
                        </motion.h3>
                        <span className="text-xs text-slate-400 dark:text-zinc-500 font-mono shrink-0">{job.year}</span>
                      </div>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{job.role}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{job.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {job.tech.map(t => (
                          <span key={t} className="px-2 py-0.5 bg-slate-100 dark:bg-zinc-700/60 text-slate-500 dark:text-slate-400 rounded-md text-[10px] font-bold uppercase font-mono">{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* PROJECTS */}
              <section>
                <SectionLabel label="Projects" number="02" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projects.map((p, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      custom={i}
                      whileHover={{ y: -3 }}
                      className="group p-5 bg-white/70 dark:bg-zinc-800/50 border border-slate-200/70 dark:border-zinc-700/50 rounded-xl hover:border-slate-300 dark:hover:border-zinc-600 hover:shadow-md transition-all"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className={`p-2 rounded-lg border ${p.theme}`}>{p.icon}</div>
                        <span className="text-[9px] font-mono font-bold uppercase text-slate-400 dark:text-slate-500 tracking-widest">{p.tag}</span>
                      </div>
                      <h4 className="text-base font-bold tracking-tight text-slate-900 dark:text-white mb-1.5">{p.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                      <div className="pt-3 border-t border-slate-100 dark:border-zinc-700/50">
                        <a href="#" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group/link">
                          Source Code <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="px-6 md:px-10 pb-10 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/20 border border-indigo-100 dark:border-indigo-900/30 flex flex-col sm:flex-row justify-between items-center gap-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white">
              Let's <span className="italic bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">Connect.</span>
            </h2>
            <button 
              onClick={handleContact}
              className="px-5 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold flex items-center gap-2.5 hover:scale-[1.03] transition-transform cursor-pointer text-sm"
            >
              <Mail size={16} /> 
              <span className="font-mono text-sm">{getEmail()}</span>
            </button>
          </div>
          <p className="text-center text-[10px] text-slate-400 dark:text-slate-600 mt-4 font-mono">© {new Date().getFullYear()} Akshara Ganapathi</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;