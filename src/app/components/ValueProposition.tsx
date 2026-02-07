import { ShoppingBasket, LineChart } from 'lucide-react';
import { motion } from 'motion/react';
import illustrationImage from '@/assets/fe46500f46b0b25b9951782a61ae6e08d15a2b60.png';

export function ValueProposition() {
  return (
    <section className="relative py-12 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-50 via-indigo-50/40 to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-8"
        >
          Invest in RWAs without the network hassle.
        </motion.h2>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex justify-center"
        >
          <img 
            src={illustrationImage} 
            alt="RWA Supermarket to Portfolio Dashboard" 
            className="w-full max-w-5xl h-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Feature A */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 hover:border-indigo-300 transition-all hover:shadow-xl"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <ShoppingBasket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-['JetBrains_Mono'] text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                  Collect the basket of tokenized RWAs in a few clicks
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Easily build a diversified portfolio from our curated marketplace of institutional-grade real-world assets.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature B */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 hover:border-indigo-300 transition-all hover:shadow-xl"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <LineChart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-['JetBrains_Mono'] text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                  Track all assets from all chains and portfolio performance
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Monitor your cross-chain RWA investments in one unified dashboard with real-time analytics.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
