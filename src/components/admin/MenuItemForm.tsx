import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from '@/components/ui/select';
import { toast } from 'sonner';
import { X, Plus, Upload } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  ingredients: string[];
  featured: boolean;
}

interface MenuItemFormProps {
  item?: MenuItem;  // Changed initialData to item to match usage
  onSave: (item: MenuItem) => void;
  onCancel: () => void;
}

const MenuItemForm: React.FC<MenuItemFormProps> = ({ 
  item, // Changed from initialData to item
  onSave, 
  onCancel 
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [featured, setFeatured] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Populate form if editing an existing item
  useEffect(() => {
    if (item) {  // Changed from initialData to item
      setName(item.name);
      setDescription(item.description);
      setPrice(item.price.toString());
      setCategory(item.category);
      setImage(item.image);
      setIngredients(item.ingredients || []);
      setFeatured(item.featured || false);
    }
  }, [item]);  // Changed from initialData to item

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== '' && !ingredients.includes(newIngredient.trim())) {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient('');
    }
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!name || !description || !price || !category || !image) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue <= 0) {
      toast.error('Price must be a positive number');
      return;
    }
    
    setIsSubmitting(true);
    
    // Create menu item object
    const menuItem = {
      id: item?.id,
      name,
      description,
      price: priceValue,
      category,
      image,
      ingredients,
      featured
    };
    
    // Simulate API delay
    setTimeout(() => {
      onSave(menuItem);
      setIsSubmitting(false);
      toast.success(item ? 'Menu item updated' : 'New menu item created');
    }, 1000);
  };

  // List of categories
  const categories = ['Appetizers', 'Main Courses', 'Desserts', 'Drinks'];
  
  // Demo images for selection
  const demoImages = [
    'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1000',
    'https://images.unsplash.com/photo-1625944525200-7389087c8766?q=80&w=1000',
    'https://images.unsplash.com/photo-1600891964599-f61aa0dc0a01?q=80&w=1000',
    'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1000',
    'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1000',
    'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1000',
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-restaurant-dark/50 p-6 rounded-lg border border-gold/20">
      <h2 className="text-xl font-playfair font-bold text-white mb-6">
        {item ? 'Edit Menu Item' : 'Add New Menu Item'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Item Name <span className="text-gold">*</span>
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter item name"
              className="border-gray-700 bg-restaurant-dark/50 text-white"
              required
            />
          </div>
          
          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-white">
              Description <span className="text-gold">*</span>
            </Label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter item description"
              className="w-full h-24 px-3 py-2 rounded-md border border-gray-700 bg-restaurant-dark/50 text-white focus:outline-none focus:ring-1 focus:ring-gold/50"
              required
            />
          </div>
          
          {/* Price and Category */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price" className="text-white">
                Price <span className="text-gold">*</span>
              </Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                className="border-gray-700 bg-restaurant-dark/50 text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category" className="text-white">
                Category <span className="text-gold">*</span>
              </Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger 
                  className="border-gray-700 bg-restaurant-dark/50 text-white"
                >
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-restaurant-dark border-gray-700">
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat} className="text-white hover:text-gold hover:bg-restaurant-gray/50">
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Featured checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="featured"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-gold focus:ring-gold/50"
            />
            <Label htmlFor="featured" className="text-white">
              Mark as featured item (Chef's Special)
            </Label>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {/* Image Selection */}
          <div className="space-y-2">
            <Label className="text-white">
              Item Image <span className="text-gold">*</span>
            </Label>
            
            {image ? (
              <div className="relative rounded-lg overflow-hidden h-48 group">
                <img 
                  src={image} 
                  alt="Selected menu item" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button 
                    type="button" 
                    variant="destructive"
                    onClick={() => setImage('')}
                    className="scale-90 hover:scale-100 transition-transform"
                  >
                    <X className="mr-1 h-4 w-4" />
                    Remove
                  </Button>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 h-48 flex flex-col items-center justify-center">
                <Upload className="h-10 w-10 text-gray-500 mb-2" />
                <p className="text-gray-400 text-sm text-center mb-2">
                  Upload an image or select from demos below
                </p>
                <Button 
                  type="button" 
                  className="bg-restaurant-gray/30 hover:bg-restaurant-gray/50 text-white"
                  disabled
                >
                  Upload Image
                </Button>
              </div>
            )}
            
            {/* Demo images */}
            <div className="mt-4">
              <Label className="text-white mb-2 block">
                Select a demo image:
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {demoImages.map((img, index) => (
                  <div 
                    key={index} 
                    className={`h-16 w-full rounded overflow-hidden cursor-pointer transition-all ${
                      image === img ? 'ring-2 ring-gold scale-105' : 'hover:scale-105'
                    }`}
                    onClick={() => setImage(img)}
                  >
                    <img src={img} alt={`Demo ${index + 1}`} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Ingredients */}
          <div className="space-y-2">
            <Label className="text-white">Ingredients</Label>
            <div className="flex space-x-2">
              <Input
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                placeholder="Add an ingredient"
                className="border-gray-700 bg-restaurant-dark/50 text-white"
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddIngredient())}
              />
              <Button 
                type="button" 
                onClick={handleAddIngredient}
                className="bg-restaurant-gray/30 hover:bg-restaurant-gray/50 text-white"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Ingredient Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {ingredients.map((ingredient, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-restaurant-gray/30 text-white rounded-full px-3 py-1 text-sm"
                >
                  {ingredient}
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(index)}
                    className="ml-2 text-gray-400 hover:text-white"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              {ingredients.length === 0 && (
                <p className="text-gray-400 text-sm">No ingredients added</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Form Actions */}
      <div className="flex justify-end space-x-4 mt-8">
        <Button 
          type="button" 
          onClick={onCancel}
          className="bg-restaurant-gray/30 hover:bg-restaurant-gray/50 text-white"
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          className="gold-button hover:bg-gold-muted disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : (item ? 'Update Item' : 'Create Item')}
        </Button>
      </div>
    </form>
  );
};

export default MenuItemForm;
