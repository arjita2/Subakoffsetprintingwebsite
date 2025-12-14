import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <h3 className="bg-gradient-to-r from-cyan-500 via-fuchsia-600 to-yellow-400 bg-clip-text text-transparent">
              Subak Offset
            </h3>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <motion.button
              whileHover={{ scale: 1.1, color: "rgb(6, 182, 212)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("home")}
              className="hover:text-cyan-500 transition-colors"
            >
              Home
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, color: "rgb(6, 182, 212)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("about")}
              className="hover:text-cyan-500 transition-colors"
            >
              About
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, color: "rgb(6, 182, 212)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("services")}
              className="hover:text-cyan-500 transition-colors"
            >
              Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, color: "rgb(6, 182, 212)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="hover:text-cyan-500 transition-colors"
            >
              Contact
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 hover:bg-cyan-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-cyan-600" />
            ) : (
              <Menu className="w-6 h-6 text-cyan-600" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 flex flex-col space-y-4"
          >
            <button
              onClick={() => scrollToSection("home")}
              className="text-left hover:text-cyan-500 transition-colors py-2 px-4 hover:bg-cyan-50 rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left hover:text-cyan-500 transition-colors py-2 px-4 hover:bg-cyan-50 rounded-lg"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left hover:text-cyan-500 transition-colors py-2 px-4 hover:bg-cyan-50 rounded-lg"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left hover:text-cyan-500 transition-colors py-2 px-4 hover:bg-cyan-50 rounded-lg"
            >
              Contact
            </button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}