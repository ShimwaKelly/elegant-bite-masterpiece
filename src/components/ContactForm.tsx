
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !email || !message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('Message sent successfully!');
      
      // Reset form after success
      setTimeout(() => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setIsSuccess(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="bg-restaurant-dark/50 p-6 md:p-8 rounded-lg border border-gold/20">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
            <Check size={30} className="text-green-500" />
          </div>
          <h3 className="text-xl font-playfair font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-400 text-center">
            Thank you for reaching out. We will get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Full Name <span className="text-gold">*</span>
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="border-gray-700 bg-restaurant-dark/50 hover:bg-restaurant-dark/70 text-white placeholder:text-gray-500"
                required
              />
            </div>
            
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email <span className="text-gold">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border-gray-700 bg-restaurant-dark/50 hover:bg-restaurant-dark/70 text-white placeholder:text-gray-500"
                required
              />
            </div>
          </div>
          
          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-white">Subject</Label>
            <Input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter message subject"
              className="border-gray-700 bg-restaurant-dark/50 hover:bg-restaurant-dark/70 text-white placeholder:text-gray-500"
            />
          </div>
          
          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Message <span className="text-gold">*</span>
            </Label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="w-full h-36 px-3 py-2 rounded-md border border-gray-700 bg-restaurant-dark/50 hover:bg-restaurant-dark/70 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gold/50"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full gold-button hover:bg-gold-muted disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          
          <p className="text-gray-400 text-xs text-center">
            * Required fields. We value your privacy and will never share your information.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
