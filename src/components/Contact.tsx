import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
                alt="Collaboration"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 text-lg mb-6">
                I'm always excited to collaborate on interesting projects and connect with fellow developers. 
                Whether you have a project in mind or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:duttaanupam2011@gmail.com"
                  className="block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg text-center hover:opacity-90 transition-opacity"
                >
                  Send me an email
                </a>
                <a
                  href="https://github.com/AnupamDutta2011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 bg-gray-800 text-white rounded-lg text-center hover:bg-gray-700 transition-colors"
                >
                  View my GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}