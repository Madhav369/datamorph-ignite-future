import { Helmet } from 'react-helmet-async';

const PerformanceMarketing = () => {
  const title = 'Performance Marketing with AI | DataMorph';
  const description = 'AI-optimized media buying, creative testing, and attribution for growth.';
  const canonical = '/solutions/performance-marketing';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main className="py-20 max-w-5xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Performance Marketing with AI</h1>
          <p className="text-muted-foreground mt-4 text-lg">Bid optimization, audience modeling, and ROI tracking powered by AI.</p>
        </header>
      </main>
    </>
  );
};

export default PerformanceMarketing;
