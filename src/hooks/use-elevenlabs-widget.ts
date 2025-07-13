import { useEffect, useState, useRef } from 'react';

interface UseElevenLabsWidgetOptions {
  agentId: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

// Professional widget integration with comprehensive error handling
export const useElevenLabsWidget = ({
  agentId,
  onLoad,
  onError
}: UseElevenLabsWidgetOptions) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const retryCount = useRef(0);
  const maxRetries = 3;

  useEffect(() => {
    const initializeWidget = async () => {
      try {
        // Clean up any existing widget
        const existingWidget = document.querySelector('elevenlabs-convai');
        const existingScript = document.querySelector('script[src*="convai-widget-embed"]');
        
        if (existingWidget) existingWidget.remove();
        if (existingScript) existingScript.remove();

        console.log('🔄 Initializing ElevenLabs widget...');

        // Create widget container
        const widgetContainer = document.createElement('div');
        widgetContainer.id = 'elevenlabs-widget-container';
        widgetContainer.style.cssText = `
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          pointer-events: none;
        `;
        
        // Create widget element
        const widgetElement = document.createElement('elevenlabs-convai');
        widgetElement.setAttribute('agent-id', agentId);
        widgetElement.style.pointerEvents = 'auto';
        
        widgetContainer.appendChild(widgetElement);
        document.body.appendChild(widgetContainer);

        // Load script with comprehensive retry logic
        await loadScriptWithRetry();
        
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Widget initialization failed');
        setError(error);
        onError?.(error);
      }
    };

    const loadScriptWithRetry = async () => {
      const sources = [
        'https://proxy.aiix.pro/convai-widget-embed', // Cloudflare Worker proxy
        'https://unpkg.com/@elevenlabs/convai-widget-embed', // Direct CDN
        'https://cdn.jsdelivr.net/npm/@elevenlabs/convai-widget-embed@latest/dist/index.js' // JSDelivr fallback
      ];

      for (let i = 0; i < sources.length; i++) {
        const source = sources[i];
        try {
          console.log(`🔄 Attempting to load from: ${source}`);
          
          await loadScript(source);
          
          // Wait for widget to be ready
          await waitForWidget();
          
          console.log('✅ Widget loaded successfully');
          setIsLoaded(true);
          onLoad?.();
          return;
          
        } catch (err) {
          console.warn(`⚠️ Failed to load from ${source}:`, err);
          
          if (i === sources.length - 1) {
            throw new Error('All widget sources failed to load');
          }
        }
      }
    };

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;
        
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        
        // Timeout after 10 seconds
        const timeout = setTimeout(() => {
          reject(new Error(`Script loading timeout: ${src}`));
        }, 10000);
        
        script.onload = () => {
          clearTimeout(timeout);
          resolve();
        };
        
        script.onerror = () => {
          clearTimeout(timeout);
          reject(new Error(`Failed to load script: ${src}`));
        };
        
        document.head.appendChild(script);
      });
    };

    const waitForWidget = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        const maxWaitTime = 5000;
        const startTime = Date.now();
        
        const checkWidget = () => {
          const widget = document.querySelector('elevenlabs-convai');
          if (widget && widget.shadowRoot) {
            resolve();
            return;
          }
          
          if (Date.now() - startTime > maxWaitTime) {
            reject(new Error('Widget initialization timeout'));
            return;
          }
          
          setTimeout(checkWidget, 100);
        };
        
        checkWidget();
      });
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeWidget);
    } else {
      initializeWidget();
    }
    
    return () => {
      // Cleanup
      const widget = document.querySelector('#elevenlabs-widget-container');
      const script = document.querySelector('script[src*="convai-widget-embed"]');
      
      if (widget) widget.remove();
      if (script) script.remove();
    };
  }, [agentId, onLoad, onError]);

  return { isLoaded, error };
};