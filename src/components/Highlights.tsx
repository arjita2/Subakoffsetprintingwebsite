import { Award, Printer, Cog, Clock } from "lucide-react";
import { motion } from "motion/react";

export function Highlights() {
  const highlights = [
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Three decades of printing excellence and expertise",
      color: "text-cyan-500",
      bg: "bg-cyan-50",
      gradient: "from-cyan-400 to-cyan-600"
    },
    {
      icon: Printer,
      title: "4 Colour Offset Press",
      description: "State-of-the-art offset printing technology",
      color: "text-fuchsia-600",
      bg: "bg-fuchsia-50",
      gradient: "from-fuchsia-500 to-pink-600"
    },
    {
      icon: Cog,
      title: "Advanced Machinery",
      description: "Heidelberg & Komori printing equipment",
      color: "text-yellow-500",
      bg: "bg-yellow-50",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Clock,
      title: "Reliable & On-Time",
      description: "Commitment to quality and timely delivery",
      color: "text-gray-700",
      bg: "bg-gray-100",
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white via-cyan-50/30 to-fuchsia-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center p-6 rounded-xl hover:shadow-2xl transition-all duration-300 bg-white border-2 border-transparent hover:border-opacity-50 relative overflow-hidden group"
              style={{
                borderColor: `transparent`,
              }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${highlight.bg} mb-4 relative z-10`}
              >
                <highlight.icon className={`w-8 h-8 ${highlight.color}`} />
              </motion.div>
              <h4 className="mb-2 relative z-10">{highlight.title}</h4>
              <p className="text-gray-600 relative z-10">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}