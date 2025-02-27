import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            I'm a passionate 13-year-old developer with a deep love for technology and coding. 
            My journey in programming started early, and I've since mastered multiple programming 
            languages and frameworks. I enjoy creating innovative solutions and learning new technologies.
          </p>
          <p className="text-gray-300 text-lg">
            When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
            or working on personal projects that challenge my skills and creativity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}