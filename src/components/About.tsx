import { Building2, Settings, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-fuchsia-50/50 via-white to-yellow-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">About Subak Offset</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-600 to-yellow-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-fuchsia-600 to-yellow-400 rounded-lg blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1586939735472-c24cb4621c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTVlLJTIwcHJpbnRpbmclMjBjb2xvcnN8ZW58MXx8fHwxNzY1NjQyODg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="CMYK Printing"
              className="w-full h-96 object-cover rounded-lg shadow-2xl relative z-10 transform group-hover:scale-[1.02] transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6">
              We are a professionally managed offset printing press with 30 years of experience in delivering high-quality printing solutions to businesses across various industries.
            </p>
            <p className="mb-8">
              Our commitment to excellence, precision, and customer satisfaction has made us a trusted name in the printing industry.
            </p>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-cyan-100/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1">4 Colour Offset Printing Press</h4>
                  <p className="text-gray-600">Advanced 4-color printing capabilities for vibrant, professional results</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-fuchsia-50 to-pink-100/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1">Advanced Machinery</h4>
                  <p className="text-gray-600">
                    Equipped with Heidelberg Topssetter CTP Machine and Komori Lithrone 26 Printing Machine
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-100/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1">Quality & Precision</h4>
                  <p className="text-gray-600">
                    Focus on delivering precise, high-quality prints that exceed expectations
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}