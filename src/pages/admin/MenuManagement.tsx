
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu, Calendar, LogOut, Plus, Edit, Trash2, Search, Filter } from 'lucide-react';
import MenuItemForm from '../../components/admin/MenuItemForm';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  ingredients?: string[];
}

// Mock data - in a real app, this would come from a database
const initialMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Seared Scallops',
    description: 'Fresh sea scallops seared to perfection, served with cauliflower purée and citrus reduction.',
    price: 24,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1000',
    category: 'Appetizers',
    ingredients: ['Scallops', 'Cauliflower', 'Citrus', 'Herbs']
  },
  {
    id: '4',
    name: 'Truffle Risotto',
    description: 'Arborio rice cooked with white truffle oil, wild mushrooms, and finished with aged parmesan.',
    price: 32,
    image: 'https://images.unsplash.com/photo-1625944525200-7389087c8766?q=80&w=1000',
    category: 'Main Courses',
    featured: true,
    ingredients: ['Arborio Rice', 'Truffle Oil', 'Wild Mushrooms', 'Parmesan']
  },
  {
    id: '8',
    name: 'Chocolate Soufflé',
    description: 'Warm chocolate soufflé with a molten center, served with vanilla bean ice cream.',
    price: 16,
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1000',
    category: 'Desserts',
    featured: true,
    ingredients: ['Dark Chocolate', 'Eggs', 'Butter', 'Vanilla Bean']
  },
];

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<MenuItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  
  const categories = ['All', 'Appetizers', 'Main Courses', 'Desserts', 'Drinks'];
  
  // Filter menu items based on search term and category
  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Handle form submission for adding/editing menu items
  const handleSaveItem = (item: MenuItem) => {
    if (item.id) {
      // Edit existing item
      setMenuItems(menuItems.map(i => i.id === item.id ? item : i));
    } else {
      // Add new item
      const newItem = {
        ...item,
        id: Date.now().toString(),
      };
      setMenuItems([...menuItems, newItem]);
    }
    
    setIsFormOpen(false);
    setCurrentItem(null);
  };
  
  // Handle editing an item
  const handleEditItem = (item: MenuItem) => {
    setCurrentItem(item);
    setIsFormOpen(true);
  };
  
  // Handle deleting an item
  const handleDeleteItem = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
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
                className="flex items-center p-3 bg-gold/10 text-gold rounded-md transition-colors duration-300"
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
            <h1 className="text-xl font-bold text-white">Menu Management</h1>
            <button 
              onClick={() => {
                setCurrentItem(null);
                setIsFormOpen(true);
              }}
              className="gold-button flex items-center"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Menu Item
            </button>
          </div>
        </header>
        
        <main className="p-6">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search menu items..."
                className="w-full pl-10 pr-4 py-2 bg-restaurant-dark border border-gold/20 rounded-md text-white focus:border-gold focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-auto flex items-center">
              <Filter className="mr-2 text-gold h-5 w-5" />
              <select
                className="bg-restaurant-dark border border-gold/20 rounded-md text-white px-3 py-2 focus:border-gold focus:outline-none"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Menu Items Table */}
          <div className="bg-restaurant-dark rounded-lg border border-gold/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-restaurant-black/50 text-left">
                  <th className="px-4 py-3 text-gray-300 font-medium">Image</th>
                  <th className="px-4 py-3 text-gray-300 font-medium">Name</th>
                  <th className="px-4 py-3 text-gray-300 font-medium">Category</th>
                  <th className="px-4 py-3 text-gray-300 font-medium">Price</th>
                  <th className="px-4 py-3 text-gray-300 font-medium">Featured</th>
                  <th className="px-4 py-3 text-gray-300 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/10">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-restaurant-black/30">
                    <td className="px-4 py-3">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-12 w-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="px-4 py-3 text-white font-medium">{item.name}</td>
                    <td className="px-4 py-3 text-gray-300">{item.category}</td>
                    <td className="px-4 py-3 text-gold">${item.price.toFixed(2)}</td>
                    <td className="px-4 py-3">
                      {item.featured ? (
                        <span className="px-2 py-1 bg-gold/20 text-gold rounded-full text-xs">Featured</span>
                      ) : (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">Regular</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleEditItem(item)}
                          className="p-1 hover:bg-gold/10 rounded-md transition-colors duration-300"
                          aria-label="Edit item"
                        >
                          <Edit className="h-4 w-4 text-gold" />
                        </button>
                        <button 
                          onClick={() => handleDeleteItem(item.id)}
                          className="p-1 hover:bg-red-500/10 rounded-md transition-colors duration-300"
                          aria-label="Delete item"
                        >
                          <Trash2 className="h-4 w-4 text-red-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-400">No menu items found. Try adjusting your filters or add a new item.</p>
            </div>
          )}
        </main>
      </div>
      
      {/* Add/Edit Menu Item Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-restaurant-dark rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-gold/10">
              <h2 className="text-xl font-bold text-white">
                {currentItem ? 'Edit Menu Item' : 'Add New Menu Item'}
              </h2>
            </div>
            
            <div className="p-6">
              <MenuItemForm 
                initialData={currentItem}
                onSave={handleSaveItem}
                onCancel={() => {
                  setIsFormOpen(false);
                  setCurrentItem(null);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuManagement;
