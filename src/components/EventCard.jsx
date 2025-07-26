import React, { useState } from 'react';
import { Calendar, MapPin, Trophy, Users, ExternalLink, Star, Clock } from 'lucide-react';

const EventCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTypeColor = (type) => {
    switch (type) {
      case 'online':
        return 'bg-blue-100 text-blue-800';
      case 'offline':
        return 'bg-green-100 text-green-800';
      case 'hybrid':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${
        isHovered ? 'ring-2 ring-primary-500' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${getTypeColor(event.type)}`}>
            {event.type}
          </span>
        </div>

        {/* Certified Badge */}
        {event.certified && (
          <div className="absolute top-4 right-4">
            <div className="bg-yellow-400 text-yellow-900 p-2 rounded-full">
              <Star className="h-4 w-4" />
            </div>
          </div>
        )}

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-primary-600/90 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button className="bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200">
            <ExternalLink className="h-4 w-4" />
            <span>Visit Event</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 leading-tight hover:text-primary-600 transition-colors duration-200">
            {event.title}
          </h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-600">{event.prize}</div>
            <div className="text-xs text-gray-500">Prize Pool</div>
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 text-primary-500 mr-3 flex-shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-primary-500 mr-3 flex-shrink-0" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 text-primary-500 mr-3 flex-shrink-0" />
            <span>{event.participants} participants</span>
          </div>
        </div>

        {/* Domain Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.domains.map((domain, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-xs font-medium rounded-md"
            >
              {domain}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 bg-gradient-primary text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
            Register
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Registration Status Bar */}
      <div className="px-6 pb-4">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>Registration Status</span>
          <span>Open</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
            style={{ width: '65%' }}
          ></div>
        </div>
        <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
          <span>65% filled</span>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>2 weeks left</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;