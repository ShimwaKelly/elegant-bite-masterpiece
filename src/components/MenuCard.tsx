
import React, { useState, useEffect, useRef } from 'react';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  ingredients?: string[];
}

const MenuCard: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  image,
  featured,
  ingredients
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative bg-restaurant-dark/80 rounded-lg overflow-hidden shadow-xl transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-gold text-restaurant-black text-xs font-bold px-2 py-1 rounded-full animate-pulse">
          Chef's Special
        </div>
      )}

      {/* Image Container */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-restaurant-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-playfair text-xl font-bold text-white">{name}</h3>
          <span className="text-gold font-semibold">${price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        
        {ingredients && ingredients.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {ingredients.map((ingredient, index) => (
              <span 
                key={index} 
                className="text-xs py-1 px-2 bg-restaurant-gray/30 text-gray-300 rounded-full"
              >
                {ingredient}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <div 
        className={`absolute inset-0 flex items-center justify-center bg-restaurant-black/80 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-center p-5">
          <h3 className="font-playfair text-xl font-bold text-gold mb-2">{name}</h3>
          <p className="text-white text-sm mb-4">{description}</p>
          <button className="gold-button text-sm py-2">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
