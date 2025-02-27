import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Mail } from 'lucide-react';
import Typed from 'typed.js';

export function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        'Python Developer',
        'React Developer',
        'Web3 Developer',
        'Unity Game Developer',
        'React Native Developer',
        'Flutter Developer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Hi, I'm Anupam Dutta
          </h1>
          <p className="text-xl mb-2">A driven 13-year-old tech enthusiast</p>
          <p className="text-lg mb-6">
            I'm <span ref={typedRef} className="text-purple-400"></span>
          </p>
          <div className="flex gap-6">
            <a 
              href="https://x.com/AnupamDutta_dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://github.com/AnupamDutta2011" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:duttaanupam2011@gmail.com"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-80 h-80 mx-auto overflow-hidden rounded-full border-4 border-purple-400 shadow-lg shadow-purple-500/50">
            <img
              src="https://images.unsplash.com/photo-1553272725-086100aecf5e?auto=format&fit=crop&q=80"
              alt="3D Character Representation"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}