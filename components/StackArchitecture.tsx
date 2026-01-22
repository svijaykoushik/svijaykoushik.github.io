import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, Container, Workflow, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface StackProps {
    lang: Language;
}

const StackArchitecture: React.FC<StackProps> = ({ lang }) => {
  return (
    <section id="expertise" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            <span className="text-cyan-500 font-mono text-xl mr-2">01.</span>
            {lang === 'TA' ? 'தொழில்நுட்ப கட்டமைப்பு' : 'The Tech Stack'}
          </h2>
          <p className="text-slate-400 max-w-2xl">
            My toolkit for building production-ready SaaS platforms. I select tools based on performance, scalability, and maintainability.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
          {/* Connecting Line (Desktop) */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-900 to-transparent -z-10 transform -translate-y-1/2 origin-left"
          />

          {/* Frontend Node */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative group"
          >
            <div className="absolute -top-3 left-6 px-3 py-1 bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Frontend
            </div>
            <Layout className="w-8 h-8 text-cyan-500 mb-6" />
            <div className="space-y-4">
               <div className="flex flex-wrap gap-2">
                   {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map(tech => (
                       <span key={tech} className="px-3 py-1 bg-slate-950 text-slate-300 text-sm font-mono border border-slate-800 rounded">{tech}</span>
                   ))}
               </div>
               <p className="text-sm text-slate-400 pt-4 border-t border-slate-800">
                   Building responsive, type-safe interfaces with a focus on component reusability.
               </p>
            </div>
          </motion.div>

          {/* Backend Node */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative group z-10"
          >
            <div className="absolute -top-3 left-6 px-3 py-1 bg-slate-950 border border-slate-800 text-xs font-mono text-blue-400 uppercase tracking-widest">
              Backend
            </div>
            <Server className="w-8 h-8 text-blue-500 mb-6" />
            <div className="space-y-4">
               <div className="flex flex-wrap gap-2">
                   {['Node.js', 'Express', 'MySQL', 'REST APIs', 'Cadence'].map(tech => (
                       <span key={tech} className="px-3 py-1 bg-slate-950 text-slate-300 text-sm font-mono border border-slate-800 rounded">{tech}</span>
                   ))}
               </div>
               <p className="text-sm text-slate-400 pt-4 border-t border-slate-800">
                   Architecting robust endpoints and managing state workflows for multi-tenant systems.
               </p>
            </div>
          </motion.div>

          {/* Infra & Domain Node */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative group"
          >
            <div className="absolute -top-3 left-6 px-3 py-1 bg-slate-950 border border-slate-800 text-xs font-mono text-purple-400 uppercase tracking-widest">
              Infra & Domain
            </div>
            <div className="flex gap-4 mb-6">
                <Container className="w-8 h-8 text-purple-500" />
                <ShieldCheck className="w-8 h-8 text-green-500" />
            </div>
            <div className="space-y-4">
               <div className="flex flex-wrap gap-2">
                   {['Docker', 'CI/CD', 'Git', 'SaaS Arch', 'Web3/Flow', 'Fintech'].map(tech => (
                       <span key={tech} className="px-3 py-1 bg-slate-950 text-slate-300 text-sm font-mono border border-slate-800 rounded">{tech}</span>
                   ))}
               </div>
               <p className="text-sm text-slate-400 pt-4 border-t border-slate-800">
                   Bridging the gap between code and deployment. Specialized in Blockchain & Construction Fintech.
               </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StackArchitecture;