
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TransitionEffect from './TransitionEffect';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <TransitionEffect>
          {children}
        </TransitionEffect>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
