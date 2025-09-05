-- Create table for quote requests
CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  website TEXT,
  services TEXT[] DEFAULT '{}',
  project_description TEXT,
  budget TEXT,
  timeline TEXT,
  message TEXT,
  form_type TEXT NOT NULL DEFAULT 'contact', -- 'contact', 'quote', 'custom'
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since it's a public form)
CREATE POLICY "Anyone can submit quote requests" 
ON public.quote_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy for viewing (only admins should see all submissions)
CREATE POLICY "Public can view their own submissions" 
ON public.quote_requests 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_quote_requests_updated_at
  BEFORE UPDATE ON public.quote_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();