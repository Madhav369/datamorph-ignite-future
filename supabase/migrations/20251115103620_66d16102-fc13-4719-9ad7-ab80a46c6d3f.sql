-- Create quote_requests table for storing quote and contact form submissions
CREATE TABLE IF NOT EXISTS public.quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT,
  services TEXT[],
  project_description TEXT,
  budget TEXT,
  timeline TEXT,
  website TEXT,
  form_type TEXT DEFAULT 'contact' NOT NULL
);

-- Enable RLS
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert quote requests (public form)
CREATE POLICY "Anyone can submit quote requests"
  ON public.quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy for service role to read all requests
CREATE POLICY "Service role can read all quote requests"
  ON public.quote_requests
  FOR SELECT
  TO service_role
  USING (true);

-- Create index on email for faster lookups
CREATE INDEX idx_quote_requests_email ON public.quote_requests(email);

-- Create index on created_at for sorting
CREATE INDEX idx_quote_requests_created_at ON public.quote_requests(created_at DESC);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.quote_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();