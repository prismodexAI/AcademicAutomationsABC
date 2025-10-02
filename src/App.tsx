{/* What this looks like */}
<section className="bg-gray-50 py-20" id="pricing">
  <div className="max-w-7xl mx-auto px-4">
    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="flex items-center justify-center mb-4">
        <Target className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-4xl font-bold text-gray-900">What this looks like</h3>
      </div>
    </motion.div>

    {/* Steps: single arrow from 1 -> 3, 2 sits centered above the arrow */}
    <div className="max-w-6xl mx-auto mb-12 px-4">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Step 1 */}
        <motion.div
          className="flex flex-col items-center text-center group cursor-pointer max-w-xs"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="text-xl font-bold text-gray-900 mb-4">Input</h4>
          <motion.div
            className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            1
          </motion.div>
          <p className="text-base text-gray-700 leading-relaxed text-center">Upload unorganised Sheet or data</p>
        </motion.div>

        {/* Center area: Step 2 above a long arrow stretching to Step 3 */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            2
          </motion.div>

          <p className="text-base text-gray-700 leading-relaxed text-center mb-6 max-w-xs">We handle behind the scenes processes</p>

          {/* long arrow (hidden on small screens) */}
          <div className="hidden md:flex items-center w-64 justify-center mt-2">
            <div className="relative w-full">
              <div className="h-0.5 bg-gray-300 rounded-full" />
              <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <motion.div
          className="flex flex-col items-center text-center group cursor-pointer max-w-xs"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-xl font-bold text-gray-900 mb-4">Output</h4>
          <motion.div
            className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            3
          </motion.div>
          <p className="text-base text-gray-700 leading-relaxed text-center max-w-sm">Fully organised structured sheet data, weekly reports and insights driven by weekly, monthly and annual data.</p>
        </motion.div>
      </div>
    </div>
  </div>
</section>
