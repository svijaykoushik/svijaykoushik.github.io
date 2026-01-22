import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Tv, Wallet, PenTool, Layers } from 'lucide-react';
import { Language } from '../types';

interface LabProps {
    lang: Language;
}

const TheLab: React.FC<LabProps> = ({ lang }) => {
  return (
    <section id="lab" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-3 bg-cyan-500/10 rounded-lg">
            <FlaskConical className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">
              <span className="text-cyan-500 font-mono text-lg mr-2">04.</span>
              {lang === 'TA' ? 'ஆய்வகம்' : 'The Lab'}
            </h2>
            <p className="text-sm text-slate-500">Current tinkering & side quests.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* express-ts-boilerplate */}
          <motion.a 
            href="https://github.com/svijaykoushik/express-api-ts-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/20 transition-colors block cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <Layers className="w-5 h-5 text-blue-400" />
              <h3 className="text-white font-mono font-bold">express-ts-boilerplate</h3>
            </div>
            <p className="text-xs font-mono text-cyan-600 mb-2">InnerSource / Architecture</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Architected the foundational TypeScript & Express.js framework powering flagship products. Includes pre-configured OAuth 2.0 & security best practices, reducing setup time by ~40%.
            </p>
          </motion.a>

          {/* i8e10 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <Wallet className="w-5 h-5 text-green-400" />
              <h3 className="text-white font-mono font-bold">i8e10 / Finance</h3>
            </div>
            <p className="text-sm text-slate-400">
              Building a friction-less, privacy-first personal finance PWA.
            </p>
          </motion.div>

          {/* Anime Recon */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <Tv className="w-5 h-5 text-purple-400" />
              <h3 className="text-white font-mono font-bold">Anime Recon Tool</h3>
            </div>
            <p className="text-sm text-slate-400">
              Automated metadata reconciliation engine for media enthusiasts.
            </p>
          </motion.div>

          {/* Writing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <PenTool className="w-5 h-5 text-yellow-400" />
              <h3 className="text-white font-mono font-bold">Fiction</h3>
            </div>
            <p className="text-sm text-slate-400">
              When not coding, I architect worlds in fiction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheLab;