import React from 'react';

const Tools = () => {
  const tools = [
    {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      category: "AI Models"
    },
    {
      name: "Claude",
      logo: "https://anthropic.com/images/icons/apple-touch-icon.png",
      category: "AI Models"
    },
    {
      name: "Google Gemini",
      logo: "https://www.gstatic.com/lamda/images/favicon_v1_150160cddceafb39e7a11ec5.svg",
      category: "AI Models"
    },
    {
      name: "Notion",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
      category: "Productivity"
    },
    {
      name: "N8N",
      logo: "https://docs.n8n.io/assets/images/n8n-logo.png",
      category: "Automation"
    },
    {
      name: "Make",
      logo: "https://www.make.com/en/help/image/loio7c78c6dc-b4d2-49e4-898a-9c10c6ba4d89.png",
      category: "Automation"
    },
    {
      name: "Zapier",
      logo: "https://cdn.zapier.com/zapier/images/logos/zapier-logo-294x68.png",
      category: "Automation"
    },
    {
      name: "Google Analytics",
      logo: "https://www.google.com/analytics/images/google-analytics-logo.png",
      category: "Analytics"
    },
    {
      name: "Google Ads",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
      category: "Advertising"
    },
    {
      name: "Meta Ads",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png",
      category: "Advertising"
    },
    {
      name: "HubSpot",
      logo: "https://www.hubspot.com/hs-fs/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png",
      category: "CRM"
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      category: "CRM"
    },
    {
      name: "Slack",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
      category: "Communication"
    },
    {
      name: "Microsoft Teams",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg",
      category: "Communication"
    },
    {
      name: "Airtable",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg",
      category: "Database"
    },
    {
      name: "Typeform",
      logo: "https://images.typeform.com/images/2dpnUBBkz2VN",
      category: "Forms"
    }
  ];

  return (
    <section id="tools" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wide">TOOLS WE USE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI Automation <span className="text-gradient">Authority</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner and build using official APIs + integrations from industry-leading platforms
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="group relative p-4 rounded-xl bg-card/50 border border-border hover:shadow-glow transition-all duration-300 hover-lift animate-float"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${3 + (index % 3)}s` 
              }}
              title={`${tool.name} - ${tool.category}`}
            >
              {/* Logo Container */}
              <div className="aspect-square flex items-center justify-center relative overflow-hidden rounded-lg bg-background/50">
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300 filter group-hover:brightness-110"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a generic icon if logo fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <span class="text-primary font-bold text-xs">${tool.name.charAt(0)}</span>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-popover border border-border rounded-md text-xs text-popover-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                <div className="font-medium">{tool.name}</div>
                <div className="text-muted-foreground">{tool.category}</div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-border"></div>
              </div>

              {/* Floating Effect Dots */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary/30 rounded-full animate-ping" 
                   style={{ animationDelay: `${index * 0.5}s` }} />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            These are real integrations. We build on top of their APIs to deliver automated, intelligent workflows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tools;