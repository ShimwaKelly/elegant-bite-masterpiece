
import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Home, Menu, Calendar, LogOut } from 'lucide-react';

// This is a placeholder for authentication - in a real app, you would use a proper auth system
const isAuthenticated = true;

const Admin = () => {
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return (
    <div className="flex h-screen bg-restaurant-black">
      {/* Sidebar */}
      <div className="w-64 bg-restaurant-dark border-r border-gold/10">
        <div className="p-6 border-b border-gold/10">
          <Link to="/admin" className="font-playfair text-gold text-2xl font-bold">L'Élégance</Link>
          <p className="text-gray-400 text-sm">Admin Dashboard</p>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/admin" 
                className="flex items-center p-3 text-gray-300 hover:bg-gold/10 hover:text-gold rounded-md transition-colors duration-300"
              >
                <Home className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/menu" 
                className="flex items-center p-3 text-gray-300 hover:bg-gold/10 hover:text-gold rounded-md transition-colors duration-300"
              >
                <Menu className="mr-3 h-5 w-5" />
                Menu Management
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/reservations" 
                className="flex items-center p-3 text-gray-300 hover:bg-gold/10 hover:text-gold rounded-md transition-colors duration-300"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Reservations
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="absolute bottom-0 w-64 p-4 border-t border-gold/10">
          <button className="flex items-center w-full p-3 text-gray-300 hover:bg-gold/10 hover:text-gold rounded-md transition-colors duration-300">
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-restaurant-dark p-4 border-b border-gold/10">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Dashboard</h1>
            <div className="text-gray-300">
              <span>Welcome, Admin</span>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stats Card - Reservations */}
            <div className="bg-restaurant-dark p-6 rounded-lg border border-gold/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-400 text-sm">Total Reservations</p>
                  <h3 className="text-white text-3xl font-bold">42</h3>
                </div>
                <div className="p-2 bg-gold/10 rounded-md">
                  <Calendar className="h-6 w-6 text-gold" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-green-400 text-sm">+12% from last week</p>
                <Link to="/admin/reservations" className="text-gold text-sm hover:underline">View all</Link>
              </div>
            </div>
            
            {/* Stats Card - Menu Items */}
            <div className="bg-restaurant-dark p-6 rounded-lg border border-gold/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-400 text-sm">Menu Items</p>
                  <h3 className="text-white text-3xl font-bold">24</h3>
                </div>
                <div className="p-2 bg-gold/10 rounded-md">
                  <Menu className="h-6 w-6 text-gold" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gold text-sm">2 new items added</p>
                <Link to="/admin/menu" className="text-gold text-sm hover:underline">Manage menu</Link>
              </div>
            </div>
            
            {/* Stats Card - Today's Bookings */}
            <div className="bg-restaurant-dark p-6 rounded-lg border border-gold/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-400 text-sm">Today's Bookings</p>
                  <h3 className="text-white text-3xl font-bold">8</h3>
                </div>
                <div className="p-2 bg-gold/10 rounded-md">
                  <Calendar className="h-6 w-6 text-gold" />
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-white text-sm">Next reservation: <span className="text-gold">7:30 PM (Table 12)</span></p>
              </div>
            </div>
          </div>
          
          {/* Recent Reservations */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-4">Recent Reservations</h2>
            <div className="bg-restaurant-dark rounded-lg border border-gold/10 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-restaurant-black/50 text-left">
                    <th className="px-4 py-3 text-gray-300 font-medium">Name</th>
                    <th className="px-4 py-3 text-gray-300 font-medium">Date</th>
                    <th className="px-4 py-3 text-gray-300 font-medium">Time</th>
                    <th className="px-4 py-3 text-gray-300 font-medium">Guests</th>
                    <th className="px-4 py-3 text-gray-300 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/10">
                  <tr className="hover:bg-restaurant-black/30">
                    <td className="px-4 py-3 text-white">John Smith</td>
                    <td className="px-4 py-3 text-gray-300">May 12, 2024</td>
                    <td className="px-4 py-3 text-gray-300">7:30 PM</td>
                    <td className="px-4 py-3 text-gray-300">4</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Confirmed</span></td>
                  </tr>
                  <tr className="hover:bg-restaurant-black/30">
                    <td className="px-4 py-3 text-white">Sarah Johnson</td>
                    <td className="px-4 py-3 text-gray-300">May 12, 2024</td>
                    <td className="px-4 py-3 text-gray-300">8:00 PM</td>
                    <td className="px-4 py-3 text-gray-300">2</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Confirmed</span></td>
                  </tr>
                  <tr className="hover:bg-restaurant-black/30">
                    <td className="px-4 py-3 text-white">David Chen</td>
                    <td className="px-4 py-3 text-gray-300">May 12, 2024</td>
                    <td className="px-4 py-3 text-gray-300">8:15 PM</td>
                    <td className="px-4 py-3 text-gray-300">6</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">Pending</span></td>
                  </tr>
                  <tr className="hover:bg-restaurant-black/30">
                    <td className="px-4 py-3 text-white">Emma Thompson</td>
                    <td className="px-4 py-3 text-gray-300">May 13, 2024</td>
                    <td className="px-4 py-3 text-gray-300">6:45 PM</td>
                    <td className="px-4 py-3 text-gray-300">3</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Confirmed</span></td>
                  </tr>
                  <tr className="hover:bg-restaurant-black/30">
                    <td className="px-4 py-3 text-white">Michael Davis</td>
                    <td className="px-4 py-3 text-gray-300">May 13, 2024</td>
                    <td className="px-4 py-3 text-gray-300">7:00 PM</td>
                    <td className="px-4 py-3 text-gray-300">4</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Confirmed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-right">
              <Link to="/admin/reservations" className="text-gold hover:underline">View all reservations →</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
