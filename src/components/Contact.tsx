import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import QuoteForm from './QuoteForm';

const Contact = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "hello@datamorph.ai",
      description: "Get in touch for any inquiries"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Speak with our AI experts"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      value: "San Francisco, CA",
      description: "AI Innovation Hub"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Book Demo",
      value: "Schedule Now",
      description: "See our platform in action"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how Datamorph can accelerate your AI journey. 
            Book a demo or get in touch with our experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-premium">
            <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" className="h-12" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@company.com" className="h-12" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input placeholder="Your Company" className="h-12" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">How can we help?</label>
                <Textarea 
                  placeholder="Tell us about your AI needs and goals..."
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button 
                className="btn-premium w-full text-lg h-14"
                onClick={() => setIsQuoteFormOpen(true)}
              >
                Get Quote
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our AI experts are ready to help you unlock the full potential of artificial intelligence 
                for your business. Whether you're just getting started or looking to scale existing AI initiatives, 
                we're here to guide you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="p-6 rounded-xl bg-card/50 hover:bg-card transition-colors">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white mb-4">
                    {info.icon}
                  </div>
                  <h4 className="font-semibold mb-1">{info.title}</h4>
                  <div className="text-primary font-medium mb-1">{info.value}</div>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      
      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)} 
      />
    </section>
  );
};

export default Contact;