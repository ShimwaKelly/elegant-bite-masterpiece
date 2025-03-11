
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu, Calendar, LogOut, Search, Filter, Check, X, MessageSquare } from 'lucide-react';
import ReservationTable from '../../components/admin/ReservationTable';

// Mock data types
interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

// Mock data - in a real app, this would come from a database
const initialReservations: Reservation[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '555-123-4567',
    date: '2024-05-12',
    time: '19:30',
    guests: 4,
    specialRequests: 'Window table if possible',
    status: 'confirmed'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '555-987-6543',
    date: '2024-05-12',
    time: '20:00',
    guests: 2,
    status: 'confirmed'
  },
  {
    id: '3',
    name: 'David Chen',
    email: 'david.chen@example.com',
    phone: '555-444-3333',
    date: '2024-05-12',
    time: '20:15',
    guests: 6,
    specialRequests: 'Celebrating anniversary, please prepare something special',
    status: 'pending'
  },
  {
    id: '4',
    name: 'Emma Thompson',
    email: 'emma.t@example.com',
    phone: '555-222-1111',
    date: '2024-05-13',
    time: '18:45',
    guests: 3,
    status: 'confirmed'
  },
  {
    id: '5',
    name: 'Michael Davis',
    email: 'michael.d@example.com',
    phone: '555-777-8888',
    date: '2024-05-13',
    time: '19:00',
    guests: 4,
    status: 'confirmed'
  },
  {
    id: '6',
    name: 'Jennifer Lopez',
    email: 'jen.lopez@example.com',
    phone: '555-444-9999',
    date: '2024-05-14',
    time: '20:30',
    guests: 2,
    specialRequests: 'Vegetarian options required',
    status: 'pending'
  },
  {
    id: '7',
    name: 'Robert Wilson',
    email: 'robert.w@example.com',
    phone: '555-333-2222',
    date: '2024-05-14',
    time: '19:15',
    guests: 5,
    status: 'cancelled'
  },
];

