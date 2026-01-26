import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Language, NavItem } from '../types';

interface NavbarProps {
  lang: Language;
}

const navItems: NavItem[] = [
  { label: 'Expertise', taLabel: 'திறன்கள்', href: '#expertise' },
  { label: 'Work', taLabel: 'படைப்புகள்', href: '#work' },
  { label: 'Experience', taLabel: 'அனுபவம்', href: '#experience' },
  { label: 'The Lab', taLabel: 'ஆய்வகம்', href: '#lab' },
  { label: 'Contact', taLabel: 'தொடர்பு', href: '#contact' },
];

const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-2 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-cyan-500/50 transition-colors">
                <Terminal className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="font-mono font-bold text-lg text-slate-100 tracking-tighter">
                VIJAYKOUSHIK<span className="text-cyan-500">.S</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <span className="text-cyan-500/50 mr-1">0{navItems.indexOf(item) + 1}.</span>
                {lang === 'TA' ? item.taLabel : item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-mono text-slate-300 hover:text-cyan-400 hover:bg-slate-900 rounded-md"
              >
                {lang === 'TA' ? item.taLabel : item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;