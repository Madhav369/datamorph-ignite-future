import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const tools: { name: string; description: string; url: string }[] = [
  { name: 'OpenAI (GPT-5)', description: 'Advanced language and reasoning models for automation.', url: 'https://cdn.simpleicons.org/openai' },
  { name: 'Claude (Anthropic)', description: 'Reliable, safe AI for complex workflows.', url: 'https://cdn.simpleicons.org/anthropic' },
  { name: 'Google Gemini', description: 'Multimodal AI for search, vision, and data tasks.', url: 'https://cdn.simpleicons.org/googlegemini' },
  { name: 'Microsoft Copilot / Azure AI', description: 'Enterprise-grade AI and automation on Azure.', url: 'https://cdn.simpleicons.org/microsoft' },
  { name: 'Notion AI', description: 'Knowledge ops and internal documentation automation.', url: 'https://cdn.simpleicons.org/notion' },
  { name: 'Slack AI', description: 'Embedded assistants and workflows in Slack.', url: 'https://cdn.simpleicons.org/slack' },
  { name: 'N8N', description: 'Open-source workflow automation with nodes.', url: 'https://cdn.simpleicons.org/n8n' },
  { name: 'Zapier', description: 'Fast no-code integrations and automations.', url: 'https://cdn.simpleicons.org/zapier' },
  { name: 'Make.com', description: 'Visual automation builder for complex flows.', url: 'https://cdn.simpleicons.org/integromat' },
  { name: 'Salesforce Einstein', description: 'AI in CRM for sales and service.', url: 'https://cdn.simpleicons.org/salesforce' },
  { name: 'HubSpot AI', description: 'AI content, scoring, and CRM workflows.', url: 'https://cdn.simpleicons.org/hubspot' },
  { name: 'Airtable Automations', description: 'Data pipelines and lightweight apps.', url: 'https://cdn.simpleicons.org/airtable' },
  { name: 'Typeform AI', description: 'AI forms and conversational data capture.', url: 'https://cdn.simpleicons.org/typeform' },
  { name: 'ElevenLabs', description: 'Realistic AI voice for assistants and content.', url: 'https://cdn.simpleicons.org/elevenlabs' },
  { name: 'RunwayML', description: 'Video generation and editing with AI.', url: 'https://cdn.simpleicons.org/runwayml' },
  { name: 'Midjourney', description: 'High-quality image generation for brand assets.', url: 'https://cdn.simpleicons.org/midjourney' },
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
                      'group p-4 rounded-xl border border-border bg-card/60 text-center hover-scale hover:shadow-glow cursor-pointer card-premium',
                      'animate-fade-in animate-float'
                    )}
                    style={{ animationDelay: `${i * 40}ms` }}
                    aria-label={tool.name}
                  >
                    <img
                      src={tool.url}
                      alt={`${tool.name} logo`}
                      loading="lazy"
                      className="h-8 w-auto md:h-10 mx-auto opacity-90 transition-opacity group-hover:opacity-100"
                    />
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
