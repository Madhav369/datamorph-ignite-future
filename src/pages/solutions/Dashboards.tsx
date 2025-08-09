import { Helmet } from 'react-helmet-async';

const Dashboards = () => {
  const title = 'Custom AI Dashboards | DataMorph';
  const description = 'Real‑time insights with predictive analytics and automated reporting.';
  const canonical = '/solutions/dashboards';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main className="py-20 max-w-5xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Custom AI Dashboards</h1>
          <p className="text-muted-foreground mt-4 text-lg">See what matters — unified, accurate, and actionable.</p>
        </header>
      </main>
    </>
  );
};

export default Dashboards;
