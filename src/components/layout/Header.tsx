import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser, signOut } = useAuth();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Change header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Resources', path: '/resources' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];
  
  // Auth navigation items
  const authItems = currentUser 
    ? [
        { title: 'Dashboard', path: '/dashboard' },
        { title: 'Detection Tool', path: '/detection' },
        { title: 'Chatbot', path: '/chatbot' },
      ]
    : [];

  return (
    <header 
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-900">ColonCare</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center space-x-6">
            {/* Main Nav Items */}
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `font-medium text-sm transition-colors hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-700'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            {/* Auth Nav Items */}
            {authItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `font-medium text-sm transition-colors hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-700'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              {currentUser ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {currentUser.name}
                    </span>
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="text-sm font-medium text-red-600 hover:text-red-800"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center p-2 rounded-md"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-blue-600" />
            ) : (
              <Menu className="h-6 w-6 text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } bg-white border-t transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col space-y-3">
            {/* Main Nav Items */}
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            {/* Auth Nav Items */}
            {authItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            {/* Auth Buttons */}
            <div className="border-t pt-3 mt-2">
              {currentUser ? (
                <div className="space-y-3">
                  <div className="flex items-center px-3 space-x-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {currentUser.name}
                    </span>
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-3 py-2 text-sm font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link
                    to="/signin"
                    className="block px-3 py-2 text-sm font-medium text-blue-600 rounded-md hover:bg-blue-50"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;