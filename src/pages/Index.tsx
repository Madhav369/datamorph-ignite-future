import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import Features from '@/components/Features';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import WhyUs from '@/components/WhyUs';
import CaseStudies from '@/components/CaseStudies';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Solutions />
      <Features />
      <Process />
      <Stats />
      <WhyUs />
      <CaseStudies />
      <Team />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
