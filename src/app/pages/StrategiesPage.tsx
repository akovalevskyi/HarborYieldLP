import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, TrendingUp, Shield, Zap, Rocket, AlertCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Footer } from '../components/Footer';

interface Strategy {
  name: string;
  description: string;
  yieldRange: string;
  volatility: string;
  icon: typeof Shield;
  allocations: {
    funds: number;
    bonds: number;
    realEstate: number;
    privateCredits: number;
    commodities: number;
    equities: number;
    other: number;
  };
}

const strategies: Record<string, Strategy> = {
  defensive: {
    name: 'Defensive',
    description: 'Prioritizes capital preservation with minimal volatility, focusing on stable, low-risk assets.',
    yieldRange: '4–6%',
    volatility: 'Lower volatility',
    icon: Shield,
    allocations: {
      funds: 30,
      bonds: 30,
      realEstate: 20,
      privateCredits: 10,
      commodities: 5,
      equities: 3,
      other: 2,
    },
  },
  conservative: {
    name: 'Conservative',
    description: 'Balances safety with modest growth potential through quality fixed-income and stable assets.',
    yieldRange: '5–7%',
    volatility: 'Lower volatility',
    icon: ShieldCheck,
    allocations: {
      funds: 25,
      bonds: 25,
      realEstate: 20,
      privateCredits: 12,
      commodities: 6,
      equities: 10,
      other: 2,
    },
  },
  balanced: {
    name: 'Balanced',
    description: 'Evenly distributes risk and return across asset classes for steady, diversified growth.',
    yieldRange: '6–9%',
    volatility: 'Medium volatility',
    icon: TrendingUp,
    allocations: {
      funds: 15,
      bonds: 20,
      realEstate: 20,
      privateCredits: 15,
      commodities: 10,
      equities: 18,
      other: 2,
    },
  },
  growth: {
    name: 'Growth',
    description: 'Emphasizes higher-return assets like equities and private credits for capital appreciation.',
    yieldRange: '8–12%',
    volatility: 'Medium volatility',
    icon: Zap,
    allocations: {
      funds: 10,
      bonds: 10,
      realEstate: 18,
      privateCredits: 20,
      commodities: 10,
      equities: 28,
      other: 4,
    },
  },
  aggressive: {
    name: 'Aggressive',
    description: 'Maximizes growth potential with heavy allocation to equities and alternative assets, accepting higher risk.',
    yieldRange: '10–15%',
    volatility: 'Higher volatility',
    icon: Rocket,
    allocations: {
      funds: 5,
      bonds: 5,
      realEstate: 15,
      privateCredits: 22,
      commodities: 15,
      equities: 33,
      other: 5,
    },
  },
};

const assetLabels: { key: keyof Strategy['allocations']; label: string; gradient: string }[] = [
  { key: 'funds', label: 'Funds', gradient: 'from-rose-500 to-pink-500' },
  { key: 'bonds', label: 'Bonds', gradient: 'from-indigo-500 to-purple-500' },
  { key: 'realEstate', label: 'Real Estate', gradient: 'from-blue-500 to-cyan-500' },
  { key: 'privateCredits', label: 'Private Credits', gradient: 'from-emerald-500 to-teal-500' },
  { key: 'commodities', label: 'Commodities', gradient: 'from-amber-500 to-orange-500' },
  { key: 'equities', label: 'Equities', gradient: 'from-violet-500 to-fuchsia-500' },
  { key: 'other', label: 'Other', gradient: 'from-slate-500 to-gray-500' },
];

