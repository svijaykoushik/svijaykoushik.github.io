import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ToggleLeft, ToggleRight } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  toggleLang: () => void;
}

const Footer: React.FC<FooterProps> = ({ lang, toggleLang }) => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to build the next big thing?
            </h3>
            <p className="text-slate-400 mb-6">Let's solve the ambiguous.</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://linkedin.com/in/svijaykoushik" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:moon01man@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-sm font-mono text-slate-500 hover:text-cyan-400 transition-colors mb-2"
            >
              {lang === 'EN' ? <ToggleLeft className="w-6 h-6" /> : <ToggleRight className="w-6 h-6 text-cyan-500" />}
              <span>{lang === 'EN' ? 'Switch to Tamil' : 'தமிழில் மாற்றவும்'}</span>
            </button>
            <p className="text-xs text-slate-600 font-mono">
              Designed & Built by Vijaykoushik S
            </p>
          </div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;