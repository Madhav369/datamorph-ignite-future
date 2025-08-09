import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import ToolsWeUse from '@/components/ToolsWeUse';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import WhyUs from '@/components/WhyUs';
import CaseStudies from '@/components/CaseStudies';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorRipple from '@/components/CursorRipple';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CursorRipple />
      <Navigation />
      <Hero />
      <About />
      <Solutions />
      <Process />
      <Stats />
      <ToolsWeUse />
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
