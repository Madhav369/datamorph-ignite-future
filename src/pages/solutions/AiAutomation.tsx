import { Helmet } from 'react-helmet-async';

const AiAutomation = () => {
  const title = 'AI Business Automation | DataMorph';
  const description = 'Design, deploy, and manage your AI employee to automate operations and drive ROI.';
  const canonical = '/solutions/ai-automation';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main className="py-20 max-w-5xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">AI Business Automation</h1>
          <p className="text-muted-foreground mt-4 text-lg">We build your AI employee — trained to run workflows 24/7 and integrate with your stack.</p>
        </header>
        <section className="space-y-2">
          <ul className="list-disc pl-6 text-foreground/90">
            <li>Process discovery and automation design</li>
            <li>Secure integrations (CRM, ERP, marketing)</li>
            <li>Monitoring, governance, and continuous improvement</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default AiAutomation;
