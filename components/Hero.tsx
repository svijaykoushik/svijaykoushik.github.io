import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, FileJson } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/50 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">System Online</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              I turn vague requirements into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Production Architecture.
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
              Senior Full Stack Developer & Technical Lead specializing in <strong className="text-slate-200">Greenfield SaaS Development</strong>. 
              I don't just write code; I architect scalable systems from zero to one.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#work"
                className="group px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-mono rounded-md transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.7)]"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#"
                className="group px-6 py-3 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-white font-mono rounded-md transition-all flex items-center gap-2 bg-slate-900/50"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Abstract Architecture Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative p-6 bg-slate-900 rounded-xl border border-slate-800 shadow-2xl">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    <div className="ml-auto font-mono text-xs text-slate-500">architect.tsx</div>
                </div>
                
                <div className="font-mono text-sm leading-relaxed">
                    <div className="text-slate-500">// Defining core logic for Greenfield Project</div>
                    <div className="mt-2">
                        <span className="text-purple-400">interface</span> <span className="text-yellow-200">SystemArchitecture</span> <span className="text-slate-300">{`{`}</span>
                    </div>
                    <div className="pl-4">
                        <span className="text-blue-300">frontend</span>: <span className="text-green-300">'React'</span> | <span className="text-green-300">'Next.js'</span>;
                    </div>
                    <div className="pl-4">
                        <span className="text-blue-300">backend</span>: <span className="text-green-300">'Node.js'</span> | <span className="text-green-300">'Express'</span>;
                    </div>
                    <div className="pl-4">
                        <span className="text-blue-300">database</span>: <span className="text-green-300">'SQL'</span> | <span className="text-green-300">'Redis'</span>;
                    </div>
                    <div className="pl-4">
                        <span className="text-blue-300">scalability</span>: <span className="text-orange-400">true</span>;
                    </div>
                    <div><span className="text-slate-300">{`}`}</span></div>
                    
                    <div className="mt-4">
                        <span className="text-purple-400">const</span> <span className="text-blue-400">initProject</span> = <span className="text-slate-300">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-slate-300">{`{`}</span>
                    </div>
                    <div className="pl-4 text-slate-400">
                        <span className="inline-block w-2 h-4 bg-cyan-500 animate-pulse align-middle"></span>
                    </div>
                    <div><span className="text-slate-300">{`}`}</span></div>
                </div>

                {/* Floating "Compiled" Elements */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 p-4 bg-slate-800 rounded-lg border border-slate-700 shadow-xl"
                >
                    <FileJson className="text-cyan-400 w-8 h-8" />
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;