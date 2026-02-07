import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero />
      <ValueProposition />
      <Benefits />
      <Footer />
    </div>
  );
}