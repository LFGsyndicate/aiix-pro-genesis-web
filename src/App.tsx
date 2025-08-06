import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet-async";
import React, { useEffect } from 'react';

// Professional ElevenLabs widget integration
const queryClient = new QueryClient();

// Объявление для TypeScript, чтобы он "понимал" тег виджета
// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'agent-id'?: string }, HTMLElement>;
    }
  }
}

const App = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      script.async = true;
      script.type = 'text/javascript';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>AIix Pro - Leading AI Agent Development Company | 35+ Successful Cases | Web3 & DeFi Solutions</title>
        <meta name="description" content="AIix Pro - Expert AI agent development for Web3, DeFi, and enterprise solutions. 35+ successful cases including ZK-proofs, DAO governance, cross-chain arbitrage, and blockchain automation. Custom AI agents for business transformation." />
        <meta name="author" content="AIix Pro by DAO LFGsyndicate" />
        <meta name="yandex-verification" content="7eb55b598c9b3ea0" />
        <link rel="apple-touch-icon" href="/lovable-uploads/84f45935-2e31-4f27-8104-7930d474c556.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AIix Pro - Leading AI Agent Development Company | 35+ Successful Cases" />
        <meta property="og:description" content="Expert AI agent development for Web3, DeFi, and enterprise solutions. 35+ successful cases including ZK-proofs, DAO governance, and blockchain automation." />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta property="og:url" content="https://aiix.pro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aiixpro" />
        <meta name="twitter:title" content="AIix Pro - AI Agent Development | Web3 & DeFi Solutions" />
        <meta name="twitter:description" content="35+ successful AI agent implementations for Web3, DeFi, and enterprise automation. Expert blockchain and AI development services." />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta name="keywords" content="AI agents, Web3 development, DeFi solutions, blockchain automation, ZK proofs, DAO governance, smart contracts, cross-chain arbitrage, AI development, machine learning, custom AI solutions, enterprise automation, Solana development, Ethereum development, TON blockchain, artificial intelligence consulting" />
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
          {/* Оригинальный ElevenLabs-виджет — только чистый код */}
          <elevenlabs-convai agent-id="t1XU82nmJv5bSKHkNnQG"></elevenlabs-convai>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
