
import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import ReservationForm from '../components/ReservationForm';

const Reservation = () => {
  return (
    <Layout>
      <PageHeader 
        title="Reserve a Table" 
        subtitle="Join Us for an Unforgettable Experience"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000"
      />
      
      {/* Reservation Form Section */}
      <section className="py-20 bg-restaurant-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-restaurant-dark/70 p-8 md:p-10 rounded-lg border border-gold/10">
              <div className="mb-8">
                <p className="section-subtitle">Make a Reservation</p>
                <h2 className="section-title">Book Your Table</h2>
                <p className="text-gray-400 mt-4">
                  Please fill out the form below with your details and preferences. We'll confirm your reservation as soon as possible.
                </p>
              </div>
              
              <ReservationForm />
            </div>
            
            {/* Additional Information */}
            <div>
              <div className="mb-10">
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Hours of Operation</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span className="text-gold">5:00 PM - 10:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span className="text-gold">5:00 PM - 11:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gold">4:00 PM - 9:00 PM</span>
                  </p>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Reservation Policies</h3>
                <ul className="space-y-3 text-gray-300 list-disc pl-5">
                  <li>Reservations are recommended for all dining experiences.</li>
                  <li>For parties of 6 or more, please call us directly.</li>
                  <li>We hold reservations for 15 minutes past the scheduled time.</li>
                  <li>For special occasions or dietary requirements, please note in the comments.</li>
                  <li>A credit card is required to secure your reservation, but no charges will be made unless you cancel within 24 hours.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Private Events</h3>
                <p className="text-gray-300 mb-4">
                  L'Élégance offers private dining options for special events, celebrations, and corporate functions. Our dedicated events team will work with you to create a memorable experience.
                </p>
                <p className="text-gray-300">
                  For private event inquiries, please contact us at <span className="text-gold">events@lelegance.com</span> or call <span className="text-gold">+1 (555) 123-4568</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reservation;
