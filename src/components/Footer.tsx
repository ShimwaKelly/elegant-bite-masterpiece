
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-restaurant-dark border-t border-gold/10 pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="animate-fade-in-up">
            <Link to="/" className="font-playfair text-gold text-2xl font-bold tracking-tight">
              L'Élégance
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Embracing the art of fine dining with passion, creativity, and respect for ingredients.
              Every dish tells a story of culture, tradition, and innovation.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="icon-button" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="icon-button" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="icon-button" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-playfair text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 Gourmet Avenue, Culinary District, CO 80202</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gold mr-2 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gold mr-2 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@lelegance.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-playfair text-white text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock size={18} className="text-gold mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Monday - Thursday</p>
                  <p className="text-gray-400 text-sm">5:00 PM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-gold mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Friday - Saturday</p>
                  <p className="text-gray-400 text-sm">5:00 PM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-gold mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Sunday</p>
                  <p className="text-gray-400 text-sm">4:00 PM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-playfair text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">
                  Reservation
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">
                  Location
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2024 L'Élégance. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