export function StrategiesPage() {
  const [selectedStrategy, setSelectedStrategy] = useState<string>('balanced');
  const strategy = strategies[selectedStrategy];

  const strategyKeys = ['defensive', 'conservative', 'balanced', 'growth', 'aggressive'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-indigo-50/30 to-slate-50">
      {/* Navigation Header */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 bg-white/50 backdrop-blur-sm border-b border-slate-200">
        <Link to="/" className="font-['JetBrains_Mono'] font-semibold text-xl md:text-2xl text-slate-900">
          Harbor<span className="text-indigo-600">Yield</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 text-[20px]">
          <Link to="/" className="text-slate-700 hover:text-slate-900 transition-colors">Home</Link>
          <Link to="/manifesto" className="text-slate-700 hover:text-slate-900 transition-colors">Manifesto</Link>
          <Link to="/strategies" className="text-slate-900 font-semibold underline transition-colors">Strategies</Link>
          <Link to="/issuers" className="text-slate-700 hover:text-slate-900 transition-colors">List an RWA</Link>
        </div>

        <Button 
          size="lg" 
          className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-sans px-6 py-6 text-base"
        >
          Launch App
          <ArrowRight className="w-5 h-5 ml-1" />
        </Button>
      </nav>

      {/* Strategies Content */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-['JetBrains_Mono'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Investment Strategies
            </h1>
            <p className="text-slate-700 text-lg">
              Choose a risk profile and see the target portfolio mix.
            </p>
          </motion.div>

          {/* Risk Spectrum Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm text-slate-600 font-semibold">Low Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600 font-semibold">Medium Risk</span>
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                </div>
              </div>
              
              <div className="flex gap-2">
                {strategyKeys.map((key) => {
                  const StrategyIcon = strategies[key].icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedStrategy(key)}
                      className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                        selectedStrategy === key
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <StrategyIcon className="w-4 h-4" />
                      {strategies[key].name}
                    </button>
                  );
                })}
              </div>

              {/* Selected Strategy Name */}
              <div className="mt-6 text-center">
                <h2 className="font-['JetBrains_Mono'] text-2xl font-bold text-slate-900">
                  {strategy.name} Strategy
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Strategy Summary Panel */}
          <motion.div
            key={selectedStrategy}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 border border-indigo-200">
              <p className="text-slate-700 text-lg mb-4">{strategy.description}</p>
              
              <div className="flex items-center gap-6 flex-wrap">
                <div>
                  <span className="font-['JetBrains_Mono'] font-semibold text-slate-900 text-lg">
                    Target APR (Yield): {strategy.yieldRange}
                  </span>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-white/60 rounded-full text-sm font-semibold text-slate-700">
                    {strategy.volatility}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Proportion Visualization */}
          <motion.div
            key={`allocations-${selectedStrategy}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-slate-200">
              <h3 className="font-['JetBrains_Mono'] text-xl font-bold text-slate-900 mb-6">
                Asset Allocation
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                {/* Left: Pie Chart */}
                <div className="flex flex-col items-center">
                  <div className="relative w-80 h-80">
                    <svg viewBox="0 0 200 200" className="transform -rotate-90">
                      {(() => {
                        let cumulativePercent = 0;
                        return assetLabels.map(({ key, label, gradient }, index) => {
                          const percentage = strategy.allocations[key];
                          const startAngle = (cumulativePercent / 100) * 360;
                          const endAngle = ((cumulativePercent + percentage) / 100) * 360;
                          cumulativePercent += percentage;
                          
                          // Calculate pie slice path
                          const startX = 100 + 90 * Math.cos((Math.PI * startAngle) / 180);
                          const startY = 100 + 90 * Math.sin((Math.PI * startAngle) / 180);
                          const endX = 100 + 90 * Math.cos((Math.PI * endAngle) / 180);
                          const endY = 100 + 90 * Math.sin((Math.PI * endAngle) / 180);
                          const largeArcFlag = percentage > 50 ? 1 : 0;
                          
                          const pathData = [
                            `M 100 100`,
                            `L ${startX} ${startY}`,
                            `A 90 90 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                            `Z`
                          ].join(' ');
                          
                          // Extract gradient colors for solid fills
                          const colorMap: Record<string, string> = {
                            'from-rose-500 to-pink-500': '#f43f5e',
                            'from-indigo-500 to-purple-500': '#6366f1',
                            'from-blue-500 to-cyan-500': '#3b82f6',
                            'from-emerald-500 to-teal-500': '#10b981',
                            'from-amber-500 to-orange-500': '#f59e0b',
                            'from-violet-500 to-fuchsia-500': '#8b5cf6',
                            'from-slate-500 to-gray-500': '#64748b',
                          };
                          
                          return (
                            <motion.path
                              key={`${selectedStrategy}-${key}`}
                              d={pathData}
                              fill={colorMap[gradient]}
                              stroke="white"
                              strokeWidth="2"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                            />
                          );
                        });
                      })()}
                    </svg>
                  </div>
                </div>
                
                {/* Right: Bar Chart */}
                <div className="space-y-4">
                  {assetLabels.map(({ key, label, gradient }) => {
                    const percentage = strategy.allocations[key];
                    return (
                      <div key={key}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-slate-900">{label}</span>
                          <span className="font-['JetBrains_Mono'] font-semibold text-slate-700">
                            {percentage}%
                          </span>
                        </div>
                        <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="text-sm text-slate-600 italic">
                Allocations are targets; actual portfolio may drift until rebalanced.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}