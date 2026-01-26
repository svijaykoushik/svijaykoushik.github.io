import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, BookOpen, Calculator } from 'lucide-react';
import { ExperienceItem, Language } from '../types';

interface TimelineProps {
    lang: Language;
}

const experiences: ExperienceItem[] = [
  {
    year: "2020 - Present",
    title: "Senior Full Stack Developer (Acting Lead)",
    company: "Blaze Web Services",
    type: 'work',
    description: [
      "Led end-to-end Greenfield development of multiple SaaS platforms.",
      "Mentored cross-functional teams, upskilling developers into Full Stack roles.",
      "Served as primary technical troubleshooter for ambiguous logic.",
      "Refactored legacy codebases ensuring 0 downtime."
    ]
  },
  {
    year: "2015 - 2020",
    title: "Analytical Sabbatical & Upskilling",
    company: "Public Sector Aspirant",
    type: 'sabbatical',
    description: [
      "Dedicated period mastering Quantitative Aptitude & Logical Reasoning.",
      "Developed high-level problem solving frameworks applied to algorithmic challenges.",
      "Honed discipline and data interpretation skills."
    ]
  },
  {
    year: "2015",
    title: "Associate Software Developer",
    company: "Acheron Software Consultancy",
    type: 'work',
    description: [
      "The Foundation. Early exposure to full-stack web development.",
      "Collaborated on production web apps and debugging."
    ]
  }
];

const Timeline: React.FC<TimelineProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            <span className="text-cyan-500 font-mono text-xl mr-2">03.</span>
            {lang === 'TA' ? 'என் பயணம்' : 'The Journey'}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 origin-top"
          ></motion.div>

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon Marker */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 -translate-x-1/2 flex items-center justify-center z-10">
                  {item.type === 'work' && <Briefcase className="w-4 h-4 text-cyan-500" />}
                  {item.type === 'sabbatical' && <Calculator className="w-4 h-4 text-cyan-500" />}
                  {item.type === 'education' && <GraduationCap className="w-4 h-4 text-cyan-500" />}
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div className={`p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <span className="inline-block px-2 py-1 mb-2 text-xs font-mono text-cyan-400 bg-cyan-950/30 rounded">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <div className="text-slate-400 font-mono text-sm mb-4">{item.company}</div>
                    <ul className="space-y-2">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="mt-1.5 w-1 h-1 bg-cyan-500 rounded-full flex-shrink-0"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty side for layout balance */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;