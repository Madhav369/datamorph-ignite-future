import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Check } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const Pricing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    requirements: {
      automation: false,
      paidAds: false,
      socialMediaManagement: false,
      contentCreation: false,
      dataAnalytics: false,
      crmIntegration: false
    },
    additionalDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRequirementChange = (requirement: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      requirements: { ...prev.requirements, [requirement]: checked }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const nameParts = formData.name.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Convert requirements object to array of selected services
      const selectedServices = Object.entries(formData.requirements)
        .filter(([_, selected]) => selected)
        .map(([key, _]) => {
          const serviceMap: Record<string, string> = {
            automation: 'AI Automation',
            paidAds: 'Paid Advertising',
            socialMediaManagement: 'Social Media Management',
            contentCreation: 'Content Creation',
            dataAnalytics: 'Data Analytics',
            crmIntegration: 'CRM Integration'
          };
          return serviceMap[key] || key;
        });

      const { error } = await supabase
        .from('quote_requests')
        .insert({
          first_name: firstName,
          last_name: lastName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          services: selectedServices,
          message: formData.additionalDetails,
          form_type: 'custom'
        });

      if (error) throw error;

      toast.success('Custom quote request submitted successfully! We\'ll analyze your requirements and get back to you with a personalized proposal.');

      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        requirements: {
          automation: false,
          paidAds: false,
          socialMediaManagement: false,
          contentCreation: false,
          dataAnalytics: false,
          crmIntegration: false
        },
        additionalDetails: ''
      });
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error submitting custom quote request:', error);
      toast.error('Failed to submit quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const plan = {
    name: "Custom Enterprise Solution",
    features: [
      "Unlimited Custom Workflows",
      "Dedicated AI Strategist",
      "API & Private Integrations",
      "Real-Time Performance Dashboards", 
      "24/7 Premium Support + SLA",
      "Tailored to Your Business Needs"
    ]
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wide">PRICING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Custom Enterprise Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get a tailored solution designed specifically for your business needs
          </p>
        </div>

        {/* Custom Plan Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative p-8 rounded-2xl border bg-primary/5 border-primary shadow-glow">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Recommended
              </span>
            </div>

            {/* Plan Name */}
            <h3 className="text-2xl font-bold text-foreground mb-2 text-center">{plan.name}</h3>

            {/* Price */}
            <div className="mb-6 text-center">
              <span className="text-4xl font-bold text-foreground">Custom Quote</span>
              <p className="text-muted-foreground mt-2">Based on your specific requirements</p>
            </div>

            {/* CTA Button with Form */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full mb-8 bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Custom Quote
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Tell Us About Your Requirements</DialogTitle>
                  <DialogDescription>
                    Fill out this form and we'll create a custom solution tailored to your business needs.
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Services Required */}
                  <div>
                    <Label className="text-base font-medium">Services Required</Label>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      {[
                        { key: 'automation', label: 'AI Automation' },
                        { key: 'paidAds', label: 'Paid Advertising' },
                        { key: 'socialMediaManagement', label: 'Social Media Management' },
                        { key: 'contentCreation', label: 'Content Creation' },
                        { key: 'dataAnalytics', label: 'Data Analytics' },
                        { key: 'crmIntegration', label: 'CRM Integration' }
                      ].map((service) => (
                        <div key={service.key} className="flex items-center space-x-2">
                          <Checkbox
                            id={service.key}
                            checked={formData.requirements[service.key as keyof typeof formData.requirements]}
                            onCheckedChange={(checked) => 
                              handleRequirementChange(service.key, checked as boolean)
                            }
                          />
                          <Label htmlFor={service.key} className="text-sm">{service.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div>
                    <Label htmlFor="details">Additional Requirements</Label>
                    <Textarea
                      id="details"
                      placeholder="Tell us more about your specific needs, goals, and any other requirements..."
                      value={formData.additionalDetails}
                      onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Requirements'}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            {/* Features */}
            <ul className="space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            We donate 2% of your membership to pediatric wellbeing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;