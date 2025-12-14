import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Phone, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758183961426-88d64eb5f787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZzZXQlMjBwcmludGluZyUyMHByZXNzJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc2NTY0Mjg4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Printing Press"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        
        {/* Animated CMYK dots */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-fuchsia-600/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-36 h-36 rounded-full bg-yellow-400/20 blur-3xl"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6">
              Subak Offset
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Quality Offset Printing with 30+ Years of Excellence
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              Contact Us
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-lg hover:from-fuchsia-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-fuchsia-500/50"
            >
              Get a Quote
            </button>
          </motion.div>

          {/* Phone Numbers with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="tel:992243684"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="text-white">992243684</span>
            </a>
            
            <a
              href="tel:9011169691"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-fuchsia-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="text-white">9011169691</span>
            </a>
            
            <a
              href="tel:9881426201"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="text-white">9881426201</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}