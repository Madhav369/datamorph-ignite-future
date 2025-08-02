import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import AnimatedDashboard from './AnimatedDashboard';

const Team = () => {
  const founder = {
    name: "Madhav Bhattarai",
    role: "Co-founder & AI Strategy Lead",
    bio: "Visionary entrepreneur with deep expertise in AI automation and business transformation. Leading the charge in making AI accessible and profitable for businesses worldwide.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  };

  const team = [
    {
      name: "Sarah Rodriguez",
      role: "CTO & Tech Lead",
      bio: "Ex-Microsoft engineer specializing in enterprise AI solutions and automation frameworks.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Michael Zhang",
      role: "Head of Performance Marketing",
      bio: "15+ years optimizing advertising campaigns and building high-converting marketing funnels.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Emily Johnson",
      role: "Director of AI Training",
      bio: "Dedicated to empowering teams with AI knowledge through our comprehensive academy programs.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wide">OUR TEAM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the AI
            <span className="block text-gradient">Experts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            World-class team of AI engineers, automation specialists, and business strategists
          </p>
        </motion.div>

        {/* Founder Section with Animated Dashboard */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Bio */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20 mb-4">
                <span className="text-sm font-medium text-primary uppercase tracking-wide">FOUNDER</span>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Neural pulse effect */}
                  <div className="absolute inset-0 w-32 h-32 rounded-2xl border-2 border-primary/30 animate-neural-pulse"></div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-xl text-primary font-medium mb-4">{founder.role}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a 
                      href={founder.social.linkedin}
                      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift"
                    >
                      <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
                    </a>
                    <a 
                      href={founder.social.twitter}
                      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift"
                    >
                      <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animated Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:h-[500px]"
            >
              <AnimatedDashboard />
            </motion.div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="card-premium hover-lift p-6 text-center">
                {/* Photo */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Neural pulse effect */}
                  <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-2 border-primary/30 animate-neural-pulse"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a 
                    href={member.social.linkedin}
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift"
                  >
                    <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift"
                  >
                    <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6">
            Want to work with industry-leading AI experts?
          </p>
          <button className="btn-premium px-8 py-3">
            Schedule Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;