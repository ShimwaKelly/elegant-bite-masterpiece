
import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <PageHeader 
        title="Our Story" 
        subtitle="About L'Élégance"
        image="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2000"
      />
      
      {/* History Section */}
      <section className="py-20 bg-restaurant-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Text Content */}
            <div>
              <p className="section-subtitle">Our Journey</p>
              <h2 className="section-title">A Vision of Excellence</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                L'Élégance was founded in 2005 by renowned chef Antoine Dubois with a vision to create an extraordinary dining experience that celebrates the art of gastronomy. What began as a small bistro has evolved into one of the city's most prestigious culinary destinations.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our philosophy is simple: to honor the finest ingredients through thoughtful preparation and artistic presentation. We believe that dining is not merely about sustenance—it's a sensory journey that engages all aspects of being.
              </p>
              <Link to="/menu" className="ghost-button inline-flex items-center">
                Explore Our Menu
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Image */}
            <div className="overflow-hidden rounded-lg order-first md:order-last">
              <div className="image-grayscale-hover">
                <img 
                  src="https://images.unsplash.com/photo-1607248191236-5c8e5061ec56?q=80&w=2000" 
                  alt="Chef plating a dish" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Chef Section */}
      <section className="py-20 bg-restaurant-dark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <div className="image-grayscale-hover">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2000" 
                  alt="Our head chef" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div>
              <p className="section-subtitle">Culinary Mastery</p>
              <h2 className="section-title">Meet Our Chef</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Executive Chef Antoine Dubois brings over 30 years of culinary expertise to L'Élégance. Trained in the prestigious kitchens of Paris and refined through years of global exploration, his approach combines classical French techniques with innovative global influences.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "I believe the essence of exceptional cuisine lies in respecting the ingredient. Our commitment is to source the finest seasonal produce and transform it with skill, creativity, and profound respect for culinary tradition." - Chef Antoine
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-restaurant-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle">Our Philosophy</p>
            <h2 className="section-title">Values That Guide Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Our approach to hospitality is built on principles that elevate every aspect of your dining experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-restaurant-dark/50 p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300">
              <h3 className="text-xl font-playfair font-bold text-white mb-4">Culinary Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                We pursue perfection in every dish, utilizing impeccable technique and the finest seasonal ingredients to create memorable flavors that honor culinary traditions while embracing innovation.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-restaurant-dark/50 p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300">
              <h3 className="text-xl font-playfair font-bold text-white mb-4">Exceptional Service</h3>
              <p className="text-gray-400 leading-relaxed">
                Our service philosophy centers on anticipatory hospitality—attentive without intrusion, knowledgeable without pretense, and always delivered with genuine warmth and professionalism.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-restaurant-dark/50 p-8 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300">
              <h3 className="text-xl font-playfair font-bold text-white mb-4">Sustainable Practices</h3>
              <p className="text-gray-400 leading-relaxed">
                We honor our responsibility to the environment by partnering with local producers, minimizing waste, and making conscious choices that respect both our ingredients and our planet.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-restaurant-black/75"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="max-w-xl mx-auto text-center">
            <p className="section-subtitle">Join Us</p>
            <h2 className="section-title">Experience L'Élégance</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We invite you to join us for an unforgettable culinary journey. Reserve your table today and discover the perfect harmony of flavor, ambiance, and service.
            </p>
            <Link to="/reservation" className="gold-button inline-flex items-center">
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
