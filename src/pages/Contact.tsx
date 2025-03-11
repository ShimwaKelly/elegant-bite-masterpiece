
import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { MapPin, Clock, Phone, Mail, MessageSquare, Users, CalendarDays } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd Love to Hear From You"
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000"
      />
      
      {/* Contact Form Section */}
      <section className="py-20 bg-restaurant-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-restaurant-dark/70 p-8 md:p-10 rounded-lg border border-gold/10">
              <div className="mb-8">
                <p className="section-subtitle">Get In Touch</p>
                <h2 className="section-title">Send Us a Message</h2>
                <p className="text-gray-400 mt-4">
                  Have a question, feedback, or special request? Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div>
              <p className="section-subtitle">Our Details</p>
              <h2 className="section-title">Contact Information</h2>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <MapPin className="text-gold flex-shrink-0 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                    <p className="text-gray-300">
                      123 Gourmet Avenue<br />
                      Culinary District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-gold flex-shrink-0 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Opening Hours</h4>
                    <p className="text-gray-300">
                      Monday - Thursday: 5:00 PM - 10:00 PM<br />
                      Friday - Saturday: 5:00 PM - 11:00 PM<br />
                      Sunday: 4:00 PM - 9:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-gold flex-shrink-0 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Phone</h4>
                    <p className="text-gray-300">
                      General: +1 (555) 123-4567<br />
                      Reservations: +1 (555) 123-4568
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-gold flex-shrink-0 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-300">
                      General Inquiries: info@lelegance.com<br />
                      Reservations: reservations@lelegance.com<br />
                      Events: events@lelegance.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-playfair text-2xl font-bold text-white mb-6">How Can We Help?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-restaurant-dark p-5 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300">
                    <div className="h-12 w-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="h-6 w-6 text-gold" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">General Inquiries</h4>
                    <p className="text-gray-400 text-sm">Questions about our menu, hours, or services.</p>
                  </div>
                  
                  <div className="bg-restaurant-dark p-5 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300">
                    <div className="h-12 w-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                      <CalendarDays className="h-6 w-6 text-gold" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Reservations</h4>
                    <p className="text-gray-400 text-sm">Book a table or modify an existing reservation.</p>
                  </div>
                  
                  <div className="bg-restaurant-dark p-5 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300">
                    <div className="h-12 w-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-gold" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Private Events</h4>
                    <p className="text-gray-400 text-sm">Plan a special celebration or corporate gathering.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
