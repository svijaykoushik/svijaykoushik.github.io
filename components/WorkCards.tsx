import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Blocks, BarChart3 } from 'lucide-react';
import { Project, Language } from '../types';

interface WorkProps {
    lang: Language;
}

const projects: Project[] = [
  {
    title: "HexaBook",
    category: "Fintech SaaS",
    description: "Complex financial tracking for the construction industry. Enables companies to track project-based cash flow, POs, and site expenses with precision logic.",
    tech: ["React", "Node.js", "PWA", "Financial Logic"],
    link: "https://hexabook.in"
  },
  {
    title: "Certifily",
    category: "Web3 / Blockchain",
    description: "A professional credentials platform built on the Flow Blockchain. Allows institutions for permanent, trusted & verifiable storage of digital credentials. Winner of the Flow international blockchain hackathon 2023.",
    tech: ["Flow Blockchain", "Cadence", "React", "Cryptography"],
    link: "https://certifi.ly"
  },
  {
    title: "FocusRO",
    category: "Workforce Analytics",
    description: "Architected a subscription-based productivity platform. Features a high-performance dashboard for real-time activity metrics with secure multi-tenancy.",
    tech: ["Real-time Data", "Dashboarding", "SaaS Architecture", "RBAC"],
    link: "https://www.focusro.com"
  }
];

const WorkCards: React.FC<WorkProps> = ({ lang }) => {
  return (
    <section id="work" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              <span className="text-cyan-500 font-mono text-xl mr-2">02.</span>
              {lang === 'TA' ? 'தேர்ந்தெடுக்கப்பட்ட படைப்புகள்' : 'Featured Work'}
            </h2>
            <p className="text-slate-400">Engineering solutions for complex domains.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 block cursor-pointer"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-800 rounded-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {index === 0 && <Code className="w-6 h-6" />}
                    {index === 1 && <Blocks className="w-6 h-6" />}
                    {index === 2 && <BarChart3 className="w-6 h-6" />}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-600 mb-4">{project.category}</p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack - Reveal on hover/always visible on mobile */}
                <div className="pt-4 border-t border-slate-800">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-slate-500 group-hover:text-cyan-200/70 transition-colors">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkCards;