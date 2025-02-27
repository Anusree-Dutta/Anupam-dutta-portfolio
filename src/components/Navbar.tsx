import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-purple-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">AD</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-white hover:text-purple-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-white hover:text-purple-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple-400 transition-colors">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gradient-to-r from-purple-900/90 via-indigo-900/90 to-purple-900/90 backdrop-blur-lg rounded-b-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block w-full px-3 py-2 text-white hover:text-purple-400 transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full px-3 py-2 text-white hover:text-purple-400 transition-colors text-left">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full px-3 py-2 text-white hover:text-purple-400 transition-colors text-left">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full px-3 py-2 text-white hover:text-purple-400 transition-colors text-left">Contact</button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}