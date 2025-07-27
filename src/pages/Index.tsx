import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import Platform from '@/components/Platform';
import Academy from '@/components/Academy';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Solutions />
      <Platform />
      <Academy />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
