import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    services: [] as string[],
    projectDetails: '',
    budget: '',
    timeline: ''
  });

  const services = [
    'AI Automation',
    'Paid Advertising',
    'Social Media Management',
    'Content Creation',
    'Data Analytics',
    'CRM Integration',
    'E-commerce Optimization',
    'Lead Generation'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.company) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      // TODO: Replace with actual Supabase integration
      console.log('Form submitted:', formData);
      toast.success('Quote request submitted successfully! We\'ll contact you within 24 hours.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        website: '',
        services: [],
        projectDetails: '',
        budget: '',
        timeline: ''
      });
      
      onClose();
    } catch (error) {
      toast.error('Failed to submit request. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Get Your Custom Quote</h2>
            <p className="text-muted-foreground">Tell us about your project and we'll provide a tailored solution</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Company <span className="text-destructive">*</span>
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Phone</label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Website</label>
              <Input
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="https://yourcompany.com"
              />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services Needed</h3>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-3">
                  <Checkbox
                    id={service}
                    checked={formData.services.includes(service)}
                    onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                  />
                  <label htmlFor={service} className="text-sm text-foreground cursor-pointer">
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Project Details</h3>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Project Description & Requirements
              </label>
              <Textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleInputChange}
                placeholder="Describe your project, goals, and specific requirements..."
                className="min-h-[100px] resize-none"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Budget Range</label>
                <Input
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="e.g., $10k - $50k"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Timeline</label>
                <Input
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  placeholder="e.g., 2-3 months"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="btn-premium flex-1"
            >
              Submit Quote Request
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;