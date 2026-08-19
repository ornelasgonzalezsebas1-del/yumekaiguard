import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Comparison from '@/components/Comparison';
import AnimeSection from '@/components/AnimeSection';
import FAQ from '@/components/FAQ';
import Support from '@/components/Support';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Pricing />
        <Comparison />
        <AnimeSection />
        <FAQ />
        <Support />
        <FinalCTA />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;
