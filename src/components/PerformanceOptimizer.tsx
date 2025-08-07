import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/favicon.ico',
        '/lovable-uploads/expansia.png',
        '/lovable-uploads/xpnsn.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Optimize third-party scripts loading
    const optimizeThirdPartyScripts = () => {
      // Load Vanta.js scripts with defer
      const scripts = [
        'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js',
        'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js'
      ];

      scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        document.head.appendChild(script);
      });
    };

    // Add performance optimizations
    const addPerformanceOptimizations = () => {
      // Add resource hints
      const dnsLink = document.createElement('link');
      dnsLink.rel = 'dns-prefetch';
      dnsLink.href = '//fonts.googleapis.com';
      document.head.appendChild(dnsLink);

      const preconnectLink = document.createElement('link');
      preconnectLink.rel = 'preconnect';
      preconnectLink.href = 'https://fonts.gstatic.com';
      preconnectLink.crossOrigin = 'anonymous';
      document.head.appendChild(preconnectLink);
    };

    // Optimize images loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      // Add intersection observer for lazy loading fallback
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
              }
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    };

    // Execute optimizations
    preloadCriticalResources();
    addPerformanceOptimizations();
    
    // Defer non-critical optimizations
    setTimeout(() => {
      optimizeThirdPartyScripts();
      optimizeImages();
    }, 100);

    // Service Worker registration for caching (if available)
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;