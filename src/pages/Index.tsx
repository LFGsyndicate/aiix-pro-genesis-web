
import React, { useEffect, useRef } from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import { Separator } from '../components/ui/separator';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ResearchProjectsSection from '../components/ResearchProjectsSection';
import CasesSection from '../components/CasesSection';
import BenefitsSection from '../components/BenefitsSection';
import UseCasesSection from '../components/UseCasesSection';
import ApproachSection from '../components/ApproachSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const Index = () => {
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Load the required scripts dynamically
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load scripts and initialize Vanta.js only for hero section
    const initVanta = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js');
        
        // Now that scripts are loaded, enable Vanta on hero section
        enableVantaOnElement();
      } catch (error) {
        console.error('Failed to initialize Vanta.js:', error);
      }
    };

    initVanta();

    // Cleanup function to destroy Vanta effect when component unmounts
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  const enableVantaOnElement = () => {
    const vantaBgEl = document.getElementById('vanta-bg');
    
    if (window.VANTA && window.THREE && vantaBgEl && !vantaEffect.current) {
      vantaEffect.current = window.VANTA.HALO({
        el: vantaBgEl,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        backgroundColor: 0x1630ca,
        baseColor: 0x1a59,
        amplitudeFactor: 1.90,
        size: 0.30,
        xOffset: 0,
        yOffset: 0,
        // backgroundImage: '/lovable-uploads/80ca9e39-006f-4280-8c39-8036ffbce6f4.png'
      });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-sm">
        <Header />
        <HeroSection enableVanta={enableVantaOnElement} />
        <Separator />
        <AboutSection />
        <Separator />
        <ResearchProjectsSection />
        <Separator />
        <CasesSection />
        <Separator />
        <BenefitsSection />
        <Separator />
        <UseCasesSection />
        <Separator />
        <ApproachSection />
        <Separator />
        <TestimonialsSection />
        <Separator />
        <FaqSection />
        <Separator />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
