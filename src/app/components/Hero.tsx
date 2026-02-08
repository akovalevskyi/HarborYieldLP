import { Button } from './ui/button';
import { AnimatedText } from './AnimatedText';
import { Building2, Landmark, Wheat, Building, TrendingUp, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const dynamicWords = [
  'Smart Strategies',
  'Cross-chain supermarket',
  'Portfolio Health Score',
  'Privacy Layer'
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Navigation - Sticky */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 bg-white/70 backdrop-blur-md border-b border-slate-200">
        <div className="font-['JetBrains_Mono'] font-semibold text-xl md:text-2xl text-slate-900">
          Harbor<span className="text-indigo-600">Yield</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 text-[20px]">
          <Link to="/" className="text-slate-900 font-semibold underline transition-colors">Home</Link>
          <Link to="/manifesto" className="text-slate-700 hover:text-slate-900 transition-colors">Manifesto</Link>
          <Link to="/strategies" className="text-slate-700 hover:text-slate-900 transition-colors">Strategies</Link>
          <Link to="/issuers" className="text-slate-700 hover:text-slate-900 transition-colors">List an RWA</Link>
        </div>

        <Button 
          size="lg" 
          className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-sans px-6 py-6 text-base"
          asChild
        >
          <a href="https://app.harbory.xyz/" target="_blank" rel="noopener noreferrer">
            Launch App
            <ArrowRight className="w-5 h-5 ml-1" />
          </a>
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 text-center pb-24">
        <div className="max-w-5xl">
          <h1 className="md:text-6xl lg:text-[72px] font-bold text-slate-900 mb-6 leading-tight text-[48px]">
            Build diversified tokenized RWA-portfolio with
            <AnimatedText 
              words={dynamicWords}
              interval={2000}
              className="text-indigo-600 mt-2 min-h-[1.5em] font-['JetBrains_Mono']"
            />
          </h1>
          
          <h2 className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Invest safely and track the health of your portfolio.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all font-sans"
              asChild
            >
              <a href="https://app.harbory.xyz/" target="_blank" rel="noopener noreferrer">
                Launch App
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg rounded-xl border-2 border-slate-900 hover:border-slate-700 bg-white hover:bg-slate-50 text-slate-900 transition-all font-sans"
              asChild
            >
              <a href="https://app.harbory.xyz/" target="_blank" rel="noopener noreferrer">
                <Globe className="w-5 h-5" />
                Explore Assets
              </a>
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full flex flex-col items-center justify-center gap-6 px-6">
            <p className="text-xs font-medium text-slate-400 tracking-widest uppercase">
              Trusted Asset Classes
            </p>
            <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-slate-500">
                <Building2 className="w-5 h-5" />
                <span className="text-sm md:text-base">Real Estate</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Landmark className="w-5 h-5" />
                <span className="text-sm md:text-base">Treasuries</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Wheat className="w-5 h-5" />
                <span className="text-sm md:text-base">Commodities</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Building className="w-5 h-5" />
                <span className="text-sm md:text-base">Private Credit</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm md:text-base">Equities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badge - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-indigo-200 shadow-lg">
          <span className="font-['JetBrains_Mono'] text-sm font-semibold text-indigo-600">
            HackMoney 2026
          </span>
        </div>
      </div>
    </section>
  );
}