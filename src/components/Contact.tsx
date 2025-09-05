import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import QuoteForm from './QuoteForm';

const Contact = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('quote_requests')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          form_type: 'contact'
        });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John" 
                    className="h-12" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe" 
                    className="h-12" 
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com" 
                  className="h-12" 
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company" 
                  className="h-12" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">How can we help?</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your AI needs and goals..."
                  className="min-h-[120px] resize-none"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="btn-premium w-full text-lg h-14"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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