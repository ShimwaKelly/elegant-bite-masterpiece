
import React from 'react';

interface MenuCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const MenuCategoryFilter: React.FC<MenuCategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-5 py-2 rounded-full text-sm md:text-base transition-all duration-300
            ${activeCategory === category
              ? 'bg-gold text-restaurant-black shadow-md shadow-gold/20 font-medium'
              : 'bg-restaurant-gray/30 text-white/80 hover:bg-restaurant-gray/50'}
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default MenuCategoryFilter;
