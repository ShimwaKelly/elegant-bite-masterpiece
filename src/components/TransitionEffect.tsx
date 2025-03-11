
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface TransitionEffectProps {
  children: React.ReactNode;
}

const TransitionEffect: React.FC<TransitionEffectProps> = ({ children }) => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Reset scroll position on page change
    window.scrollTo(0, 0);
    
    // Apply animation classes
    if (containerRef.current) {
      containerRef.current.classList.add('opacity-0', 'translate-y-4');
      
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.classList.remove('opacity-0', 'translate-y-4');
          containerRef.current.classList.add('opacity-100', 'translate-y-0');
        }
      }, 50);
    }
  }, [location]);

  return (
    <div 
      ref={containerRef} 
      className="transition-all duration-500 ease-out"
    >
      {children}
    </div>
  );
};

export default TransitionEffect;
