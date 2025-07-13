import { useEffect, useState } from 'react';

interface UseElevenLabsWidgetOptions {
  agentId: string;
  apiBaseUrl: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export const useElevenLabsWidget = ({
  agentId,
  apiBaseUrl,
  onLoad,
  onError
}: UseElevenLabsWidgetOptions) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadWidget = async () => {
      try {
        // Check if widget is already loaded
        if (document.querySelector('script[src*="elevenlabs-convai"]')) {
          setIsLoaded(true);
          onLoad?.();
          return;
        }

        // Try multiple sources for the widget
        const sources = [
          'https://proxy.aiix.pro/widget-script/@elevenlabs/elevenlabs-convai',
          'https://unpkg.com/@elevenlabs/elevenlabs-convai@latest/dist/index.js',
          'https://cdn.jsdelivr.net/npm/@elevenlabs/elevenlabs-convai@latest/dist/index.js'
        ];

        let loaded = false;

        for (const src of sources) {
          try {
            await new Promise<void>((resolve, reject) => {
              const script = document.createElement('script');
              script.src = src;
              script.async = true;
              script.defer = true;
              
              script.onload = () => {
                console.log(`✅ ElevenLabs widget loaded from: ${src}`);
                loaded = true;
                setIsLoaded(true);
                setError(null);
                onLoad?.();
                resolve();
              };
              
              script.onerror = () => {
                console.warn(`⚠️ Failed to load from ${src}, trying next...`);
                reject(new Error(`Failed to load from ${src}`));
              };
              
              document.head.appendChild(script);
            });
            
            if (loaded) break;
          } catch (err) {
            console.warn(`Source ${src} failed:`, err);
          }
        }

        if (!loaded) {
          const finalError = new Error('All widget sources failed to load');
          setError(finalError);
          onError?.(finalError);
        }
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        onError?.(error);
      }
    };

    // Load widget after a short delay
    const timer = setTimeout(loadWidget, 500);
    
    return () => clearTimeout(timer);
  }, [agentId, apiBaseUrl, onLoad, onError]);

  return { isLoaded, error };
};