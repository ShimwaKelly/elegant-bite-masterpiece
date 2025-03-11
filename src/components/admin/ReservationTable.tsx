
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'sonner';

// Define reservation type
export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  status: 'pending' | 'confirmed' | 'canceled';
  specialRequests?: string;
}

interface ReservationTableProps {
  reservations: Reservation[];
  onUpdateStatus: (id: string, status: 'confirmed' | 'canceled') => void;
}

const ReservationTable: React.FC<ReservationTableProps> = ({
  reservations,
  onUpdateStatus
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleConfirm = (id: string) => {
    onUpdateStatus(id, 'confirmed');
    toast.success('Reservation confirmed');
  };

  const handleCancel = (id: string) => {
    onUpdateStatus(id, 'canceled');
    toast.success('Reservation canceled');
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-500/20 text-green-400';
      case 'canceled':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-yellow-500/20 text-yellow-400';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date & Time</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Guests</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {reservations.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-4 py-8 text-center text-gray-400">
                No reservations found
              </td>
            </tr>
          ) : (
            reservations.map((reservation) => (
              <React.Fragment key={reservation.id}>
                <tr 
                  className="hover:bg-restaurant-gray/10 cursor-pointer transition-colors"
                  onClick={() => toggleExpand(reservation.id)}
                >
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-restaurant-gray/30 flex items-center justify-center">
                        <User className="h-5 w-5 text-gold" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{reservation.name}</div>
                        <div className="text-sm text-gray-400">{reservation.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <div className="flex items-center text-sm text-white">
                        <Calendar className="h-4 w-4 text-gold mr-2" />
                        {reservation.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-400 mt-1">
                        <Clock className="h-4 w-4 text-gold mr-2" />
                        {reservation.time}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">{reservation.guests}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(reservation.status)}`}>
                      {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    {reservation.status === 'pending' && (
                      <>
                        <Button 
                          size="sm" 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleConfirm(reservation.id);
                          }}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Confirm
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCancel(reservation.id);
                          }}
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Cancel
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
                {expandedId === reservation.id && (
                  <tr className="bg-restaurant-gray/5">
                    <td colSpan={5} className="px-4 py-4 text-sm text-gray-300">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-white mb-2">Contact Information</h4>
                          <p className="mb-1">Phone: {reservation.phone}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Reservation Details</h4>
                          <p className="mb-1">Date: {reservation.date}</p>
                          <p className="mb-1">Time: {reservation.time}</p>
                          <p className="mb-1">Party Size: {reservation.guests} guests</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Special Requests</h4>
                          <p className="text-gray-400">{reservation.specialRequests || 'None'}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
