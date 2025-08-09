import { Helmet } from 'react-helmet-async';

const CustomAI = () => {
  const title = 'Internal Tools & AI Assistants | DataMorph';
  const description = 'Build internal apps and assistants tailored to your teams and data.';
  const canonical = '/solutions/custom-ai';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main className="py-20 max-w-5xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Internal Tools & AI Assistants</h1>
          <p className="text-muted-foreground mt-4 text-lg">Purpose‑built assistants that boost team productivity.</p>
        </header>
      </main>
    </>
  );
};

export default CustomAI;