const ReservationManagement = () => {
  const [reservations, setReservations] = useState<Reservation[]>(initialReservations);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDate, setFilterDate] = useState('');
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  
  // Filter reservations based on search term, status, and date
  const filteredReservations = reservations.filter(reservation => {
    const matchesSearch = 
      reservation.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      reservation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.phone.includes(searchTerm);
    
    const matchesStatus = filterStatus === 'all' || reservation.status === filterStatus;
    const matchesDate = !filterDate || reservation.date === filterDate;
    
    return matchesSearch && matchesStatus && matchesDate;
  });
  
  // Handle status change
  const handleStatusChange = (id: string, status: 'confirmed' | 'pending' | 'cancelled') => {
    setReservations(reservations.map(reservation => 
      reservation.id === id ? { ...reservation, status } : reservation
    ));
    
    // Close details panel if the updated reservation is currently selected
    if (selectedReservation && selectedReservation.id === id) {
      setSelectedReservation({ ...selectedReservation, status });
    }
  };
  
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
                className="flex items-center p-3 bg-gold/10 text-gold rounded-md transition-colors duration-300"
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
            <h1 className="text-xl font-bold text-white">Reservation Management</h1>
          </div>
        </header>
        
        <main className="p-6">
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="w-full md:w-1/2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                className="w-full pl-10 pr-4 py-2 bg-restaurant-dark border border-gold/20 rounded-md text-white focus:border-gold focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-3">
              <div className="flex items-center w-full md:w-auto">
                <Filter className="mr-2 text-gold h-5 w-5" />
                <select
                  className="bg-restaurant-dark border border-gold/20 rounded-md text-white px-3 py-2 focus:border-gold focus:outline-none w-full md:w-auto"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="pending">Pending</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              
              <div className="flex items-center w-full md:w-auto">
                <Calendar className="mr-2 text-gold h-5 w-5" />
                <input
                  type="date"
                  className="bg-restaurant-dark border border-gold/20 rounded-md text-white px-3 py-2 focus:border-gold focus:outline-none w-full md:w-auto"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* Reservation Table and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Table */}
            <div className="lg:col-span-2">
              <div className="bg-restaurant-dark rounded-lg border border-gold/10 overflow-hidden">
                <ReservationTable 
                  reservations={filteredReservations}
                  onStatusChange={handleStatusChange}
                  onSelectReservation={setSelectedReservation}
                  selectedId={selectedReservation?.id}
                />
              </div>
              
              {filteredReservations.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-400">No reservations found. Try adjusting your filters.</p>
                </div>
              )}
            </div>
            
            {/* Reservation Details */}
            <div className="lg:col-span-1">
              {selectedReservation ? (
                <div className="bg-restaurant-dark rounded-lg border border-gold/10 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">Reservation Details</h3>
                    <button 
                      onClick={() => setSelectedReservation(null)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400 text-sm">Name</p>
                      <p className="text-white font-medium">{selectedReservation.name}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-sm">Contact</p>
                      <p className="text-white">{selectedReservation.email}</p>
                      <p className="text-white">{selectedReservation.phone}</p>
                    </div>
                    
                    <div className="flex space-x-4">
                      <div>
                        <p className="text-gray-400 text-sm">Date</p>
                        <p className="text-white">{new Date(selectedReservation.date).toLocaleDateString()}</p>
                      </div>
                      
                      <div>
                        <p className="text-gray-400 text-sm">Time</p>
                        <p className="text-white">{selectedReservation.time}</p>
                      </div>
                      
                      <div>
                        <p className="text-gray-400 text-sm">Guests</p>
                        <p className="text-white">{selectedReservation.guests}</p>
                      </div>
                    </div>
                    
                    {selectedReservation.specialRequests && (
                      <div>
                        <p className="text-gray-400 text-sm">Special Requests</p>
                        <div className="bg-restaurant-black/50 p-3 rounded-md mt-1">
                          <p className="text-gray-300">{selectedReservation.specialRequests}</p>
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Status</p>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleStatusChange(selectedReservation.id, 'confirmed')}
                          className={`px-3 py-2 rounded-md text-sm flex items-center ${
                            selectedReservation.status === 'confirmed' 
                              ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                              : 'bg-restaurant-black/50 text-gray-300 hover:bg-green-500/10 hover:text-green-400'
                          }`}
                        >
                          <Check className="mr-1 h-4 w-4" />
                          Confirm
                        </button>
                        
                        <button 
                          onClick={() => handleStatusChange(selectedReservation.id, 'pending')}
                          className={`px-3 py-2 rounded-md text-sm flex items-center ${
                            selectedReservation.status === 'pending' 
                              ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30' 
                              : 'bg-restaurant-black/50 text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400'
                          }`}
                        >
                          <Calendar className="mr-1 h-4 w-4" />
                          Pending
                        </button>
                        
                        <button 
                          onClick={() => handleStatusChange(selectedReservation.id, 'cancelled')}
                          className={`px-3 py-2 rounded-md text-sm flex items-center ${
                            selectedReservation.status === 'cancelled' 
                              ? 'bg-red-500/20 text-red-400 border border-red-400/30' 
                              : 'bg-restaurant-black/50 text-gray-300 hover:bg-red-500/10 hover:text-red-400'
                          }`}
                        >
                          <X className="mr-1 h-4 w-4" />
                          Cancel
                        </button>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <button className="w-full flex items-center justify-center p-2 bg-gold/10 hover:bg-gold/20 text-gold rounded-md transition-colors duration-300">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Send Message to Guest
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-restaurant-dark rounded-lg border border-gold/10 p-6 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                  <Calendar className="h-12 w-12 text-gold/40 mb-4" />
                  <h3 className="text-white font-medium mb-2">No Reservation Selected</h3>
                  <p className="text-gray-400">Select a reservation to view details</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReservationManagement;
