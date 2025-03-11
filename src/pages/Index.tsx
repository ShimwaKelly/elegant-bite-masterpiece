
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { ChevronRight, UtensilsCrossed, Crown, Users, Calendar } from 'lucide-react';
import MenuCard from '../components/MenuCard';

const Index = () => {
  // Featured menu items for homepage
  const featuredMenuItems = [
    {
      id: '1',
      name: 'Truffle Risotto',
      description: 'Arborio rice cooked with white truffle oil, wild mushrooms, and finished with aged parmesan.',
      price: 28,
      image: 'https://images.unsplash.com/photo-1625944525200-7389087c8766?q=80&w=1000',
      category: 'Main Courses',
      featured: true,
      ingredients: ['Arborio Rice', 'Truffle Oil', 'Wild Mushrooms', 'Parmesan']
    },
    {
      id: '2',
      name: 'Seared Scallops',
      description: 'Fresh sea scallops seared to perfection, served with cauliflower purée and citrus reduction.',
      price: 32,
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1000',
      category: 'Appetizers',
      featured: true,
      ingredients: ['Scallops', 'Cauliflower', 'Citrus', 'Herbs']
    },
    {
      id: '3',
      name: 'Chocolate Soufflé',
      description: 'Warm chocolate soufflé with a molten center, served with vanilla bean ice cream.',
      price: 14,
      image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1000',
      category: 'Desserts',
      featured: true,
      ingredients: ['Dark Chocolate', 'Eggs', 'Butter', 'Vanilla Bean']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-restaurant-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <p className="section-subtitle">Our Story</p>
              <h2 className="section-title text-2xl md:text-3xl lg:text-4xl">Culinary Excellence Since 2005</h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                At L'Élégance, we believe that dining is an art form. Our chef combines classical techniques with innovative approaches, crafting dishes that celebrate the finest seasonal ingredients.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
                Every detail of your experience has been carefully considered, from our thoughtfully designed interior to our meticulously curated wine selection. Join us for an unforgettable culinary journey.
              </p>
              <Link to="/about" className="ghost-button inline-flex items-center text-sm md:text-base">
                Discover Our Story
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Image */}
            <div className="order-1 md:order-2 overflow-hidden rounded-lg">
              <div className="image-grayscale-hover">
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2000" 
                  alt="Restaurant interior" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-restaurant-dark">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <p className="section-subtitle">Experience</p>
            <h2 className="section-title text-2xl md:text-3xl lg:text-4xl">Why Choose Us</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="bg-restaurant-black/50 p-6 md:p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-gold/5 hover:shadow-lg">
              <div className="h-12 w-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <UtensilsCrossed className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-lg md:text-xl font-playfair font-bold text-white mb-3 md:mb-4">Exquisite Cuisine</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Our menu celebrates seasonal ingredients with creative flair, elevating traditional dishes to new heights of sophistication.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-restaurant-black/50 p-6 md:p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-gold/5 hover:shadow-lg">
              <div className="h-12 w-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Crown className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-lg md:text-xl font-playfair font-bold text-white mb-3 md:mb-4">Elegant Ambiance</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Immerse yourself in our thoughtfully designed space, where every detail contributes to an atmosphere of refined luxury.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-restaurant-black/50 p-6 md:p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-gold/5 hover:shadow-lg sm:col-span-2 md:col-span-1 mx-auto sm:mx-0 max-w-md sm:max-w-none">
              <div className="h-12 w-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Users className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-lg md:text-xl font-playfair font-bold text-white mb-3 md:mb-4">Impeccable Service</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Our dedicated team ensures that every aspect of your dining experience meets our high standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Menu Items */}
      <section className="py-12 sm:py-16 md:py-20 bg-restaurant-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <p className="section-subtitle">Culinary Excellence</p>
            <h2 className="section-title text-2xl md:text-3xl lg:text-4xl">Featured Dishes</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
              Chef's selection of our most exquisite creations, highlighting the finest seasonal ingredients and culinary artistry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredMenuItems.map((item) => (
              <MenuCard key={item.id} {...item} />
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <Link to="/menu" className="gold-button inline-flex items-center text-sm md:text-base">
              View Full Menu
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA - Reservation */}
      <section className="relative py-16 md:py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-restaurant-black/75"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
          <div className="max-w-xl mx-auto text-center">
            <p className="section-subtitle">Experience L'Élégance</p>
            <h2 className="section-title text-2xl md:text-3xl lg:text-4xl">Reserve Your Table</h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
              Whether it's a special celebration or an intimate dinner, we're dedicated to making your experience unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/reservation" className="gold-button w-full sm:w-auto inline-flex items-center justify-center text-sm md:text-base">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Table
              </Link>
              <Link to="/contact" className="ghost-button w-full sm:w-auto inline-flex items-center justify-center text-sm md:text-base">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
