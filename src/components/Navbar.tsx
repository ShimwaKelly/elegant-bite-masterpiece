
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-playfair text-gold text-xl sm:text-2xl md:text-3xl font-bold tracking-tight hover:text-gold-light transition-colors duration-300"
        >
          L'Élégance
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
          className="lg:hidden text-white hover:text-gold transition-colors duration-300 p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-restaurant-black/95 backdrop-blur-md z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ top: '0', height: '100vh', paddingTop: '70px' }}
      >
        <nav className="flex flex-col items-center justify-start h-full space-y-6 p-6 overflow-y-auto">
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
          <div className="pt-4 mt-auto w-full">
            <Link 
              to="/reservation" 
              className="gold-button w-full flex items-center justify-center py-3 text-center"
            >
              Book a Table
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
