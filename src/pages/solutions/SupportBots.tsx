import { Helmet } from 'react-helmet-async';

const SupportBots = () => {
  const title = 'Customer Support Chatbots | DataMorph';
  const description = 'Deploy helpful, brand‑safe chatbots that resolve tickets and escalate smartly.';
  const canonical = '/solutions/support-bots';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main className="py-20 max-w-5xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Customer Support Chatbots</h1>
          <p className="text-muted-foreground mt-4 text-lg">Reduce handling time with AI agents trained on your knowledge base.</p>
        </header>
      </main>
    </>
  );
};

export default SupportBots;
