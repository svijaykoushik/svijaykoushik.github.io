import React, { useState } from 'react';
import '../../index.css'
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import StackArchitecture from '../../components/StackArchitecture';
import WorkCards from '../../components/WorkCards';
import Timeline from '../../components/Timeline';
import TheLab from '../../components/TheLab';
import Footer from '../../components/Footer';
import { Language } from '../../types';
import LogoWatermark from '@/components/LogoWatermark';

const Page: React.FC = () => {
  const [lang, setLang] = useState<Language>('EN');

  const toggleLanguage = () => {
    setLang(prev => prev === 'EN' ? 'TA' : 'EN');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-40">
        <LogoWatermark className="w-[80vw] max-w-3xl stroke-[#7DF9FF]/15" />
      </div>
      <Navbar lang={lang} />
      
      <main className="relative z-10">
        <Hero />
        <StackArchitecture lang={lang} />
        <WorkCards lang={lang} />
        <Timeline lang={lang} />
        <TheLab lang={lang} />
      </main>

      <Footer lang={lang} toggleLang={toggleLanguage} />
    </div>
  );
};

export default Page;
