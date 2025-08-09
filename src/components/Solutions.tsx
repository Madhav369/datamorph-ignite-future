import { Link } from 'react-router-dom';
import { Bot, BarChart3, Mail, LineChart, Workflow, MessageSquare, LayoutDashboard, Brain, Megaphone } from 'lucide-react';

const items = [
  { title: 'AI Business Automation', path: '/solutions/ai-automation', icon: Workflow, tag: 'Operations' },
  { title: 'CRM Workflows with AI', path: '/solutions/crm', icon: Bot, tag: 'CRM' },
  { title: 'SEO for LLMs', path: '/solutions/seo-llms', icon: LineChart, tag: 'Content' },
  { title: 'Performance Marketing with AI', path: '/solutions/performance-marketing', icon: Megaphone, tag: 'Marketing' },
  { title: 'Lead Generation & Funnels', path: '/solutions/funnels', icon: BarChart3, tag: 'Marketing' },
  { title: 'Customer Support Chatbots', path: '/solutions/support-bots', icon: MessageSquare, tag: 'Support' },
  { title: 'Email & SMS Automation', path: '/solutions/email-automation', icon: Mail, tag: 'CRM' },
  { title: 'Custom AI Dashboards', path: '/solutions/dashboards', icon: LayoutDashboard, tag: 'Analytics' },
  { title: 'Internal Tools & AI Assistants', path: '/solutions/custom-ai', icon: Brain, tag: 'Productivity' },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Solutions</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Clean, mobile‑first, and easy to explore. Tap a card to learn more.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, path, icon: Icon, tag }) => (
            <Link key={path} to={path} className="group card-premium p-6 rounded-xl border border-border bg-card/60 hover-lift hover:shadow-glow transition-all hover-scale">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs bg-primary/10 text-primary border border-primary/20">{tag}</span>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Short, high‑impact solutions. Some services overlap — we’ll bundle what fits.</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
