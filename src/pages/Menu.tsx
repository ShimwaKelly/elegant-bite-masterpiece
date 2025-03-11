
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import MenuCard from '../components/MenuCard';
import MenuCategoryFilter from '../components/MenuCategoryFilter';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  ingredients?: string[];
}

const Menu = () => {
  // All menu categories
  const categories = ['All', 'Appetizers', 'Main Courses', 'Desserts', 'Drinks'];
  
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('All');
  
  // State for filtered items
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  
  // All menu items
  const menuItems: MenuItem[] = [
    // Appetizers
    {
      id: '1',
      name: 'Seared Scallops',
      description: 'Fresh sea scallops seared to perfection, served with cauliflower purée and citrus reduction.',
      price: 24,
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1000',
      category: 'Appetizers',
      ingredients: ['Scallops', 'Cauliflower', 'Citrus', 'Herbs']
    },
    {
      id: '2',
      name: 'Foie Gras Terrine',
      description: 'House-made foie gras terrine with brioche toast, fig jam, and toasted pistachios.',
      price: 28,
      image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=1000',
      category: 'Appetizers',
      ingredients: ['Foie Gras', 'Brioche', 'Fig', 'Pistachio']
    },
    {
      id: '3',
      name: 'Tuna Tartare',
      description: 'Hand-cut sushi-grade tuna with avocado, cucumber, sesame oil, and wasabi aioli.',
      price: 22,
      image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1000',
      category: 'Appetizers',
      ingredients: ['Tuna', 'Avocado', 'Cucumber', 'Wasabi']
    },
    
    // Main Courses
    {
      id: '4',
      name: 'Truffle Risotto',
      description: 'Arborio rice cooked with white truffle oil, wild mushrooms, and finished with aged parmesan.',
      price: 32,
      image: 'https://images.unsplash.com/photo-1625944525200-7389087c8766?q=80&w=1000',
      category: 'Main Courses',
      featured: true,
      ingredients: ['Arborio Rice', 'Truffle Oil', 'Wild Mushrooms', 'Parmesan']
    },
    {
      id: '5',
      name: 'Beef Wellington',
      description: 'Prime beef tenderloin wrapped in mushroom duxelles and puff pastry, served with red wine reduction.',
      price: 48,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000',
      category: 'Main Courses',
      ingredients: ['Beef Tenderloin', 'Mushrooms', 'Puff Pastry', 'Red Wine']
    },
    {
      id: '6',
      name: 'Rack of Lamb',
      description: 'Herb-crusted New Zealand lamb rack with roasted vegetables and rosemary jus.',
      price: 42,
      image: 'https://images.unsplash.com/photo-1514516345957-556ca7c42037?q=80&w=1000',
      category: 'Main Courses',
      ingredients: ['Lamb', 'Fresh Herbs', 'Root Vegetables', 'Rosemary']
    },
    {
      id: '7',
      name: 'Pan-Seared Sea Bass',
      description: 'Mediterranean sea bass with saffron risotto, fennel confit, and lemon beurre blanc.',
      price: 36,
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1000',
      category: 'Main Courses',
      ingredients: ['Sea Bass', 'Saffron', 'Fennel', 'Lemon']
    },
    
    // Desserts
    {
      id: '8',
      name: 'Chocolate Soufflé',
      description: 'Warm chocolate soufflé with a molten center, served with vanilla bean ice cream.',
      price: 16,
      image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1000',
      category: 'Desserts',
      featured: true,
      ingredients: ['Dark Chocolate', 'Eggs', 'Butter', 'Vanilla Bean']
    },
    {
      id: '9',
      name: 'Crème Brûlée',
      description: 'Classic vanilla bean custard with a caramelized sugar crust.',
      price: 14,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1000',
      category: 'Desserts',
      ingredients: ['Cream', 'Vanilla Bean', 'Eggs', 'Sugar']
    },
    {
      id: '10',
      name: 'Pear Tarte Tatin',
      description: 'Upside-down caramelized pear tart with cinnamon ice cream and almond crumble.',
      price: 15,
      image: 'https://images.unsplash.com/photo-1618426703623-c1b335803e07?q=80&w=1000',
      category: 'Desserts',
      ingredients: ['Pears', 'Caramel', 'Puff Pastry', 'Cinnamon']
    },
    
    // Drinks
    {
      id: '11',
      name: 'Signature Martini',
      description: 'House-infused elderflower gin with dry vermouth and a twist of lemon.',
      price: 18,
      image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?q=80&w=1000',
      category: 'Drinks',
      ingredients: ['Elderflower Gin', 'Vermouth', 'Lemon', 'Olive']
    },
    {
      id: '12',
      name: 'Classic Negroni',
      description: 'Equal parts gin, sweet vermouth, and Campari with an orange peel.',
      price: 16,
      image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1000',
      category: 'Drinks',
      ingredients: ['Gin', 'Sweet Vermouth', 'Campari', 'Orange']
    },
    {
      id: '13',
      name: 'French 75',
      description: 'Gin, fresh lemon juice, and simple syrup topped with champagne.',
      price: 19,
      image: 'https://images.unsplash.com/photo-1563223771-5fe4038fbfc9?q=80&w=1000',
      category: 'Drinks',
      ingredients: ['Gin', 'Lemon', 'Simple Syrup', 'Champagne']
    },
  ];

  // Filter items based on selected category
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  // Filter change handler
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <Layout>
      <PageHeader 
        title="Our Menu" 
        subtitle="Culinary Creations"
        image="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=2000"
      />
      
      {/* Menu Section */}
      <section className="py-20 bg-restaurant-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle">Culinary Excellence</p>
            <h2 className="section-title">Discover Our Flavors</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Our menu changes seasonally to showcase the finest ingredients at their peak. Each dish is crafted with precision, passion, and respect for culinary tradition.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="mb-12">
            <MenuCategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
          
          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Chef's Note Section */}
      <section className="py-20 bg-restaurant-dark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-subtitle">Chef's Note</p>
            <h2 className="section-title">Our Commitment</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              "At L'Élégance, we source only the finest ingredients from trusted local farmers and specialty purveyors. Our commitment to sustainability and ethical sourcing means that our menu evolves with the seasons, showcasing each ingredient at its peak. We invite you to savor the result of our passion and dedication to culinary excellence."
            </p>
            <p className="text-gold font-playfair text-xl">- Chef Antoine Dubois</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
