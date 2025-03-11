
import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <Layout>
      <PageHeader 
        title="Find Us" 
        subtitle="Location & Directions"
        image="https://images.unsplash.com/photo-1563891217861-0dbc72bae1c0?q=80&w=2000"
      />
      
      {/* Map and Info Section */}
      <section className="py-20 bg-restaurant-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Information */}
            <div className="lg:col-span-1">
              <div className="mb-10">
                <p className="section-subtitle">Visit Us</p>
                <h2 className="section-title">Our Location</h2>
                <p className="text-gray-300 mt-4 mb-6 leading-relaxed">
                  Nestled in the heart of the culinary district, L'Élégance offers a convenient and charming location for your dining experience.
                </p>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <MapPin className="text-gold flex-shrink-0 mt-1 mr-3" size={20} />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Address</h4>
                      <p className="text-gray-300">
                        123 Gourmet Avenue<br />
                        Culinary District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-gold flex-shrink-0 mt-1 mr-3" size={20} />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Hours</h4>
                      <p className="text-gray-300">
                        Monday - Thursday: 5:00 PM - 10:00 PM<br />
                        Friday - Saturday: 5:00 PM - 11:00 PM<br />
                        Sunday: 4:00 PM - 9:00 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-gold flex-shrink-0 mt-1 mr-3" size={20} />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-gold flex-shrink-0 mt-1 mr-3" size={20} />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">info@lelegance.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Parking</h3>
                <p className="text-gray-300 mb-4">
                  Valet parking is available during dinner service for $15 per vehicle.
                </p>
                <p className="text-gray-300">
                  Public parking is also available at the Central Garage located two blocks from the restaurant.
                </p>
              </div>
            </div>
            
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="h-full min-h-[400px] md:min-h-[600px] rounded-lg overflow-hidden border border-gold/20">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.746318586604!2d-74.01246803023068!3d40.714086864664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sTribeca%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1650458145759!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Restaurant Location"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Directions Section */}
      <section className="py-20 bg-restaurant-dark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle">Getting Here</p>
            <h2 className="section-title">Directions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Located in the heart of the city, L'Élégance is easily accessible by various transportation methods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* By Car */}
            <div className="bg-restaurant-black/50 p-8 rounded-lg border border-gold/10">
              <h3 className="text-xl font-playfair font-bold text-white mb-4">By Car</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                From Downtown: Take Main Street north for 2 miles, then turn right onto Gourmet Avenue. The restaurant will be on your left.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From Highway 101: Take exit 24B and follow the signs for Culinary District. Continue for 1 mile, then turn left onto Gourmet Avenue.
              </p>
            </div>
            
            {/* By Public Transit */}
            <div className="bg-restaurant-black/50 p-8 rounded-lg border border-gold/10">
              <h3 className="text-xl font-playfair font-bold text-white mb-4">By Public Transit</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Subway: Take the A, C, or E line to West 4th Street station. Walk north for 3 blocks to Gourmet Avenue.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Bus: Routes 14, 21, and 35 all stop within a block of the restaurant on Culinary Boulevard.
              </p>
            </div>
            
            {/* By Taxi/Rideshare */}
            <div className="bg-restaurant-black/50 p-8 rounded-lg border border-gold/10">
              <h3 className="text-xl font-playfair font-bold text-white mb-4">By Taxi/Rideshare</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Taxis are readily available throughout the city and can drop you directly in front of the restaurant.
              </p>
              <p className="text-gray-400 leading-relaxed">
                For rideshare services, use the address "123 Gourmet Avenue" or "L'Élégance Restaurant" in your app of choice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Location;
