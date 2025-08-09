import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const tools: { name: string; description: string }[] = [
  { name: 'OpenAI (GPT-5)', description: 'Advanced language and reasoning models for automation.' },
  { name: 'Claude (Anthropic)', description: 'Reliable, safe AI for complex workflows.' },
  { name: 'Google Gemini', description: 'Multimodal AI for search, vision, and data tasks.' },
  { name: 'Microsoft Copilot / Azure AI', description: 'Enterprise-grade AI and automation on Azure.' },
  { name: 'Notion AI', description: 'Knowledge ops and internal documentation automation.' },
  { name: 'Slack AI', description: 'Embedded assistants and workflows in Slack.' },
  { name: 'N8N', description: 'Open-source workflow automation with nodes.' },
  { name: 'Zapier', description: 'Fast no-code integrations and automations.' },
  { name: 'Make.com', description: 'Visual automation builder for complex flows.' },
  { name: 'Salesforce Einstein', description: 'AI in CRM for sales and service.' },
  { name: 'HubSpot AI', description: 'AI content, scoring, and CRM workflows.' },
  { name: 'Airtable Automations', description: 'Data pipelines and lightweight apps.' },
  { name: 'Typeform AI', description: 'AI forms and conversational data capture.' },
  { name: 'ElevenLabs', description: 'Realistic AI voice for assistants and content.' },
  { name: 'RunwayML', description: 'Video generation and editing with AI.' },
  { name: 'Midjourney', description: 'High-quality image generation for brand assets.' },
];

const ToolsWeUse = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Automation Authority</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We partner and build using official APIs and integrations from industry‑leading platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, i) => (
            <TooltipProvider key={tool.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      'p-4 rounded-xl border border-border bg-card/60 text-center hover-scale hover:shadow-glow cursor-pointer card-premium',
                      'animate-fade-in animate-float'
                    )}
                    style={{ animationDelay: `${i * 40}ms` }}
                    aria-label={tool.name}
                  >
                    <span className="block text-sm font-medium">{tool.name}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-sm">{tool.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsWeUse;
