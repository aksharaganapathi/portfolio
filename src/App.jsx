import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Bot, BrainCircuit, ScanEye, Activity, ArrowUpRight } from 'lucide-react';

// Animation Wrapper
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
    <div className="text-slate-600 font-sans selection:bg-accent selection:text-white min-h-screen flex flex-col md:flex-row overflow-hidden relative">
      
      {/* Noise Texture */}
      <div className="bg-noise"></div>

      {/* Sidebar */}
      <aside className="w-full md:w-1/2 lg:w-5/12 p-8 md:p-12 lg:p-20 flex flex-col gap-12 relative h-auto md:h-full z-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 text-ink drop-shadow-sm">
            Akshara<br/>Ganapathi
          </h1>
          <p className="text-xl font-bold text-slate-500 max-w-xs mb-12 border-l-4 border-accent pl-4">
            Software Engineer &<br/>MS CS Student.
          </p>
          
          <nav className="hidden md:flex flex-col gap-5 items-start text-sm font-bold tracking-widest text-slate-400">
            {['About', 'Experience', 'Projects', 'Education'].map((item, i) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover-thick hover:text-accent transition-colors">
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
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider bg-accentLight px-2 py-1 rounded">Dallas, TX</span>
          </div>
          
          <div className="flex gap-4 text-slate-800">
            <a href="https://github.com/aksharaganapathi" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent hover:bg-accentLight p-2 rounded-full transition-all hover:-translate-y-1">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/aksharaganapathi" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent hover:bg-accentLight p-2 rounded-full transition-all hover:-translate-y-1">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={emailLink} className="text-slate-400 hover:text-accent hover:bg-accentLight p-2 rounded-full transition-all hover:-translate-y-1">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto no-scrollbar scroll-smooth relative z-10">
        <div className="w-full max-w-3xl p-8 md:p-20 md:pl-10 space-y-24">

<section id="about" className="pt-10 md:pt-20">
            <FadeIn>
              {/* The Headline (Keep this big) */}
              <h2 className="text-3xl md:text-4xl leading-tight font-semibold text-slate-800 mb-8">
                I build
                <span className="relative inline-block px-1 mx-1">
                  <span className="absolute inset-0 bg-accent/40 skew-y-[-2deg] rounded-sm h-3/5 mt-auto mb-1"></span>
                  <span className="relative font-black text-accent">intelligent systems</span>
                </span>
                . My work spans cloud infrastructure, distributed databases, and full-stack AI applications.
              </h2>

              {/* The New Personal Narrative (Slightly smaller, easier to read) */}
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
                I’m interested in anything that involves precise control, real-time behavior, or understanding what’s happening under the hood. I like breaking problems down, whether it’s figuring out how something moves or how data flows through a large system. Lately, I’ve been exploring distributed systems and computer vision, and I’m drawn to projects where correctness, efficiency, and design all matter.
              </p>
            </FadeIn>
          </section>

          <section id="experience">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8 border-b-2 border-slate-200 pb-2 w-fit pr-10">
                <span className="font-mono text-sm font-bold text-accent">02</span>
                <h2 className="text-2xl font-bold tracking-tight uppercase text-ink">Experience</h2>
              </div>
            </FadeIn>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  
                  {/* NEW GLASS CLASS APPLIED HERE */}
                  <div className="group glass-panel p-8 rounded-2xl transition-all duration-300">
                    
                    <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4">
                      <h3 className="text-xl font-bold text-ink">{exp.company}</h3>
                      <span className="font-mono text-xs font-bold text-accent bg-accentLight px-3 py-1 rounded-full">{exp.date}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wide">{exp.role}</p>
                    <p className="text-slate-600 leading-relaxed mb-6">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-white/50 border border-white text-xs font-medium text-slate-600 rounded shadow-sm">{t}</span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          <section id="projects">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8 border-b-2 border-slate-200 pb-2 w-fit pr-10">
                <span className="font-mono text-sm font-bold text-accent">03</span>
                <h2 className="text-2xl font-bold tracking-tight uppercase text-ink">Projects</h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6">
              {projects.map((proj, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <a href={proj.link} className="block group h-full">
                    
                    {/* NEW GLASS CLASS APPLIED HERE */}
                    <div className="glass-panel h-full p-8 rounded-2xl transition-all duration-300">
                      
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white text-slate-600 rounded-lg shadow-sm group-hover:text-accent transition-colors">
                          {proj.icon}
                        </div>
                        <ArrowUpRight className="text-slate-300 w-6 h-6 group-hover:text-accent transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-ink">{proj.title}</h3>
                      <p className="text-xs font-mono font-bold text-slate-400 mb-4 uppercase tracking-wide">{proj.tags}</p>
                      <p className="text-slate-600 leading-relaxed text-sm">{proj.desc}</p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </section>

          <section id="education" className="pb-20">
             <FadeIn>
              <div className="flex items-center gap-4 mb-8 border-b-2 border-slate-200 pb-2 w-fit pr-10">
                <span className="font-mono text-sm font-bold text-accent">04</span>
                <h2 className="text-2xl font-bold tracking-tight uppercase text-ink">Education</h2>
              </div>
              
              {/* NEW GLASS CLASS APPLIED HERE */}
              <div className="glass-panel p-8 rounded-2xl transition-all duration-300">
                
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-lg font-bold text-ink">The University of Texas at Dallas</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between">
                    <p className="text-slate-800 font-semibold">Master of Science in Computer Science</p>
                    <p className="text-sm text-slate-400 font-mono font-bold">Exp. May 2026</p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between">
                    <p className="text-slate-600 font-medium">Bachelor of Science in Computer Science</p>
                    <p className="text-sm text-slate-400 font-mono font-bold">May 2025</p>
                  </div>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed border-t border-slate-200/50 pt-4">
                    <strong className="text-ink">Relevant Coursework:</strong> NLP, Machine Learning, Operating Systems, Database Design, UNIX Systems Programming.
                  </p>
                </div>
              </div>
            </FadeIn>
          </section>

          <footer className="py-10 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-slate-400 uppercase font-bold">
            <p>© 2025 Akshara Ganapathi</p>
            <p className="mt-2 md:mt-0">Built with React + Tailwind</p>
          </footer>

        </div>
      </main>
    </div>
  );
}

export default App;