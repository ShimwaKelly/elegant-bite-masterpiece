
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservation', path: '/reservation' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen 
          ? 'bg-restaurant-black/95 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-playfair text-gold text-2xl md:text-3xl font-bold tracking-tight hover:text-gold-light transition-colors duration-300"
        >
          L'Élégance
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm uppercase tracking-widest font-medium transition-colors duration-300 ${
                isActive(link.path) 
                  ? 'text-gold' 
                  : 'text-white hover:text-gold'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gold"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white hover:text-gold transition-colors duration-300"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden fixed inset-0 bg-restaurant-black/95 backdrop-blur-md z-40 transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ top: '61px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg uppercase tracking-widest font-medium transition-colors duration-300 ${
                isActive(link.path) 
                  ? 'text-gold' 
                  : 'text-white hover:text-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/reservation" 
            className="gold-button mt-4 px-8 animate-fade-in-up"
          >
            Book a Table
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
