import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-bg.jpg';
const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    // Typing animation for hero text
    const typingElement = document.querySelector('.typing-animation');
    if (typingElement) {
      typingElement.classList.add('animate-typing');
    }
  }, []);
  return <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">{/* Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => <div key={i} className="particle bg-primary/30 animate-float" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }} />)}
      </div>
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop className="w-full h-full object-cover opacity-20" style={{
        filter: 'hue-rotate(240deg) saturate(0.8)'
      }}>
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Animated background grid overlay */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse animate-float" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-secondary/20 rounded-full animate-pulse" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse animate-float" style={{
        animationDelay: '3s'
      }} />
        <div className="absolute bottom-1/3 right-2/3 w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{
        animationDelay: '4s'
      }} />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-bounce-in hover-glow cursor-pointer" style={{
          animationDelay: '0.2s'
        }}>
            <span className="text-sm font-medium text-primary">NEW GEN AI AUTOMATION PARTNER</span>
          </div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Automate smarter, grow faster with AI
          </motion.h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>Your Digital Partner for the AI Age</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{
          animationDelay: '0.8s'
        }}>
            <Button 
              className="btn-premium text-lg px-8 py-4 rounded-lg hover-lift group"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).Calendly) {
                  (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/madhav-bhattarai369/new-meeting'});
                }
              }}
            >
              <span className="group-hover:animate-pulse">Book A Free Call</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>


          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;