import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Footer } from '../components/Footer';

export function IssuersPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    contactName: '',
    email: '',
    telegram: '',
    chain: '',
    tokenStandard: '',
    assetCategory: '',
    description: '',
    message: '',
  });

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after showing confirmation
    setTimeout(() => {
      setFormData({
        companyName: '',
        website: '',
        contactName: '',
        email: '',
        telegram: '',
        chain: '',
        tokenStandard: '',
        assetCategory: '',
        description: '',
        message: '',
      });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          <Link to="/strategies" className="text-slate-700 hover:text-slate-900 transition-colors">Strategies</Link>
          <Link to="/issuers" className="text-slate-900 font-semibold underline transition-colors">List an RWA</Link>
        </div>

        <Button 
          size="lg" 
          className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-sans px-6 py-6 text-base"
        >
          Launch App
          <ArrowRight className="w-5 h-5 ml-1" />
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-['JetBrains_Mono'] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              For RWA Issuers and Platforms
            </h1>
            <p className="text-slate-700 text-lg mb-8 leading-relaxed">
              We welcome verified RWA issuers and tokenization platforms on HarborYield. Every listing goes through structured due diligence and document review to ensure legal clarity, asset ownership transparency, and investor-grade standards.
            </p>
            <Button
              size="lg"
              onClick={handleScrollToForm}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-sans px-8 py-7 text-lg"
            >
              Request RWA Listing
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="relative py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-slate-200"
          >
            <h2 className="font-['JetBrains_Mono'] text-2xl font-bold text-slate-900 mb-6">
              Qualifications
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Assets issued on an EVM-compatible chain</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Token standard: ERC-20, ERC-3643, ERC-1155, or ERC-1400</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Documents confirming your legal status as a token issuer</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Documents confirming token-holder rights / asset ownership (e.g., Token Purchase Agreement, Terms of Service, or equivalent)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Any additional materials that help complete due diligence faster and smoother</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 border border-indigo-200"
          >
            <h2 className="font-['JetBrains_Mono'] text-2xl font-bold text-slate-900 mb-2">
              Review Timeline: 7–10 days
            </h2>
            <div className="mt-6 space-y-4">
              {[
                'Initial review',
                'Representative contact + intro call',
                'Document review',
                'Issuer registration on HarborYield',
                'Asset listing'
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-['JetBrains_Mono'] font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-slate-700 text-lg mt-0.5">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Request Section */}
      <section ref={formRef} className="relative py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-slate-200"
          >
            <h2 className="font-['JetBrains_Mono'] text-2xl font-bold text-slate-900 mb-6">
              Request RWA Listing
            </h2>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-semibold text-slate-900 mb-2">
                      Company / Issuer name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-slate-900 mb-2">
                      Website <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-semibold text-slate-900 mb-2">
                      Contact name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telegram" className="block text-sm font-semibold text-slate-900 mb-2">
                    Telegram / Signal (optional)
                  </label>
                  <input
                    type="text"
                    id="telegram"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="chain" className="block text-sm font-semibold text-slate-900 mb-2">
                      Chain <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="chain"
                      name="chain"
                      value={formData.chain}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    >
                      <option value="">Select chain</option>
                      <option value="ethereum">Ethereum</option>
                      <option value="polygon">Polygon</option>
                      <option value="binance">Binance Smart Chain</option>
                      <option value="avalanche">Avalanche</option>
                      <option value="arbitrum">Arbitrum</option>
                      <option value="optimism">Optimism</option>
                      <option value="base">Base</option>
                      <option value="other">Other EVM-compatible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="tokenStandard" className="block text-sm font-semibold text-slate-900 mb-2">
                      Token standard <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="tokenStandard"
                      name="tokenStandard"
                      value={formData.tokenStandard}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    >
                      <option value="">Select standard</option>
                      <option value="erc20">ERC-20</option>
                      <option value="erc3643">ERC-3643</option>
                      <option value="erc1155">ERC-1155</option>
                      <option value="erc1400">ERC-1400</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="assetCategory" className="block text-sm font-semibold text-slate-900 mb-2">
                    Asset category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="assetCategory"
                    name="assetCategory"
                    value={formData.assetCategory}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  >
                    <option value="">Select category</option>
                    <option value="funds">Funds</option>
                    <option value="realEstate">Real Estate</option>
                    <option value="privateCredits">Private Credits</option>
                    <option value="commodities">Commodities</option>
                    <option value="equities">Equities</option>
                    <option value="bonds">Bonds</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-slate-900 mb-2">
                    Short asset description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="documents" className="block text-sm font-semibold text-slate-900 mb-2">
                    Documents upload
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-600 text-sm">Click to upload or drag and drop</p>
                    <p className="text-slate-500 text-xs mt-1">PDF, DOC, DOCX (max 10MB each)</p>
                    <input
                      type="file"
                      id="documents"
                      name="documents"
                      multiple
                      className="hidden"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Message / notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-sans"
                >
                  Request RWA Listing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="font-['JetBrains_Mono'] text-xl font-bold text-slate-900 mb-2">
                  Request Submitted
                </h3>
                <p className="text-slate-700">
                  Thanks—our team will reach out within 1–2 business days.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 bg-slate-900 hover:bg-slate-800 text-white rounded-lg"
                >
                  Submit Another Request
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}