import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ fullName: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cyan-50/50 via-white to-fuchsia-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-600 to-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for all your printing needs. We're here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-2xl border-2 border-transparent hover:border-cyan-200 transition-all duration-300"
          >
            <h3 className="mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block mb-2 text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none transition-all"
                  placeholder="Tell us about your printing needs..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 via-fuchsia-600 to-pink-600 text-white rounded-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-cyan-500"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-3">Phone Numbers</h4>
                  <a href="tel:992243684" className="flex items-center gap-2 mb-2 text-gray-600 hover:text-cyan-600 transition-colors group">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                      <Phone className="w-3 h-3 text-cyan-600" />
                    </div>
                    <span>992243684</span>
                  </a>
                  <a href="tel:9011169691" className="flex items-center gap-2 mb-2 text-gray-600 hover:text-fuchsia-600 transition-colors group">
                    <div className="w-6 h-6 rounded-full bg-fuchsia-100 flex items-center justify-center group-hover:bg-fuchsia-200 transition-colors">
                      <Phone className="w-3 h-3 text-fuchsia-600" />
                    </div>
                    <span>9011169691</span>
                  </a>
                  <a href="tel:9881426201" className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors group">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                      <Phone className="w-3 h-3 text-yellow-600" />
                    </div>
                    <span>9881426201</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-fuchsia-600"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2">Our Location</h4>
                  <p className="text-gray-600">
                    1243/36, B Ward Charne Engineer Works,<br />
                    Near Dudhane Natbolt,<br />
                    Shivaji Udhyamnagar,<br />
                    Kolhapur
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-yellow-400"
            >
              <div className="w-full h-64 bg-gradient-to-br from-cyan-100 via-fuchsia-100 to-yellow-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/5"></div>
                <div className="text-center relative z-10">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <MapPin className="w-12 h-12 text-fuchsia-600 mx-auto mb-2" />
                  </motion.div>
                  <p className="text-gray-700">Map Location</p>
                  <p className="text-sm text-gray-500">Shivaji Udhyamnagar, Kolhapur</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}