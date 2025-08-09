import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AiAutomation from "./pages/solutions/AiAutomation";
import CRM from "./pages/solutions/CRM";
import PerformanceMarketing from "./pages/solutions/PerformanceMarketing";
import Funnels from "./pages/solutions/Funnels";
import SupportBots from "./pages/solutions/SupportBots";
import EmailAutomation from "./pages/solutions/EmailAutomation";
import Dashboards from "./pages/solutions/Dashboards";
import CustomAI from "./pages/solutions/CustomAI";
import SEOLLMs from "./pages/solutions/SEOLLMs";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solutions/ai-automation" element={<AiAutomation />} />
            <Route path="/solutions/crm" element={<CRM />} />
            <Route path="/solutions/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="/solutions/funnels" element={<Funnels />} />
            <Route path="/solutions/support-bots" element={<SupportBots />} />
            <Route path="/solutions/email-automation" element={<EmailAutomation />} />
            <Route path="/solutions/dashboards" element={<Dashboards />} />
            <Route path="/solutions/custom-ai" element={<CustomAI />} />
            <Route path="/solutions/seo-llms" element={<SEOLLMs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
