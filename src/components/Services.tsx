import {
  FileText,
  BookOpen,
  Image,
  Tag,
  Calendar,
  Book,
  Newspaper,
  Library,
  Mail,
  Sticker,
  Vote
} from "lucide-react";
import { motion } from "motion/react";

export function Services() {
  const services = [
    { icon: FileText, name: "Flyers Printing", color: "text-cyan-500", bg: "bg-cyan-50", gradient: "from-cyan-400 to-cyan-600" },
    { icon: BookOpen, name: "Brochure Printing", color: "text-fuchsia-600", bg: "bg-fuchsia-50", gradient: "from-fuchsia-500 to-pink-600" },
    { icon: Image, name: "Posters", color: "text-yellow-500", bg: "bg-yellow-50", gradient: "from-yellow-400 to-orange-500" },
    { icon: Tag, name: "Danglers", color: "text-cyan-600", bg: "bg-cyan-50", gradient: "from-cyan-500 to-blue-600" },
    { icon: Calendar, name: "Calendars", color: "text-fuchsia-500", bg: "bg-fuchsia-50", gradient: "from-fuchsia-400 to-purple-600" },
    { icon: Book, name: "Booklets", color: "text-yellow-600", bg: "bg-yellow-50", gradient: "from-yellow-500 to-amber-600" },
    { icon: Newspaper, name: "Magazines", color: "text-cyan-500", bg: "bg-cyan-50", gradient: "from-cyan-400 to-teal-600" },
    { icon: Library, name: "Catalogues", color: "text-fuchsia-600", bg: "bg-fuchsia-50", gradient: "from-fuchsia-600 to-pink-700" },
    { icon: Mail, name: "Envelopes", color: "text-yellow-500", bg: "bg-yellow-50", gradient: "from-yellow-400 to-orange-600" },
    { icon: Sticker, name: "Label Printing", color: "text-cyan-600", bg: "bg-cyan-50", gradient: "from-cyan-600 to-blue-700" },
    { icon: Vote, name: "Election Material", color: "text-fuchsia-500", bg: "bg-fuchsia-50", gradient: "from-fuchsia-500 to-purple-700" }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-yellow-50/30 to-cyan-50/30 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-600 to-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive printing solutions tailored to meet your business needs with precision and quality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group p-6 rounded-xl border-2 border-gray-200 hover:border-transparent bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex items-center justify-center w-14 h-14 rounded-lg ${service.bg} mb-4 relative z-10 shadow-md group-hover:shadow-lg`}
              >
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </motion.div>
              <h4 className="mb-2 relative z-10">{service.name}</h4>
              <p className="text-sm text-gray-600 relative z-10">
                Professional printing services with attention to detail
              </p>
              
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}