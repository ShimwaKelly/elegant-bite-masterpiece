
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalendarIcon, Clock, Users, Check } from 'lucide-react';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { toast } from 'sonner';

const ReservationForm: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!date || !time || !guests || !name || !email || !phone) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast.success('Reservation request submitted successfully!');
      
      // Reset form after success display
      setTimeout(() => {
        setDate(undefined);
        setTime('');
        setGuests('');
        setName('');
        setEmail('');
        setPhone('');
        setSpecialRequests('');
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-restaurant-dark/50 p-8 rounded-lg border border-gold/20 flex flex-col items-center justify-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
          <Check size={30} className="text-green-500" />
        </div>
        <h3 className="text-xl font-playfair font-bold text-white mb-2">Reservation Confirmed!</h3>
        <p className="text-gray-400 text-center mb-4">
          Thank you for your reservation request. We will contact you shortly to confirm your booking.
        </p>
        <div className="bg-restaurant-black/50 p-4 rounded-lg w-full max-w-sm mt-2">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Date:</span>
            <span className="text-white font-medium">{format(date!, 'PPPP')}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Time:</span>
            <span className="text-white font-medium">{time}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Party Size:</span>
            <span className="text-white font-medium">{guests} {parseInt(guests) === 1 ? 'Guest' : 'Guests'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Name:</span>
            <span className="text-white font-medium">{name}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-restaurant-dark/50 p-6 md:p-8 rounded-lg border border-gold/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Date Picker */}
          <div className="space-y-2">
            <Label htmlFor="date" className="text-white">Select Date <span className="text-gold">*</span></Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start border-gray-700 bg-restaurant-dark/50 hover:bg-restaurant-dark/70 text-left font-normal ${
                    !date && 'text-gray-400'
                  }`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-gold" />
                  {date ? format(date, 'PPP') : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-restaurant-dark border-gray-700" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="bg-restaurant-dark text-white pointer-events-auto"
                  disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Picker */}
          <div className="space-y-2">
            <Label htmlFor="time" className="text-white">Select Time <span className="text-gold">*</span></Label>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger 
                className="w-full border-gray-700 bg-restaurant-dark/50 hover:bg-restaurant-dark/70"
              >
                <SelectValue placeholder="Select time">
                  {!time ? (
                    <div className="flex items-center text-gray-400">
                      <Clock className="mr-2 h-4 w-4 text-gold" />
                      <span>Select time</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-gold" />
                      <span>{time}</span>
                    </div>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-restaurant-dark border-gray-700">
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot} className="text-white hover:text-gold hover:bg-restaurant-gray/50">
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <Label htmlFor="guests" className="text-white">Number of Guests <span className="text-gold">*</span></Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger 
                className="w-full border-gray-700 bg-restaurant-dark/50 hover:bg-restaurant-dark/70"
              >
                <SelectValue placeholder="Select guests">
                  {!guests ? (
                    <div className="flex items-center text-gray-400">
                      <Users className="mr-2 h-4 w-4 text-gold" />
                      <span>Select guests</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-gold" />
                      <span>{guests} {parseInt(guests) === 1 ? 'Guest' : 'Guests'}</span>
                    </div>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-restaurant-dark border-gray-700">
                {guestOptions.map((option) => (
                  <SelectItem key={option} value={option} className="text-white hover:text-gold hover:bg-restaurant-gray/50">
                    {option} {parseInt(option) === 1 ? 'Guest' : 'Guests'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Full Name <span className="text-gold">*</span></Label>
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
            <Label htmlFor="email" className="text-white">Email <span className="text-gold">*</span></Label>
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
          
          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Phone <span className="text-gold">*</span></Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="border-gray-700 bg-restaurant-dark/50 hover:bg-restaurant-dark/70 text-white placeholder:text-gray-500"
              required
            />
          </div>
        </div>
      </div>
      
      {/* Special Requests */}
      <div className="mt-6 space-y-2">
        <Label htmlFor="specialRequests" className="text-white">Special Requests</Label>
        <textarea
          id="specialRequests"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="Any dietary restrictions, special occasions, or other requests"
          className="w-full h-24 px-3 py-2 rounded-md border border-gray-700 bg-restaurant-dark/50 hover:bg-restaurant-dark/70 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gold/50"
        />
      </div>
      
      <Button 
        type="submit" 
        className="mt-8 w-full gold-button hover:bg-gold-muted disabled:opacity-70"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Processing...' : 'Book Reservation'}
      </Button>
      
      <p className="text-gray-400 text-xs mt-4 text-center">
        * Required fields. By making a reservation, you agree to our terms and cancellation policy.
      </p>
    </form>
  );
};

export default ReservationForm;
