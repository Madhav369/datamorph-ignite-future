import { Helmet } from 'react-helmet-async';

const CRM = () => {
  const title = 'CRM Workflows with AI | DataMorph';
  const description = 'Automate CRM tasks: scoring, routing, follow-ups, and reporting with AI.';
  const canonical = '/solutions/crm';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main className="py-20 max-w-5xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">CRM Workflows with AI</h1>
          <p className="text-muted-foreground mt-4 text-lg">Lead scoring, pipeline automation, and hands‑off outreach.</p>
        </header>
      </main>
    </>
  );
};

export default CRM;
