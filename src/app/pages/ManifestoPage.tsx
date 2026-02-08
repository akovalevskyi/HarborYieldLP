import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Footer } from '../components/Footer';

export function ManifestoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-indigo-50/30 to-slate-50">
      {/* Navigation Header */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 bg-white/50 backdrop-blur-sm border-b border-slate-200">
        <Link to="/" className="font-['JetBrains_Mono'] font-semibold text-xl md:text-2xl text-slate-900">
          Harbor<span className="text-indigo-600">Yield</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 text-[20px]">
          <Link to="/" className="text-slate-700 hover:text-slate-900 transition-colors">Home</Link>
          <Link to="/manifesto" className="text-slate-900 font-semibold underline transition-colors">Manifesto</Link>
          <Link to="/strategies" className="text-slate-700 hover:text-slate-900 transition-colors">Strategies</Link>
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

      {/* Manifesto Content */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="font-['JetBrains_Mono'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              HARBOR YIELD: FREEDOM, PRIVACY, AND STABILITY IN THE WORLD OF RWA
            </h1>
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                Today, the financial system is in a deep crisis of trust. Governments, major hedge funds, and stock markets are slowly losing the loyalty of retail investors. While institutional players gain access to the most lucrative real-world assets, 70% of private investors are left behind, forced to risk their capital in high-volatility products: CFDs, options, margin trading, and forex.
              </p>
              <p>
                We are here to change the game. We are building Harbor Yield — a Web3 investment wrapper that allows you to invest in low-volatility, yield-generating tokenized Real-World Assets (RWA), helping you grow your wealth from small with minimal time commitment.
              </p>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="font-['JetBrains_Mono'] text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              GLOBAL CHALLENGES OF CURRENT INFRASTRUCTURE
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              The tokenization market is growing, but it is broken. Modern RWA infrastructure fails to provide what investors truly need:
            </p>
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
                <h3 className="font-['JetBrains_Mono'] font-semibold text-slate-900 mb-2">Total Fragmentation:</h3>
                <p>The market is split across dozens of networks and isolated platforms. Users are forced to constantly switch between blockchains, wasting both time and money.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
                <h3 className="font-['JetBrains_Mono'] font-semibold text-slate-900 mb-2">Chaos of Standards and Regulations:</h3>
                <p>The disparity of legal frameworks and technical formats makes cross-jurisdictional investing nearly impossible.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
                <h3 className="font-['JetBrains_Mono'] font-semibold text-slate-900 mb-2">Liquidity Crisis:</h3>
                <p>Most RWA tokens are "dead weight." They are easy to buy but almost impossible to sell instantly when you need liquidity.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
                <h3 className="font-['JetBrains_Mono'] font-semibold text-slate-900 mb-2">Lack of Privacy:</h3>
                <p>Current solutions expose your investment strategies and balances for the whole world to see. In the world of RWA, privacy is becoming the standard that current infrastructure ignores.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
                <h3 className="font-['JetBrains_Mono'] font-semibold text-slate-900 mb-2">Blind Investing:</h3>
                <p>The lack of transparent risk assessment and diversification tools turns investing into a lottery.</p>
              </div>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="font-['JetBrains_Mono'] text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              OUR SOLUTION: HARBOR YIELD
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              We solve the fundamental problem of finding reliable RWAs by creating a single window with an unprecedented level of security and analytics.
            </p>
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="font-['JetBrains_Mono'] font-semibold text-slate-900 mb-2">Institutional-level portfolio valuation:</h3>
                <p>We provide private investors with portfolio assessment tools previously available only to banks. Our Health Score and deep analytics allow you to assemble a balanced portfolio in minutes.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="font-['JetBrains_Mono'] font-semibold text-slate-900 mb-2">Privacy via Oasis OPL:</h3>
                <p>We utilize a confidential cross-chain layer to protect your transactions. Your purchase data and fund movements are hidden from the public eye while remaining legally compliant.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="font-['JetBrains_Mono'] font-semibold text-slate-900 mb-2">Unification and Liquidity:</h3>
                <p>We aggregate disparate assets under one roof. By creating the unified liquid hRWA index, we solve the problem of "trapped" tokens, ensuring an instant exit to liquidity.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="font-['JetBrains_Mono'] font-semibold text-slate-900 mb-2">Standards Transformation:</h3>
                <p>We take any asset and adapt it to your jurisdiction's requirements (e.g., transforming ERC-20 into ERC-3643), making investments legal and secure.</p>
              </div>
            </div>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="font-['JetBrains_Mono'] text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              OUR MISSION
            </h2>
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                Asset issuers know how to tokenize, but the market is only getting more complex, raising the barrier to entry for retail, non-professional investors. We handle the scoring, education, UX, and onboarding, bringing together the world's best assets on a universal asset page, where navigation, evaluation, and investing become intuitive.
              </p>
              <p className="font-semibold text-slate-900">
                We are not just a marketplace. We are your safe harbor in the ocean of tokenized assets. With Harbor Yield, you don't just buy tokens — you build a secure, private, and stable future for your capital.
              </p>
              <p className="font-['JetBrains_Mono'] text-xl font-bold text-indigo-600 mt-8">
                Join Harbor Yield. The time for stable growth has arrived.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}