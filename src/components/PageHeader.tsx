
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative py-32 md:py-40 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-restaurant-black/70 via-restaurant-black/60 to-restaurant-black"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8 text-center">
        <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 animate-fade-in-up">
          {title}
        </h1>
        
        {subtitle && (
          <p className="font-montserrat text-gold uppercase tracking-[0.2em] text-sm md:text-base animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
