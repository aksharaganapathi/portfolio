import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Bot, BrainCircuit, ScanEye, Activity, ArrowUpRight, Moon, Sun } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const [emailLink, setEmailLink] = useState("#");
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const user = "aksharaganapathil";
    const domain = "gmail.com";
    setEmailLink(`mailto:${user}@${domain}`);
  }, []);

  const experiences = [
    {
      company: "Amazon Web Services",
      role: "Software Development Engineering Intern",
      date: "Summer 2025",
      desc: "Designed and engineered an automated safety system for Amazon RDS that identifies and cleans up unused PostgreSQL replication slots. This solution prevented critical storage failures across customer fleets and reduced operational overhead. I also enhanced observability by integrating custom CloudWatch metrics to detect replication anomalies.",
      tech: ["Java", "AWS RDS", "CloudWatch"]
    },
    {
      company: "Samsung Research America",
      role: "Network Testing Engineer",
      date: "2024 — 2025",
      desc: "Built a native Android application to harvest WiFi and sensor data, fueling a machine learning model for user location prediction. Engineered a custom Java simulation framework that reduced testing time by 25% and implemented automated Python pipelines for data validation.",
      tech: ["Java / Kotlin", "Android SDK", "Python"]
    }
  ];

  const projects = [
    {
      title: "Autonomous Robotic Arm",
      tags: "C++ • ROS 2 • OpenCV",
      desc: "Developed the control pipeline for an SO-101 robotic arm to autonomously sort objects. Implemented computer vision using OpenCV and AprilTags to detect object pose and coordinate precise pick-and-place movements.",
      icon: <Bot className="w-6 h-6" />,
      link: "#"
    },
    {
      title: "Clarity AI",
      tags: "React • TypeScript • Flask • LLMs",
      desc: "Full-stack study assistant utilizing LLMs to generate customized flashcards, quizzes, and real-time feedback on student progress.",
      icon: <BrainCircuit className="w-6 h-6" />,
      link: "#"
    },
    {
      title: "Deep Learning Classifier",
      tags: "TensorFlow • Python • CNN",
      desc: "Developed a Convolutional Neural Network (CNN) to identify hand-written digits, achieving 98% classification accuracy through hyperparameter tuning.",
      icon: <ScanEye className="w-6 h-6" />,
      link: "#"
    },
    {
      title: "DrugRadar",
      tags: "AWS Textract • React • Node.js",
      desc: "Full-stack app for identifying drug interactions. Integrated AWS OCR to extract info from prescription images for improved accessibility.",
      icon: <Activity className="w-6 h-6" />,
      link: "#"
    }
  ];

  return (
    <div className="text-slate-600 dark:text-slate-400 font-sans selection:bg-accent selection:text-white min-h-screen flex flex-col md:flex-row overflow-hidden relative transition-colors duration-500">
      
      {/* Noise Texture */}
      <div className="bg-noise"></div>

      {/* Sidebar */}
      <aside className="w-full md:w-1/2 lg:w-5/12 p-8 md:p-12 lg:p-20 flex flex-col gap-12 relative h-auto md:h-full z-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          {/* NAME FIX: Adjusted text sizes to prevent overlap on medium screens */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 text-ink dark:text-slate-100 drop-shadow-sm break-words">
            Akshara<br/>Ganapathi
          </h1>
          <p className="text-xl font-bold text-slate-500 dark:text-slate-400 max-w-xs mb-12 border-l-4 border-accent pl-4">
            Software Engineer &<br/>MS CS Student.
          </p>
          
          <nav className="hidden md:flex flex-col gap-5 items-start text-sm font-bold tracking-widest text-slate-400 dark:text-slate-500">
            {['About', 'Experience', 'Projects', 'Education'].map((item, i) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover-thick hover:text-accent dark:hover:text-indigo-400 transition-colors">
                0{i + 1} // {item.toUpperCase()}
              </a>
            ))}
          </nav>
        </motion.div>

        <motion.div 
          className="mt-0"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider bg-accentLight dark:bg-indigo-950 dark:text-indigo-300 px-2 py-1 rounded">Dallas, TX</span>
          </div>
          
          <div className="flex gap-4 text-slate-800 dark:text-slate-200 items-center">
            <a href="https://github.com/aksharaganapathi" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent dark:hover:text-indigo-400 hover:bg-accentLight dark:hover:bg-indigo-950/50 p-2 rounded-full transition-all hover:-translate-y-1">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/aksharaganapathi" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent dark:hover:text-indigo-400 hover:bg-accentLight dark:hover:bg-indigo-950/50 p-2 rounded-full transition-all hover:-translate-y-1">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={emailLink} className="text-slate-400 hover:text-accent dark:hover:text-indigo-400 hover:bg-accentLight dark:hover:bg-indigo-950/50 p-2 rounded-full transition-all hover:-translate-y-1">
              <Mail className="w-6 h-6" />
            </a>
            
            <button 
              onClick={() => setIsDark(!isDark)}
              className="ml-2 p-2 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700 border border-transparent hover:border-accent/20 transition-all text-slate-500 dark:text-slate-400"
            >
               {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </aside>

      <main className="flex-1 h-full overflow-y-auto no-scrollbar scroll-smooth relative z-10">
        <div className="w-full max-w-3xl p-8 md:p-20 md:pl-10 space-y-24">

          <section id="about" className="pt-10 md:pt-20">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl leading-tight font-semibold text-slate-800 dark:text-slate-100 mb-8">
                I build
                {/* HIGHLIGHT FIX: Replaced complex skew wrapper with simple clean span */}
                <span className="marker-text mx-2 font-black">
                  intelligent systems
                </span>
                . My work spans cloud infrastructure, distributed databases, and full-stack AI applications.
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
                I believe the best engineering comes from understanding the fundamentals, not just using the tools. I enjoy peeling back the layers of abstraction—whether that means implementing ML algorithms from scratch, fine-tuning a trading strategy, or solving complex kinematic problems. I strive to build systems that are precise, efficient, and reliable.
              </p>
            </FadeIn>
          </section>

          <section id="experience">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8 border-b-2 border-slate-200 dark:border-slate-700 pb-2 w-fit pr-10">
                <span className="font-mono text-sm font-bold text-accent dark:text-indigo-400">02</span>
                <h2 className="text-2xl font-bold tracking-tight uppercase text-ink dark:text-slate-100">Experience</h2>
              </div>
            </FadeIn>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="group glass-panel p-8 rounded-2xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4">
                      <h3 className="text-xl font-bold text-ink dark:text-slate-100">{exp.company}</h3>
                      <span className="font-mono text-xs font-bold text-accent dark:text-indigo-300 bg-accentLight dark:bg-indigo-950/50 px-3 py-1 rounded-full">{exp.date}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-4 uppercase tracking-wide">{exp.role}</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-white/50 dark:bg-slate-800/50 border border-white dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 rounded shadow-sm">{t}</span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          <section id="projects">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8 border-b-2 border-slate-200 dark:border-slate-700 pb-2 w-fit pr-10">
                <span className="font-mono text-sm font-bold text-accent dark:text-indigo-400">03</span>
                <h2 className="text-2xl font-bold tracking-tight uppercase text-ink dark:text-slate-100">Projects</h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6">
              {projects.map((proj, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <a href={proj.link} className="block group h-full">
                    <div className="glass-panel h-full p-8 rounded-2xl transition-all duration-300">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg shadow-sm group-hover:text-accent dark:group-hover:text-indigo-400 transition-colors">
                          {proj.icon}
                        </div>
                        <ArrowUpRight className="text-slate-300 dark:text-slate-600 w-6 h-6 group-hover:text-accent dark:group-hover:text-indigo-400 transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-ink dark:text-slate-100">{proj.title}</h3>
                      <p className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 mb-4 uppercase tracking-wide">{proj.tags}</p>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{proj.desc}</p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </section>

          <section id="education" className="pb-20">
             <FadeIn>
              <div className="flex items-center gap-4 mb-8 border-b-2 border-slate-200 dark:border-slate-700 pb-2 w-fit pr-10">
                <span className="font-mono text-sm font-bold text-accent dark:text-indigo-400">04</span>
                <h2 className="text-2xl font-bold tracking-tight uppercase text-ink dark:text-slate-100">Education</h2>
              </div>
              
              <div className="glass-panel p-8 rounded-2xl transition-all duration-300">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-lg font-bold text-ink dark:text-slate-100">The University of Texas at Dallas</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between">
                    <p className="text-slate-800 dark:text-slate-200 font-semibold">Master of Science in Computer Science</p>
                    <p className="text-sm text-slate-400 font-mono font-bold">Exp. May 2026</p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between">
                    <p className="text-slate-600 dark:text-slate-400 font-medium">Bachelor of Science in Computer Science</p>
                    <p className="text-sm text-slate-400 font-mono font-bold">May 2025</p>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-2 leading-relaxed border-t border-slate-200/50 dark:border-slate-700/50 pt-4">
                    <strong className="text-ink dark:text-slate-300">Relevant Coursework:</strong> NLP, Machine Learning, Operating Systems, Database Design, UNIX Systems Programming.
                  </p>
                </div>
              </div>
            </FadeIn>
          </section>

          <footer className="py-10 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-slate-400 dark:text-slate-600 uppercase font-bold">
            <p>© 2025 Akshara Ganapathi</p>
            <p className="mt-2 md:mt-0">Built with React + Tailwind</p>
          </footer>

        </div>
      </main>
    </div>
  );
}

export default App;