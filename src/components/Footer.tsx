import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
const Footer = () => {
  const footerLinks = {
    Solutions: ["AI Workflow Automation", "Custom AI Agents", "Business Forecasting", "Content Creation", "Video Content AI"],
    Platform: ["Features", "Integrations", "Security", "API Documentation", "Performance"],
    Academy: ["AI Fundamentals", "ML Certification", "Ethics & Governance", "Corporate Training", "Certifications"],
    Company: ["About Us", "Careers", "Press Kit", "Contact", "Privacy Policy"]
  };
  const socialLinks = [{
    icon: <Linkedin className="w-5 h-5" />,
    href: "#",
    label: "LinkedIn"
  }, {
    icon: <Twitter className="w-5 h-5" />,
    href: "#",
    label: "Twitter"
  }, {
    icon: <Github className="w-5 h-5" />,
    href: "#",
    label: "GitHub"
  }];
  return <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">Datamorph</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed mb-6">
              Transforming businesses with intelligent AI solutions. 
              Empowering enterprises to lead in the AI revolution through 
              cutting-edge technology and expert guidance.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@datamorph.co</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map(link => <li key={link}>
                    <a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated with AI Insights
              </h3>
              <p className="text-secondary-foreground/80">
                Get the latest AI trends, case studies, and product updates delivered to your inbox.
              </p>
            </div>
            
            <div className="flex gap-2 w-full lg:w-auto lg:min-w-[400px]">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary" />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-secondary-foreground/60">
            © 2024 Datamorph. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                  {social.icon}
                </a>)}
            </div>
            
            <div className="flex gap-4 text-sm text-secondary-foreground/60">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;