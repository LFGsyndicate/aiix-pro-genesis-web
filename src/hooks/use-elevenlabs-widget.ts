import { useEffect, useState } from 'react';

interface UseElevenLabsWidgetOptions {
  agentId: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export const useElevenLabsWidget = ({
  agentId,
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

        console.log('🔄 Loading ElevenLabs widget via Cloudflare Worker proxy...');
        
        // Create widget element first
        const widgetElement = document.createElement('elevenlabs-convai');
        widgetElement.setAttribute('agent-id', agentId);
        widgetElement.style.position = 'fixed';
        widgetElement.style.bottom = '20px';
        widgetElement.style.right = '20px';
        widgetElement.style.zIndex = '1000';
        
        // Add widget to DOM
        document.body.appendChild(widgetElement);
        
        // Load script via Cloudflare Worker proxy
        const script = document.createElement('script');
        script.src = 'https://proxy.aiix.pro/convai-widget-embed';
        script.async = true;
        script.defer = true;
        
        script.onload = () => {
          console.log('✅ ElevenLabs widget loaded successfully via Cloudflare Worker');
          
          // Wait for widget initialization
          setTimeout(() => {
            const widget = document.querySelector('elevenlabs-convai');
            if (widget) {
              console.log('🎯 Widget initialized and ready');
              setIsLoaded(true);
              onLoad?.();
            } else {
              console.error('❌ Widget element not found after loading');
              const err = new Error('Widget element not found');
              setError(err);
              onError?.(err);
            }
          }, 1500);
        };
        
        script.onerror = (event) => {
          console.error('❌ Failed to load widget via Cloudflare Worker:', event);
          
          // Try direct loading as fallback
          console.log('🔄 Trying direct loading from unpkg...');
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
            const err = new Error('Both proxy and direct loading failed - check network restrictions');
            console.error('❌ All loading attempts failed:', err);
            setError(err);
            onError?.(err);
          };
          
          document.head.appendChild(fallbackScript);
        };
        
        document.head.appendChild(script);
        
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        console.error('❌ Widget loading error:', error);
        setError(error);
        onError?.(error);
      }
    };

    // Ensure DOM is ready before loading
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadWidget);
    } else {
      loadWidget();
    }
    
    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector('script[src*="convai-widget-embed"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [agentId, onLoad, onError]);

  return { isLoaded, error };
};