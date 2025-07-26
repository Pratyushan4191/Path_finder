import React from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-primary text-white p-2 rounded-lg">
                <span className="text-xl font-bold">PF</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PathFinder
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Discover and participate in the world's most innovative hackathons. 
              Connect with talented developers and build the future together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Team
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#press" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Help & Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#help" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#organizers" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  For Organizers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:hello@pathfinder.com" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  hello@pathfinder.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 Innovation Drive<br />
                  San Francisco, CA 94107
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get notified about the latest hackathons and events.</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button className="bg-gradient-primary text-white px-6 py-2 rounded-r-lg font-medium hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; 2024 PathFinder. All rights reserved.</span>
              <a href="#privacy" className="hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-primary-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>for developers worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;