import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SidebarFilters from './components/SidebarFilters';
import Slideshow from './components/Slideshow';
import EventCard from './components/EventCard';
import VerticalDomainFilter from './components/VerticalDomainFilter';
import Footer from './components/Footer';

const sampleEvents = [
  {
    id: 1,
    title: "HackTech 2024",
    date: "March 15-17, 2024",
    location: "San Francisco, CA",
    type: "hybrid",
    certified: true,
    domains: ["AI", "ML"],
    description: "Build the future with cutting-edge AI and ML technologies",
    prize: "$50,000",
    participants: 500,
    image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Web Dev Challenge",
    date: "April 2-4, 2024",
    location: "Online",
    type: "online",
    certified: false,
    domains: ["Frontend", "Backend"],
    description: "Create stunning web applications with modern frameworks",
    prize: "$25,000",
    participants: 800,
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "StartupHack NYC",
    date: "May 10-12, 2024",
    location: "New York, NY",
    type: "offline",
    certified: true,
    domains: ["AI", "Frontend"],
    description: "Transform your startup ideas into reality",
    prize: "$75,000",
    participants: 300,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    title: "Mobile Innovation Lab",
    date: "June 5-7, 2024",
    location: "Austin, TX",
    type: "hybrid",
    certified: true,
    domains: ["ML", "Backend"],
    description: "Build innovative mobile solutions for tomorrow",
    prize: "$40,000",
    participants: 400,
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 5,
    title: "Green Tech Hackathon",
    date: "July 20-22, 2024",
    location: "Seattle, WA",
    type: "offline",
    certified: false,
    domains: ["AI", "Backend"],
    description: "Develop sustainable technology solutions",
    prize: "$30,000",
    participants: 250,
    image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 6,
    title: "Fintech Revolution",
    date: "August 15-17, 2024",
    location: "Online",
    type: "online",
    certified: true,
    domains: ["Frontend", "ML"],
    description: "Revolutionize financial services with technology",
    prize: "$60,000",
    participants: 600,
    image: "https://images.pexels.com/photos/1181712/pexels-photo-1181712.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

function App() {
  const [filters, setFilters] = useState({
    online: false,
    offline: false,
    hybrid: false,
    certified: false
  });
  
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = sampleEvents.filter(event => {
    const typeMatch = !filters.online && !filters.offline && !filters.hybrid ? true :
      (filters.online && event.type === 'online') ||
      (filters.offline && event.type === 'offline') ||
      (filters.hybrid && event.type === 'hybrid');
    
    const certifiedMatch = !filters.certified || event.certified;
    
    const domainMatch = selectedDomains.length === 0 || 
      selectedDomains.some(domain => event.domains.includes(domain));
    
    const searchMatch = searchQuery === '' || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return typeMatch && certifiedMatch && domainMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="pt-16">
        <Slideshow />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4 space-y-6">
              <SidebarFilters filters={filters} setFilters={setFilters} />
              <VerticalDomainFilter 
                selectedDomains={selectedDomains} 
                setSelectedDomains={setSelectedDomains} 
              />
            </div>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Discover Hackathons
                </h2>
                <p className="text-gray-600">
                  Found {filteredEvents.length} hackathons matching your criteria
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
              
              {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    No hackathons found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your filters or search terms
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;