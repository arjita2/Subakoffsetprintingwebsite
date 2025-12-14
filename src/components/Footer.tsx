import { Phone, MapPin } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="mb-4 text-white bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-300 bg-clip-text text-transparent">
              Subak Offset
            </h4>
            <p className="text-gray-400">
              Quality Offset Printing with 30+ Years of Excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-400 hover:text-cyan-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <div>992243684</div>
                  <div>9011169691</div>
                  <div>9881426201</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  1243/36, B Ward Charne Engineer Works,
                  Near Dudhane Natbolt,
                  Shivaji Udhyamnagar, Kolhapur
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Subak Offset. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
