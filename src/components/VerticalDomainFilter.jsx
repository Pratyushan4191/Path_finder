import React from 'react';
import { Code, Brain, Smartphone, Server } from 'lucide-react';

const domains = [
  { 
    key: 'AI', 
    label: 'Artificial Intelligence', 
    icon: Brain,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100',
    borderColor: 'border-blue-200'
  },
  { 
    key: 'ML', 
    label: 'Machine Learning', 
    icon: Brain,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 hover:bg-indigo-100',
    borderColor: 'border-indigo-200'
  },
  { 
    key: 'Frontend', 
    label: 'Frontend Development', 
    icon: Code,
    color: 'text-green-600',
    bgColor: 'bg-green-50 hover:bg-green-100',
    borderColor: 'border-green-200'
  },
  { 
    key: 'Backend', 
    label: 'Backend Development', 
    icon: Server,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 hover:bg-orange-100',
    borderColor: 'border-orange-200'
  }
];

const VerticalDomainFilter = ({ selectedDomains, setSelectedDomains }) => {
  const toggleDomain = (domainKey) => {
    if (selectedDomains.includes(domainKey)) {
      setSelectedDomains(selectedDomains.filter(d => d !== domainKey));
    } else {
      setSelectedDomains([...selectedDomains, domainKey]);
    }
  };

  const clearDomains = () => {
    setSelectedDomains([]);
  };

  const selectAllDomains = () => {
    setSelectedDomains(domains.map(d => d.key));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Technology Domains</h3>
        <div className="flex space-x-2">
          <button
            onClick={selectAllDomains}
            className="text-xs text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
          >
            All
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={clearDomains}
            className="text-xs text-gray-500 hover:text-gray-700 font-medium transition-colors duration-200"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {domains.map((domain) => {
          const Icon = domain.icon;
          const isSelected = selectedDomains.includes(domain.key);
          
          return (
            <button
              key={domain.key}
              onClick={() => toggleDomain(domain.key)}
              className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left group ${
                isSelected
                  ? `${domain.bgColor} ${domain.borderColor} ${domain.color} scale-95`
                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg transition-colors duration-200 ${
                  isSelected 
                    ? 'bg-white shadow-sm'
                    : 'bg-white group-hover:bg-gray-50'
                }`}>
                  <Icon className={`h-5 w-5 ${
                    isSelected ? domain.color : 'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className={`font-medium transition-colors duration-200 ${
                    isSelected ? domain.color : 'text-gray-900'
                  }`}>
                    {domain.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {domain.key} Technology
                  </div>
                </div>
                <div className={`w-5 h-5 border-2 rounded-full transition-all duration-200 ${
                  isSelected
                    ? `${domain.color} border-current`
                    : 'border-gray-300'
                }`}>
                  {isSelected && (
                    <div className={`w-3 h-3 rounded-full ${domain.color.replace('text-', 'bg-')} m-0.5`}></div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Count */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            {selectedDomains.length === 0 
              ? 'No domains selected' 
              : `${selectedDomains.length} domain${selectedDomains.length > 1 ? 's' : ''} selected`
            }
          </span>
          {selectedDomains.length > 0 && (
            <span className="text-primary-600 font-medium">
              Filter Active
            </span>
          )}
        </div>
        
        {/* Selected Tags */}
        {selectedDomains.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {selectedDomains.map((domainKey) => {
              const domain = domains.find(d => d.key === domainKey);
              return (
                <span
                  key={domainKey}
                  className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${domain.color.replace('text-', 'bg-').replace('600', '100')} ${domain.color}`}
                >
                  {domain.key}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalDomainFilter;