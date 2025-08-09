import { Helmet } from 'react-helmet-async';

const EmailAutomation = () => {
  const title = 'Email & SMS Automation | DataMorph';
  const description = 'Triggered messages, sequencing, and personalization — integrated with your CRM.';
  const canonical = '/solutions/email-automation';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main className="py-20 max-w-5xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Email & SMS Automation</h1>
          <p className="text-muted-foreground mt-4 text-lg">Lifecycle flows that increase LTV with minimal manual effort.</p>
        </header>
      </main>
    </>
  );
};

export default EmailAutomation;
