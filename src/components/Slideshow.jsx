import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Trophy, Users } from 'lucide-react';

const featuredHackathons = [
  {
    id: 1,
    title: "Global AI Challenge 2024",
    description: "Join thousands of developers in the world's largest AI hackathon",
    date: "March 20-22, 2024",
    location: "Virtual & 50+ Cities Worldwide",
    prize: "$100,000",
    participants: "10,000+",
    image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["AI", "Machine Learning", "Global"]
  },
  {
    id: 2,
    title: "Sustainable Tech Summit",
    description: "Build solutions for a greener future with cutting-edge technology",
    date: "April 5-7, 2024",
    location: "San Francisco, CA",
    prize: "$75,000",
    participants: "2,500+",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Sustainability", "CleanTech", "Innovation"]
  },
  {
    id: 3,
    title: "HealthTech Revolution",
    description: "Transform healthcare with innovative digital solutions",
    date: "May 15-17, 2024",
    location: "Boston, MA",
    prize: "$85,000",
    participants: "3,000+",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["HealthTech", "Digital Health", "Innovation"]
  }
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredHackathons.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredHackathons.length) % featuredHackathons.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredHackathons.length);
  };

  const currentHackathon = featuredHackathons[currentSlide];

  return (
    <div 
      className="relative h-96 md:h-[500px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentHackathon.image}
          alt={currentHackathon.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {currentHackathon.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-600/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {currentHackathon.title}
            </h1>
            
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              {currentHackathon.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center space-x-2 text-white">
                <Calendar className="h-5 w-5 text-primary-400" />
                <span className="text-sm font-medium">{currentHackathon.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-sm font-medium">{currentHackathon.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Trophy className="h-5 w-5 text-primary-400" />
                <span className="text-sm font-medium">{currentHackathon.prize}</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Users className="h-5 w-5 text-primary-400" />
                <span className="text-sm font-medium">{currentHackathon.participants}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transform hover:scale-105">
                Register Now
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {featuredHackathons.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;