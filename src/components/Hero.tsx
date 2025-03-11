
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add animation classes after component mounts
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    
    if (title && subtitle && cta) {
      setTimeout(() => {
        title.classList.add('opacity-100', 'translate-y-0');
      }, 300);
      
      setTimeout(() => {
        subtitle.classList.add('opacity-100', 'translate-y-0');
      }, 600);
      
      setTimeout(() => {
        cta.classList.add('opacity-100', 'translate-y-0');
      }, 900);
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-restaurant-black/70 via-restaurant-black/60 to-restaurant-black"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-8">
        <p 
          ref={subtitleRef}
          className="font-montserrat uppercase tracking-[0.3em] text-gold text-xs md:text-sm opacity-0 -translate-y-6 transition-all duration-700 mb-4"
        >
          Fine Dining Experience
        </p>
        
        <h1 
          ref={titleRef}
          className="font-playfair font-bold text-4xl md:text-5xl lg:text-7xl text-white max-w-4xl opacity-0 -translate-y-6 transition-all duration-700 mb-6"
        >
          Where Culinary Artistry Meets Elegance
        </h1>
        
        <p className="font-montserrat text-white/80 max-w-xl text-base md:text-lg mb-8 leading-relaxed">
          Experience the perfect harmony of taste, presentation, and atmosphere in every visit.
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 translate-y-6 transition-all duration-700"
        >
          <Link 
            to="/reservation" 
            className="gold-button w-full sm:w-auto text-center"
          >
            Reserve a Table
          </Link>
          <Link 
            to="/menu" 
            className="ghost-button w-full sm:w-auto text-center"
          >
            Explore Our Menu
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <span className="text-white/50 text-xs mb-2 tracking-widest">SCROLL</span>
        <div className="h-12 w-[1px] bg-gold/50"></div>
      </div>
    </div>
  );
};

export default Hero;
