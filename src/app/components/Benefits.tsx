import { Gauge, Network, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: Gauge,
    title: 'Portfolio Health Score',
    description: 'Valuation-driven insights.',
    highlight: 'Higher score - better investment results.',
    gradient: 'from-rose-500 to-pink-500'
  },
  {
    icon: Network,
    title: 'Cross-chain RWA Supermarket',
    description: 'Invest in EVM-based RWAs without chain-switching friction.',
    highlight: 'Seamless multi-chain experience.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: TrendingUp,
    title: 'Smart investment strategies',
    description: 'Institutional-level pre-built strategies tailored to risk tolerance.',
    highlight: 'Professional-grade portfolios.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Private layer for all RWAs',
    description: 'Native privacy for trading/investing powered by Oasis Network.',
    highlight: 'Confidential transactions.',
    gradient: 'from-emerald-500 to-teal-500'
  }
];

export function Benefits() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-50 via-indigo-50/40 to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16"
        >
          Why invest in tokenized RWA with us?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300 transition-all hover:shadow-2xl"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-['JetBrains_Mono'] text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-600 text-base leading-relaxed mb-3">
                    {benefit.description}
                  </p>
                  
                  <p className="font-['JetBrains_Mono'] text-sm font-semibold text-indigo-600">
                    {benefit.highlight}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}