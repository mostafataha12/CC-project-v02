import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Resources', path: '/resources' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Colon Cancer FAQ', path: '/resources#faq' },
        { name: 'Screening Guidelines', path: '/resources#screening' },
        { name: 'Prevention Tips', path: '/resources#prevention' },
        { name: 'Support Groups', path: '/resources#support' },
      ],
    },
    {
      title: 'Tools',
      links: [
        { name: 'Detection Tool', path: '/detection' },
        { name: 'Chatbot', path: '/chatbot' },
        { name: 'Dashboard', path: '/dashboard' },
      ],
    },
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">ColonCare</span>
            </Link>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Dedicated to raising awareness about colon cancer and promoting early detection. 
              Our mission is to save lives through education, prevention, and early detection.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
            <div className="flex flex-col space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5 text-blue-300" />
                <a href="mailto:info@coloncare.org" className="text-blue-200 hover:text-white">
                  info@coloncare.org
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5 text-blue-300" />
                <a href="tel:+18005551234" className="text-blue-200 hover:text-white">
                  1-800-555-1234
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-blue-300" />
                <span className="text-blue-200">
                  123 Health Avenue, Medical District, NY 10001
                </span>
              </div>
            </div>
            <div className="text-sm text-blue-300">
              © {currentYear} ColonCare. All rights reserved.
              <div className="mt-2 space-x-4">
                <Link to="/privacy" className="text-blue-200 hover:text-white">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-blue-200 hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;