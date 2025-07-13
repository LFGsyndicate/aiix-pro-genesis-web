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
        if (document.querySelector('script[src*="elevenlabs"]')) {
          setIsLoaded(true);
          onLoad?.();
          return;
        }

        // Correct ElevenLabs widget script URL
        const scriptUrl = 'https://elevenlabs.io/convai-widget/index.js';
        
        console.log('🔄 Loading ElevenLabs widget from:', scriptUrl);
        
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        script.defer = true;
        
        script.onload = () => {
          console.log('✅ ElevenLabs widget script loaded successfully');
          
          // Initialize the widget
          setTimeout(() => {
            const widget = document.querySelector('elevenlabs-convai');
            if (widget) {
              console.log('🎯 Widget element found, initializing...');
              setIsLoaded(true);
              onLoad?.();
            }
          }, 500);
        };
        
        script.onerror = (error) => {
          console.error('❌ Failed to load ElevenLabs widget script:', error);
          const err = new Error('Failed to load ElevenLabs widget script');
          setError(err);
          onError?.(err);
        };
        
        document.head.appendChild(script);
        
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        onError?.(error);
      }
    };

    // Load widget after DOM is ready
    const timer = setTimeout(loadWidget, 1000);
    
    return () => clearTimeout(timer);
  }, [agentId, apiBaseUrl, onLoad, onError]);

  return { isLoaded, error };
};