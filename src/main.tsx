import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async' // Импортируем
import App from './App.tsx'
import './index.css'

// Load ElevenLabs widget script dynamically for GitHub Pages compatibility
const loadWidgetScript = () => {
  // Only load if not already loaded
  if (document.querySelector('script[src*="elevenlabs-convai"]')) {
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://proxy.aiix.pro/widget-script/@elevenlabs/elevenlabs-convai';
  script.async = true;
  script.defer = true;
  
  script.onload = () => {
    console.log('✅ ElevenLabs widget script loaded successfully');
  };
  
  script.onerror = (error) => {
    console.error('❌ Failed to load ElevenLabs widget script:', error);
  };
  
  document.head.appendChild(script);
};

// Component to load widget script on mount
const AppWithWidget = () => {
  useEffect(() => {
    // Load script after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      loadWidgetScript();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <AppWithWidget />
    </HelmetProvider>
  </React.StrictMode>,
)