import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet-async";
import { useElevenLabsWidget } from "./hooks/use-elevenlabs-widget";

// Объявление для TypeScript, чтобы он "понимал" тег виджета
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 
        'agent-id'?: string; 
        'api-base-url'?: string; 
      }, HTMLElement>;
    }
  }
}

const queryClient = new QueryClient();

const App = () => {
  const { isLoaded, error } = useElevenLabsWidget({
    agentId: "t1XU82nmJv5bSKHkNnQG",
    apiBaseUrl: "https://proxy.aiix.pro/elevenlabs-api",
    onLoad: () => console.log('🎯 ElevenLabs widget initialized successfully'),
    onError: (err) => console.error('❌ Widget failed to load:', err)
  });

  return (
    <>
      <Helmet>
        <title>AIix Pro - Leading AI Agent Development Company | Custom AI Solutions</title>
        <meta name="description" content="AIix Pro specializes in developing custom AI agents for business automation. Our intelligent solutions help streamline workflows and boost efficiency. Explore our research on DAO-AI symbiosis and 700+ AI startup ideas." />
        <meta name="author" content="AIix Pro by DAO LFGsyndicate" />
        <meta name="yandex-verification" content="7eb55b598c9b3ea0" />
        <link rel="apple-touch-icon" href="/lovable-uploads/84f45935-2e31-4f27-8104-7930d474c556.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AIix Pro - Leading AI Agent Development Company" />
        <meta property="og:description" content="Transform your business with custom AI agents." />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta property="og:url" content="https://aiix.pro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aiixpro" />
        <meta name="twitter:title" content="AIix Pro - Custom AI Agent Development" />
        <meta name="twitter:description" content="Transform your business with custom AI agents." />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta name="keywords" content="AI agents, artificial intelligence, custom AI solutions, business automation, AI development, machine learning, workflow automation, intelligent agents" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aiix.pro" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </Helmet>

      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HashRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
          
          {/* ElevenLabs Widget */}
          <elevenlabs-convai
            agent-id="t1XU82nmJv5bSKHkNnQG"
            api-base-url="https://proxy.aiix.pro/elevenlabs-api"
            style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
          ></elevenlabs-convai>

          {/* Debug info */}
          {error && (
            <div style={{ 
              position: 'fixed', 
              top: '20px', 
              right: '20px', 
              background: 'red', 
              color: 'white', 
              padding: '10px',
              zIndex: 1001,
              borderRadius: '5px'
            }}>
              Widget Error: {error.message}
            </div>
          )}
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
