import { Helmet } from 'react-helmet-async';

const Funnels = () => {
  const title = 'Lead Generation & Funnels | DataMorph';
  const description = 'AI-powered funnels and conversion optimization with full-funnel analytics.';
  const canonical = '/solutions/funnels';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main className="py-20 max-w-5xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Lead Generation & Funnels</h1>
          <p className="text-muted-foreground mt-4 text-lg">High‑converting journeys designed and optimized by AI.</p>
        </header>
      </main>
    </>
  );
};

export default Funnels;
