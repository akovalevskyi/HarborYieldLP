import { Hero } from '../components/Hero';
import { ValueProposition } from '../components/ValueProposition';
import { Benefits } from '../components/Benefits';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Benefits />
      <Footer />
    </>
  );
}
