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
        if (document.querySelector('script[src*="convai-widget-embed"]')) {
          setIsLoaded(true);
          onLoad?.();
          return;
        }

        // Use Cloudflare Worker proxy for Russian users
        const scriptUrl = 'https://proxy.aiix.pro/convai-widget-embed';
        
        console.log('🔄 Loading ElevenLabs widget via proxy:', scriptUrl);
        
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        script.defer = true;
        
        script.onload = () => {
          console.log('✅ ElevenLabs widget loaded successfully via proxy');
          
          // Initialize the widget
          setTimeout(() => {
            const widget = document.querySelector('elevenlabs-convai');
            if (widget) {
              console.log('🎯 Widget element found and initialized');
              setIsLoaded(true);
              onLoad?.();
            }
          }, 1000);
        };
        
        script.onerror = (error) => {
          console.error('❌ Failed to load widget via proxy:', error);
          
          // Fallback to direct loading if proxy fails
          console.log('🔄 Trying direct loading as fallback...');
          const fallbackScript = document.createElement('script');
          fallbackScript.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
          fallbackScript.async = true;
          fallbackScript.defer = true;
          
          fallbackScript.onload = () => {
            console.log('✅ Widget loaded via direct fallback');
            setIsLoaded(true);
            onLoad?.();
          };
          
          fallbackScript.onerror = () => {
            const err = new Error('Both proxy and direct loading failed');
            setError(err);
            onError?.(err);
          };
          
          document.head.appendChild(fallbackScript);
        };
        
        document.head.appendChild(script);
        
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        onError?.(error);
      }
    };

    // Load widget after DOM is ready
    const timer = setTimeout(loadWidget, 500);
    
    return () => clearTimeout(timer);
  }, [agentId, apiBaseUrl, onLoad, onError]);

  return { isLoaded, error };
};