import React from 'react';
import { Filter, X } from 'lucide-react';

const SidebarFilters = ({ filters, setFilters }) => {
  const handleFilterChange = (filterName) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      online: false,
      offline: false,
      hybrid: false,
      certified: false
    });
  };

  const applyFilters = () => {
    // This would typically trigger a more complex filtering action
    console.log('Filters applied:', filters);
  };

  const hasActiveFilters = Object.values(filters).some(Boolean);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-primary-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Event Type */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Event Type</h4>
          <div className="space-y-3">
            {[
              { key: 'online', label: 'Online', color: 'bg-blue-50 text-blue-700' },
              { key: 'offline', label: 'Offline', color: 'bg-green-50 text-green-700' },
              { key: 'hybrid', label: 'Hybrid', color: 'bg-purple-50 text-purple-700' }
            ].map((option) => (
              <label key={option.key} className="flex items-center cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={filters[option.key]}
                    onChange={() => handleFilterChange(option.key)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border-2 rounded-md transition-all duration-200 ${
                    filters[option.key]
                      ? 'bg-primary-600 border-primary-600'
                      : 'border-gray-300 group-hover:border-primary-400'
                  }`}>
                    {filters[option.key] && (
                      <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                  {option.label}
                </span>
                <span className={`ml-auto px-2 py-1 text-xs font-medium rounded-full ${option.color}`}>
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Certification */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Certification</h4>
          <label className="flex items-center cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={filters.certified}
                onChange={() => handleFilterChange('certified')}
                className="sr-only"
              />
              <div className={`w-5 h-5 border-2 rounded-md transition-all duration-200 ${
                filters.certified
                  ? 'bg-secondary-600 border-secondary-600'
                  : 'border-gray-300 group-hover:border-secondary-400'
              }`}>
                {filters.certified && (
                  <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
            <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
              Certified Events Only
            </span>
            <span className="ml-auto px-2 py-1 text-xs font-medium rounded-full bg-yellow-50 text-yellow-700">
              Premium
            </span>
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col space-y-3">
        <button
          onClick={applyFilters}
          className="w-full bg-gradient-primary text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Apply Filters
        </button>
        <button
          onClick={clearAllFilters}
          className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Clear Filters
        </button>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Active Filters</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(filters).map(([key, value]) => (
              value && (
                <span
                  key={key}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  <button
                    onClick={() => handleFilterChange(key)}
                    className="ml-2 hover:bg-primary-200 rounded-full p-0.5 transition-colors duration-200"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarFilters;