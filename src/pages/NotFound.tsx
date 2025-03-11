
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ChevronLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="font-playfair text-8xl font-bold text-gold mb-6">404</h1>
          <h2 className="text-3xl font-playfair text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="ghost-button inline-flex items-center">
            <ChevronLeft className="mr-2 h-5 w-5" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
