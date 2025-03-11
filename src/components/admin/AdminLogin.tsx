
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import { toast } from 'sonner';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error('Please enter both username and password');
      return;
    }
    
    setIsLoading(true);
    
    // Simple mock authentication (in a real app, this would be a server call)
    setTimeout(() => {
      // Mock credentials for demonstration (admin/admin)
      if (username === 'admin' && password === 'admin') {
        toast.success('Login successful');
        onLogin();
      } else {
        toast.error('Invalid credentials');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-restaurant-dark/80 rounded-lg border border-gold/20 backdrop-blur-lg shadow-xl">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-restaurant-gray/30 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-2xl font-playfair font-bold text-white">Admin Login</h2>
          <p className="mt-2 text-gray-400">Enter your credentials to access the dashboard</p>
        </div>
        
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-white">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="mt-1 border-gray-700 bg-restaurant-black/50 text-white"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 border-gray-700 bg-restaurant-black/50 text-white"
                required
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full gold-button hover:bg-gold-muted disabled:opacity-70"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              For demo purposes, use: admin / admin
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
