import { Helmet } from 'react-helmet-async';

const SEOLLMs = () => {
  const title = 'SEO for LLMs | DataMorph';
  const description = 'Optimize your content and data for AI models and AI search.';
  const canonical = '/solutions/seo-llms';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main className="py-20 max-w-5xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">SEO for LLMs</h1>
          <p className="text-muted-foreground mt-4 text-lg">Structure, metadata, and retrieval designed for AI‑first discovery.</p>
        </header>
      </main>
    </>
  );
};

export default SEOLLMs;
